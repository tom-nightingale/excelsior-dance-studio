import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image';

import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Home({ data:{global, home, teachers, classes} }) {

  

  // const heroBackgroundProps = useNextSanityImage(
	// 	sanity,
	// 	home.heroBackgroundImage
	// );

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
          className="mb-12 md:mb-16 xl:mb-24"
        >
          <div className="relative bg-primary h-screen xl:max-h-[1000px] landscape:min-h-[450px]">

            <div className="absolute inset-0 z-0">
              {home.heroImages.map((image, index) => {
                return(
                  <img key={index} className="object-cover object-center w-full h-full" src={image.asset.url} alt="Excelsior Dance Studio" />
                )
              })}
            </div>
            
            <div className="relative z-[1] h-full text-white flex flex-col items-center justify-center px-8 landscape:py-40">
              
              <p className="text-[4vw] md:text-[2vw] font-light text-center uppercase ">
                <span className="opacity-70">{home.heroSubHeading}</span>
                <span className="block text-[8vw] md:text-[4vw] font-black leading-snug">{home.heroHeading}</span>
              </p>

              <div className="flex flex-col items-center justify-center w-full mt-8 md:flex-row md:flex-wrap">
                <FancyLink destination="/class-timetable" a11yText="View class information" label="Our Classes" extraClasses="btn mx-auto md:mx-4 mb-4 md:mb-0" />
                <FancyLink destination="/our-teachers" a11yText="View teacher profiles information" label="Our Teachers" extraClasses="btn btn--outline mx-auto md:mx-4" />
              </div>
              
            </div>
            
          </div>
          
          <div className="bg-gradient-to-r from-primary via-primary-dark to-primary">

              <m.article variants={fade} className="p-8 text-center text-white md:p-12 lg:p-20">

                <h1>{home.aboutContentHeading}</h1>

                <div className="max-w-2xl mx-auto mb-4 content">
                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.aboutContent} />
                </div>

                <FancyLink destination="/class-timetable" a11yText="View class information" label="Our Classes" extraClasses="btn mx-auto mt-12 md:mx-4 mb-4 md:mb-0" />

              </m.article>            
            
          </div>

          <div className="py-8 text-xl font-black tracking-wider text-center text-white uppercase 2xl:leading-relaxed lg:text-2xl xl:text-3xl bg-primary md:py-p-12 lg:py-20">
            <Container>
              <p>{home.inspirationalQuote} <span className="block text-primary-light">{home.inspirationalQuoteHighlight}</span></p>
            </Container>
          </div>
          
          <div className="relative overflow-hidden bg-gradient-to-b from-primary to-primary-dark">

            <div className="relative w-full mx-auto max-w-screen-3xl">
              
              <p className="absolute left-0 flex items-center justify-center w-2/12 h-full text-lg font-black tracking-wider text-center text-white uppercase transform rotate-180 -translate-y-1/2 md:w-1/12 md:text-xl lg:text-4xl top-1/2 vertical-rl">Our teachers</p>

              <div className="flex w-10/12 py-8 ml-auto bg-white md:w-11/12">
                {teachers.map((teacher, index) => {
                  return (
                    <div className="p-8" key={index}>
                      <img className="mb-8" src={teacher.profilePhoto.asset.url} alt={teacher.name} />
                      <p className="text-lg font-black leading-snug tracking-wider uppercase">{teacher.name}</p>
                      <p>{teacher.position}</p>
                    </div>
                  )
                })}
              </div>
              
            </div>
            
          </div>

          <div className="bg-primary-dark">
              <img className="mx-auto" src={home.pageImage.asset.url} alt={home.title} />
          </div>
          
              
          <div className="relative overflow-hidden bg-white">

            <div className="relative w-full mx-auto max-w-screen-3xl">

              <div className="flex flex-wrap w-10/12 p-4 xl:p-8 md:w-11/12">
                {classes.map((item, index) => {
                  return (
                    <div className="w-full p-4 sm:w-1/2 md:w-1/2 xl:w-1/5" key={index}>
                      <div className="flex flex-wrap w-full bg-gray-200 min-h-[200px]">
                        <p className="m-auto text-lg font-black tracking-wider text-white uppercase filter drop-shadow-lg">{item.className}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <p className="absolute right-0 flex items-center justify-center w-2/12 h-full text-lg font-black tracking-wider text-center text-white uppercase transform -translate-y-1/2 md:w-1/12 md:text-xl lg:text-4xl top-1/2 vertical-rl bg-primary-light">Our classes</p>
          
            </div>

          </div>

        </m.div>
        
      </LazyMotion>

      <div className="py-8 text-xl font-black tracking-wider text-center text-white uppercase 2xl:leading-relaxed lg:text-2xl xl:text-3xl bg-gradient-to-r from-primary via-primary-dark to-primary md:py-p-12 lg:py-20">
        <Container>
          <p>Give us a call today to book or to find out more <span className="block text-primary-light">{global.phoneNumber}</span></p>
        </Container>
      </div>

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
  "teachers": *[_type == "teacher"] {
    name,
    position,
    profilePhoto {
      asset->
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