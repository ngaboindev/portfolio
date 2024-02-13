import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { PostType } from 'types/post';
import { getBlogs } from 'utils/mdx';

const blogs = getBlogs();
// @ts-ignore
const sortedBlogs: PostType[] = blogs?.sort(
  //@ts-ignore
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function Blogs() {
  return (
    <div className="mb-5">
      <h3 className="mb-5 text-xl font-black tracking-tight text-gray-700 dark:text-gray-400 md:text-3xl">
        Blog
      </h3>
      <p className="my-5 text-gray-600 dark:text-gray-300">
        A blog about tech, coding and other fascinating topics.
      </p>

      <div className="py-2">
        {sortedBlogs.map((blog, index) => (
          <Link href={`/blog/${blog.link}`} key={index}>
            <article className="px-6 py-4 my-3 cursor-pointer">
              <div className="flex items-center justify-between mb-4 text-sm text-left text-gray-500 md:text-right md:mb-2">
                <div>
                  <p> {format(parseISO(blog.date), 'MMMM dd, yyyy')}</p>
                </div>
                <div>
                  <p>{blog?.readTime?.text}</p>
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
                    className="p-2 mr-2 text-base border rounded"
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
  );
}
