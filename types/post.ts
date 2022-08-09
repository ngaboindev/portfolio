export type PostType = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  readTime?: {
    text: string;
  };
  link?: string;
};
