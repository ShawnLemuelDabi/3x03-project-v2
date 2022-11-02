import { Typography } from '@mui/material';
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Non Findable Technology</title>
        <meta name="description" content="Cheapest PC Parts Only" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
      Non Findable Technology
      </Typography>

    </div>
  )
}
