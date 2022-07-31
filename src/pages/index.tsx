import Head from "next/head";
import Image from "next/image";
import { GreetingSection } from "../frontend/components/GreetingSection";
import logo from "../public/images/logo.png";
function HomePage() {
  return (
    <div className="">
      <Head>
        <title>Internet Computer App</title>
      </Head>
      <main className="container flex flex-col items-center justify-center">
        <div className="relative h-40 w-72 lg:w-96">
          <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
