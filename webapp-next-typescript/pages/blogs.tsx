import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import { getSortedPostsData } from '../utils/posts';

export default function Blogs({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout>

      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className='container'>
        <div className='mt-4'>

          <small className='fw-bold'>
            OP3NS0URCE PR0J3CT5
          </small>

          <h1 className='mb-4'>
            FEATURED BLOGS<span>&#x1F4C1;</span>
          </h1>

          <ul className='list'>
            {allPostsData.map(({ id, date, title }) => (
              <li className='pb-3' key={id}>
                <Link href={`/blogs/${id}`}>
                  <h6 className='mb-0'>{title}</h6>
                </Link>
                <small>
                  <span>&#x1F5D3;</span><Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>

        </div>
      </section>

    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  };
}
