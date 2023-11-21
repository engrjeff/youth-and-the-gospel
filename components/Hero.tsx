import { site } from "@/config/site";
import Link from "next/link";
import RegistrationClosedCallout from "./RegistrationClosedCallout";

function Hero() {
  return (
    <section className="relative bg-[url('/yg-hero.png')] bg-cover bg-center bg-no-repeat min-h-[110vh] -translate-y-20 z-10  pt-40 pb-20">
      <div className='py-10 container px-4'>
        <h1 className='text-5xl lg:text-8xl font-extrabold uppercase text-center leading-tight my-6 drop-shadow-sm'>
          The <span className='text-white'>Youth</span> <br /> and the <br />
          <span className='text-white'>Gospel</span>
        </h1>
        <p className='text-center lg:text-xl text-gray-300 uppercase tracking-wider'>
          Gathering the Youth to know Christ in His Gospel
        </p>

        <div className='text-center my-10 text-lg'>
          <p>November 27, 2023 | Monday</p>
          <p className='font-medium italic'>You are invited!</p>
        </div>
        <RegistrationClosedCallout />
        <div className='hidden items-center flex-col lg:flex-row justify-center gap-6 my-6'>
          <Link
            href='/register'
            className='rounded-full bg-amber-500 text-gray-900 px-6 py-4 font-semibold hover:bg-amber-600 transition-colors w-48 text-center'
          >
            Register Now
          </Link>
          <a
            href={site.linkToMap}
            target='_blank'
            rel='noopener noreferrer'
            className='bg-white text-gray-900 px-6 py-4 font-semibold rounded-full hover:bg-amber-500 transition-colors w-48 text-center'
          >
            View Venue Map
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
