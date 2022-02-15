import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image';

import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import FancyLink from '@/components/FancyLink'
import { fadeInUp } from '@/helpers/transitions'
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
         
        
          
          <Header global={global} />

          <div className="py-48 bg-gradient-to-b from-primary to-primary-dark md:py-56">

            <Container>

                <div className="relative overflow-hidden">
                  <m.h1 className="text-center text-white" variants={fadeInUp} initial="initial" animate="enter" exit="exit">{page.title}</m.h1>
                </div>

                <m.div className="max-w-2xl mx-auto mb-4 text-center text-white content" variants={fadeInUp} initial="initial" animate="enter" exit="exit">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet pulvinar blandit. Duis et accumsan ante. Fusce blandit magna sed felis pretium, nec lobortis massa tincidunt. Nulla felis ante, vehicula vitae nibh id, vestibulum suscipit odio. Sed elementum consequat augue, eu gravida quam mollis ac. Aliquam lobortis ut felis a rhoncus. Donec sed metus a nisl lobortis auctor vel ac mi. Integer quis eleifend nisi. Mauris efficitur arcu ut arcu convallis dignissim. Cras in viverra eros, quis lacinia magna. Suspendisse vehicula dignissim interdum.</p>

                  <p>Maecenas sed faucibus nibh. Donec in porttitor quam, sit amet suscipit sem. Ut id sagittis mi. Fusce in felis et tellus rhoncus tristique. Quisque justo ipsum, posuere sed cursus sodales, mollis ac dui. Nam venenatis consectetur justo ac facilisis. Praesent lacinia ante sit amet mi molestie commodo. Integer at dolor vel elit efficitur vulputate. In condimentum sit amet dui in sodales. Donec interdum condimentum nisi, ac lobortis nulla.</p>
                </m.div>              
            
            </Container>

          </div>

          <Footer global={global} />

        
                
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