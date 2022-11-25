import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
//import homeStyles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='container_xy'>
        <div className='content_xy'>
          <small>0P3NS0URC3 PR0J3CT5</small>
          <h1 className='mb-4'>SOFTWARE DEV</h1>
          <Link className='btn btn-outline-light' href='/blogs'>Read More</Link>
          <small className='d-flex justify-content-end mt-5'>Version Beta3.0</small>
        </div>
      </section>
    </Layout>
  );
}
