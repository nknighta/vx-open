import Layout from 'layout/main';
import fs from 'fs';
import matter from 'gray-matter';
import Link from "next/link";
import HMeta from 'components/headmeta';
import { Text } from '@chakra-ui/react';

export default function Post({posts}) {
    console.log(posts);
    return (
        <div style={{
            margin: '0 auto',
            padding: '4.2vh 10px 7vh 40px',
            background: '#000000',
        }}>
          
          <HMeta pageTitle={"Docs - VX"} pageDescription={""} pageImg={'/api/og?title=Docs'}/>
            {posts.map((post) => (
                <Link href={`/docs/${post.slug}`} key={post.slug}>
                    <Text m={2}>{post.frontMatter.title}</Text>
                </Link>
            ))}
        </div>
    );
}

export const getStaticProps = () => {
    const files = fs.readdirSync('posts');
    const posts = files.map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');
      const { data } = matter(fileContent);
      return {
        frontMatter: data,
        slug,
      };
    });
  
    return {
      props: {
        posts,
      },
    };
  };

Post.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    );
}