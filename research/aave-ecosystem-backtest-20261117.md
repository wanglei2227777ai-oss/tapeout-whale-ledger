# Aave 生态近 3 个月回测（2026-08-17 – 2026-11-17）

回测口径对标 BEM/TapeOut：逐个项目重构创世窗口——何时开窗、入场基准、早期参与者吃到什么、窗口持续多久；再答「我们为什么没跟上、哪个传感器本该报」。只读研究，未连钱包、未下单。价格与 TVL 均注明来源与口径；聚合软文的自报数字单独标注。

## 结论先行

1. **真窗口只有 1 个够格的，且已关闭**：Pendle × Aave V3 on X Layer 的 PT-USDG 抵押循环（2026-08-06 开窗、AIP-514 于 8 月底把 PT 列为 93.59% LTV 抵押品、2026-10-29 PT 到期收官）。这是窗口内唯一的「创世红利＋规则套利」型窗口，模式卡已另存（`hidden_files/pattern-cards/aave-eco-pendle-xlayer-loop.md`）。
2. **1 个弱型窗口还在开**：Monad 上 Aave V3 的 $15M／12 个月激励（经 Merkl 分发，跑到 2027-07）——补贴型，无折价筹码、无生产产出，收益随 TVL 摊薄，属「能占位、别重仓」一类。
3. **其余都不是散户的窗口**：Horizon 是机构许可市场（散户只有约 5% 的稳定币供给收益）；V4 Base 股票 Hub 限非美用户且要先持有 Coinbase 代币化股票作抵押、量级小（存款 $9M 级）；V4 Arc 是生态扩张（存款破 $230M）＋未证实的远期积分预期；Babylon 原生 BTC 抵押（TBV）ARFC 2026-11-09 已 100% 通过但 **AIP 未过、窗口未开**，是唯一还来得及提前布防的一项。
4. **我们错过了什么**：错过的是 Pendle 循环的情报与模式，不是大钱——按试错池口径（单笔 ≤¥1,000）本来也只是体验级；但「治理上市事件」这条信号线此后每个季度都会再开同类窗（Arc／Base／Babylon 都是同一条线），补上它才是这笔回测的正收益。
5. **名册没人其实在场**：56 个地址 × BSC／Ethereum／Arbitrum 三链全量实测＋Monad 立传 16 人全量＋X Layer 部分底稿段，与 Aave V3 Pool 交互 **全部为 0 笔**。名册成员在 ETH 主网并不沉睡（窗口内多人有几十至两千余笔交易），但对手方无一是 Aave——这波人的猎场是 BSC／X Layer 的生产型新协议，不玩主网借贷套利，与 SUI 星系「两波人」的判断同构。
6. **最重要的雷达缺口**：我们没有任何传感器在看「治理论坛上市事件＋新链部署＋激励预算」这条线。唯一在跑的 Aave 线（2026-11-03 立项）只盯黑客事件善后与 Stani 表态；窗口期（8–10 月）名册体系尚未定版（11-14）、首触扫描只覆盖 BSC、known-contracts 直到今天（11-17）才登记 Aave 合约。Pendle 窗口不是被漏报，是当时根本没有能报它的传感器。

## 一、盘点：窗口内 Aave 本体与生态动作

| 时间 | 事项 | 来源口径 |
|---|---|---|
| 2026-08-06 | Pendle 在 X Layer 上线 PT-USDG-29OCT2026 池 | Principia／TokenInsight《X Layer Q3 2026》 |
| 2026-08-31 前后 | Aave V4 Ethereum Core Hub 上线 USDC 借款 2% 返现激励；AIP-514 通过（PT-USDG 列为 Aave V3 X Layer 抵押品） | Aave 官方 X 转述（TronWeekly／xrada 时间线）；治理更新经 CMC 转述 |
| 2026-09-03/04 | Pendle 官方宣布 PT-USDG 被 Aave V3 X Layer 接受为抵押品 | Pendle 官方口径（BeInCrypto 等转述） |
| 2026-09-16 | Aave V4 上线 Circle 的 Arc（Security Council 先行部署，USDC 市场）；V4 全网存款破 $1B | Aave Labs 报告；链上读数（CleanSky） |
| 2026-09-25 | Aave V4 Base 股票 Hub 上线：7 只 Coinbase 代币化股票作抵押借 USDC（协议变更日志记 10-07） | Aave Labs 180 天报告；Aave 协议 changelog |
| 2026-10-02 | AAVE 价格窗口峰值：高 $187.50／收 $179.59（窗口起点 08-17 收 $85.94，约 2.18 倍） | CoinGecko 日线（经 scanaviz／Finnhub 引用） |
| 2026-10-09 | Horizon（RWA 市场）TVL 约 $255M、借出约 $122M；GHO 流通约 $698.1M、借款利率 4.50% | DefiLlama（经行业媒体引用） |
| 2026-10-22 | Sentora 成为 Aave V4 首个外部策展人（RLUSD／PYUSD／OUSD 市场，收入 50% 归 DAO） | Aave Labs 10 月更新（治理论坛） |
| 2026-10-29 | Binance 热钱包被盗资金借道 Aave 事件爆发：攻击者存 60M USDT 借出 19,762 WETH（约 $44.6M）；Guardian 冻结 V3 16 链 175 储备＋V4 117 储备；PT-USDG-29OCT2026 同日到期 | 风险报告（10k.nyxshcon.org，约 11-06）；本方 goal aave-post-hack-monitoring 既有记录 |
| 2026-11-02 | 非稳定币资产 LTV 恢复；Ethereum Core 的 USDC／USDT 截至约 11-06 仍为 0% LTV；AIP-528 将 Guardian 权力续至 2026-12-02 | 同上 |
| 2026-11-03 前后 | Base 股票 Hub 的 USDC 借款激励开启 | 官方 X 宣布（经 coingabbar 转述，金额未披露） |
| 2026-11-06 | ARFC：将 HyperLend 友好分叉认可扩展至 Elysium（Kinetiq 的 Hyperliquid L2，Aave v3.7，收入 50% 分 DAO、无代币分配）；Elysium 主网 11-09 开 | Aave 治理论坛原文；Kinetiq 发布（GlobeNewswire） |
| 2026-11-09 | ARFC：Babylon Trustless Bitcoin Vaults 原生 BTC 接入 Aave V4 抵押，100% 支持通过 | Aave 治理论坛原文 |
| 2026-11-13 | Aave V4 存款 ATH $1.75B（10 月破 $1.5B） | Aave Labs／DefiLlama 口径 |

另有长尾（列清单不深挖）：V3.8 ARFC（10-21，安全版，未上线）；Anti-GHO 已批未上线；Aave App 开通 BNB Chain／HyperEVM／Monad 存款入口（10 月）；Circle Mint 客户可经 Aave 在 Arc／Ethereum 以 cirBTC 抵押借 USDC（10-12）；Monad 基金会承诺购入并持有 10M GHO 超 6 个月、DAO 追加 500K GHO 激励；2026 年 4 月 rsETH 事件在 Ethereum Core 留下的 52,964.45 WETH 缺口窗口内仍未解决（风险报告口径）。

## 二、深挖回测（6 项）

### 1. Pendle × Aave V3 on X Layer（PT-USDG 抵押循环）——真窗口，已关闭

- **①时间线**：2026-08-06 Pendle XLayer 上线 PT-USDG-29OCT2026 池 → 8 月底 AIP-514 通过、9 月初 PT 被列为 Aave V3 X Layer 抵押品（E-mode LTV 93.59%、清算线 95.59%，bgd-labs 官方地址簿可验）→ 激励与循环放量（9 月）→ 2026-10-29 PT 到期，窗口收官；下一期 PT-USDG-25FEB2027 已在地址簿登记，展期动向待 Q4 数据确认。
- **②入场基准**：在 Pendle XLayer 买 PT-USDG（折价买入、到期按面值赎回）→ 存入 Aave V3 X Layer 作抵押 → 以最高 93.59% LTV 借 USDG／USDT → 复买 PT 放大同一笔到期收益。成本：X Layer gas（极低）＋Pendle 兑换费＋借款利率；本金门槛无硬性下限，实操数百美元起。
- **③结果**：Pendle XLayer TVL 一月内 $37.5M → Q3 末 $70.4M；Aave XLayer 借出 $10.6M（Q2 末）→ $79.4M、利用率 14% → 40%；USDG 市场 APY 约 12.66%；X Layer DeFi TVL 2026-09-28 创 ATH $187M（以上为 Principia／TokenInsight Q3 报告口径）。PENDLE 本币 9 月初三周涨约 22.5%（约 $2.12–2.16，CMC／BeInCrypto 口径）——肉在循环收益，不在代币涨幅。激励：X Layer 首月约 $500K 中约 $150K 定向本市场；Pendle 每周 1,300 PENDLE 补贴至到期。
- **④早期参与者画像**：借贷套利农民与收益大户。吃肉路径是「折价＋双份激励＋高 LTV 循环」三层叠加；后段利率被套利盘压平，红利自然消失。
- **⑤定性**：**BEM 型窗口（规则套利＋创世红利）**。与 BEM 的差别：无生产产出、无折价筹码发行，红利来自「新资产上市＋参数未均衡＋激励定向」；与 UP 结算台同理——价值在事件后的时间差。模式卡：`hidden_files/pattern-cards/aave-eco-pendle-xlayer-loop.md`。

### 2. Monad：Aave V3.7 ＋ $15M 激励——弱型窗口，进行中

- **①时间线**：Aave V3.7 于 2026-07-02 上线 Monad（窗口外 6 周），48 小时存款破 $100M；Monad 基金会 $15M 激励为期 12 个月（2026-07 至 2027-07），经 Merkl 分发——整个回测窗口都处在激励期内，且仍未结束。
- **②入场基准**：存 USDC／USDT0／WETH 等主流资产吃补贴 APY（2026-07 USDC 供给 APY 约 14.4%，Merkl 口径）；成本为跨链与资金机会成本，无锁仓硬门槛。
- **③结果**：Monad 全链 TVL $358M（07-01）→ $1.03B（09-30，Oak Research 口径）；MON 现价约高于公售价 17%（9 月底口径）。风险点：**MON 约 16.6B 枚将于 2026-11-24 解锁（现流通约 11.8B）**，激励收益的计价资产端有供给冲击。
- **④早期参与者画像**：激励农民与 Merkl 撸毛大户，收益随 TVL 摊薄，先到者 APY 最高。
- **⑤定性**：补贴型创世激励——BEM「创世红利」的弱表亲：无折价、无产出、纯预算买 TVL。算真窗口（弱型），适合小额占位，不适合当主线。

### 3. Aave V4 on Arc——生态扩张，非套利窗口

- **①时间线**：2026-09-16 Arc 主网同日 Aave V4 经 Security Council 部署（USDC 市场）；10-01 存款超 $230M；10-16 Arc Hub 持 143.16M USDC、Maple syrupUSDC Spoke 已借出 44.85M USDC（链上读数，CleanSky）。
- **②入场基准**：存 USDC 吃借贷利率；Arc 链 gas 以 USDC 计。ARC 代币 100 亿枚已创世铸造、白皮书称 60% 生态分配，但**官方未确认任何空投／分发计划**（Circle 口径）；Arc House「Architects」积分是零成本占位线，属预期管理、不可量化。
- **③结果**：V4 全网存款 09-16 破 $1B → 11-13 ATH $1.75B，Arc 是主要增量之一。
- **④参与者画像**：机构与稳定币大户（Circle 生态资金、Maple 策展）为主，散户是跟随存款方。
- **⑤定性**：不是 BEM 型窗口——无创世折价、无规则套利，只有新链早期利率略高＋远期积分想象。与本方 SUI 星系已登记的 Circle Arc 追踪项重合，按那条线继续盯即可，不另开战线。

### 4. Aave V4 Base 股票 Hub——受限小窗口

- **①时间线**：2026-09-25 上线（Labs 口径；协议 changelog 记 10-07）→ 10 月初存款破 $9M → 约 11-03 USDC 借款激励开启（金额未披露）。
- **②入场基准**：先持有 7 只 Coinbase 代币化股票（AAPLc／NVDAc 等）作抵押借 USDC；仅非美用户；初始上限约抵押 $29M／借出 $21M（LlamaRisk 口径）。
- **③结果**：量级小（$9M 级存款），属产品验证期。
- **④参与者画像**：有美股代币化持仓的非美用户与做市方。
- **⑤定性**：资格型窗口，非创世红利；我们资格上不被排除（非美），但没有现成的代币化股票持仓，入场要先买 xStocks——为 $9M 级市场新建一条持仓线不划算，记录在案即可。

### 5. Horizon（RWA 市场）——机构窗口，散户无门

- **①时间线**：2025-08 上线（窗口外）；窗口内进展：TVL 约 $255M、借出约 $122M（2026-10-09，DefiLlama 口径）；10-29／11-02 成为 Chainlink 24/7 代币化股票定价首发伙伴。
- **②入场基准**：借款侧为许可制机构；无许可的只有稳定币供给池（RLUSD 供给 APY 约 4.99%、USDC 约 5.56% 小池，10-09 口径）。
- **③结果**：稳步增长的机构 RWA 借贷，无代币、无积分、无创世分配。
- **④参与者画像**：机构借款人与 RWA 发行方。
- **⑤定性**：不是窗口。约 5% 的稳定币收益随存随取、与活期+ 优化同类，不是本回测要找的东西。

### 6. Babylon TBV 原生 BTC 抵押——未开窗，前瞻登记

- **①时间线**：ARFC 2026-11-09 以 100% 支持通过 → **AIP 尚未提出／通过** → 官方目标 2026 年底分阶段受限启动。
- **②入场基准（预案）**：原生 BTC 经 Babylon 信托less金库存入 Aave V4 作抵押借稳定币；LlamaRisk 建议抵押因子 78%、初始 BTC 上限 300 枚、稳定币额度共 $21M（USDT $8M／USDC $8M／GHO $1M／USDG $2M／RLUSD $2M）；收入分成 DAO 留每年首 $500K。
- **③结果**：未上线，无数据。
- **④参与者画像（预判）**：BTC 大户与 Babylon 生态质押者；额度仅 300 BTC，受限启动期大概率机构与大户先行。
- **⑤定性**：潜在的规则创新窗口（原生 BTC 不跨链桥作抵押是新范式），但额度太小、轮不到散户排队——价值在情报：AIP 一出现即应出定性页，这是治理监听补上后第一个能实战检验的事件。

**附：AAVE 本币与黑客善后——行情，不是窗口。** AAVE 自 $85.94（08-17）涨至峰值 $187.50（10-02）后回落至约 $109–112（11-17），全程无发行／空投／回购事件驱动，是大盘贝塔＋V4 扩张叙事；10-29 被盗资金借道事件后协议靠 Guardian 冻结控损、无坏账（本方既有结论），但 Ethereum Core 的 USDC／USDT LTV 至 11 月初仍未恢复、4 月 rsETH 的 52,964 WETH 缺口未解——善后线（goal aave-post-hack-monitoring）维持原口径继续盯，与本回测的「窗口线」分开。

## 三、名册重叠实测（第一次扫名册的 ETH 侧足迹）

**扫描集**：以 `smart-money-watch-state.json` 全集为准——立传 16＋候选 29＋已离场追踪 10＋倍数王归集址 1＝**56 个地址**（任务书「36 名核心」为人物口径，含双钱包与关联钱包展开后即此集合）。

**目标合约**：Aave V3 Pool——BSC `0x6807dc923806fe8fd134338eabca509979a7e0cb`、Ethereum `0x87870bca3f3fd6335c3f4ce8392d69350b4fa4e2`、Arbitrum `0x794a61358d6845594f94dc1db02a252b5b4814ad`、Monad `0x69a5f9ad4f96ebf0a0c792dd42a01cc5c0102fef`（官方地址簿）、X Layer `0xE3F3Caefdd7180F884c01E57f65Df979Af84f116`（官方地址簿）。

| 链 | 方法与覆盖 | 结果 |
|---|---|---|
| BSC | SQD Portal 全窗口扫描，区块 116,364,608–134,068,190（2026-08-17–11-17），12 个分块全量完成 | 与 Pool 交互 **0 笔** |
| Ethereum | Etherscan txlist，56 地址全量，窗口内逐笔过滤 | 与 Pool 交互 **0 笔** |
| Arbitrum | Etherscan txlist，56 地址全量 | 与 Pool 交互 **0 笔** |
| Monad | Etherscan（MonadScan），立传 16 人全量 | 16 人窗口内**任何交易均为 0 笔**，Pool 交互 0 |
| X Layer | FabX 跨台研究底稿 txs_xlall.jsonl（23,675 笔，2026-10-14 起段）内筛名册地址→Aave V3 XL Pool | **0 笔** |

**覆盖缺口（如实标注）**：①Monad 候选／离场 40 个地址未逐一扫完（MonadScan 免费档 3 次／秒限流、单次延迟高，串行全量未在时限内跑完；立传 16 人全零、BSC／ETH／ARB 全零的图景下，该缺口翻案概率极低）；②X Layer 底稿始于 2026-10-14（FabX 创世块），Pendle 窗口前段（8 月 6 日–10 月 13 日）名册的 XL 足迹无底稿可查——即 XL 段只能证明「10 月中之后没人碰」，不能证明 8–9 月全程无人；③V4 合约群（Hub／Spoke 多合约）未逐一扫，名册与 V4 的交互不在本次实测范围。

**ETH 侧活动画像（副产品）**：名册在主网并非沉睡——窗口内交易笔数：自造大矿工 OG 2,318 笔、量产造机商 188、倍数王 109、早期元件分发卖家 55、倍数王归集址 37、FAB 跨台 C 档 #13 主网 32＋Arbitrum 71 笔等；对手方以未标注合约与基础合约（WETH 等）为主，无一指向 Aave 或 Pendle。结论：**名册与 Aave 生态零交集是人群属性，不是作息问题**——盯这波人抓不到借贷生态的窗口，借贷窗口要靠治理与部署信号抓（见第五节）。

## 四、雷达缺口裁定（逐项）

| 窗口 | 哪个传感器本该抓 | 为什么没抓到 |
|---|---|---|
| Pendle × Aave XL | 治理监听（AIP-514）＋XL 首触扫描 | 两者当时都不存在：名册体系 2026-11-14 才定版；首触扫描只覆盖 BSC；known-contracts 2026-11-17 才登记 Aave；AAVE 善后线口径只管黑客事件。属传感器缺位，非执行失误 |
| Monad 激励 | 治理／激励日历监听（Merkl） | 无此传感器；ETH/ARB 月扫（roster-monthly-refresh）尚未首跑（定 12-01）且不含 Monad 链 |
| V4 Arc／Base 上线 | 官方公告监听（Aave Labs 博客／X） | 每日播报无 Aave 生态位；善后线不管扩张新闻 |
| Babylon TBV | 治理监听（ARFC 11-09） | 同 Pendle——但这一项 AIP 未过、窗口未开，**现在补监听还来得及实战抓到** |
| HyperLend／Elysium | 治理监听（ARFC 11-06） | 同上；且属 Hyperliquid 生态另一路回测的交叉地带 |
| 黑客善后 | 现有 AAVE 盯防线 | 正常工作：LTV 未恢复、Guardian 续权等结论与本回测互证，本项无缺口 |

## 五、补法清单（阈值写死）

1. **新建「治理上市监听」**（最高优先级）：每日扫 Aave 治理论坛＋Snapshot，关键词＝新资产上市／抵押品／激励／新链部署。触发即报的标准（任一）：新抵押品 LTV ≥ 90%；单项激励预算 ≥ $100K；头部协议（Aave／Pendle／Morpho／Spark 名单内）在新链部署。触发后 24 小时内出快速定性页（按 rapid-triage-playbook 格式），Babylon TBV 的 AIP 列为第一个实战检验事件。
2. **watch_protocol 首触并入名册盯梢**：known-contracts 中 category=watch_protocol 的合约（Aave 三链 Pool 已登记，建议补登 XL／Monad Pool 与 Pendle XL Router）纳入首触扫描面——任一立传成员首次交互即报；候选成员需 ≥2 人同周交互才报（防噪声）。
3. **新链部署哨（DefiLlama 周扫）**：白名单协议在任一链的 TVL 7 日内从 0 破 $10M、或单链 TVL 周增 ≥ $50M，即报。这条能在 Pendle XL 首月（$37.5M）与 Arc 首周（$230M）两个量级上双双触发。
4. **激励日历登记**：Merkl 上 Aave 相关 campaign 新建且预算 ≥ $50K／周即登记进窗口历；Monad $15M 这类年期激励按月复查剩余额度与实时 APY，APY 跌破 5% 自动降级为「占位结束」。
5. **月扫扩链并提前**：roster-monthly-refresh 建议不等 12-01、提前首跑，并把 Monad（chainid 143，Etherscan 免费档可用、限流 3 次／秒须串行）加入 ETH／ARB 之外第三链；V4 Hub 合约登记后再纳入 V4 交互筛查。
6. **X Layer 底稿补段**：XL 侧名册全史底稿目前始于 2026-10-14；下次 XL 研究时把底稿前推至 2026-08-01，补上 Pendle 窗口前段的覆盖缺口（一次性工程，之后增量维护）。
7. **善后线不动**：goal aave-post-hack-monitoring 维持原口径（LTV 恢复／Stani 表态／缺口处置），与新增「生态窗口线」分开记账，避免两个口径互相稀释。

## 数据来源与口径说明

官方与权威源优先：Aave 治理论坛（ARFC 原文）、Aave Labs 治理论坛月度／180 天报告、bgd-labs aave-address-book（合约地址与 E-mode 参数）、DefiLlama（TVL，经行业媒体引用其数值）。二手研报数字已逐项注明（Principia／TokenInsight《X Layer Q3 2026》、Oak Research Monad 数据、CleanSky 链上读数转述）。价格为 CoinGecko 日线经第三方引用，非交易所原始 K 线。链上实测为本方工具直读：SQD Portal（BSC）、Etherscan 官方 API（ETH／ARB／Monad）、FabX 跨台研究底稿（XL）。聚合软文（如代币解锁日历、激励金额转述）只作线索、关键数字均已回源头或标注口径。
