import HMeta from 'components/headmeta';
import fs from 'fs';
import matter from 'gray-matter';
import DocsLayout from 'layout/docs';
import { Text, Box } from '@chakra-ui/react';
import { bascicdocspath} from 'scripts/basic';
import Markdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import Link from "next/link";

export async function getStaticProps({ params }) {
    const file = fs.readFileSync(`${bascicdocspath}/${params.slug}.md`, 'utf-8');
    const { data, content } = matter(file);
    console.log(content);
    return { props: { frontMatter: data, content } };
}
export function getStaticPaths() {
    const files = fs.readdirSync(`${bascicdocspath}/`);
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
    console.log(content);
    return (
        <div style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "0 40px"
        }}>
            <HMeta pageTitle={frontMatter.title + " - documentation"} 
            pageDescription={frontMatter.description} pageImg={`/api/og?title=${frontMatter.description}&description=${frontMatter.description}`} />
            <Text fontSize={30} p={2} color={"#af60ff"}>{frontMatter.title}</Text>
            <Text fontSize={20} p={1} color={"#fff"}>{frontMatter.date} -- written by {frontMatter.writer}</Text>
            <Box fontSize={"18px"} p={"3.5vh 0"}>
                <Markdown components={ChakraUIRenderer()}>
                    {content}
                </Markdown>
            </Box>
            <Link href={'/blog'} style={{
                padding: '4px 0',
                textDecoration: 'underline',
            }}>
                ↩ back to prev
            </Link>
        </div>
    );
};


Post.getLayout = (page) => {
    return (
        <DocsLayout>
            {page}
        </DocsLayout>
    );
}


export default Post;