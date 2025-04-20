import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="flex flex-col py-15 gap-20  justify-center items-center bg-white dark:bg-gray-800">
        <div className="text-center max-w-6xl mx-10">
          <p className="my-3 text-sm tracking-widest text-indigo-600 uppercase">
            Fast & Reliable Delivery
          </p>
          <h1 className="my-3 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-gray-100">
            Your Cargo, Our Priority
          </h1>
          <div>
            <p className="max-w-2xl mx-auto my-2 text-base text-gray-600 md:leading-relaxed md:text-xl dark:text-gray-400">
              We offer fast, secure, and affordable cargo services worldwide. Manage all your shipments with ease and track your packages anytime, anywhere.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
            <Link
              className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-lg sm:w-auto bg-gray-900 hover:bg-gray-800 dark:shadow-gray-900"
              href="/tariffs"
            >
              View Tariffs
            </Link>
            <Link
              className="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-gray-900 transition-all bg-gray-100 rounded-md shadow-lg sm:w-auto hover:bg-gray-200 dark:bg-white dark:text-gray-800"
              href="/news"
            >
              Learn More about News
            </Link>
          </div>
        </div>

        <Image
        className="block mx-auto rounded-lg overflow-hidden hover:shadow-2xl transition duration-500"
        src={"/delivery.jpg"}
        width={1000}
        height={800}
        placeholder="blur"
        blurDataURL="/place-holder.svg"
        alt="Delivery logo"
      />      </div>

    </>

  );
}
