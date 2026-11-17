# SUI 型聪明钱新名册（2026-11-17 建册）

> 目的：为「SUI 型一级市场」（机构领投、策展平台、合规发射）线准备一批与现有 BEM 矿工名册完全不同人群的种子地址。本册只收录公开可核来源，逐人附证据；宁缺毋滥。
> 本轮只交名册，**未并入小时盯梢、未改星图数据集**；是否并入走周一 `whale-library-weekly-refresh` 时再议。

## 口径说明（先读）

- **地址口径**：下表地址为 Polymarket 排行榜 `user_id`，即该账户在 Polymarket 的**代理钱包（proxy wallet，Polygon 链）**地址，不是用户自管 EOA 主钱包；其在 Polymarket 的盈亏与成交即以此地址结算。跨平台追踪时按「Polymarket 代理钱包」对待，不能直接等同于其 BSC/主网主钱包。
- **数据源**：Polymarket 官方 Data API v2 `leaderboard`（v1 已退役），`timePeriod=ALL` 全时段榜，2026-11-17 抓取。PnL 榜接口：https://data-api.polymarket.com/v2/leaderboard?limit=50&timePeriod=ALL ；成交量榜加 `&sortBy=VOLUME`。
- **与现有 582 人数据集重合**：主册 50 人逐一与 `whale3d-dataset.json` 全部地址比对，**重合 0 人**——与「两拨人」的既有结论一致。
- **主战场**：50 人主战场均为 Polymarket（预测市场）。他们与 SUI 型一级市场的关联在于人群属性（机构级/策展型平台的大额盈利玩家、Polymarket 本身在追踪名单上），不是已证实的 Legion/CoinList 获配记录——见文末「不通的路」。

## 主册：Polymarket 全时段盈利榜 Top 50

| # | 地址（代理钱包） | 榜名 | 全时段 PnL | 全时段成交量 | 证据一句 | 与 582 重合 |
|---|---|---|---|---|---|---|
| 1 | 0x56687bf447db6ffa42ffe2204a05edaa20f55839 | Theo4 | $22.05M | $43.01M | Polymarket 全时段盈利榜第 1 名 | 否 |
| 2 | 0x204f72f35326db932158cba6adff0b9a1da95e14 | swisstony | $18.48M | $1850.58M | Polymarket 全时段盈利榜第 2 名，同时在成交量榜第 1 名 | 否 |
| 3 | 0x1f2dd6d473f3e824cd2f8a89d9c69fb96f6ad0cf | Fredi9999 | $16.62M | $76.61M | Polymarket 全时段盈利榜第 3 名 | 否 |
| 4 | 0x2005d16a84ceefa912d4e380cd32e7ff827875ea | RN1（X：@RN1polymarket） | $13.43M | $1524.61M | Polymarket 全时段盈利榜第 4 名，同时在成交量榜第 2 名 | 否 |
| 5 | 0x6a72f61820b26b1fe4d956e17b6dc2a1ea3033ee | kch123 | $11.35M | $293.44M | Polymarket 全时段盈利榜第 5 名，同时在成交量榜第 39 名 | 否 |
| 6 | 0xf0318c32136c2db7fec88b84869aee6a1106c80c | BreakTheBank | $10.01M | $434.81M | Polymarket 全时段盈利榜第 6 名，同时在成交量榜第 25 名 | 否 |
| 7 | 0x96cfcb0c30942cfcd1cdf76c7d408794d66b1acb | mintblade | $9.11M | $17.76M | Polymarket 全时段盈利榜第 7 名 | 否 |
| 8 | 0xed64a7bf029040aa331abc87902434d815ef217d | fishalive | $9.00M | $13.28M | Polymarket 全时段盈利榜第 8 名 | 否 |
| 9 | 0xbc11a64ab34a03a043fbe80598fa065ee87eeec6 | frostrizz | $8.80M | $23.09M | Polymarket 全时段盈利榜第 9 名 | 否 |
| 10 | 0x78b9ac44a6d7d7a076c14e0ad518b301b63c6b76 | Len9311238 | $8.71M | $16.40M | Polymarket 全时段盈利榜第 10 名 | 否 |
| 11 | 0x664ce9fb97ae1bbd538d7381b2f4e92dab16f49c | sparklingwater123 | $8.35M | $19.00M | Polymarket 全时段盈利榜第 11 名 | 否 |
| 12 | 0xd235973291b2b75ff4070e9c0b01728c520b0f29 | zxgngl | $7.81M | $40.55M | Polymarket 全时段盈利榜第 12 名 | 否 |
| 13 | 0x863134d00841b2e200492805a01e1e2f5defaa53 | RepTrump | $7.53M | $13.98M | Polymarket 全时段盈利榜第 13 名 | 否 |
| 14 | 0x3f87d51f27ba6e19ec52aaeebb68559a839c742c | GRIMDRIP | $7.51M | $13.60M | Polymarket 全时段盈利榜第 14 名 | 否 |
| 15 | 0x09b428f7c2b469786286214aa5c90dd9015f7320 | DEEDDIT | $7.47M | $72.13M | Polymarket 全时段盈利榜第 15 名 | 否 |
| 16 | 0x5e4c3b5b81171e2ca4ab776ac0d6bba787f9dba2 | endlessFate | $7.25M | $26.28M | Polymarket 全时段盈利榜第 16 名 | 否 |
| 17 | 0x2c335066fe58fe9237c3d3dc7b275c2a034a0563 | 0x2c335066FE58fe9237c3d3Dc7b275C2a034a0563-1759935795465 | $6.26M | $1437.96M | Polymarket 全时段盈利榜第 17 名，同时在成交量榜第 4 名 | 否 |
| 18 | 0x8119010a6e589062aa03583bb3f39ca632d9f887 | PrincessCaro | $6.08M | $23.52M | Polymarket 全时段盈利榜第 18 名 | 否 |
| 19 | 0xe9ad918c7678cd38b12603a762e638a5d1ee7091 | walletmobile | $5.94M | $32.20M | Polymarket 全时段盈利榜第 19 名 | 否 |
| 20 | 0xc2e7800b5af46e6093872b177b7a5e7f0563be51 | beachboy4 | $5.83M | $239.13M | Polymarket 全时段盈利榜第 20 名 | 否 |
| 21 | 0x94f199fb7789f1aef7fff6b758d6b375100f4c7a | KeyTransporter | $5.71M | $20.09M | Polymarket 全时段盈利榜第 21 名 | 否 |
| 22 | 0x885783760858e1bd5dd09a3c3f916cfa251ac270 | BetTom42 | $5.64M | $11.21M | Polymarket 全时段盈利榜第 22 名 | 否 |
| 23 | 0x23786fdad0073692157c6d7dc81f281843a35fcb | mikatrade77 | $5.15M | $10.88M | Polymarket 全时段盈利榜第 23 名 | 否 |
| 24 | 0xe90bec87d9ef430f27f9dcfe72c34b76967d5da2 | gmanas | $4.90M | $529.05M | Polymarket 全时段盈利榜第 24 名，同时在成交量榜第 13 名 | 否 |
| 25 | 0xd0c042c08f755ff940249f62745e82d356345565 | alexmulti | $4.80M | $9.95M | Polymarket 全时段盈利榜第 25 名 | 否 |
| 26 | 0x006cc834cc092684f1b56626e23bedb3835c16ea | 0x006cc834Cc092684F1B56626E23BEdB3835c16ea-1729683673397 | $4.71M | $64.34M | Polymarket 全时段盈利榜第 26 名 | 否 |
| 27 | 0xdc876e6873772d38716fda7f2452a78d426d7ab6 | 432614799197 | $4.53M | $185.49M | Polymarket 全时段盈利榜第 27 名 | 否 |
| 28 | 0x9319a045cdd0c2180e5eb7ad44374383db9a6410 | sainttroplay | $4.42M | $12.35M | Polymarket 全时段盈利榜第 28 名 | 否 |
| 29 | 0x507e52ef684ca2dd91f90a9d26d149dd3288beae | GamblingIsAllYouNeed | $4.40M | $440.53M | Polymarket 全时段盈利榜第 29 名，同时在成交量榜第 24 名 | 否 |
| 30 | 0x34dd4a4b70eaf79a17878f7938263c801d4dfd83 | vito3corleone | $4.33M | $17.12M | Polymarket 全时段盈利榜第 30 名 | 否 |
| 31 | 0xfea31bc088000ff909be1dfd8d0e3f2c7ef2d227 | ndb1 | $4.24M | $154.53M | Polymarket 全时段盈利榜第 31 名 | 否 |
| 32 | 0xe549581668a5751c1972d3ad2d1991d900bd2d54 | Allezpapa | $4.15M | $54.99M | Polymarket 全时段盈利榜第 32 名 | 否 |
| 33 | 0x16f91db2592924cfed6e03b7e5cb5bb1e32299e3 | Jenzigo | $4.05M | $9.46M | Polymarket 全时段盈利榜第 33 名 | 否 |
| 34 | 0xdb27bf2ac5d428a9c63dbc914611036855a6c56e | DrPufferfish | $4.04M | $248.47M | Polymarket 全时段盈利榜第 34 名 | 否 |
| 35 | 0x2a2c53bd278c04da9962fcf96490e17f3dfb9bc1 | 0x2a2C53bD278c04DA9962Fcf96490E17F3DfB9Bc1-1772479215461 | $3.92M | $477.31M | Polymarket 全时段盈利榜第 35 名，同时在成交量榜第 21 名 | 否 |
| 36 | 0xf8831548531d56ad6a4331493243c447a827cd1f | Inaccuratestake | $3.85M | $27.23M | Polymarket 全时段盈利榜第 36 名 | 否 |
| 37 | 0xee00ba338c59557141789b127927a55f5cc5cea1 | S-Works | $3.75M | $229.92M | Polymarket 全时段盈利榜第 37 名 | 否 |
| 38 | 0xefbc5fec8d7b0acdc8911bdd9a98d6964308f9a2 | reachingthesky | $3.74M | $13.75M | Polymarket 全时段盈利榜第 38 名 | 否 |
| 39 | 0xd38b71f3e8ed1af71983e5c309eac3dfa9b35029 | primm | $3.70M | $59.67M | Polymarket 全时段盈利榜第 39 名 | 否 |
| 40 | 0x019782cab5d844f02bafb71f512758be78579f3c | majorexploiter | $3.67M | $9.41M | Polymarket 全时段盈利榜第 40 名 | 否 |
| 41 | 0x16b29c50f2439faf627209b2ac0c7bbddaa8a881 | SeriouslySirius | $3.65M | $192.65M | Polymarket 全时段盈利榜第 41 名 | 否 |
| 42 | 0x476e1322d1a412fa0325527b8c3bc5e707b1396d | asparagus2012 | $3.55M | $8.01M | Polymarket 全时段盈利榜第 42 名 | 否 |
| 43 | 0x14964aefa2cd7caff7878b3820a690a03c5aa429 | gmpm | $3.52M | $85.10M | Polymarket 全时段盈利榜第 43 名 | 否 |
| 44 | 0x51698a47f840a242abc2ca0351371c7ffac41842 | 00gringo00 | $3.51M | $28.17M | Polymarket 全时段盈利榜第 44 名 | 否 |
| 45 | 0x5966db1fe50763c9e3c014d756369bad07e1f804 | 0x5966Db1fE50763C9e3C014d756369BAd07E1F804-1777648534241 | $3.50M | $28.39M | Polymarket 全时段盈利榜第 45 名 | 否 |
| 46 | 0xee613b3fc183ee44f9da9c05f53e2da107e3debf | sovereign2013 | $3.47M | $399.25M | Polymarket 全时段盈利榜第 46 名，同时在成交量榜第 28 名 | 否 |
| 47 | 0x5268527977f700f9bf9b6d5cd843859e4e70135d | HomeRunHazard | $3.37M | $527.86M | Polymarket 全时段盈利榜第 47 名，同时在成交量榜第 14 名 | 否 |
| 48 | 0x94a428cfa4f84b264e01f70d93d02bc96cb36356 | GCottrell93 | $3.32M | $18.56M | Polymarket 全时段盈利榜第 48 名 | 否 |
| 49 | 0xcdcccd0f2d86e450d973da415ad2430e5cc7935a | joseph00677 | $3.19M | $51.25M | Polymarket 全时段盈利榜第 49 名 | 否 |
| 50 | 0x033a07b3de5947eab4306676ad74eb546da30d50 | RandomGenius-190 | $3.12M | $8.79M | Polymarket 全时段盈利榜第 50 名 | 否 |

## 备选池：成交量榜独有、且盈利 ≥ $100 万（9 人，未入主册）

以下地址不在盈利榜 Top 50，但在成交量榜 Top 50 且全时段盈利 ≥ $100 万，可作扩册候选；与 582 人数据集重合均为 0（已比对）。

| 成交量榜名次 | 地址（代理钱包） | 榜名 | 全时段 PnL | 全时段成交量 |
|---|---|---|---|---|
| 3 | 0xfe787d2da716d60e8acff57fb87eb13cd4d10319 | ferrariChampions2026 | $2.83M | $1450.52M |
| 50 | 0x44c1dfe43260c94ed4f1d00de2e1f80fb113ebc1 | aenews2 | $2.60M | $258.68M |
| 38 | 0xed107a85a4585a381e48c7f7ca4144909e7dd2e5 | elmcap2 | $2.42M | $309.87M |
| 19 | 0x9d84ce0306f8551e02efef1680475fc0f1dc1344 | ImJustKen | $2.36M | $501.66M |
| 34 | 0x5bffcf561bcae83af680ad600cb99f1184d6ffbe | 0943 | $2.27M | $344.56M |
| 10 | 0x821dab0565ebf5b327f51db06223fdcfe01acf16 | Flaznorp | $2.14M | $554.57M |
| 23 | 0x2a69660046d7acc4ab204d7cc5ba78b0776cd2f7 | UpTheBlues | $1.35M | $460.14M |
| 16 | 0x24c8cf69a0e0a17eee21f69d29752bfa32e823e1 | debased | $1.25M | $514.35M |
| 17 | 0xbddf61af533ff524d27154e589d2d7a81510c684 | Countryside | $1.20M | $503.97M |

**明确排除**：成交量榜中另有 31 个独有地址未收录——其中多人为全时段净亏损（如 suntori −$11.60M、mooseborzoi −$12.20M、bossoskil1 −$4.75M）或盈利不足 $100 万，形态更像做市/高频 churn，不作跟随种子。

## 来源分布与缺口（如实记）

- 来源① Polymarket 公开排行榜：主册 50 人＋备选 9 人，全部可核（官方 API 实时可查）。
- 来源② 本地档案已确认的一级市场地址：**0 人**。逐查 `sui-projects-registry.json`、`sui-channel-playbook.md`、一级市场汇总与 X 生态人名册——其中不含任何 Legion/CoinList 销售参与者的钱包地址；唯一出现的地址是已在 582 册内的 BEM 产出王，不算新人群。
- 来源③ X 生态人名册中有公开地址的一级市场玩家：**0 人新增**。名册中唯一有链上实锤地址的是火星哥 Ryan（0xddb587d8…b873f），已在现有 582 人数据集内，且其主场是 BEM/TapeOut，不属本册人群。
- **不通的路（作废，不硬凑）**：Legion 获配地址不公开，无公开数据源可查；CoinList 已结束场次（Zama 等）无公开获配名单；RootData 头部未发币项目的「早期交互大户」本地无现成名单，需另行逐项目链上拉取才能入册，本轮未做。目标 50 人由 Polymarket 单一来源达标（主册恰 50），来源多样性不足这一点如实标注——后续扩册应优先补 RootData/Pendle 早期大户一路。

## 使用注意

- 本册人群目前只能在 Polymarket 语境下被「认出」；他们在 BSC/X Layer 出现时无法靠本册地址直接匹配（代理钱包≠主钱包）。真正的用法是：Polymarket 代币/公开分发窗口若开启，这批人是现成的观察名单；以及作为人群画像参照，校准 SUI 型追踪的种子来源。
- 榜名多为化名，个别带 X 账号（已在表中标注）；未做真人身份核验，不需要也不应做。
