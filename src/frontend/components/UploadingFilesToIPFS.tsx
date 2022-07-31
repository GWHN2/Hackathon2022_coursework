import React, { useState } from "react";
import { create } from "ipfs-http-client";

const options = {
  url: "https://ipfs.infura.io:5001/api/v0",
};
const client = create(options);

const UploadingFilesToIPFS = () => {
  const [fileUrl, updateFileUrl] = useState("");

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (e && e.target && e.target.files) {
        const file = e?.target?.files[0];
        const added = await client.add(file);
        const url = `https://ipfs.infura.io/ipfs/${added.path}`;
        updateFileUrl(url);
      }
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };
  console.log(fileUrl);

  return (
    <div className="">
      <h1>IPFS Example</h1>
      <input
        type="file"
        onChange={(e) => {
          onChange(e);
        }}
      />
      {fileUrl && <img src={fileUrl} width="600px" />}
    </div>
  );
};

export default UploadingFilesToIPFS;
