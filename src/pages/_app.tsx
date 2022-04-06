import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/index.css";

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Cosmic</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default App;
