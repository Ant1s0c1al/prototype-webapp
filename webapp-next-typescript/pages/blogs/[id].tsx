import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../utils/posts';
//import utilStyles from '../../styles/utils.module.css'

export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className='container mt-4'>
        <small>0P3NS0URCE PR0J3CT5</small>
        <h1 className='display-5'>{postData.title}</h1>
        <div>
          <small>
            <Date dateString={postData.date} />
          </small>
        </div>
        <hr className='mb-4' />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData
    }
  }
}
