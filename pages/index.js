import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { DatePicker } from 'antd'
import 'antd/dist/antd.css'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const data = fetch('/api/test')
  }, [])
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <DatePicker
      />
      <Footer />
    </div>
  )
}
