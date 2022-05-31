import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import { MDXRemote } from 'next-mdx-remote';
import { format, parseISO } from 'date-fns';
import { getFileData, getPaths } from 'utils/mdx';
import Layout from '@/components/Layout';

const SingleBlog = ({ mdxSource, frontMatter, readTime }) => {
  const customMeta = {
    title: `${frontMatter.title} - Robert Ngabo`,
    description: `${frontMatter.description}`,
    type: 'article',
  };

  return (
    <Layout customMeta={customMeta}>
      <div className="mb-5 text-gray-700 dark:text-gray-400">
        <div className="mb-3">
          <h1 className="text-xl tracking-tight   md:text-3xl font-black">
            {frontMatter.title}
          </h1>
          <div className="space-y-1 text-sm mb-5">
            <div>
              <p> {format(parseISO(frontMatter.date), 'MMMM dd, yyyy')}</p>
            </div>
            <div>
              <p className="text-sm"> {readTime.text}</p>
            </div>
            <div className="py-2">
              {frontMatter.tags.map((tag, index) => (
                <a
                  href="#"
                  key={index}
                  className="mr-2 border p-2 rounded text-base"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="prose  prose-slate dark:prose-invert text-lg">
          <MDXRemote {...mdxSource} />
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;

export const getStaticProps = async (context) => {
  const { slug } = context.params;

  const source = getFileData(slug);
  const { content, data } = matter(source);
  const readTime = readingTime(content);
  const mdxSource = await serialize(content);

  return {
    props: {
      mdxSource,
      frontMatter: data,
      readTime,
    },
  };
};

export const getStaticPaths = () => {
  const paths = getPaths();

  return {
    paths,
    fallback: false,
  };
};
