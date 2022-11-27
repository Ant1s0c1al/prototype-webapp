import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
//import Script from 'next/script';
import NavBar from './navbar';
import styles from '../styles/Home.module.scss';

//const name = 'Made By Ant1s0c1al';
export const siteTitle = 'Next.js WebApp | TypeScript';

export default function Layout({ children, home }: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <>

      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='utf-8' />
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

      {/*
      <header>
        <h1>{name}</h1>
      </header>
      */}

      <main>
        <NavBar />
        {children}
      </main>

      {/*}
      {!home && (
        <div className='d-flex justify-content-end m-3'>
          <Link href='/'>← Back to home</Link>
        </div>
      )} */}

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>

      {/* <Script src='../../bootstrap/dist/js/bootstrap.bundle.min.js' /> */}
    </>
  );
}
