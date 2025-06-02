import Image from "next/image";

export default function Home() {
  return (
  <main className="min-h-dvh bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover">
 <section className="min-h-dvh bg-black/70 flex items-center justify-center">
<div className="lg:w-3/4 space-y-10 max-md:p-3">
  <h1 className="text-white font-extrabold text-center uppercase text-2xl lg:text-5xl md:text-3xl ">Welcome to Connecthive</h1>
  <p className="text-gray-100 lg:text-xl text-center md:text-base"> Your one stop shop to connect with professionals all around the globe.Connect with like minded individuals and grows together.Your ultimate gateway to a thriving global network of professional and artisians alike.</p>
    <div className="flex items-center md:gap-10 gap-5 justify-center max-md:flex-col ">
      <button className="border max-md:w-full text-white border-white px-10 py-2 lg:text-lg text-base hover:bg-blue-600 hover:border-blue-600">
        Connect Now
      </button>
       <button className="border max-md:w-full  text-white border-white px-10 py-2 lg:text-lg text-base ">
      Learn More
      </button>
    </div>
</div>
 </section>
  </main>
  );
}
