import HMeta from 'components/headmeta';
import fs from 'fs';
import matter from 'gray-matter';
import Layout from 'layout/main';
import { Text } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';

export async function getStaticProps({ params }) {
    const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
    const { data, content } = matter(file);
    return { props: { frontMatter: data, content } };
}
export function getStaticPaths() {
    const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace(/\.md$/, ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
};

const Post = ({ frontMatter, content }) => {
    return (
        <div style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "0 40px"
        }}>
            <HMeta pageTitle={frontMatter.title + " - documentation"} pageDescription={frontMatter.description} pageImg={'/api/og?title=' + frontMatter.title}/>
            <Text fontSize={30} p={6} bgColor={"#3816cc"}>{frontMatter.title}</Text>
            <Text fontSize={20} p={3} bgColor={"#fff"} color={"#3816cc"}>{frontMatter.date} -- {frontMatter.writer}</Text>
            <ReactMarkdown children={content} />
        </div>
    );
};
Post.getLayout = (page) => {
    return (
        <Layout>
            {page}
        </Layout>
    );
}

export default Post;