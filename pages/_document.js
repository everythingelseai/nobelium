import Document, { Html, Head, Main, NextScript } from "next/document";
import cn from "classnames";
import { config } from "@/lib/server/config";
import CJK from "@/lib/cjk";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const initialColorScheme = {
      auto: "color-scheme-unset",
      dark: "dark",
    }[config.appearance];

    return (
      <Html lang={config.lang} className={cn(initialColorScheme)}>
        <Head>
          {["zh", "ja", "ko"].includes(
            config.lang.slice(0, 2).toLocaleLowerCase()
          ) && (
            <>
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossOrigin="anonymous"
              />
              <link
                rel="preload"
                as="style"
                href={`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap`}
              />
              <link
                rel="stylesheet"
                href={`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap`}
              />
              <noscript>
                <link
                  rel="stylesheet"
                  href={`https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap`}
                />
              </noscript>
            </>
          )}
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS 2.0"
            href="/feed"
          ></link>
          {config.appearance === "auto" ? (
            <>
              <meta
                name="theme-color"
                content={config.lightBackground}
                media="(prefers-color-scheme: light)"
              />
              <meta
                name="theme-color"
                content={config.darkBackground}
                media="(prefers-color-scheme: dark)"
              />
            </>
          ) : (
            <meta
              name="theme-color"
              content={
                config.appearance === "dark"
                  ? config.darkBackground
                  : config.lightBackground
              }
            />
          )}
          {/* To ensure the initial background color follows media preference when ThemeProvider is
              not ready */}
          <style>
            {`
            .color-scheme-unset, .color-scheme-unset body {
            }
            @media (prefers-color-scheme: dark) {
              .color-scheme-unset, .color-scheme-unset body {
              }
            }
          `}
          </style>
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
