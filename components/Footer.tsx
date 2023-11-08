import { site } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
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
  );
}

export default Footer;
