import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import { MDXRemote } from 'next-mdx-remote';
import { format, parseISO } from 'date-fns';
import { getFileData, getPaths } from 'utils/mdx';
import Layout from '@/components/Layout';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  Key,
} from 'react';
import AuthorInfo from '@/components/AuthorInfo';

const SingleBlog = ({ mdxSource, frontMatter, readTime }): JSX.Element => {
  const customMeta = {
    title: `${frontMatter.title} - Robert Ngabo`,
    description: `${frontMatter.description}`,
    type: 'article',
    keywords: `${frontMatter.title}`,
  };

  return (
    <Layout {...customMeta}>
      <div className="mb-5 text-gray-700 dark:text-gray-200 max-w-full pt-8 pb-24 lg:flex lg:justify-center mt:pt-12">
        <div className="max-w-2xl px-5 mx-auto overflow-x-hidden lg:mx-0">
          <Link href="/blog">
            <a>
              {' '}
              <ArrowLeftIcon className="w-5 h-5 mb-5 hover:text-blue-500" />
            </a>
          </Link>
          <div className="mb-3">
            <h1 className="font-black tracking-tight text-3xl">
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
                {frontMatter.tags.map(
                  (
                    tag:
                      | string
                      | number
                      | boolean
                      | ReactElement<any, string | JSXElementConstructor<any>>
                      | ReactFragment
                      | ReactPortal,
                    index: Key
                  ) => (
                    <a
                      href="#"
                      key={index}
                      className="p-2 mr-2 text-base border rounded"
                    >
                      {tag}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="text-lg prose sm:prose-lg prose-indigo  dark:prose-invert">
            <MDXRemote {...mdxSource} />
          </div>
        </div>
        <div className="hidden w-full max-w-xs ml-10 mt-26 lg:block">
          <AuthorInfo />
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;

export const getStaticProps = async (context: { params: { slug: string } }) => {
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
    fallback: 'blocking',
  };
};
