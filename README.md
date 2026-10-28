# UI App Skill

**让 AI 按产品任务设计手机界面，而不只是拼组件、缩小桌面页面。**

A mobile UI design skill for Codex and compatible agents: turn briefs, screenshots, and existing products into editable designs or working prototypes, with reference-aware decisions and actual-size checks.

适用于 **新 App 设计 · 已有界面优化 · PC 报表转移动端 · 原型交接 · UI 评审**。

[快速开始](#快速开始) · [复制示例](examples/example-prompts.md) · [工作原理](#它改变什么) · [运行条件](#运行条件与边界)

## 快速开始

需要 Node.js 和 npm。使用 [Skills CLI](https://github.com/vercel-labs/skills) 安装，按提示选择 Agent 和安装范围：

```bash
npx skills add benzhouwufannao/ui-app-skill
```

也可在 Codex 个人 Skills 目录中安装：

```bash
git clone https://github.com/benzhouwufannao/ui-app-skill.git ~/.codex/skills/ui-app-skill
```

安装整个目录，包括 `references/`；只复制 `SKILL.md` 会缺少按需加载的指南。已有同名目录时，请先检查原内容，避免重复安装。

然后发送一个具体任务：

```text
使用 $ui-app-skill，为一个旅行记账 App 设计首页和新增支出流程，
生成可独立打开的手机 HTML 原型，目标宽度 390px。
首页需要展示本次旅行预算、已花金额和最近支出；
新增支出后要更新首页，并支持取消返回。
沿用项目已有规范；缺失的设计选择根据用户任务补全。
完成后实际打开页面，检查布局和操作流程。
```

## 它改变什么

| 常见问题 | 本 Skill 的处理方法 |
|---|---|
| 所有产品都像同一套模板 | 先明确用户任务、品牌与内容关系，再选择布局和组件 |
| 有参考就照着复制 | 区分业务来源、复刻目标、局部借鉴和质量对照 |
| PC 页面变成无限卡片堆叠 | 保留指标比较关系，按任务选择表格、列表、图表和展开明细 |
| 代码通过但手机上难读 | 在目标尺寸检查文字、触控、换行、滚动和实际画面 |
| 原型按钮没有真实行为 | 明确跨页状态、筛选、保存和恢复；区分模拟与真实集成 |
| 原型能展示却无法落地 | 对照目标技术栈与组件能力，说明依赖和未验证项 |

这些是工作流约束，不保证某种模型、环境或每次输出都会自动达到同一视觉水平。具体配色、字号、圆角和页面顺序属于当前项目，不是全局皮肤。

## 选择你的任务

### 从需求开始设计

```text
使用 $ui-app-skill，为预约理疗的用户设计预约首页、时段选择和预约结果。
交付可编辑设计稿。先确定主要任务和必要状态，再建立符合产品的视觉规范。
```

### 优化已有手机页面

```text
使用 $ui-app-skill，优化附件页面。保留现有品牌和业务内容，
重点解决信息层级、文字可读性与主要操作不清晰的问题。
直接修改现有项目，并验证受影响的页面和交互。
```

### 将 PC 报表适配手机

```text
使用 $ui-app-skill，将附件 PC 报表重构成 375px 手机 HTML。
保留指标含义、单位、同比口径和必要明细，按手机阅读任务重新组织。
说明目标交付平台的组件与交互限制，区分原生支持和替代方案。
无法确认的数据明确标注，不编造数值。
```

### 做独立方案，与参考比较

```text
使用 $ui-app-skill，根据业务原稿独立设计手机页面。
附件 A 是业务来源，附件 B 仅用于最终质量比较，不作为复刻目标。
根据当前产品形成布局和视觉规范，完成后说明设计依据与取舍。
```

更多示例见 [example-prompts.md](examples/example-prompts.md)。这些是调用示例，不是经过验证的成品案例。

## 输出与工作流程

支持可编辑设计稿、对话内交互预览、独立 HTML 和目标项目代码。交付遵循用户指定工具与已有工程；未指定工具的可编辑设计稿优先 Figma。原生实现沿用现有框架，浏览器预览不能代替原生运行验证。

1. 检查现有页面、内容和项目约定，确定核心任务及交付形式。
2. 为参考分配角色，仅研究尚未解决的设计问题。
3. 将构图、文字层级、组件和状态决策记录到项目规范。
4. 检验代表性页面，再扩展其余页面。
5. 渲染成品、操作流程并修正问题，明确实际验证与剩余限制。

组件、布局与交互可行性以当前项目指定的实现目标为准。

## 运行条件与边界

- 需要支持 Skills 的 Agent。文件生成需要写入权限，视觉检查需要浏览器或相应运行环境。
- Figma 编辑、原生构建、图片生成与对话内预览取决于环境提供的工具；安装 Skill 本身不会提供这些服务。
- 不强制付费参考库或图片生成。用户素材、项目资产与可用公开来源优先。
- 图标沿用项目资产或用户指定素材库；缺少匹配素材时选用同风格的成熟 SVG 图标库，并说明来源。
- 环境不足时明确未验证项，不将 HTML 的可实现性当作其他平台支持的证据。
- 普通营销网站、纯桌面后台和纯后端任务不属于此 Skill 的主要范围。

## 给出有效反馈

欢迎通过 [Issues](https://github.com/benzhouwufannao/ui-app-skill/issues) 提供问题或使用案例。请尽量包含：任务原文、Agent/模型、目标平台、输入截图、实际结果和你期望改善的位置。请先移除客户信息、凭据及不便公开的数据。

有价值的反馈不只是“好看/不好看”：例如“375px 下同比太小”“表格堆叠后无法跨行比较”“参考只用于对照却被复刻”，更容易转化为可复用改进。

## 文档导航

- [SKILL.md](SKILL.md)：入口、任务路由与设计流程
- [视觉决策](references/visual-craft.md) · [参考研究](references/reference-research.md)
- [手机 HTML 检查](references/mobile-html-layout.md) · [移动报表](references/mobile-reports.md)
- [交互与状态](references/interaction-model.md) · [工程交接](references/implementation-handoff.md)
- [质量验收](references/quality-gate.md) · [案例学习边界](references/case-learning.md)

第三方参考来源仅用于研究，不打包分发第三方截图。本仓库与相关服务无官方隶属关系。工作流来源及取舍见 [implementation-handoff.md](references/implementation-handoff.md#reference-decisions-behind-this-skill)。

## License

[MIT](LICENSE)
