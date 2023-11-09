/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";

import { toPng } from "html-to-image";
import { useSearchParams } from "next/navigation";
import QRCode from "qrcode";
import Confetti from "./Confetti";

function useQRCode(textData: string) {
  const [loading, setLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>();

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        setLoading(true);
        const dataUrl = await QRCode.toDataURL(textData, {
          margin: 1,
          width: 120,
        });

        setImageSrc(dataUrl);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    generateQRCode();
  }, [textData]);

  return { loading, imageSrc };
}

function Stub() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const nickname = searchParams.get("nickname");
  const invitedBy = searchParams.get("invitedBy");
  const stubNo = searchParams.get("stubNo");

  const { loading, imageSrc } = useQRCode([id, name, invitedBy].join(","));

  const stubRef = useRef<HTMLDivElement | null>(null);

  if (loading) return <p>Loading...</p>;

  if (!imageSrc) return <p>Wait...</p>;

  function downloadStub() {
    if (!stubRef.current) return;

    toPng(stubRef.current).then(function (dataUrl) {
      const link = document.createElement("a");
      link.download = `${nickname}-yg-stub.png`;
      link.href = dataUrl;
      link.click();
    });
  }

  return (
    <>
      <h1 className='text-2xl font-bold mb-2'>Thank you for registering!</h1>
      <p className='text-base mb-6'>You may now claim your stub below.</p>
      <div className='relative overflow-hidden max-w-full max-h-[280px]'>
        {imageSrc && !loading && <Confetti />}
        <div className='absolute rounded inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center'>
          <button
            onClick={downloadStub}
            className='bg-white inline-block text-gray-900 px-6 py-4 font-semibold rounded-full hover:bg-amber-600 transition-colors w-48 text-center'
          >
            Claim My Stub
          </button>
        </div>
        <div
          ref={stubRef}
          className='bg-black p-6 rounded shadow-lg flex gap-5 w-[736px] h-[280px]'
        >
          <div
            className='flex gap-8 pr-5 justify-between border-r border-zinc-800 text-xs'
            style={{ textOrientation: "sideways", writingMode: "vertical-lr" }}
          >
            <span>
              Name: <span className='font-bold inline-block'>{nickname}</span>
            </span>
            <span>
              Stub No.: <span className='font-bold inline-block'>{stubNo}</span>
            </span>
          </div>
          <div className='flex flex-col flex-1 flex-shrink-0'>
            <div className='flex justify-between'>
              <div>
                <p className='font-extrabold text-3xl mb-1 flex items-center gap-3'>
                  <img
                    src='/gcc-logo-no-bg.png'
                    alt='Grace City Church'
                    width={36}
                    height={36}
                  />
                  The Youth And
                </p>
                <p className='font-extrabold text-3xl bg-white text-black px-4 py-1 mb-2'>
                  The Gospel 2023
                </p>
                <small className='uppercase text-xs tracking-wide'>
                  Free Meal | Live Band
                </small>
                <p className='py-6 font-extrabold text-4xl text-primary'>
                  Hi, {nickname}!
                </p>
              </div>
              <div>
                <img
                  src={imageSrc}
                  alt='sample qrc ode'
                  width={120}
                  height={120}
                />
                <small className='uppercase text-xs tracking-wide leading-none text-center block mt-1'>
                  Scan for
                </small>
                <small className='uppercase text-xs tracking-wide leading-none block text-center'>
                  attendance
                </small>
              </div>
            </div>
            <div className='mt-auto flex items-center justify-between'>
              <div>
                <p className='font-semibold text-sm'>Grace City Church</p>
                <p className='font-semibold text-sm leading-none'>
                  International Ministries
                </p>
              </div>
              <div>
                <p className='font-semibold text-sm'>November 27, 2023</p>
                <p className='font-semibold text-sm leading-none'>
                  9:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
          <div className='border-r-2 border-dashed border-zinc-700 h-[240px]'></div>
          <div className='space-y-3 ml-auto'>
            <div>
              <small className='uppercase text-xs tracking-wide leading-none block mb-1'>
                Lunch
              </small>
              <div className='w-12 h-12 bg-zinc-900'></div>
            </div>
            <div>
              <small className='uppercase text-xs tracking-wide leading-none block mb-1'>
                Snack
              </small>
              <div className='w-12 h-12 bg-zinc-700'></div>
            </div>
            <div>
              <small className='uppercase text-xs tracking-wide leading-none block mb-1'>
                Souveneir
              </small>
              <div className='w-12 h-12 bg-zinc-500'></div>
            </div>
          </div>
          <div
            className='flex gap-8 justify-between text-xs'
            style={{ textOrientation: "sideways", writingMode: "vertical-lr" }}
          >
            <span>
              Name: <span className='font-bold inline-block'>{nickname}</span>
            </span>
            <span>
              Stub No.: <span className='font-bold inline-block'>{stubNo}</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stub;
