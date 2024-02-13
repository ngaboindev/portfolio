import Image from 'next/image';

const page = () => {
  return (
    <div className="space-y-8 text-lg">
      <div>
        <h1 className="text-5xl  tracking-tight mb-1 font-bold">
          Robert Ngabo
        </h1>
        <p className="pt-4 text-2xl">Software Developer, Avid Learner.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-[800px]">
          <Image
            src="/images/profile.png"
            className="w-full rounded-lg"
            height={700}
            width={700}
            priority
            alt="Robert Ngabo"
          />
        </div>
        <div className="w-full space-y-4 font-light">
          <p className="leading-8">
            Greetings from the bustling streets of Kigali, Rwanda, where my
            journey began. Growing up in Africa came with its challenges,
            especially at a time when the internet was scarce. But I got through
            the obstacles.
          </p>

          <p className="leading-8">
            High school graduation marked the end of one chapter and the
            beginning of another. It was during those formative years that I
            discovered my love for technology. I remember being 14 and
            struggling to find the right tools to feed my thirst for knowledge.
            That struggle sparked a passion for software development in me, a
            passion that has grown stronger over time.
          </p>

          <p className="leading-8">
            My journey has taken me to exciting places, and now, I am
            collaborating with startups and helping them bring their visions to
            life It is a fulfillment that allows you to not only use your skills
            but contribute to something great.
          </p>
          <p className="leading-8">
            Essentially, my story is a story of patience, curiosity and a deep
            love for technology. Every step forward is driven by a desire to
            learn, grow and make a positive impact on the world.
          </p>
          <p className="leading-8">
            But life is not just work. I find joy in simple pleasures - losing
            myself in the pages of a good book or pushing my limits in the gym.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
