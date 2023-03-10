import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import Banner from '@/components/banner';
import NavBar from '@/components/navbar';
import Card from '@/components/card/card';
import SectionCard from '@/components/card/section-card'

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix-And4Web</title>
        <meta name="description" content="Netflix clone app created by and4web. Visit the official website to have a look over other full stack projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       {/* Navbar */}
      <NavBar username="anand@gmail.com"/>     

      {/* Banner */}
      <Banner title="Movie title" subtitle="very ordinary subtitle" imgUrl="/static/banner.jpeg"/>

      {/* Cards */}
      <SectionCard title="section card"/>
      {/* <Card imgUrl="/static/banner.jpeg" size="large"/>
      <Card imgUrl="/static/banner.jpeg" size="medium"/>
      <Card imgUrl="/static/banner.jpeg" size="small"/> */}
    </>
  )
}
