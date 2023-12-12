import Layout from 'layout/main';
import fs from 'fs';
import matter from 'gray-matter';
import Link from "next/link";
export default function Post({posts}) {
    console.log(posts);
    return (
        <div>
            {posts.map((post) => (
                <Link href={`/docs/${post.slug}`} key={post.slug}>
                    <>{post.frontMatter.title}</>
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