import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import ContactForm from '@/components/ContactForm'
import Carousel from '@/components/Carousel'
import FancyLink from '@/components/FancyLink'
import { fade, fadeInUp, heroSubheading, heroHeading, heroButton} from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function Home({ data:{global, home, teachers, classes, gallery} }) {

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
         
        <Header global={global} isHome />

        <div className="relative bg-primary-dark h-screen sm:max-h-[1000px] landscape:min-h-[450px]">

          <m.div className="absolute inset-0 z-0" variants={fade} initial="initial" animate="enter" exit="exit">
            {home.heroImages.map((image, index) => {
              return(
                <Image key={index} objectFit="cover" objectPosition="center" layout="fill" alt="Excelsior Dance Studio" className="w-full h-72" src={image.asset.url} /> 
              )
            })}
          </m.div>
          
          <div className="relative z-[1] h-full text-white flex flex-col items-center justify-center px-8 landscape:py-40">
            
            <div className="text-[4vw] md:text-[2vw] font-light text-center uppercase">

              <p className="relative overflow-hidden">
                <m.span className="block" variants={heroSubheading} initial="initial" animate="enter" exit="exit">{home.heroSubHeading}</m.span>
              </p>
              <p className="relative overflow-hidden">
                <m.span className="block text-[8vw] md:text-[4vw] font-black leading-snug" variants={heroHeading} initial="initial" animate="enter" exit="exit">{home.heroHeading}</m.span>
              </p>
            </div>

            <m.div className="flex flex-col items-center justify-center w-full mt-8 md:flex-row md:flex-wrap" variants={heroButton} initial="initial" animate="enter" exit="exit">
              <FancyLink destination="/classes" a11yText="View class information" label="Our Classes" extraClasses="btn mx-auto md:mx-4 mb-4 md:mb-0 text-primary" />
              <FancyLink destination="/our-teachers" a11yText="View teacher profiles information" label="Our Teachers" extraClasses="btn btn--outline mx-auto md:mx-4" />
            </m.div>
            
          </div>
          
        </div>
        
        <div className="bg-gradient-to-r from-primary via-primary-dark to-primary">

            <m.article variants={fade} initial="initial" animate="enter" exit="exit" className="p-8 py-16 text-center text-white md:p-12 lg:p-20">

              <h1>{home.aboutContentHeading}</h1>

              <div className="max-w-2xl mx-auto mb-4 content">
                <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.aboutContent} />
              </div>

              <FancyLink destination="/class-timetable" a11yText="View class information" label="Our Classes" extraClasses="btn mx-auto mt-8 md:mx-4 mb-4 md:mb-0 text-primary" />

            </m.article>
          
        </div>

        <div className="py-16 text-xl font-black tracking-wider text-center text-white uppercase 2xl:leading-relaxed lg:text-2xl xl:text-3xl bg-primary md:py-16 lg:py-20">
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

        <div className="relative py-16 bg-primary-dark">
            <Image width={home.pageImage.asset.metadata.dimensions.width} height={home.pageImage.asset.metadata.dimensions.height} alt="Excelsior Dance Studio" className="mx-auto" src={home.pageImage.asset.url} /> 
            
        </div>
        
        <div className="relative bg-gradient-to-b from-primary to-primary-dark">

          <div className="relative w-full mx-auto max-w-screen-3xl">

            <div className="flex flex-wrap w-10/12 p-4 bg-white xl:p-8 md:w-11/12">
              {classes.map((item, index) => {
                return (
                  <div className="w-full p-4 sm:w-1/2 md:w-1/2 xl:w-1/5" key={index}>
                    <div className="relative flex flex-wrap w-full min-h-[200px] bg-primary-dark sm:min-h-[250px] overflow-hidden">
                      {/* <img className="absolute inset-0 z-0 object-cover object-center w-full h-full opacity-75" src={item.classImage.asset.url} alt={item.title} /> */}
                      <Image layout="fill" objectFit="cover" objectPosition="center" alt="Excelsior Dance Studio" className="relative z-0 w-full h-full opacity-75" src={item.classImage.asset.url} /> 
                      <p className="absolute z-10 flex items-center justify-center w-full h-full m-auto text-lg font-black tracking-wider text-white uppercase filter drop-shadow-lg">{item.title}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="absolute top-0 right-0 flex items-center w-2/12 h-full pt-10 text-lg font-black tracking-wider text-white uppercase xl:pt-0 xl:justify-center md:w-1/12 md:text-xl lg:text-4xl vertical-rl">
              <span className="sticky top-10 xl:relative xl:top-0">Our classes</span>
            </div>              
        
          </div>

        </div>

        <div className="bg-gradient-to-r from-primary via-primary-dark to-primary">

          <Container>

            <div className="py-16 text-center text-white md:p-12 lg:p-20">

              <h2>Excelsior Gallery</h2>

              <Carousel items={gallery.images} />

              <div className="flex flex-wrap items-center justify-center mt-8">
                <FancyLink destination="/gallery" a11yText="View photo gallery" label="View Photo Gallery" extraClasses="btn mx-auto md:mx-4 mb-4 md:mb-0 text-primary" />
                <FancyLink destination="/gallery" a11yText="View video gallery" label="View Video Gallery" extraClasses="btn btn--outline mx-auto md:mx-4" />
              </div>

            </div>

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
  "home": *[_type == "home"][0] {
    heroImages[] {
      asset ->
    },
    heroSubHeading,
    heroHeading,
    aboutContentHeading,
    aboutContent,
    inspirationalQuote,
    inspirationalQuoteHighlight,
    pageImage {
      asset->
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  },
  "teachers": *[_type == "teacher"] | order(name asc){
    name,
    position,
    profilePhoto {
      asset->
    }
  },
  "classes": *[_type == "class"] {
    title,
    contentHeading,
    content,
    classImage {
      asset->
    },
    slug
  },
  "gallery": *[_type == "gallery"][0] {
    images[0...10] {
      asset ->
    },
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