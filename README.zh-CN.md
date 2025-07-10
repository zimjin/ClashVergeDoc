# Clash Verge

Clash Verge 是一款基于 Tauri 框架开发的开源跨平台代理客户端，支持 Windows、macOS 和 Linux 系统。它继承了 Clash 的核心功能，并集成了持续更新的 Clash.Meta（mihomo）内核，支持 Shadowsocks（SS）、ShadowsocksR（SSR）、Socks、Snell、V2Ray、Trojan、VLESS、Reality 等代理协议。

本项目是 Clash Verge 的文档网站，使用 [Nextra](https://nextra.site) 构建。

## 为什么使用 Clash Verge？

- **多平台支持：** Clash Verge 适用于 Windows、macOS 和 Linux。
- **多协议支持：** 兼容 Shadowsocks、Vmess、Trojan 等传统协议，并支持 VLESS 和 Reality 等新协议（需要 Meta 内核）。
- **轻量级设计：** 安装包体积小，资源占用低，通过 Tauri 框架实现更高的安全性。
- **系统代理守卫：** 定期检测并重置系统代理，防止其他程序篡改设置。
- **TUN 模式：** 通过虚拟网卡接管全局流量（需要安装服务组件）。
- **用户友好界面：** 支持英语、简体中文、深色模式和自定义主题。

## 核心功能

- **配置文件管理：** 支持配置文件的 Merge 和 Script 处理。
- **TUN 模式：** 生成虚拟网卡，确保所有流量通过代理。
- **局域网共享：** 允许同一局域网内的设备共享代理。
- **订阅管理：** 支持订阅链接导入和自动更新。

## Clash Verge Rev

Clash Verge Rev 是在 Clash Verge 归档之后，基于 Clash Verge 的源码重新开发的代理客户端。Clash Verge Rev 一直由开源社区维护，并提供更新。

- 基于性能强劲的 Rust 和 Tauri 2 框架。
- 内置 Clash.Meta(mihomo) 内核。
- 简洁美观的用户界面，支持自定义主题颜色、代理组/托盘图标以及 CSS Injection。
- 配置文件管理和增强（Merge 和 Script），配置文件语法提示。
- 系统代理和守卫、TUN(虚拟网卡) 模式。
- 可视化节点和规则编辑。
- WebDav 配置备份和同步。

## 快速开始 (本文档网站)

1.  **安装依赖：**
    ```bash
    npm i
    # 或者
    pnpm i
    # 或者
    yarn
    ```
2.  **运行开发服务器：**
    ```bash
    npm run dev
    # 或者
    pnpm dev
    # 或者
    yarn dev
    ```
    然后访问 http://localhost:3000。
## 友情链接
[RestorePhotos](https://restorephoto.net)
## 许可证

本项目采用 MIT 许可证。 