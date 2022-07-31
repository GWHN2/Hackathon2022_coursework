import Head from "next/head";
import React from "react";
import Titles from "../frontend/components/common/Titles";
import UploadingFilesToIPFS from "../frontend/components/MyNFT/UploadingFilesToIPFS";

const CreateNFT = () => {
  return (
    <div className="">
      <Head>
        <title>Internet Computer</title>
      </Head>
      <main className="container flex flex-col items-center justify-center">
        <Titles title="Create new Item" />
        <UploadingFilesToIPFS />
      </main>
    </div>
  );
};

export default CreateNFT;
