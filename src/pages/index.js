import Head from 'next/head';
import HeroSection from '@/components/Homepage/HeroSection/HeroSection';
import FeaturedWorkSection from '@/components/Homepage/FeaturedWorkSection/FeaturedWorkSection';

export default function Home() {
    return (
        <>
            <Head>
                <title>Patrick McDermott - Full-Stack Developer</title>
                <meta
                    name='description'
                    content='Full-stack web developer, building websites and web app that deliver an exceptional user experience.'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main id='content'>
                <HeroSection />
				<FeaturedWorkSection />
            </main>
        </>
    );
}
