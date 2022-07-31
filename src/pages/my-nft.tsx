import Head from "next/head";
import Button from "../frontend/components/common/Button";
import Titles from "../frontend/components/common/Titles";
import TableSection from "../frontend/components/CustomerList/TableSection";

function MyNFT() {
  return (
    <div className="">
      <Head>
        <title>Internet Computer</title>
      </Head>
      <main className="container flex flex-col items-center justify-center">
        <Titles title="My NFT" />
        <TableSection />
        <Button className="text-white">Register</Button>
      </main>
    </div>
  );
}

export default MyNFT;
