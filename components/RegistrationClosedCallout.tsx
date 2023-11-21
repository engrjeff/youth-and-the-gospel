import { site } from "@/config/site";

function RegistrationClosedCallout() {
  return (
    <div className='bg-black/40 backdrop-blur-lg text-white p-6 rounded-md max-w-xl mx-auto space-y-4 text-center'>
      <h3 className='font-bold text-xl text-center'>
        Registration is now closed.
      </h3>
      <p className='text-center'>See you on November 27, 2023, 9:00 AM</p>
      <a
        href={site.linkToMap}
        target='_blank'
        rel='noopener noreferrer'
        className='bg-white inline-flex text-gray-900 px-6 py-4 font-semibold rounded-full hover:bg-amber-500 transition-colors w-48 text-center'
      >
        View Venue Map
      </a>
    </div>
  );
}

export default RegistrationClosedCallout;
