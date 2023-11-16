import MustOpenInChromeDialog from "@/components/MustOpenInChromeDialog";
import Stub from "@/components/Stub";
import { redirect } from "next/navigation";

function StubPage({ searchParams }: { searchParams: { id: string } }) {
  if (!searchParams.id) redirect("/");

  return (
    <div className='mt-20 py-10 container px-4 max-w-screen-md min-h-'>
      <MustOpenInChromeDialog />
      <Stub />
    </div>
  );
}

export default StubPage;
