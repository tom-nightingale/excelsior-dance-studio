import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image';

import Layout from '@/components/Layout'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Container from '@/components/Container'
import FancyLink from '@/components/FancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Page({ page }) {

  console.log(page);

    return (

        <Layout>
          
        </Layout>

    )
}

  
const query = `
  *[_type == "class" && slug.current == $slug][0] {
    title,
    contentHeading,
    content,
    classImage {
      asset->
    },
    slug,
  }
`

const queryAllClasses = `
  *[_type == "class" && slug.current != ''] {
    'slug': slug.current
  }
`

export async function getStaticProps({ params }) {  
  const page = await sanity.fetch(query, {
    slug: params.slug,
  });
  return {
    props: {
      page
    }
  }
}

export async function getStaticPaths() {
  const pages = await sanity.fetch(queryAllClasses) || [];
  const paths = pages.map(page => ({
    params: { slug: page.slug },
  }));

  return {
    paths: paths,
    fallback: true,
  }
}