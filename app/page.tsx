import FAQSection from "@/components/FAQSection";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import { content, site } from "@/config/site";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <section className='container px-4 max-w-screen-md'>
        <h2 className='text-center text-2xl lg:text-4xl font-extrabold mb-6 uppercase'>
          The Gospel saves - even the youths like YOU!
        </h2>

        <p className='text-center text-lg'>
          Only the Gospel can change anyone&apos;s life. Yes, even your life.
          When you think it&apos;s the end for you, the Gospel is your new
          beginning.
        </p>
        <div className='pt-8'>
          <Video poster='/yg-teaser-bg-1.png' source={content.teaser_one} />
        </div>
      </section>
      <section className='py-10 container px-4 max-w-screen-md'>
        <h2 className='text-center text-2xl lg:text-4xl font-extrabold mb-6 uppercase'>
          Youth like you needs Jesus!
        </h2>
        <p className='text-center text-lg'>
          In these times where the youths experience many crisis in life, the
          gospel of the Lord Jesus Christ will give them solid and steadfast
          hope.
        </p>
        <div className='pt-8'>
          <Video poster='/yg-teaser-bg-2.png' source={content.teaser_two} />
        </div>
      </section>

      <section className='py-10 container px-4 max-w-screen-md'>
        <h2 className='text-center text-2xl lg:text-4xl font-extrabold mb-6 uppercase'>
          It&apos;s FREE, but it&apos;s worth it!
        </h2>
        <p className='text-center text-lg'>
          All you have to do is attend, listen, and see your life changed!
        </p>

        <div className='flex justify-center my-8'>
          <Link
            href='/register'
            className='bg-amber-500 inline-block text-gray-900 px-6 py-4 font-semibold rounded-full hover:bg-amber-600 transition-colors w-48 text-center'
          >
            Alright, I&apos;m in!
          </Link>
        </div>
      </section>

      <section className='py-20 bg-zinc-800'>
        <div className='container px-4 max-w-screen-md'>
          <h2 className='text-center text-2xl lg:text-4xl font-extrabold mb-6 uppercase'>
            JOIN US!
          </h2>
          <p className='text-center text-lg'>
            It&apos;s on{" "}
            <span className='font-bold'>November 27, 2023, 9:00 AM</span>
          </p>
          <div className='flex justify-center my-8'>
            <Link
              href='/register'
              className='bg-amber-500 inline-block text-gray-900 px-6 py-4 font-semibold rounded-full hover:bg-amber-600 transition-colors text-center'
            >
              Yes! I will be there!
            </Link>
          </div>

          <h2 className='text-center text-4xl font-extrabold mb-6 uppercase pt-6'>
            Where is it?
          </h2>
          <p className='text-center text-lg'>
            You may find the place at <br />
            <span className='font-bold'>
              Sitio Ziplang, San Guillermo, Morong, Rizal
            </span>
          </p>
          <p className='text-center text-lg'>Want directions?</p>
          <div className='flex justify-center my-8'>
            <a
              href={site.linkToMap}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white inline-block text-zinc-900 px-6 py-4 font-semibold rounded-full hover:bg-amber-600 transition-colors text-center'
            >
              Show me the way
            </a>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  );
}
