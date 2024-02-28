"use client";

import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();
  return (
    <section className="bg-gray-50">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
            Blog Posts
          </h2>
          <p className="font-light text-gray-500 sm:text-xl ">
            Dive into our adventure blogs: your guide to learning about the
            world&apos;s most thrilling journeys, from hidden gems to epic trails.
            Start your adventure here.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                </svg>
                Tutorial
              </span>
              <span className="text-sm">Feb 19th, 2024</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              <a href="#">
                How to Plan Your First Solo Backpacking Trip: A Step-by-Step
                Guide for Beginners
              </a>
            </h2>
            <p className="mb-5 font-light text-gray-500 ">
              Eco-Friendly Adventure Travel: How to Explore Sustainably and
              Leave No Trace
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="/images/placeholder.jpg"
                  alt="Jese Leos avatar"
                />
                <span className="font-medium ">Shashwat</span>
              </div>
              <div
                onClick={() => {
                  router.push("blog/1/introduction");
            }}
              >
                <a
                  href="#"
                  className="inline-flex items-center font-medium text-primary-600  hover:underline"
                >
                  Read more
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
            <div className="flex justify-between items-center mb-5 text-gray-500">
              <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                <svg
                  className="mr-1 w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                </svg>
                Article
              </span>
              <span className="text-sm">Coming Soon</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              <a href="#">
                Thrill-Seekers and Nature Lovers: Exploring the Top 5 Adventure
                Destinations of 2024
              </a>
            </h2>
            <p className="mb-5 font-light text-gray-500 ">
              Eco-Friendly Adventure Travel: How to Explore Sustainably and
              Leave No Trace
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  className="w-7 h-7 rounded-full"
                  src="/images/placeholder.jpg"
                  alt="Bonnie Green avatar"
                />
                <span className="font-medium">Abhay</span>
              </div>
              <a
                href="/coming-soon"
                className="inline-flex items-center font-medium text-primary-600 hover:underline"
              >
                Read more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;
