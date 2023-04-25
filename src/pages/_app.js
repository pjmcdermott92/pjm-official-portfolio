import RootLayout from '@/components/layouts/RootLayout';
import '@/styles/root.scss';

export default function App({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
