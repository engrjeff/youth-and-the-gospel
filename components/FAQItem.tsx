"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [shown, setShown] = useState(false);

  return (
    <div className='border-b border-zinc-900'>
      <div
        onClick={() => setShown((val) => !val)}
        className='px-3 cursor-pointer rounded py-4 flex items-center justify-between w-full hover:bg-zinc-900 font-semibold'
      >
        <span className='flex-1 line-clamp-1'>{question}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={cn(
            "w-4 h-4 transition-transform",
            shown ? "rotate-180" : "rotate-0"
          )}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
          />
        </svg>
      </div>
      <div
        className={cn(
          "px-3 py-4 border border-zinc-800 border-dashed rounded-md my-4",
          shown ? "block" : "hidden"
        )}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default FAQItem;
