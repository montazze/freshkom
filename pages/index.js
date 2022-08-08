import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Freshkom!</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <Header title="Welcome to Freshkom Farm!" />
        <p className="description">
          You can create an order for our products by filling out the form below.
        </p>
        <iframe
          src="https://tally.so/embed/mRGVzp?hideTitle=1&transparentBackground=1"
          width="100%"
          height="900"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Freshkom">
        </iframe>
      </main>

      <Footer />
    </div>
  )
}
