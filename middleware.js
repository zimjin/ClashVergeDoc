import { locales } from 'nextra/locales'

// 忽略 robots.txt 和 e290c508d15a406f9a10d3021f4e3832.txt 的请求，后面的那个 txt 是 bing 的 indexNow 的 key
export function middleware(request) {
    return locales(request)
}