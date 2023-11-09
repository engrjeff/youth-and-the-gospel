import RegisterForm from "@/components/RegisterForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Registration | Youth and the Gospel",
};

function RegisterPage() {
  return (
    <div className='mt-20 min-h-screen container px-4 max-w-screen-md lg:py-20 my-20'>
      <Image
        src='/yg-reg-banner.png'
        alt='Youth and the Gospel registration banner'
        width={700}
        height={160}
        className='w-full object-cover rounded-lg shadow'
      />
      <h1 className='text-xl font-bold my-6'>
        Fill in the form below. All fields are required.
      </h1>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
