import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import { MDXRemote } from 'next-mdx-remote';
import { format, parseISO } from 'date-fns';
import { getFileData, getPaths } from 'utils/mdx';
import Layout from '@/components/Layout';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const SingleBlog = ({ mdxSource, frontMatter, readTime }) => {
  const customMeta = {
    title: `${frontMatter.title} - Robert Ngabo`,
    description: `${frontMatter.description}`,
    type: 'article',
  };

  return (
    <Layout customMeta={customMeta}>
      <div className="mb-5 text-gray-700 dark:text-gray-400">
        <Link href="/blog">
          <a>
            {' '}
            <ArrowLeftIcon className="w-5 h-5 mb-5 hover:text-blue-500" />
          </a>
        </Link>
        <div className="mb-3">
          <h1 className="text-xl font-black tracking-tight md:text-3xl">
            {frontMatter.title}
          </h1>
          <div className="mb-5 space-y-1 text-sm">
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
                  className="p-2 mr-2 text-base border rounded"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-lg prose prose-slate dark:prose-invert">
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
