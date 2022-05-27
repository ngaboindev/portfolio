import Layout from '@/components/Layout';

const about = () => {
  return (
    <Layout>
      <div className="mb-5">
        <h3 className="text-xl text-gray-700 tracking-tight  dark:text-gray-400 md:text-3xl font-black mb-5">
          About Me
        </h3>
        <p className="text-gray-600 dark:text-gray-300 my-5">
          I'm Web developer, currently based in Kigali. passionate about tech
          and solving problems using cutting edge technologies.
        </p>
        <p className="text-gray-600 dark:text-gray-300 my-2">
          When I'm not coding, I'm watching anime,reading,writing or hang out
          with some friends.
        </p>
      </div>
    </Layout>
  );
};

export default about;
