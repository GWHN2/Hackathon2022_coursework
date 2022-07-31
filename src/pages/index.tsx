import Head from "next/head";
import Image from "next/image";
import { GreetingSection } from "../frontend/components/GreetingSection";
import logo from "../public/images/logo.png";
function HomePage() {
  return (
    <div className="">
      <Head>
        <title>Internet Computer</title>
      </Head>
      <main className="container flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold">
          Next.js Internet Computer Starter Template!
        </h3>

        <div className="relative h-40 w-72 lg:w-96">
          <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
        </div>

        <GreetingSection />
      </main>
    </div>
  );
}

export default HomePage;
