import sanity from "@/lib/sanity"
import Image from 'next/image'

import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import FancyLink from '@/components/FancyLink'
import ContactForm from '@/components/ContactForm'
import { fade, fadeInUp, listTabs, staggerTabs } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Page({ data:{global, page} }) {

  const galleryImages = [];
  page.images.forEach((image) => {
    galleryImages.push(image.asset.url);
  });

  const videosArray = [];       
  page.videos.forEach((video) => {
    videosArray.push(video.url);
  })

  const [visible, isVisible] = useState(false);
  const [slide, slideNumber] = useState(1);

  const showSlide = slide => {
    isVisible(!visible)
    slideNumber(slide);
  }

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

          <Header global={global}/>
      
          <div className="py-48 bg-gradient-to-b from-primary to-primary-dark md:py-56">

            <Container>

                <div className="relative overflow-hidden">
                  <m.h1 className="text-center text-white" variants={fadeInUp} initial="initial" animate="enter" exit="exit">{page.title}</m.h1>
                </div>

                 <Tabs>

                  <TabList className="flex flex-wrap justify-center mb-8 text-lg font-black text-white uppercase">
                    <m.div variants={listTabs} initial="initial" animate="enter" exit="exit" className="flex flex-wrap justify-center max-w-screen-xl mx-auto text-lg font-black text-white uppercase">
                      <Tab className="p-2">
                        <m.div variants={staggerTabs}>
                            <button className="block w-full py-3 text-sm text-center cursor-pointer mx-3px-5 sm:text-lg btn btn--outline hover:border-white">Images</button>
                        </m.div>
                      </Tab>

                      <Tab className="p-2">
                        <m.div variants={staggerTabs}>
                            <button className="block w-full py-3 text-sm text-center cursor-pointer mx-3px-5 sm:text-lg btn btn--outline hover:border-white">Videos</button>
                        </m.div>
                      </Tab>
                    </m.div>
                  </TabList>

                  <TabPanel>

                      <m.div variants={fadeInUp} initial="initial" animate="enter" exit="exit" className="flex flex-wrap justify-center mx-auto max-w-screen-2xl">

                        {page.images.map((item, index) => {                          
                          return(
                            <div key={index} className="w-1/2 p-2 sm:w-1/3 md:w-1/4">
                              <a className="relative block h-40 cursor-pointer md:h-72" onClick={() => { showSlide(index + 1) } }>                                
                                <Image
                                  src={item.asset.url}
                                  alt="Excelsior Studios"
                                  layout="fill"
                                  objectFit="cover"
                                />
                              </a>
                            </div>
                          )
                        })}

                        <FsLightbox
                            toggler={visible}
                            slide={slide}
                            sources={galleryImages}
                            type="image"
                        />
                        
                      </m.div>             

                  </TabPanel>

                  <TabPanel>

                    <div className="flex flex-wrap justify-center mx-auto max-w-screen-2xl">

                        {page.videos.map((item, index) => {                                             
                          const posterImage = item.url.replace('https://youtu.be/', '');
                          return(
                            <div key={index} className="w-1/2 p-2 sm:w-1/3 md:w-1/4">
                              <a className="relative block w-full h-40 overflow-hidden cursor-pointer md:h-72 group" onClick={() => { showSlide(index + 1) } }>
                                <Image
                                  src={`https://img.youtube.com/vi/${posterImage}/0.jpg`}
                                  alt="Excelsior Studios"
                                  layout="fill"
                                  objectFit="cover"
                                />
                                <span className="absolute bottom-[-100%] transform group-hover:bottom-0 transition-all bg-black/70 p-3 text-sm flex item-center justify-center duration-300 left-0 w-full font-bold text-center text-white">{item.title}</span>
                              </a>
                            </div>
                          )
                        })}

                        <FsLightbox
                            toggler={visible}
                            slide={slide}
                            sources={videosArray}
                            type="youtube"
                        />                      
                      
                    </div>

                  </TabPanel>
                </Tabs>
                
            </Container>

          </div>

          <div className="bg-primary">
            <Container>
              <div className="flex flex-wrap w-full">
                
                <div className="flex flex-col items-center w-full p-8 text-white xl:p-20 lg:w-1/2">
                  <img className="block w-72" src="images/unity.jpg" alt="Unity logo" />
                  <p className="max-w-screen-md py-8 mx-auto text-center lg:py-12">Unity is our competitive freestyle dance school that operates from various venues across Nottinghamshire. Click below and head to our Unity Page to find out more.</p>
                  <FancyLink destination="/unity" a11yText="Go to Unity page" label="Learn more" extraClasses="inline-block mx-auto btn btn--outline mx-auto md:mx-4" />
                </div>

                <div className="w-full p-8 text-center text-white lg:w-1/2 xl:p-20">
                  <h2>Get in touch</h2>
                  <p className="max-w-screen-sm py-4 mx-auto mb-8">If you have any questions then why not drop us a message below and a member of the team will be in touch as soon as possible</p>
                  <ContactForm />
                </div>
                
              </div>
            </Container>
          </div>

          <div className="py-8 text-xl font-black tracking-wider text-center text-white uppercase 2xl:leading-relaxed lg:text-2xl xl:text-3xl bg-gradient-to-r from-primary via-primary-dark to-primary md:py-p-12 lg:py-20">
            <Container>
              <p>Give us a call today to book or to find out more</p>
              <a href={`tel:${global.phoneNumber}`} className="inline-block transition duration-500 text-primary-light hover:text-white">{global.phoneNumber}</a>
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
  "page": *[_type == "gallery"][0] {
    title,
    contentHeading,
    images[] {
      asset ->
    },
    videos,
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