# Clash Verge

Clash Verge is an open-source cross-platform proxy client based on the Tauri framework, supporting Windows, macOS, and Linux systems. It inherits the core functions of Clash and integrates the continuously updated Clash.Meta (mihomo) kernel, supporting Shadowsocks (SS), ShadowsocksR (SSR), Socks, Snell, V2Ray, Trojan, VLESS, Reality, and other proxy protocols.

This project is a documentation website for Clash Verge, built with [Nextra](https://nextra.site).

## Why Use Clash Verge?

- **Multi-platform support:** Clash Verge is available for Windows, macOS, and Linux.
- **Multi-protocol support:** Compatible with traditional protocols like Shadowsocks, Vmess, Trojan, and supports new protocols such as VLESS and Reality (requires Meta kernel).
- **Lightweight design:** Small installation package, low resource usage, and higher security through the Tauri framework.
- **System proxy guard:** Regularly detects and resets the system proxy to prevent tampering.
- **TUN mode:** Takes over global traffic through a virtual network card (service components need to be installed).
- **User-friendly interface:** Supports English, Simplified Chinese, dark mode, and custom themes.

## Core Functions

- **Configuration file management:** Supports configuration file merging and scripting.
- **TUN mode:** Generates a virtual network card to ensure all traffic passes through the proxy.
- **LAN sharing:** Allows devices in the same LAN to share the proxy.
- **Subscription management:** Supports subscription link import and automatic updates.

## Clash Verge Rev

Clash Verge Rev is a proxy client redeveloped based on the source code of Clash Verge after the original project was archived. It is continuously maintained by the open-source community.

- Built on high-performance Rust and Tauri 2 framework.
- Integrated Clash.Meta (mihomo) core.
- Simple and beautiful user interface with customization options.
- Enhanced profile management.
- System proxy and guard, TUN mode.
- Visual node and rule editing.
- WebDav configuration backup and sync.

## Quick Start (for this documentation website)

1.  **Install dependencies:**
    ```bash
    npm i 
    # or
    pnpm i
    # or
    yarn
    ```
2.  **Run development server:**
    ```bash
    npm run dev
    # or
    pnpm dev
    # or
    yarn dev
    ```
    Then visit http://localhost:3000.

## License

This project is licensed under the MIT License. 