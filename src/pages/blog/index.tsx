import Layout from 'layout/main';
import fs from 'fs';
import matter from 'gray-matter';
import Link from "next/link";
import HMeta from 'components/headmeta';
import { Text, Box, Badge, Grid, GridItem, Image } from '@chakra-ui/react';
  import { getWindowWidth } from 'scripts/getWidth';

export default function Post({ posts }) {
  const width = getWindowWidth();
  console.log(posts);
  return (
    <div style={{
      margin: '0 auto',
      padding: '4.2vh 10px 7vh 40px',
      background: '#000000',
    }}>
      <HMeta pageTitle={"Blog and Release- VX"} pageDescription={""} pageImg={'/api/og?title=Docs'} />
      <Grid templateColumns={width > 1200 ? "repeat(3, 1fr)}" : width > 900? "repeat(2, 4fr)}" : "repeat(1, 4fr)}"}>
        {posts.map((post) => (
          <GridItem>
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Box
                maxW={400}
                bg={"#555555"}
                borderRadius={"lg"}
                overflow={"hidden"}
                m={4}>
                <Image src={`/api/og?title=${post.frontMatter.title}&description=${post.frontMatter.description}`}
                  width={400}
                  height={200}
                  alt={`${post.frontMatter.description}-preview.png`} />
                <Box p={5}>
                  <Box>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                      New
                    </Badge>
                    <Text m={2}>{post.frontMatter.title}</Text>
                    <Text m={2}>{post.frontMatter.description}</Text>
                    <Text m={2}>{post.frontMatter.date}</Text>
                  </Box>
                </Box>
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
}

export const getStaticProps = () => {
  const files = fs.readdirSync('src/posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`src/posts/${fileName}`, 'utf-8');
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
