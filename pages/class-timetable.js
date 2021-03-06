import sanity from "@/lib/sanity"
import { useNextSanityImage } from 'next-sanity-image';

import dynamic from 'next/dynamic'
const Tabs = dynamic(import('react-tabs').then(mod => mod.Tabs), { ssr: false });
import { Tab, TabList, TabPanel } from 'react-tabs';
import { FiClock } from "react-icons/fi";

import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import FancyLink from '@/components/FancyLink'
import { fade, fadeInUp, heroHeading, listTabs, staggerTabs } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Page({ data:{global, home, timetable} }) {
  
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
                  <m.h1 className="text-center text-white" variants={fadeInUp} initial="initial" animate="enter" exit="exit">Class Timetable</m.h1>
                </div>

                 <Tabs>
                  
                    <TabList>
                      <m.div variants={listTabs} initial="initial" animate="enter" exit="exit" className="flex flex-wrap justify-center max-w-screen-xl mx-auto mb-16 text-lg font-black text-white uppercase">
                        {timetable.map((day, index) => {
                          return(
                            day.timetable && day.timetable.length > 0 && (
                                <Tab key={index} className="w-1/2 p-2 sm:w-1/3 md:w-1/4 xl:w-1/6">
                                  <m.div variants={staggerTabs}>
                                        <button className="block w-full px-5 py-3 text-sm text-center cursor-pointer sm:text-lg btn btn--outline hover:border-white">{day.title}</button>
                                  </m.div>
                                </Tab>
                            )
                          )                      
                        })}
                      </m.div>
                    </TabList>

                  {timetable.map((day, index) => {
                    return(
                      day.timetable && day.timetable.length > 0 && (
                        <TabPanel key={index} className="max-w-screen-lg mx-auto overflow-hidden text-primary" variants={fadeInUp} initial="initial" enter="enter" exit="exit">                    
                          <m.div variants={fade} initial="initial" animate="enter" exit="exit">
                            <div className="p-8 text-sm bg-white rounded-md lg:p-16" >
                              <div className="relative overflow-hidden leading-snug">
                                <m.h2 variants={fadeInUp} initial="initial" animate="enter" exit="exit">{day.title}</m.h2>
                              </div>
                                {day.timetable.map((item, index) => {
                                    return(
                                      <div key={index} className="flex flex-wrap items-start py-4 border-b border-gray-200 lg:py-4">
                                        <div className="flex items-center w-2/5 md:w-1/5"><FiClock className="hidden mr-1 sm:block" /> {item.startsAt} - {item.finishesAt}</div>
                                        <div className="w-2/5 md:w-3/5">
                                          <p className="font-black tracking-wider uppercase">{item.title}</p>
                                          {item.description &&
                                            <p className="text-xs">{item.description}</p>
                                          }
                                        </div>
                                        {item.price && 
                                          <div className="w-1/5 md:w-1/5">{item.price}</div>
                                        }
                                      </div>
                                    )
                                  })
                                }
                              <p className="p-4 mt-8 text-xs font-black tracking-wider text-center text-white uppercase rounded-md bg-gradient-to-r from-primary-dark via-primary to-primary-dark">Private lessons are available in 20 minute slots on request</p>                            
                            </div>
                          </m.div>
                        </TabPanel>
                      )
                    )
                  })}
                  

                </Tabs>
                
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
  "timetable": *[_type == "timetable"] | order(_createdAt asc) {
    title,
    timetable
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