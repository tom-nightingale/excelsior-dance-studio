import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image';

import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Home({ data:{global, contact} }) {

  // const heroBackgroundProps = useNextSanityImage(
	// 	sanity,
	// 	home.heroBackgroundImage
	// );

  return (
    <Layout>
      
      <NextSeo
        title={contact.seo?.metaTitle ? contact.seo.metaTitle : contact.title}
        description={contact.seo?.metaDesc ? contact.seo.metaDesc : null}
        openGraph={{
          description: contact.seo?.metaDesc ? contact.seo.metaDesc : null,
          images: [
            {
              url: contact.seo?.shareGraphic?.asset.url ?? null,
              width: 1200,
              height: 630
            },
          ]
        }}
      />

      <Header global={global}/>
      
      <LazyMotion features={domAnimation}>

        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >

            Contact details etc

        </m.div>
        
      </LazyMotion>

      <Footer global={global} />

    </Layout>
  )
}


const query = `{
  "global": *[_type == "global"][0] {
    address,
    phoneNumber,
    emailAddress,
    youtubeUrl,
    instagramUrl,
    facebookUrl,
  },
  "contact": *[_type == "contact"][0] {
    title,
    contentHeading,
    content,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

export async function getStaticProps() {

  const data = await sanity.fetch(query);

  return {
    props: {
      data
    }
  }
}