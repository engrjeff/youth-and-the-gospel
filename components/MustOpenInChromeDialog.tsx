"use client";

import { useEffect, useState } from "react";

function MustOpenInChromeDialog() {
  const [isOnFbBrowser, setIsOnFbBrowser] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.match(/FBAN|FBAV/i)) {
      // Facebook in-app browser detected
      setIsOnFbBrowser(true);
    }
  }, []);

  if (!isOnFbBrowser) return null;

  return (
    <div className='fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] p-6 flex items-center justify-center'>
      <div className='max-w-md w-full p-6 bg-white rounded-lg shadow text-black text-base'>
        <div className='space-y-4'>
          <h2 className='text-lg font-bold'>Hey!</h2>
          <p>In order to continue, please use Google Chrome.</p>
          <a
            href={window.location.href}
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-3 text-base w-full bg-amber-500 text-zinc-800 font-semibold hover:bg-primary/90 inline-block text-center rounded-full'
          >
            Open With Chrome
          </a>
        </div>
      </div>
    </div>
  );
}

export default MustOpenInChromeDialog;
