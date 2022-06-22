import "../styles/globals.css"
import type { AppProps } from "next/app"
import React from "react"
import { LoadingScreen } from "../components/loading-screen"

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setLoading(true), 1500)
  })

  return (
    <>
      {!loading ? (
        <React.Fragment>
          <LoadingScreen />
        </React.Fragment>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}

export default MyApp
