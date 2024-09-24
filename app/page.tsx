export default function Home(): JSX.Element {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mb-4 dark:text-gray-200 space-y-4">
        <div className="space-y-1">
          <h1 className="font-semibold text-2xl">Robert Ngabo</h1>
          <p className="text-base text-gray-900 dark:text-gray-400">
            Software Developer
          </p>
        </div>
        <p className="leading-7">
          A naturally curious individual—deeply passionate about the
          intersection of humans and technology, and how we engage with the
          world.
        </p>
      </div>
    </div>
  );
}
