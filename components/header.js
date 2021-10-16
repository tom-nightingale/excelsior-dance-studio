import { useState } from 'react';
import { useRouter } from 'next/router';
import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import { m, motion } from 'framer-motion';

export default function Header() {

  const navItems = [
    {
      name: "Home",
      url: "",
    },
    {
      name: "Our Teachers",
      url: "our-teachers",
    },
    {
      name: "Class Timetable",
      url: "class-timetable",
    },
    {
      name: "Unity",
      url: "unity",
    },
    {
      name: "Gallery",
      url: "gallery",
    },
    {
      name: "Contact",
      url: "contact",
    }
  ];
  
  const router = useRouter();
  // let currentPath = router.pathname;

  const [open, setOpen] = useState(false);

  return (
    <>

    <header className="absolute top-0 left-0 w-full">

      <Container>

        <div className="flex items-center justify-between">

          <img className="w-full max-w-[175px] 3xl:max-w-[285px]" src="/images/logo.png" alt="Excelsior Logo" />

          <button aria-label="Open Menu" open={open} onClick={() => setOpen(!open)} className={`btn-mobile-menu ${open ? 'open' : ''}`}>
              <span />
              <span />
              <span />
          </button>

        </div>

      </Container>
      
    </header>

    {/* Slideout Menu */}
    <div open={open} className={`w-1/2 bg-blue-500 h-screen fixed right-0 transition duration-500 ${open ? 'translate-x-0' : 'transform translate-x-full'}`}>

        <button aria-label="Close Menu Menu" open={open} onClick={() => setOpen(!open)} className={`btn-mobile-menu open absolute top-10 right-7`}>
            <span />
            <span />
            <span />
        </button>

        <ul className="mt-20">

          {navItems.map((item, index) => {
            return(
              <li key={index} className="">
                <FancyLink destination={item.url} a11yText={`Go to the ${item.name} page`} label={item.name} />
              </li>
            )
          })}

        </ul>
        
    </div>
    {/* End Slideout Menu */}

    </>
  )
}