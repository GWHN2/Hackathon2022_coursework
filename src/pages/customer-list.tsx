import Head from "next/head";
import Image from "next/image";
import Button from "../frontend/components/common/Button";
import Title from "../frontend/components/common/title";
import Table from "../frontend/components/CustomerList/Table";
import TableSection from "../frontend/components/CustomerList/TableSection";
import { GreetingSection } from "../frontend/components/GreetingSection";
import logo from "../public/images/logo.png";
function CustomerList() {
  return (
    <div className="">
      <Head>
        <title>Internet Computer</title>
      </Head>
      <main className="container flex flex-col items-center justify-center">
        <Title title="Customer List" />
        <TableSection />
        <Button className="text-white">Register</Button>
      </main>
    </div>
  );
}

export default CustomerList;
