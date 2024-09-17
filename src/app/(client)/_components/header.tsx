import React from 'react'

const Header = () => {
  return (
<div className="h-16 md:h-24 md:px-6 z-50 absolute top-0 w-full">
  <div className="h-full w-full px-6 flex items-center justify-between">
    {/* Left Side */}
    <div className="flex items-center gap-6">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7 md:h-12 md:w-12 stroke-[1.5px] stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
      <button>
        <svg
          className="h-6 w-6 md:h-9 md:w-9 md:ml-2 stroke-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
          />
        </svg>
      </button>
    </div>

    {/* Center */}
    <p className="font-bold text-base sm:text-xl md:text-3xl text-white">NN CLOTHING</p>

    {/* Right Side */}
    <div className="flex items-center gap-6">
      <button>
        <svg
          className="stroke-1 h-5 w-[15px] md:h-8 md:w-12 stroke-white fill-none"
          viewBox="0 0 13 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            viewBox="0 0 13 16"
            d="M6.12633 8.91907 1 14.6851V.5h11v14.1851L6.87367 8.91907 6.5 8.49876l-.37367.42031Z"
            strokeMiterlimit="10"
          ></path>
        </svg>
      </button>
      <button>
      <svg className='w-[15px] h-5 md:h-8 md:w-12 fill-white stroke-1' viewBox="0 0 15 20" xmlns="http://www.w3.org/2000/svg"><defs></defs><path fillRule="evenodd" d="M4.5 1.5h6V5h-6V1.5zM3 5V0h9v5h3v15H0V5h3zm9 1.5H1.5v12h12v-12H12z"></path></svg>

      </button>
    </div>
  </div>
</div>
  );
}

export default Header