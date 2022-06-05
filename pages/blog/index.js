import Layout from '@/components/Layout';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { getBlogs } from 'utils/mdx';

const Blog = ({ blogs }) => {
  return (
    <Layout>
      <div className="mb-5">
        <h3 className="text-xl text-gray-700 tracking-tight  dark:text-gray-400 md:text-3xl font-black mb-5">
          Blog
        </h3>
        <p className="text-gray-600 dark:text-gray-300 my-5">
          A blog about tech, coding and other fascinating topics.
        </p>

        <div className="py-2">
          {blogs.map((blog, index) => (
            <Link href={`/blog/${blog.link}`} key={index}>
              <article className="cursor-pointer my-3 px-6 py-4">
                <div className="flex  items-center  justify-between  mb-4  text-sm text-left text-gray-500 md:text-right md:mb-2">
                  <div>
                    <p> {format(parseISO(blog.date), 'MMMM dd, yyyy')}</p>
                  </div>
                  <div>
                    <p>{blog.readTime.text}</p>
                  </div>
                </div>
                <h3 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                  {blog.title}
                </h3>
                <div className="py-2 mb-3">
                  {blog.tags.map((tag, index) => (
                    <a
                      href="#"
                      key={index}
                      className="mr-2 border p-2 rounded text-base"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {blog.description}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = () => {
  const blogs = getBlogs();
  const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      blogs: sortedBlogs,
    },
  };
};
