import dynamic from "next/dynamic";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const RemoteAppContainer = dynamic(() => import("remoteApp/App"), {
  loading: () => <>loading...</>,
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <RemoteAppContainer />
    </div>
  );
};

export default Home;
