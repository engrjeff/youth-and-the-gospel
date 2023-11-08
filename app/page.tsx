import Header from "@/components/Header";
import { site } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/yg-hero.png')] bg-cover bg-center bg-no-repeat min-h-screen text-white">
        <Header />
        <main className='lg:mt-20'>
          <section className='py-10 container px-4'>
            <h1 className='text-5xl lg:text-8xl font-extrabold uppercase text-center leading-tight my-6'>
              The <span className='text-white'>Youth</span> <br /> and the{" "}
              <br />
              <span className='text-white'>Gospel</span>
            </h1>
            <p className='text-center lg:text-xl text-gray-300 uppercase tracking-wider'>
              Gathering the Youth to know Christ in His Gospel
            </p>

            <div className='text-center my-10 text-lg'>
              <p>November 27, 2023 | Monday</p>
              <p className='font-medium italic'>You are invited!</p>
            </div>
            <div className='flex items-center flex-col lg:flex-row justify-center gap-4 my-6'>
              <a
                href={site.registrationLink}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-amber-500 text-gray-900 px-6 py-4 font-semibold rounded-md hover:bg-amber-600 transition-colors w-48 text-center'
              >
                Register Now
              </a>
              <a
                href={site.linkToMap}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-white text-gray-900 px-6 py-4 font-semibold rounded-md hover:bg-amber-500 transition-colors w-48 text-center'
              >
                View Venue Map
              </a>
            </div>
          </section>
        </main>
      </div>
      <section className='py-20 container px-4 max-w-screen-md'>
        <h2 className='text-center text-4xl font-extrabold mb-6 uppercase'>
          The Gospel saves - even the youths like YOU!
        </h2>
        <p className='text-center text-lg'>
          Only the Gospel can change anyone&apos;s life. Yes, even your life.
          When you think it&apos;s the end for you, the Gospel is your new
          beginning.
        </p>
        <div className='pt-8'>
          <video
            controls
            className='w-full aspect-video'
            poster='/yg-teaser-bg-1.png'
          >
            <source
              src='https://res.cloudinary.com/abide-in-the-vine/video/upload/v1699404212/gcc/YG_Teaser_Gospel_erhsjj.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className='py-10 container px-4 max-w-screen-md'>
        <h2 className='text-center text-4xl font-extrabold mb-6 uppercase'>
          Youth like you needs Jesus!
        </h2>
        <p className='text-center text-lg'>
          In these times where the youths experience many crisis in life, the
          gospel of the Lord Jesus Christ will give them solid and steadfast
          hope.
        </p>
        <div className='pt-8'>
          <video
            controls
            className='w-full aspect-video'
            poster='/yg-teaser-bg-2.png'
          >
            <source
              src='https://res.cloudinary.com/abide-in-the-vine/video/upload/v1699403085/gcc/YG_Teaser_2_yb39jg.mp4'
              type='video/mp4'
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className='py-10 container px-4 max-w-screen-md'>
        <h2 className='text-center text-4xl font-extrabold mb-6 uppercase'>
          It&apos;s FREE, but it&apos;s worth it!
        </h2>
        <p className='text-center text-lg'>
          All you have to do is attend, listen, and see your life changed!
        </p>

        <div className='flex justify-center my-8'>
          <a
            href={site.registrationLink}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-amber-500 inline-block text-gray-900 px-6 py-4 font-semibold rounded-md hover:bg-amber-600 transition-colors w-48 text-center'
          >
            Alright, I&apos;m in!
          </a>
        </div>
      </section>

      <section className='py-20 bg-zinc-800'>
        <div className='container px-4 max-w-screen-md'>
          <h2 className='text-center text-4xl font-extrabold mb-6 uppercase'>
            JOIN US!
          </h2>
          <p className='text-center text-lg'>
            It&apos;s on{" "}
            <span className='font-bold'>November 27, 2023, 9:00 AM</span>
          </p>
          <div className='flex justify-center my-8'>
            <a
              href={site.registrationLink}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-amber-500 inline-block text-gray-900 px-6 py-4 font-semibold rounded-md hover:bg-amber-600 transition-colors text-center'
            >
              Yes! I will be there!
            </a>
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
              className='bg-white inline-block text-zinc-900 px-6 py-4 font-semibold rounded-md hover:bg-amber-600 transition-colors text-center'
            >
              Show me the way
            </a>
          </div>
        </div>
      </section>

      <footer className='border-t border-zinc-800 bg-zinc-900 text-white'>
        <div className='container max-w-screen-lg py-10 px-4'>
          <div className='grid lg:grid-cols-3 gap-6'>
            <div className='space-y-6 text-sm'>
              <Image
                src='/gcc-logo-no-bg.png'
                alt='Grace City Church'
                width={48}
                height={48}
              />
              <p>
                <span className='italic'>
                  &quot;The Youth and the Gospel&quot;{" "}
                </span>
                is a ministry of Abundant Grace City Church International
                Ministries
              </p>
              <p>
                Sitio Ziplang <br />
                San Guillermo, Morong, Rizal <br />
                Philippines, 1960
              </p>

              <p>
                Phone: <a href='mailto:+639623797084'>+63 962-379-7084</a>
              </p>
            </div>

            <div className='mt-10 lg:text-center'>
              <p className='font-medium uppercase mb-4'>Links</p>
              <ul className='text-sm uppercase text-zinc-300 space-y-4'>
                <li>
                  <Link href='/'>Home</Link>
                </li>
                <li>
                  <a
                    href={site.registrationLink}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Register
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkToMap}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Directions
                  </a>
                </li>
                <li>
                  <Link href='/'>Contact Us</Link>
                </li>
                <li>
                  <Link href='/'>FAQ</Link>
                </li>
              </ul>
            </div>

            <div className='mt-10 lg:text-center'>
              <p className='font-medium uppercase mb-4'>Follow Us</p>
              <ul className='text-sm uppercase text-zinc-400 space-y-4'>
                <li>
                  <a
                    href={site.facebook}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href={site.youtube}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='border-t border-zinc-800 py-6 px-4'>
          <p className='text-sm uppercase text-zinc-400 font-medium text-center'>
            &copy; 2023 Grace City Church
          </p>
        </div>
      </footer>
    </>
  );
}
