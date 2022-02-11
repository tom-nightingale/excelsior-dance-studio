import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';
// import SimpleReactLightbox from 'simple-react-lightbox'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
    
      <DefaultSeo {...SEO} />
      {/* <SimpleReactLightbox> */}
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      {/* </SimpleReactLightbox> */}
    </>
  )
}