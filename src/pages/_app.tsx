import type { AppProps } from "next/app";
import "@/src/styles/globals.css";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const lenisRef = useRef<Lenis | null>(null);

	useEffect(() => {
		// Inicializa Lenis
		const lenis = new Lenis();
		lenisRef.current = lenis;

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
			lenisRef.current = null;
		};
	}, []);

	return <Component {...pageProps} />;
}

export default MyApp;
