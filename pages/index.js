import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import Banner from '@/components/banner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix-And4Web</title>
        <meta name="description" content="Netflix clone app created by and4web. Visit the official website to have a look over other full stack projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Netflix</h1>

      {/* Navbar */}

      <Banner title="Movie title" subtitle="very oridinary subtitle" imgUrl="/static/banner.jpeg"/>

      {/* Cards */}
    </>
  )
}
