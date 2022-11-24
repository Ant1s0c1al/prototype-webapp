import Head from 'next/head';
import Link from 'next/link';

const name = 'Made By Ant1s0c1al';
export const siteTitle = 'Next.js WebApp | TypeScript';

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <>

      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='OPENSOURCE PROJECT • Next.js Framework'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
      </Head>

      <header>
        <h1>{name}</h1>
      </header>

      <main>{children}</main>

      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}

      <footer></footer>

    </>
  );
}