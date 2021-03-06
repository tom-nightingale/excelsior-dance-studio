import { useState, useRef } from 'react'
import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image';
import { NextSeo } from 'next-seo'
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import ContactForm from '@/components/ContactForm'
import FancyLink from '@/components/FancyLink'
import { fade, heroSubheading, heroHeading, heroButton} from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useAnimation } from 'framer-motion'

import { FiChevronDown } from "react-icons/fi";

export default function Page({ data:{global, page, classes} }) {

  const controls = useAnimation();
  const { ref, inView } = useInView();

  const myRef = useRef(null)
  
useEffect(() => {
    if (inView) {
      controls.start('enter');
    }
    if (!inView) {
      controls.start('initial');
    }
  }, [controls, inView]);

  const [isSelectorOpen, setSelectorOpen] = useState(false);
  const [CurrentClass, setCurrentClass] = useState('ballet');

  const handleToggle = (slug) => {
    setSelectorOpen(false);
    setCurrentClass(slug);
    myRef.current.scrollIntoView();
  };
    

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
          
          <Header global={global} isHome />

          <div className="relative bg-primary-dark h-screen sm:max-h-[1000px] landscape:min-h-[450px]">

            <m.div className="absolute inset-0 z-0" variants={fade} initial="initial" animate="enter" exit="exit">
                <Image layout="fill" objectFit="cover" objectPosition="center" alt="Excelsior Dance Studio" className="relative z-0 w-full h-full opacity-75" src={page.heroImage.asset.url} /> 
            </m.div>
            
            <div className="relative z-[1] h-full text-white flex flex-col items-center justify-center px-8 landscape:py-40">
              
              <div className="text-[4vw] md:text-[2vw] font-light text-center uppercase">

                <p className="relative overflow-hidden">
                  <m.span className="block" variants={heroSubheading} initial="initial" animate="enter" exit="exit">{page.heroSubHeading}</m.span>
                </p>
                <p className="relative overflow-hidden">
                  <m.span className="block text-[8vw] md:text-[4vw] font-black leading-snug" variants={heroHeading} initial="initial" animate="enter" exit="exit">{page.heroHeading}</m.span>
                </p>
              </div>

              <m.div className="flex flex-col items-center justify-center w-full mt-8 md:flex-row md:flex-wrap" variants={heroButton} initial="initial" animate="enter" exit="exit">

                  <div className="relative flex flex-col justify-center w-full mx-auto max-w-screen-xs">
                    <p onClick={() => setSelectorOpen(!isSelectorOpen)} className="w-full p-3 font-black text-white uppercase bg-transparent border-2 border-white rounded-full cursor-pointer md:px-5 md:py-4">{CurrentClass} <span className="absolute text-white transform -translate-y-1/2 top-1/2 right-4"><FiChevronDown /></span></p>

                    <div className={`absolute left-0 w-full p-3 bg-white rounded-lg shadow-lg top-16 ${isSelectorOpen ? 'block' : 'hidden'}`}>
                      {classes.map((item, index) => { 
                          return(
                            <p className="block p-3 text-sm rounded-lg cursor-pointer text-primary-dark hover:bg-primary-light/20" key={index} onClick={() => handleToggle(item.slug.current)}> {item.title}</p>
                          )
                      })}
                    </div>
                  </div>
              </m.div>
              
            </div>
            
          </div>
        
          <div className="bg-gradient-to-r from-primary via-primary-dark to-primary">
            <div className="max-w-screen-lg py-16 mx-auto md:py-24" ref={myRef}>
              <Container>
                {classes.map((item, index) => { 
                    return(
                      <m.div variants={heroButton} initial="initial" animate="enter" exit="exit" className={`class-item rounded-sm shadow-lg flex-col sm:flex-row flex-wrap bg-white ${CurrentClass === item.slug.current ? 'flex' : 'hidden'}`} key={index}>
                        
                        <div className="relative bg-gray-200 h-96 sm:h-auto sm:w-1/2">
                           <Image layout="fill" objectFit="cover" objectPosition="center" alt="Excelsior Dance Studio" className="relative z-0 w-full h-full" src={item.classImage.asset.url} /> 
                        </div>

                        <div className="p-8 lg:p-12 sm:w-1/2">
                          
                          <h2 ref={ref} variants={fade} initial="initial" animate={controls} exit="exit">{item.title}</h2>
                          
                          <div className="content">
                            <BlockContent serializers={{ container: ({ children }) => children }} blocks={item.content} />
                          </div>

                          {item.classTeachers &&
                            <p className="mt-4"><span className="font-black">Teachers: </span>
                              {item.classTeachers.map((teacher, index) => {
                                return(
                                  <span key={index}>{teacher.name}</span>
                                )
                              })}
                            </p>
                          }

                          {item.classDays &&
                              <p key={index} className="mt-4"><span className="font-black">Class days:</span>
                              {item.classDays.map((day, index) => {
                                return (
                                    <span className="inline-block px-3 py-2 m-1 text-xs font-black tracking-wider text-white uppercase rounded-lg bg-primary-light">{day.title}</span>
                                    )
                                  })}
                              </p>
                          }
                          

                          
                          
                        </div>

                      </m.div>
                    )
                })}            
              </Container>
            </div>
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
  "page": *[_type == "classes"][0] {
    heroImage {
      asset ->
    },
    heroSubHeading,
    heroHeading,
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
    title,
    contentHeading,
    content,
    classImage {
      asset->
    },
    classDays[]->,
    classTeachers[]->,
    slug
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