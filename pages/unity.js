import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image';

import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import FancyLink from '@/components/FancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Page({ data:{global, page} }) {

  return (
    <Layout>
      
      <NextSeo
        title={page.seo?.metaTitle ? page.seo.metaTitle : page.title}
        description={page.seo?.metaDesc ? page.seo.metaDesc : null}
        openGraph={{
          description: page.seo?.metaDesc ? page.seo.metaDesc : null,
          images: [
            {
              url: page.seo?.shareGraphic?.asset.url ?? null,
              width: 1200,
              height: 630
            },
          ]
        }}
      />

      <LazyMotion features={domAnimation}>
         
        <m.div initial="initial" animate="enter" exit="exit" variants={fade}>
          
          <Header global={global} />

          <div className="py-48 bg-gradient-to-b from-primary to-primary-dark md:py-56">

            <Container>

                <h1 className="text-center text-white">{page.title}</h1>

                <div className="flex-wrap justify-center xs:flex">
                  Unity
                </div>              
            
            </Container>

          </div>

          <Footer global={global} />

        </m.div>
                
      </LazyMotion>

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
  "page": *[_type == "unity"][0] {
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