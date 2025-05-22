import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Image from "next/image";
import LanguageSwitcher from "./components/LanguageSwitcher";
// 教程地址： https://nextra-v2-oe0zrpzjp-shud.vercel.app/docs/docs-theme/theme-configuration

// Custom head component to add dynamic title and description
function CustomHead() {
  const { frontMatter } = useConfig();
  
  // Default values
  const defaultTitle = "Clash Verge";
  const defaultDescription = "Clash Verge documentation";
  
  // Use frontMatter values if available, otherwise use defaults
  const title = frontMatter.title || defaultTitle;
  const description = frontMatter.description || defaultDescription;
  
  const domain = typeof window !== 'undefined' ? window.location.origin : 'https://clash-verge.org';
  // Create the full title with page name first, then site name
  const fullTitle = title === defaultTitle ? title : `${title}`;
  const router = useRouter();
  
  // Use current locale for canonical URL
  const currentLocale = router.locale;
  // Format canonical URL with current language
  const localePrefix = currentLocale === router.defaultLocale ? '' : `/${currentLocale}`;
  
  // Remove trailing slash from asPath if it exists
  // const path = router.asPath.endsWith('/') && router.asPath !== '/' 
  //   ? router.asPath.slice(0, -1) 
  //   : router.asPath;
    
  const path = router.asPath;
  const defaultCanonical = `${domain}${localePrefix}${path}`;
  const canonical = frontMatter.canonical || defaultCanonical;
  return (
    <>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/clash_verge_32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/clash_verge_16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/clash_verge.png" />
      <link rel="canonical" href={canonical}/>
    </>
  );
}

// https://nextra-v2-oe0zrpzjp-shud.vercel.app/docs/docs-theme/theme-configuration
const config: DocsThemeConfig = {
  logo: ( <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
    <Image 
      src="/clash_verge.png" 
      alt="Clash Verge Logo" 
      width={35} 
      height={35}
      priority
    />
    <span style={{ marginLeft: '10px', fontSize: '1.25rem', fontWeight: 'bold' }}>
      Clash Verge
    </span>
  </div>),
  i18n: [
    { locale: 'en-US', text: 'English'},
    { locale: 'zh-CN', text: '中文'}
  ],
  // navbar: {
  //   extraContent: <LanguageSwitcher />
  // },
  // project: {
  //   link: 'https://github.com/shuding/nextra-docs-template',
  // },
  // chat: {
  //   link: 'https://discord.com',
  // },
  // docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "2025 © clash-verge.org.  All rights reserved.",
  },
  head: CustomHead,
  // https://nextra-v2-oe0zrpzjp-shud.vercel.app/docs/docs-theme/theme-configuration
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    return {
      titleTemplate: '%s',
      description: frontMatter.description || "Clash Verge documentation"
    };
  }
};

export default config;
