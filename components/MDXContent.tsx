'use client';

import { MDXRemote } from 'next-mdx-remote';

//@ts-ignore
const MDXContent = (props) => {
  return <MDXRemote {...props} />;
};

export default MDXContent;
