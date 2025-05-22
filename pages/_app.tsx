import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { locale, asPath } = router
  return (
    <>
      <Head>
        <meta httpEquiv="content-language" content={locale || 'en-US'} />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />
        <link rel="alternate" hrefLang="en-US" href={`https://clash-verge.org${asPath.startsWith('/') ? '' : '/'}${asPath}`} />
        <link rel="alternate" hrefLang="zh-CN" href={`https://clash-verge.org/zh-CN${asPath.startsWith('/') ? '' : '/'}${asPath}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://clash-verge.org${asPath.startsWith('/') ? '' : '/'}${asPath}`} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}