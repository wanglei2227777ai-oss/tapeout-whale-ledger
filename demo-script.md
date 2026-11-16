# 三账雷达 TapeOut Whale Ledger — 2 分钟演示分镜脚本

录制要求：全程只出现匿名化标签（案例钱包①–⑤＋地址缩写），不露内部代号、不露完整地址；英文字幕烧录，旁白用英文稿，中文稿供对照与中英双语字幕版。画面均为公开版实机操作，不用剪辑特效掩盖加载——加载超过 2 秒的段落加速 2× 并在角落标注。

总时长 2:00 · 四幕

---

## 第一幕 · 排行榜骗局（0:00–0:30）

**画面动作**
1. (0:00) 打开首页，镜头停在卖机盈利榜样式的列表上，第一名高亮：+564.72 BNB。
2. (0:08) 点击案例钱包①（0x48a…912d）的裁决卡片。
3. (0:14) 卡片展开三本账：机器账 +564.72 → 元件账 −664.52 → 产出账 151.60 BEM；可见合计翻红为 **−99.80 BNB**，审计区间 [−92, +200] 淡入。
4. (0:24) 判定标签落下：「造机周转型 ＋ 场外敞口未定」。

**英文旁白 / 字幕**
> "This wallet tops the earnings leaderboard — plus 564 BNB. But the leaderboard only reads one ledger. Open the other two: it spent 664 BNB on components, and claimed just 151 BEM in its entire life. Three ledgers, one truth: minus 99.8. The board wasn't lying about the sales. It was lying by omission."

**中文对照**
> 「这个钱包高居盈利榜首位，+564 BNB。但排行榜只读一本账。打开另外两本：它买元件花了 664 BNB，一生只领取过 151 枚 BEM。三账合一，真相是 −99.8。榜单没有伪造卖出额——它只是隐瞒了另外两本账。」

---

## 第二幕 · 任意地址，三账裁决（0:30–1:05）

**画面动作**
1. (0:30) 回到查询框，点击一键示例「案例② 低成本倍数型」。
2. (0:36) 案例钱包②（0x503a…2205）实时算账：机器 +707.26 / 元件 −38.49 / 合计 **+668.77 BNB**。
3. (0:46) 判定标签：「低成本倍数型」；元件比值 0.054 旁的分位数小字放大——「校准样本 n=108：P50＝0.03」。
4. (0:55) 划到关键事实：开户头 14 天 NAND 均价 0.0016 BNB（样本 P25＝0.0029），标签「创世低价区」亮起。

**英文旁白 / 字幕**
> "Any address, same treatment. This one the leaderboard almost got right — plus 707. Its secret is in the component ledger: it bought NAND in the genesis price zone, at 0.0016 BNB — cheaper than three quarters of all players — spent only 38 BNB in total, and finished at 18 times its input. Verdict: low-cost multiplier. Every ratio is shown next to the population it was judged against: 108 calibrated wallets."

**中文对照**
> 「任意地址，同一套裁决。这个排行榜差点说对了：+707。它的秘密在元件账：创世低价区以 0.0016 BNB 买入 NAND——比四分之三的玩家更便宜——总共只投入 38 BNB，最终打出 18.4 倍。判定：低成本倍数型。每个比值旁边都标着它参照的人群：108 个校准钱包的全量分布。」

---

## 第三幕 · 下单模拟器：红灯拦截（1:05–1:35）

**画面动作**
1. (1:05) 切到下单模拟器，BSC 链，输入 10 BNB。
2. (1:12) 真实挂单簿逐台吃单动画：吃下 9 台、最优产能价 6.061；覆盖度一行入镜：「快照最优价 vs 官方全场最优价，差 −2.21%」。
3. (1:20) 结果翻红灯：回本约 373 天、占 24h 成交比例过高。
4. (1:27) 改输 100,000 BNB——红色拦截提示弹出：「已扫空当前挂单簿快照（465 台在售机），超出部分无单可吃」，实际仅能成交 4,421 BNB。

**英文旁白 / 字幕**
> "Before you copy any whale, test the exit. The simulator walks the real live order book — not past trades. Ten BNB buys nine machines, payback 373 days: red light. And if you type a hundred thousand, it refuses to fantasize: the whole visible book is 465 machines. It shows you the wall instead of letting you walk into it."

**中文对照**
> 「跟任何大户之前，先测退出。下单模拟器走的是真实时挂单簿——不是历史成交。10 BNB 吃 9 台，回本约 373 天：红灯。输入十万 BNB，它拒绝幻想：全部可见挂单只有 465 台。它把墙指给你看，而不是让你撞上去。」

---

## 第四幕 · 协议体检：原版 vs 仿盘（1:35–2:00）

**画面动作**
1. (1:35) 切到协议体检卡，左右分栏：原版 TapeOut/BEM vs X Layer 仿盘 FabX/FAB。
2. (1:40) 原版侧逐项打勾：挖矿合约 2026-09-14 已封印；Salus 审计 v2.0.0；全网 21,081 台；下方同时亮起原版自身红线：工厂合约仍可升级（3/5 多签）、v2.3.0 未复审。
3. (1:48) 仿盘侧逐项打叉：总供应约 87.3% 创世预铸给部署者个人地址、无锁仓；挖矿合约可升级未封印、个人私钥持有；无审计。
4. (1:55) 回到案例①裁决卡，点「生成战报」，竖版战报图生成（仅地址尾号），定格收尾＋作品名。

**英文旁白 / 字幕**
> "Same audit, applied to the protocols themselves. The original: mining contract sealed, audited lineage, twenty-one thousand machines — and we still show its red lines, because it has them. The clone: 87 percent pre-minted to one personal wallet, upgradeable, unaudited. Three ledgers for every wallet. Two eyes open for every protocol. TapeOut Whale Ledger."

**中文对照**
> 「同一套审计，用在协议本身上。原版：挖矿合约已封印、有审计沿革、两万一千台机器——它自己的红线我们照样摆出来。仿盘：87% 预铸进一个个人钱包、可升级、无审计。给每个钱包算三本账，给每个协议睁两只眼。三账雷达 TapeOut Whale Ledger。」

---

## 录制清单

- [ ] 浏览器窗口只显示公开版页面；地址栏与裁决卡内只出现地址缩写/尾号。
- [ ] 第二幕用一键示例（走预热缓存），保证现场查询秒出、不吃接口配额。
- [ ] 英文字幕烧录版＋中英双语字幕版各导一份；旁白英文版一版，如时间紧只交字幕版。
- [ ] 片尾定格帧：战报图＋作品名＋「TapeOut Accelerate · X Layer Build X」。
