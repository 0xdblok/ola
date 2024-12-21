import Image from "next/image";
import logo from "./logo.png"
import logo1 from "./logo1.png"
import logo2 from "./logo2.png"
import gal from "./gal.jpg"
import gal1 from "./gal1.jpg"
import gal2 from "./gal2.jpg"
import gal3 from "./gal3.jpg"
import gal4 from "./gal4.jpg"
import gal15 from "./gal15.jpg"
import gal16 from "./gal16.jpg"
import gal5 from "./gal5.jpg"
import gal6 from "./gal6.jpg"
import gal7 from "./gal7.jpg"
import gal8 from "./gal8.jpg"
import gal9 from "./gal9.jpg"
import gal10 from "./gal10.jpg"
import gal11 from "./gal11.jpg"
import enter from "./enter.png"
import pear from "./pear.gif"
import pear1 from "./pear1.gif"
import pear2 from "./pear2.gif"
export default function Home() {
  return (
    <div
    class="flex overflow-hidden flex-col items-center px-20 bg-gradient-to-b from-blue-500 via-green-300 to-blue-500  min-h-[900px] max-md:px-5"
    role="main"
  >
    <div className="flex justify-between pt-8 w-full">    
      <p></p> 
      <a
              href="/enter"
              class="flex overflow-hidden gap-2 justify-center items-center px-4 py-2 leading-loose text-teal-600 bg-green-300 rounded-md min-h-[36px] shadow-[0px_1px_3px_rgba(0,0,0,0.1)]"
              role="button"
            >
                 <Image
                 width={92}
                 height={50} 
                src={enter}
                alt=""
                class="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
           
              <span class="self-stretch my-auto">Enter</span>
            </a></div>
    <div
      class="flex flex-col justify-center items-center py-8 max-w-full min-h-[900px] w-[1280px] max-md:px-5 max-md:py-24"
    >
      <div class=" flex    flex-col items-center w-full">
        <div class="flex mx-96  flex-col w-64 max-w-full min-h-[256px] border-4 border-black">
          <Image
            src={logo2}
            alt="Pear Logo"
            class="object-contain w-full rounded-2xl aspect-square"
            width={266}
            height={266}
          />
        
         
        </div>
        <p className="text-zinc-100 pt-2 text-sm font-thin font-mono "> (Create, Deploy, Buy, Finalize)</p>
  <h1 className="text-center text-green-200 text-2xl font-semibold pt-16 ">About</h1>
   <p className="text-center text-zinc-800 pt-2 px-16 md:px-20 lg:px-56">
PEAR is pioneering the future of AI trading on Hyperliquid as the first dedicated AI agent launchpad. Our innovative platform creates a secure environment where AI trading agents can be deployed while protecting genuine traders through our advanced anti-bot and anti-sniper mechanisms.
</p>
<div className=" max-w-full min-h-[256px] "><Image
            src={pear1}
            alt="Pear Logo"
            class="object-contain rounded-2xl aspect-square"
            width={256}
            height={136}
          /></div>
        

  <div className="pt-16 lg:pt-28">
  <h1 className="text-center text-green-100 text-2xl font-semibold ">Gallery</h1>
    <div class="grid grid-cols- pt-4 gap-4 md:grid-cols-3">
  <div class="grid gap-4">
    <div>
      <Image
      width={86}
      height={86}
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={gal}
        alt="gallery-photo"
      />
    </div>
    <div>
      <Image
      width={86}
      height={86}
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src={gal11}
        alt="gallery-photo"
      />
    </div>
    <div>
      <Image
      width={86}
      height={86}
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={gal15}
        alt="gallery-photo"
      />
    </div>
    
  </div>
  <div class="grid gap-4">
    <div>
      <Image
      width={86}
      height={86}
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={gal3}
        alt="gallery-photo"
      />
    </div>
    <div>
      <Image
      width={86}
      height={86}
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={gal4}
        alt="gallery-photo"
      />
    </div>
    <div>
      <Image
      width={86}
      height={86}
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src={gal5}
        alt="gallery-photo"
      />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <Image
      width={86}
      height={86}
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={gal16}
        alt="gallery-photo"
      />
    </div>
    <div>
      <Image
      width={86}
      height={86}
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src={gal7}
        alt="gallery-photo"
      />
    </div>
    <div>
      <Image
      width={86}
      height={86}
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={gal8}
      />
    </div>
  </div>
  <div class="grid gap-4">
  
  </div>
</div></div>


        <div
          class="flex flex-col items-center justify-center pt-8 mt-8 text-sm font-medium text-center"
        >     <p
          class="mt-4 px-20 md:px-48 xl:px-96 text-2xl font-medium leading-none text-center text-green-200"
        >
          (Powerful Engine AI Robots) built on top of High PEAR Liquid
        </p>
          <div className="w-full pt-4 "></div>
          <div class="flex gap-4 items-center">
            <a
              href="https://app.hyperliquid.xyz/trade/0x1ad748b576a84f6eb6541389bb53d164"
              class="flex overflow-hidden gap-2 justify-center items-center px-4 py-2 leading-loose text-teal-600 bg-green-300 rounded-md min-h-[36px] shadow-[0px_1px_3px_rgba(0,0,0,0.1)]"
              role="button"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5be5666591efd2ad2225b9b2fb90ebc22f6a163c1f41195f1c9975db43f46acf?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                alt=""
                class="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
              <span class="self-stretch my-auto">Trade on Hyperliquid</span>
            </a>
            <a
              href="https://x.com/PearOnHL"
              class="flex gap-2 justify-center items-center px-4 py-2 leading-loose text-green-300 rounded-md border border-green-300 border-solid bg-white bg-opacity-0 min-h-[36px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]"
              role="button"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f713f3c475fc151899197f0536d446fec0b505be215a452b840433803c9e23c6?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
                alt=""
                class="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              />
              <span class="self-stretch my-auto">Follow on Twitter</span>
            </a>
          </div>
        </div>
      </div>
   
   <p className="text-center text-zinc-800 pt-48 font-extralight text-sm"> All rights reserved © </p>    </div>
  </div>


  );
}

/*
    <div
    class="flex relative flex-col px-96 pt-32 pb-44 bg-white min-h-[1048px] min-w-[320px] max-md:px-5 max-md:py-24"
  >
    <div
      class="flex z-0 flex-col items-center py-5 w-full text-center max-md:max-w-full"
    >
      <h1
        class="text-6xl font-bold text-white max-md:max-w-full max-md:text-4xl"
      >
        Ask Hyper Cat something!
      </h1>
      <form
        class="flex flex-col items-center px-12 pt-11 pb-1.5 mt-5 w-full rounded-3xl bg-white bg-opacity-80 max-w-[1296px] shadow-[0px_0px_20px_rgba(0,0,0,0.2)] max-md:px-5 max-md:max-w-full"
      >
        <label for="chatInput" class="sr-only">Tell me something!</label>
        <textarea
          id="chatInput"
          name="chatInput"
          aria-label="Chat input field"
          class="overflow-hidden self-stretch px-40 pt-5 pb-16 text-lg bg-white rounded-xl border border-solid border-neutral-500 text-neutral-500 max-md:px-5 max-md:max-w-full"
          placeholder="Tell me something!"
        ></textarea>
        <div class="mt-1.5 text-sm text-neutral-600" aria-live="polite">
          Characters remaining: 100
        </div>
        <button
          type="submit"
          class="px-10 py-4 mt-5 text-4xl font-bold text-white whitespace-nowrap bg-emerald-500 rounded-[30px] shadow-[0px_4px_8px_rgba(0,0,0,0.2)] max-md:px-5"
        >
          Ask
        </button>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a735c0e14817eba3269fbbe57ff47ceb643531980a6365642523e6356adf7fe7?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
          alt="Hyper Cat Assistant"
          class="object-contain max-w-full aspect-square w-[200px]"
        />
      </form>
    </div>
    <nav
      class="flex absolute top-0 right-0 z-0 flex-wrap gap-5 justify-center items-center py-2.5 bg-black bg-opacity-30 pl-[552px] pr-[551px] w-[1440px] max-md:px-5 max-md:max-w-full"
      role="navigation"
      aria-label="Main navigation"
    >
      <a href="#chat" class="self-stretch my-auto text-4xl text-white whitespace-nowrap">
        ChatBot
      </a>
      <a href="#buy" class="self-stretch my-auto text-4xl text-white">Buy here!</a>
      <div
        class="flex flex-col grow shrink justify-center self-stretch pt-0.5 my-auto w-[38px]"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfb31f1cc0365c00df40ca50ac1092f93bf3d2ffefa54a50d76e19bc0cc3304a?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
          alt="Social media icon"
          class="object-contain w-12 aspect-square"
        />
      </div>
      <div
        class="flex flex-col grow shrink justify-center self-stretch pt-0.5 my-auto w-[38px]"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c611285839a5e9aae29827b8aaf07ec50cc5c228166081e6089dfb34062d9ce?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3"
          alt="Social media icon"
          class="object-contain w-12 aspect-square"
        />
      </div>
    </nav>
  </div>*/ 
  
  
  
  
  
  
  //galery
  /*
  <div>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""/>
        </div>
    </div>
</div>
</div>*/