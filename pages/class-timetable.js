import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiClock } from "react-icons/fi";

import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Page({ data:{global, home, classes} }) {
  
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

          <div className="py-48 bg-gradient-to-b from-primary to-primary-dark md:py-56">

            <Container>

                <h1 className="text-center text-white">Class Timetable</h1>

                 <Tabs>

                  <TabList className="flex flex-wrap justify-center max-w-screen-xl mx-auto mb-16 text-lg font-black text-white uppercase">
                    <Tab className="w-1/2 p-2 sm:w-1/3 md:w-1/4 lg:w-1/6"><button className="block w-full px-5 py-3 text-sm text-center cursor-pointer sm:text-lg btn btn--outline hover:border-white">Monday</button></Tab>
                    <Tab className="w-1/2 p-2 sm:w-1/3 md:w-1/4 lg:w-1/6"><button className="block w-full px-5 py-3 text-sm text-center cursor-pointer sm:text-lg btn btn--outline hover:border-white">Tuesday</button></Tab>    
                    <Tab className="w-1/2 p-2 sm:w-1/3 md:w-1/4 lg:w-1/6"><button className="block w-full px-5 py-3 text-sm text-center cursor-pointer sm:text-lg btn btn--outline hover:border-white">Wednesday</button></Tab>    
                    <Tab className="w-1/2 p-2 sm:w-1/3 md:w-1/4 lg:w-1/6"><button className="block w-full px-5 py-3 text-sm text-center cursor-pointer sm:text-lg btn btn--outline hover:border-white">Thursday</button></Tab>    
                    <Tab className="w-1/2 p-2 sm:w-1/3 md:w-1/4 lg:w-1/6"><button className="block w-full px-5 py-3 text-sm text-center cursor-pointer sm:text-lg btn btn--outline hover:border-white">Friday</button></Tab>    
                    <Tab className="w-1/2 p-2 sm:w-1/3 md:w-1/4 lg:w-1/6"><button className="block w-full px-5 py-3 text-sm text-center cursor-pointer sm:text-lg btn btn--outline hover:border-white">Saturday</button></Tab>    
                  </TabList>

                  <TabPanel className="max-w-screen-lg mx-auto text-primary">
                    
                    <div className="p-8 text-sm bg-white rounded-md lg:p-16">

                      <h2 className="mb-4">Monday</h2>

                      <div className="flex flex-wrap items-start py-4 border-b border-gray-200 lg:py-4">
                        <div className="flex items-center w-2/5 md:w-1/5"><FiClock className="hidden mr-1 sm:block" /> 16:45 - 17:20</div>
                        <div className="w-2/5 md:w-3/5">
                          <p className="font-black tracking-wider uppercase">Rock 'n' Roll</p>
                          <p className="text-xs">Description goes here</p>
                        </div>
                        <div className="w-1/5 md:w-1/5">£3.50</div>
                      </div>

                      <div className="flex flex-wrap items-start py-4 border-b border-gray-200 lg:py-4">
                        <div className="flex items-center w-2/5 md:w-1/5"><FiClock className="hidden mr-1 sm:block" /> 17:20 - 18:00</div>
                         <div className="w-2/5 md:w-3/5">
                          <p className="font-black tracking-wider uppercase">Junior Singing</p>
                          <p className="text-xs">Description goes here</p>
                        </div>
                        <div className="w-1/5">£5.00*</div>
                      </div>

                      <div className="flex flex-wrap items-start py-4 border-b border-gray-200 lg:py-4">
                        <div className="flex items-center w-2/5 md:w-1/5"><FiClock className="hidden mr-1 sm:block" /> 17:20 - 18:00</div>
                         <div className="w-2/5 md:w-3/5">
                          <p className="font-black tracking-wider uppercase">Senior Latin</p>
                          <p className="text-xs">Description goes here</p>
                        </div>
                        <div className="w-1/5">£4.00</div>
                      </div>

                      <div className="flex flex-wrap items-start py-4 border-b border-gray-200 lg:py-4">
                        <div className="flex items-center w-2/5 md:w-1/5"><FiClock className="hidden mr-1 sm:block" /> 18:00 - 18:40</div>
                         <div className="w-2/5 md:w-3/5">
                          <p className="font-black tracking-wider uppercase">Musical Theatre</p>
                          <p className="text-xs">Description goes here</p>
                        </div>
                        <div className="w-1/5">£3.50*</div>
                      </div>

                      <div className="flex flex-wrap items-start py-4 border-b border-gray-200 lg:py-4">
                        <div className="flex items-center w-2/5 md:w-1/5"><FiClock className="hidden mr-1 sm:block" /> 18:40 - 19:20</div>
                         <div className="w-2/5 md:w-3/5">
                          <p className="font-black tracking-wider uppercase">Junior Latin</p>
                          <p className="text-xs">Description goes here</p>
                        </div>
                        <div className="w-1/5">£4.00</div>
                      </div>

                      <div className="flex flex-wrap items-start py-4 border-b border-gray-200 lg:py-4">
                        <div className="flex items-center w-2/5 md:w-1/5"><FiClock className="hidden mr-1 sm:block" /> 19:00 - 19:40</div>
                         <div className="w-2/5 md:w-3/5">
                          <p className="font-black tracking-wider uppercase">Senior Singing</p>
                          <p className="text-xs">Description goes here</p>
                        </div>
                        <div className="w-1/5">£5.00*</div>
                      </div>

                      <p className="p-4 mt-8 text-xs font-bold tracking-wider text-center text-white uppercase rounded-md bg-gradient-to-r from-primary-dark via-primary to-primary-dark">* Supersaver! Musical Theatre and Singing for £7!</p>

                    </div>
                  </TabPanel>
                  
                  <TabPanel className="mx-auto max-w-screen-2xl">
                    Tuesday
                  </TabPanel>

                  <TabPanel className="mx-auto max-w-screen-2xl">
                    Wednesday
                  </TabPanel>

                  <TabPanel className="mx-auto max-w-screen-2xl">
                    Thursday
                  </TabPanel>

                  <TabPanel className="mx-auto max-w-screen-2xl">
                    Friday
                  </TabPanel>

                  <TabPanel className="mx-auto max-w-screen-2xl">
                    Saturday
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
  "classes": *[_type == "class"] {
    className,
    contentHeading,
    content,
    classImage {
      asset->
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