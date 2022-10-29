import type { NextPage } from "next";
import Head from "next/head";
import App from "../components/App";
import Auth from "../components/Auth";
import { useAuth } from "../context/AuthContext";

const Home: NextPage = () => {
  const { user } = useAuth();

  return (
    <div>
      <Head>
        <title>Ticksy</title>
        <meta name='description' content='Awesome to-do app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {user ? <App /> : <Auth />}
    </div>
  );
};

export default Home;
