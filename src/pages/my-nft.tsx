import Head from "next/head";
import Button from "../frontend/components/common/Button";
import Titles from "../frontend/components/common/Titles";

function MyNFT() {

  const onTransfer = () => {

  }

  const onCreate = () => {

  }

  return (
    <div className="">
      <Head>
        <title>Internet Computer</title>
      </Head>
      <main className="container flex flex-col items-center justify-center">
        <Titles title="My NFT" />
        <div className="flex flex-wrap justify-center">
          <div className="w-6/12 sm:w-4/12 px-4">
            <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg" alt="..." className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
          </div>
          <div className="w-6/12 sm:w-4/12 px-4">
            <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg" alt="..." className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
          </div>
          <div className="w-6/12 sm:w-4/12 px-4">
            <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg" alt="..." className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
          </div>
        </div>

        <span className="mt-6">Owned by</span><span>nvoewhovhewivewivewbvie</span>
        <Button className="text-white" onClick={onTransfer}>Transfer</Button>
        <Button className="text-white" onClick={onCreate}>Create</Button>
      </main>
    </div>
  );
}

export default MyNFT;
