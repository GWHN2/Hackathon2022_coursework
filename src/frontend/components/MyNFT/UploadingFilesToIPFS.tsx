import React, { useState } from "react";
import { create } from "ipfs-http-client";
import TextInput from "../common/TextInput";
import Button from "../common/Button";

const options = {
  url: "https://ipfs.infura.io:5001/api/v0",
};
const client = create(options);

const UploadingFilesToIPFS = () => {
  const [fileUrl, updateFileUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

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

  const onSubmit = async () => {
    try {
    } catch (error) {}
  };

  return (
    <div className="">
      <input
        type="file"
        onChange={(e) => {
          onChange(e);
        }}
      />
      {fileUrl && <img src={fileUrl} width="300px" />}
      <div className="flex flex-col my-10 space-y-3">
        <TextInput value={name} onchange={setName} placeholder="Name" />
        <TextInput
          value={description}
          onchange={setDescription}
          placeholder="Description"
        />
        <Button onClick={onSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default UploadingFilesToIPFS;
