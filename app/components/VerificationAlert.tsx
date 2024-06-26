const VerificationAlert = () => {
    return (
        <div
  role="alert"
  className="z-20 relative flex w-full px-4 py-4 text-base text-white bg-gray-900 font-regular"
  data-dismissible="alert"
>
  <div className="mr-12 ">Your account is not verified! Please check your mailbox</div>
  <button
    data-dismissible-target="alert"
    className="!absolute  top-3 right-3 h-8 max-h-[32px] w-8 max-w-[32px] select-none text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
  >
    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </span>
  </button>
</div>
    )
}

export default VerificationAlert;