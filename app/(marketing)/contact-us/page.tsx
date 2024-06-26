'use client';

const ContactUs = () => {
  return (
    <section className="bg-white overflow-x-hidden">
        <div className="container px-6 py-12 mx-4 md:mx-12">
            <div>
                <p className="font-medium text-rose-500 ">Contact us</p>

                <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">Get in touch</h1>

                <p className="mt-3 text-gray-500 ">Our friendly team is always here to help.</p>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-1 lg:grid-cols-2">
                <div>
                    <span className="inline-block p-3 text-rose-500 rounded-full bg-rose-100/80 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 className="mt-4 text-lg font-medium text-gray-800 ">Email</h2>
                    <p className="mt-2 text-gray-500 ">For inquiries, mail us at</p>
                    <p className="mt-2 text-rose-500 ">hello@adrenl.io</p>
                </div>

                <div>
                    <span className="inline-block p-3 text-rose-500 rounded-full bg-rose-100/80 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>

                    <h2 className="mt-4 text-lg font-medium text-gray-800 ">Office</h2>
                    <p className="mt-2 text-gray-500 "></p>
                    <p className="mt-2 text-rose-500 ">ZUBD Technologies Pvt. Ltd <br/>
                    G-904, Ramson Plaza 95, Sector 95, Gurgaon -122505, Haryana</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default ContactUs;