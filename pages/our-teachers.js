import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image';

import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import Card from '@/components/card'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Page({ data:{global, home, teachers} }) {

  return (
    <Layout>
      
      <NextSeo
        title={home.seo?.metaTitle ? home.seo.metaTitle : home.title}
        description={home.seo?.metaDesc ? home.seo.metaDesc : null}
        openGraph={{
          description: home.seo?.metaDesc ? home.seo.metaDesc : null,
          images: [
            {
              url: home.seo?.shareGraphic?.asset.url ?? null,
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
          className=""
        >
          <div className="pt-48 pb-16 md:pb-36 bg-gradient-to-b from-primary to-primary-dark md:pt-56">

            <Container>

                <h1 className="text-center text-white">Our Teachers</h1>

                <div className="flex-wrap justify-center xs:flex">
                  {teachers.map((teacher, index) => {
                    return (
                      <Card 
                        key={index}
                        containerClasses="w-full xs:w-1/2 md:w-1/3 p-4 xl:w-1/4 3xl:w-1/5"
                        cardClasses="shadow-lg p-4 rounded-md bg-white md:p-8"
                        image={teacher.profilePhoto}
                        name={teacher.name}
                        position={teacher.position} 
                      />
                    )
                  })}
                </div>              
            
            </Container>

          </div>

        </m.div>

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
    facebookUrl
  },
  "home": *[_type == "home"][0] {
    heroImages[] {
      asset ->
    },
    heroSubHeading,
    heroHeading,
    aboutContentHeading,
    aboutContent,
    inspirationalQuote,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "teachers": *[_type == "teacher"] | order(name asc) {
    name,
    position,
    profilePhoto {
      asset->
    }
  },
}`

export async function getStaticProps() {

  const data = await sanity.fetch(query);

  return {
    props: {
      data
    }
  }
}