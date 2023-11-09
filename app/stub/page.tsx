import Stub from "@/components/Stub";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function StubPage({ searchParams }: { searchParams: { id: string } }) {
  const cookieStore = cookies();
  const ygId = cookieStore.get("yg-id");

  if (ygId) redirect("/");

  return (
    <div className='mt-20 py-10 container px-4 max-w-screen-md min-h-[70vh]'>
      <Stub />
    </div>
  );
}

export default StubPage;
