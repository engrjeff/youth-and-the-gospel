import RegisterForm from "@/components/RegisterForm";
import {
  YG_ID_COOKIE_KEY,
  YG_INVITEDBY_COOKIE_KEY,
  YG_NAME_COOKIE_KEY,
  YG_NICKNAME_COOKIE_KEY,
  YG_STUBNO_COOKIE_KEY,
} from "@/config/site";
import { Metadata } from "next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Registration | Youth and the Gospel",
};

function RegisterPage() {
  const cookieStore = cookies();
  const ygId = cookieStore.get(YG_ID_COOKIE_KEY)?.value;
  const ygName = cookieStore.get(YG_NAME_COOKIE_KEY)?.value;
  const ygNickname = cookieStore.get(YG_NICKNAME_COOKIE_KEY)?.value;
  const ygInvitedBy = cookieStore.get(YG_INVITEDBY_COOKIE_KEY)?.value;
  const ygStubNo = cookieStore.get(YG_STUBNO_COOKIE_KEY)?.value;

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
            {ygNickname && <span>Hi, {ygNickname}! </span>} It looks like you
            are already registered to the Youth Gathering event.
          </h1>
          <div className='flex flex-col gap-3 items-start'>
            <Link
              href='/'
              className='bg-white inline-block text-gray-900 px-6 py-4 font-semibold rounded-full hover:bg-amber-600 transition-colors text-center'
            >
              Back to Home Page
            </Link>
            <Link
              href={{
                pathname: "/stub",
                query: {
                  id: ygId,
                  nickname: ygNickname,
                  name: ygName,
                  invitedBy: ygInvitedBy,
                  stubNo: ygStubNo,
                },
              }}
              className='bg-white inline-block text-gray-900 px-6 py-4 font-semibold rounded-full hover:bg-amber-600 transition-colors text-center'
            >
              View My Stub
            </Link>
          </div>
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
