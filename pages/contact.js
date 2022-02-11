import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image';
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

import {FiMapPin, FiMail, FiPhone} from "react-icons/fi";

import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import Carousel from '@/components/Carousel'
import ContactForm from '@/components/ContactForm'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useAnimation } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Page({ data:{global, page, home, teachers} }) {

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

          <Header global={global}/>

          <div className="py-48 text-white bg-gradient-to-b from-primary to-primary-dark md:pt-56 md:pb-24">

            <div className="w-full max-w-screen-xl mx-auto">

              <div className="flex flex-wrap">

                <div className="w-full p-4 md:w-1/2">

                  <div className="py-6 content">

                    <h2 className="mb-4">Excelsior Dance Studio</h2>

                    <p className="flex items-center"><FiMapPin className="mr-1" /> {global.address}</p>

                    <p className="flex items-center"><FiPhone className="mr-1" /> <a className="no-underline" href={`tel:${global.phoneNumber}`}>{global.phoneNumber}</a></p>

                    <p className="flex items-center"><FiMail className="mr-1" /> <a className="no-underline" href={`mailto:${global.emailAddress}`}>{global.emailAddress}</a></p>


                  </div>


                </div>

                <div className="w-full p-4 md:w-1/2">
                  
                  <div className="px-2 py-6 content">
                    
                    <h2 className="mb-4">Contact us online</h2>

                    <p>If you have a question about any of our classes, or if you'd like to discuss the options available from Excelsior then feel free to use the contact form below.</p>

                    <p>One of the team will get back to you as soon as possible.</p>

                  </div>
                  
                  <ContactForm />
                  
                </div>

              </div>

            </div>

          </div>

          <div className="py-8 text-xl font-black tracking-wider text-center text-white uppercase 2xl:leading-relaxed lg:text-2xl xl:text-3xl bg-primary md:py-p-12 lg:py-20">
            <Container>
              <p>{home.inspirationalQuote} <span className="block text-primary-light">{home.inspirationalQuoteHighlight}</span></p>
            </Container>
          </div>
          
          <div className="relative overflow-hidden bg-gradient-to-b from-primary to-primary-dark">

            <div className="relative w-full mx-auto max-w-screen-3xl">
              
              <p className="absolute left-0 flex items-center justify-center w-2/12 h-full text-lg font-black tracking-wider text-center text-white uppercase transform rotate-180 -translate-y-1/2 md:w-1/12 md:text-xl lg:text-4xl top-1/2 vertical-rl">Our teachers</p>

              <div className="w-10/12 py-8 ml-auto bg-white md:w-11/12">
                <Carousel items={teachers} />
              </div>
              
            </div>
            
          </div>

          <div className="py-8 text-xl font-black tracking-wider text-center text-white uppercase 2xl:leading-relaxed lg:text-2xl xl:text-3xl bg-gradient-to-r from-primary via-primary-dark to-primary md:py-p-12 lg:py-20">
            <Container>
              <p>Give us a call today to book or to find out more</p>
              <a href={`tel:${global.phoneNumber}`} className="inline-block transition duration-500 text-primary-light hover:text-white">{global.phoneNumber}</a>
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
  "home": *[_type == "home"][0] {
    inspirationalQuote,
    inspirationalQuoteHighlight,
  },
  "teachers": *[_type == "teacher"] | order(name asc) {
    name,
    position,
    profilePhoto {
      asset->
    }
  },
  "page": *[_type == "contact"][0] {
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