import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

import { getVideos, getPopularVideos } from "../lib/videos";

import Banner from "@/components/banner";
import NavBar from "@/components/navbar";
import Card from "@/components/card/card";
import SectionCard from "@/components/card/section-card";

export async function getServerSideProps(){
  const disneyVideos = await getVideos("disney trailers");
  const popularVideos = await getPopularVideos();
  const premiumVideos = await getVideos("premium");
  const productivityVideos = await getVideos("productivity");
  const adventureVideos = await getVideos("adventure");

  // console.log("<===disneyVideos most recent:===> ", disneyVideos);

  return {
    props: {disneyVideos, popularVideos, premiumVideos, productivityVideos, adventureVideos}
  }
}

export default function Home(props) {
  const {disneyVideos, popularVideos, premiumVideos, adventureVideos, productivityVideos} = props;  

  return (
    <>
      <Head>
        <title>Netflix-And4Web</title>
        <meta
          name="description"
          content="Netflix clone app created by and4web. Visit the official website to have a look over other full stack projects"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className={styles.main}>
     {/* Navbar */}
     <NavBar username="anand@gmail.com" />

{/* Banner */}
<Banner
  title="Movie title"
  subtitle="very ordinary subtitle"
  imgUrl="/static/banner.jpeg"
/>

{/* Cards */}
<div className={styles.sectionWrapper}>
  <SectionCard title="Disney" videos={disneyVideos} size="large"/>
  <SectionCard title="Most popular" videos={popularVideos} size="small"/>
  <SectionCard title="Premium" videos={premiumVideos} size="medium"/>
  <SectionCard title="Productivity" videos={productivityVideos} size="large"/>
  <SectionCard title="Adventure" videos={adventureVideos} size="small"/>
</div>

</div>
     </>
  );
}
