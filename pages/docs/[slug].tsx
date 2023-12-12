import fs from 'fs';
import matter from 'gray-matter';
import Layout from 'layout/main';
import markdownit from 'markdown-it';

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
    return <div>
        <h1>{frontMatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownit().render(content) }} />
    </div>;
};
Post.getLayout = (page) => {    
    return (
        <Layout>
            {page}
        </Layout>
    );
}

export default Post;