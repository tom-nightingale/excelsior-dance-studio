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

      <Header />
      
      <LazyMotion features={domAnimation}>

        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >

          <Container>
            Hero...
            {home.heroSubHeading}
            {home.heroHeading}
          </Container>

          <Container>
            {home.inspirationalQuote}
          </Container>

          <Container>

            <m.article variants={fade}>

              <h1 className="mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">{home.aboutContentHeading}</h1>

              <div className="max-w-3xl mb-4 content">
                <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.aboutContent} />
              </div>
              
              <FancyLink destination="/about" a11yText="Navigate to the about page" label="About Page" />

            </m.article>

          </Container>

          <Container>
            {teachers.map((teacher, index) => {
              return (
                <div className="" key={index}>
                  {teacher.name}
                  {teacher.position}
                </div>
              )
            })}
          </Container>

          <Container>
            {classes.map((item, index) => {
              return (
                <div className="" key={index}>
                  {item.className}
                  {item.contentHeading}
                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={item.content} />
                </div>
              )
            })}
          </Container>

        </m.div>
        
      </LazyMotion>

      <Footer />

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