import { useState } from 'react';
import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image';

import { SRLWrapper } from "simple-react-lightbox";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
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

      <Header global={global}/>
      
      <LazyMotion features={domAnimation}>

        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          <div className="py-48 bg-gradient-to-b from-primary to-primary-dark md:py-56">

            <Container>

                <h1 className="text-center text-white">{page.title}</h1>

                 <Tabs>

                  <TabList className="flex flex-wrap justify-center mb-8 text-lg font-bold text-white uppercase">
                    <Tab className="px-5 py-3 mx-4 cursor-pointer btn btn--outline hover:border-white">Images</Tab>
                    <Tab className="px-5 py-3 mx-4 cursor-pointer btn btn--outline hover:border-white">Videos</Tab>    
                  </TabList>

                  <TabPanel>
                    
                    <SRLWrapper>

                      <div className="flex flex-wrap justify-center mx-auto max-w-screen-2xl">

                          <div className="w-1/2 p-2 sm:w-1/3 md:w-1/4">
                            <a href="https://placedog.net/500">
                              <img className="object-cover w-full" src="https://placedog.net/500" alt="" />
                            </a>
                          </div>

                          <div className="w-1/2 p-2 sm:w-1/3 md:w-1/4">
                            <a href="https://placedog.net/500">
                              <img className="object-cover w-full" src="https://placedog.net/500" alt="" />
                            </a>
                          </div>

                          <div className="w-1/2 p-2 sm:w-1/3 md:w-1/4">
                            <a href="https://placedog.net/500">
                              <img className="object-cover w-full" src="https://placedog.net/500" alt="" />
                            </a>
                          </div>

                          <div className="w-1/2 p-2 sm:w-1/3 md:w-1/4">
                            <a href="https://placedog.net/500">
                              <img className="object-cover w-full" src="https://placedog.net/500" alt="" />
                            </a>
                          </div>

                          <div className="w-1/2 p-2 sm:w-1/3 md:w-1/4">
                            <a href="https://placedog.net/500">
                              <img className="object-cover w-full" src="https://placedog.net/500" alt="" />
                            </a>
                          </div>

                          <div className="w-1/2 p-2 sm:w-1/3 md:w-1/4">
                            <a href="https://placedog.net/500">
                              <img className="object-cover w-full" src="https://placedog.net/500" alt="" />
                            </a>
                          </div>

                          <div className="w-1/2 p-2 sm:w-1/3 md:w-1/4">
                            <a href="https://placedog.net/500">
                              <img className="object-cover w-full" src="https://placedog.net/500" alt="" />
                            </a>
                          </div>
                        
                      </div>              
                  
                    </SRLWrapper>

                  </TabPanel>

                  <TabPanel>

                    <div className="flex flex-wrap justify-center mx-auto max-w-screen-2xl">

                      <div className="w-1/2 p-2 sm:w-1/3 md:w-1/4">
                        <a href="https://www.youtube.com/watch?v=lmMU2RDmH-Y">
                          <img className="object-cover w-full" src="https://placedog.net/500" alt="" />
                        </a>
                      </div>                          
                      
                    </div>

                  </TabPanel>
                </Tabs>
                
            </Container>

          </div>

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
    facebookUrl
  },
  "page": *[_type == "gallery"][0] {
    title,
    contentHeading,
    content,
    seo {
      ...,
      shareGraphic {
        asset->
      }
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