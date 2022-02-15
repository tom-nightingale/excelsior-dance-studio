import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image';

import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import FancyLink from '@/components/FancyLink'
import { fadeInUp, listTeachers, staggerTabs } from '@/helpers/transitions'
import Card from '@/components/Card'
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

      <LazyMotion features={domAnimation}>

          <Header global={global}/>

          <div className="pt-48 pb-16 md:pb-36 bg-gradient-to-b from-primary to-primary-dark md:pt-56">

            <Container>

                <div className="relative overflow-hidden">
                  <m.h1 className="text-center text-white" variants={fadeInUp} initial="initial" animate="enter" exit="exit">Our Teachers</m.h1>
                </div>

                <m.div variants={listTeachers} initial="initial" animate="enter" exit="exit" className="flex-wrap justify-center xs:flex">
                  {teachers.map((teacher, index) => {
                    return (
                      <Card 
                        key={index}
                        containerClasses="w-full xs:w-1/2 lg:w-1/3 p-4 xl:w-1/4 3xl:w-1/5"
                        cardClasses="shadow-lg p-4 rounded-md bg-white md:p-8"
                        image={teacher.profilePhoto}
                        name={teacher.name}
                        position={teacher.position} 
                        variants={staggerTabs}
                      />
                    )
                  })}
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