import Image from "next/image";

export default function Home() {
  return (
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
  </div>
  );
}
