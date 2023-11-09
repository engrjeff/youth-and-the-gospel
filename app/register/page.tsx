import RegisterForm from "@/components/RegisterForm";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Registration | Youth and the Gospel",
};

function RegisterPage() {
  const cookieStore = cookies();
  const ygId = cookieStore.get("yg-id");

  return (
    <div className='mt-20 min-h-[50vh] container px-4 max-w-screen-md lg:py-20 my-20'>
      <Image
        src='/yg-reg-banner.png'
        alt='Youth and the Gospel registration banner'
        width={700}
        height={160}
        className='w-full object-cover rounded-lg shadow'
      />
      {ygId ? (
        <div>
          <h1 className='text-xl font-semibold my-6'>
            It looks like you are already registered to the Youth Gathering
            event.
          </h1>
          <Link
            href='/'
            className='bg-white inline-block text-gray-900 px-6 py-4 font-semibold rounded-full hover:bg-amber-600 transition-colors text-center'
          >
            Back to Home Page
          </Link>
        </div>
      ) : (
        <>
          <h1 className='text-xl font-bold my-6'>
            Fill in the form below. All fields are required.
          </h1>
          <RegisterForm />
        </>
      )}
    </div>
  );
}

export default RegisterPage;
