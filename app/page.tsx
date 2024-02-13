export default function Home(): JSX.Element {
  return (
    <div className="flex  flex-col-reverse gap-3 lg:flex-row  items-center mt-2 mb-24">
      <div className="space-y-7 flex-col text-center md:text-left">
        <h1 className="text-6xl md:text-9xl   tracking-tight mb-1 dark:text-gray-100 font-bold">
          Crafting Code and <span className="italic font-normal">Stories.</span>
        </h1>
        <div className="mb-4 dark:text-gray-200">
          <p className="leading-8 font-normal text-xl">
            Enthusiastic about software development and writing, I'm a software
            engineer dedicated to integrating cutting-edge technologies into
            various applications, particularly on web and mobile platforms.
            Actively engaged in tech communities, I thrive on exchanging ideas
            and collaborating with fellow enthusiasts to push the boundaries of
            innovation. With a foundation in networking and cloud computing, I
            ensure that each integration is scalable, efficient, and reflective
            of my passion for advancing technology.
          </p>
        </div>
      </div>
    </div>
  );
}
