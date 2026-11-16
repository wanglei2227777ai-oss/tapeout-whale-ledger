# Research notes — how the classifier earned its thresholds

Everything in this folder is a public, anonymized summary of the research
behind TapeOut Whale Ledger's classification rules. Wallets are referred to
only as Case Wallet ①–⑥ or by abbreviated address. The point of publishing
this is simple: **every threshold in the product is a measured value with a
receipt, not a round number someone guessed.**

## Data foundation

- Full transaction histories for a 184-wallet roster of the protocol's
  largest participants: **407,098 transactions**, pulled from the Firsto
  TapeOut APIs (BSC + X Layer) and cross-checked against chain-level
  sources (Envio HyperSync full-history pulls, BscScan CSV exports).
- Two data conventions had to be discovered empirically before any
  accounting was trustworthy:
  - In the per-account `circuit-trades` feed, the `side` label is
    **counterparty-relative** — direction must be derived from the
    `buyer`/`seller` fields, never from `side`.
  - In the `activity` (component) feed, `side` **is** account-relative.
  - Validated end-to-end: the pipeline reproduces Case Wallet ①'s audited
    ledgers exactly (machine net +564.72 BNB; components bought 861.03 /
    sold 196.50 / net 664.52 BNB; 65 machines bought, 570 sold;
    self-built share 0.911).
- Two calibers of "machines created" exist — trade-visible counts and
  component-consumption-inferred counts (≈855 created vs 570 sold for
  Case Wallet ①). They measure different things and are never mixed.

## Calibration (n = 108)

- Population: every wallet whose component-ratio could be computed over
  the full-history sample (component histories pulled for 175 wallets).
- Component net ratio (component net input ÷ machine sell gross):
  **P25 = −0.02, P50 = 0.03, P75 = 0.51**. 33 wallets sit at negative
  ratios — the source-distribution family, later given its own tag.
- Thresholds were placed **inside empty bands of the distribution**, not
  on round numbers:
  - Builder-Rotator gross-ratio line **0.60** sits in the empty
    0.571–0.608 band; it rescues a verified false negative at 0.6446.
  - Low-Cost Multiple net-ratio line **0.20** sits just above the
    continuous qualified cluster 0.050–0.186 (which includes a wallet
    family at 0.1559).
  - Output-Holder sell-rate line **0.35** sits in the 0.323–0.378 gap.

## Out-of-sample blind test

- 15 mid-tier wallets (machine sell gross 3–10 BNB, plus a same-caliber
  market sample), drawn with a fixed seed **recorded before the run**;
  the classifier's rules were frozen at calibration values.
- Result: **strict accuracy 13/15 = 86.7%**; 14/15 = 93.3% counting
  marginal calls; the top 5 by gross were 5/5.
- Stated limitation: this tier produced only one active (non-"Regular")
  classification, so the test mostly certifies that the classifier does
  not pin whale labels on ordinary wallets — not that every archetype
  gate is equally proven.

## Rule fixes driven by the misses (all re-verified)

1. **Holder gate**: "sold ≤ 25 machines" → **sell rate ≤ 0.35**
   (sold ÷ (sold + held)). The count gate was scale-blind: it missed the
   market's largest holder (497 machines held, sell rate 0.078).
2. **Rotator ratio gate**: net ratio → **gross ratio ≥ 0.60**
   (component gross buys ÷ machine sell gross). Leftover-component
   resales net against input and hid a genuine dust-machine builder
   (net 0.571, gross 0.865+). Cards display both ratios; percentiles
   remain on the net caliber.
3. **New parallel tag — Source Distribution (flow signature)**:
   component net ≤ −5, buy share ≤ 0.30, component sells ≥ 5. A wallet
   that only ever *receives and resells* components is a distribution
   source, whatever its headline verdict.
- Re-verification across **190 wallets**: exactly 5 targeted verdict
  changes, **zero collateral flips**, all seven benchmark wallets
  unchanged. The Source Distribution tag, run over the 184-wallet
  roster, hit 22 wallets — all verified — and independently reproduced
  a source seller that had been named before the roster run
  (a genuine out-of-sample replication).

## Golden regression set

- **38 frozen cases**: seven benchmark wallets, 20 blind-test wallets,
  the rule-fix cases, marginal/negative samples for the source tag, and
  one X Layer wallet whose expected entry is literally "mismatch" (see
  below). Any future rule change must re-pass the full set before it
  ships; a change in the negative sample's verdict requires human review.

## Cross-chain honesty

- The X Layer API exposes no `creator` field, so the self-built axis
  cannot be computed there. The product degrades openly ("degraded
  verdict") instead of silently dropping the axis.
- A known miss is kept on record: the largest X Layer holder is a
  deployment-type wallet (1,047 machines, zero buys) that the
  BNB-calibrated gates cannot classify. It is in the golden set as a
  negative sample. We did not special-case it.

## Refused shortcuts (on record)

- Pricing un-started machines from gate counts would have fabricated
  prices ~250× better than the market's best ask. Rejected.
- A "net off-market machines" figure that no trade dataset can
  reproduce. Rejected; replaced with a clearly labelled
  component-inferred estimate and an audit interval instead of a
  single fake-precise number.
