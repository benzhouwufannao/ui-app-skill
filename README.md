# UI App Skill

一个面向 Codex 和其他兼容 Agent 的移动端 UI 设计 Skill。它会先研究真实上线 App 的公开界面，再把观察到的产品规律转化为原创、可实现的 iOS / Android 设计与交互原型。

## 能做什么

- 在设计前研究 3–5 个真实产品参考
- 优先检索 UI Notes 的国内移动端案例，并用其他公开来源补充
- 输出参考证据矩阵，明确采用、调整和拒绝的设计模式
- 规划核心用户流程、页面和必要状态
- 生成可交互 HTML、React Native、SwiftUI 或 Flutter 页面
- 检查平台规范、触控尺寸、安全区、动态文字和无障碍
- 对已有截图、原型或作品集进行分级设计走查

## 安装

全局安装：

```bash
npx skills add benzhouwufannao/ui-app-skill -g -y
```

也可以把仓库克隆到个人 Skills 目录：

```bash
git clone https://github.com/benzhouwufannao/ui-app-skill.git ~/.codex/skills/ui-app-skill
```

## 使用

```text
使用 $ui-app-skill，先研究真实 iOS 工具类 App，再为一款 AI 文件整理产品设计首页、处理页、历史记录和个人中心，生成可交互 HTML 原型。
```

更多调用方式见 [examples/example-prompts.md](examples/example-prompts.md)。

## 工作流程

1. 明确用户、核心任务、成功时刻和平台。
2. 围绕具体交互问题研究真实 App 页面。
3. 总结信息层级、主要操作、导航、状态和信任设计。
4. 建立原创设计方向和设计系统。
5. 生成可见、可运行的页面或代码。
6. 完成视觉、交互、平台规范和无障碍检查。

## 免费与第三方来源

这个 Skill 本身不要求 Sleek、付费 API、会员或托管服务。UI Notes、UIZZE、App Store、Google Play、Page Flows、Mobbin、Screenlane 等仅作为外部参考来源；不会打包、重新分发或声称拥有第三方截图。公开内容不足时，Skill 会切换其他公开来源或根据平台规范继续完成设计。

所有第三方名称和商标归各自权利人所有。本仓库与这些服务没有隶属或官方合作关系。

## 文件结构

```text
ui-app-skill/
├── SKILL.md
├── agents/openai.yaml
├── references/platform-checklist.md
├── references/reference-research.md
└── examples/example-prompts.md
```

## License

[MIT](LICENSE)
