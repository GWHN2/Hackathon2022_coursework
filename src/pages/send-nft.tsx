import Head from "next/head";
import { useState } from "react";
import Button from "../frontend/components/common/Button";
import TextInput from "../frontend/components/common/TextInput";
import Titles from "../frontend/components/common/Titles";

function MyNFT() {

  const [principal, setPrincipal] = useState("");
  const [img, setImg] = useState("");

  const onSend = () => {

  }

  const onPrincipalChange = (e) => {
    setPrincipal(e);
  }

  return (
    <div className="">
      <Head>
        <title>Internet Computer</title>
      </Head>
      <main className="container flex flex-col items-center justify-center">
        <Titles title="Send NFT" />
        <div className="flex flex-wrap justify-center">
          <div className="w-6/12 sm:w-4/12 px-4">
            <img src={img} alt="..." className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
          </div>
        </div>

        <span className="mt-6">Owned by</span><span>nvoewhovhewivewivewbvie</span>


        <div className="block mt-6">
          <label htmlFor="firstName">First name</label>
          <TextInput placeholder="principal" onchange={onPrincipalChange} value={principal} />
        </div>
        <Button className="text-white" onClick={onSend}>Send</Button>
      </main>
    </div>
  );
}

export default MyNFT;
