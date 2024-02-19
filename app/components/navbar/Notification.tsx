export default function Notification({
  notificationCount,
}: {
  notificationCount: number;
}) {
  return (
    <>
      <div className="relative m-6 inline-flex w-full lg:w-fit">
        {notificationCount > 0 && (
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white text-sm font-bold shadow-lg lg:scale-100">
            {notificationCount}
          </div>
        )}
        <div className="flex items-center justify-center rounded-lg bg-rose-500 px-4 py-3 text-center text-white shadow-lg dark:text-gray-200 w-full lg:w-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
