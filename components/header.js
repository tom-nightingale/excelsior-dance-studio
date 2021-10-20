import { useState } from 'react';
import { useRouter } from 'next/router';
import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import { m, motion } from 'framer-motion';

export default function Header({ global }) {

  const navItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Our Teachers",
      url: "/our-teachers",
    },
    {
      name: "Class Timetable",
      url: "/class-timetable",
    },
    {
      name: "Unity",
      url: "/unity",
    },
    {
      name: "Gallery",
      url: "/gallery",
    },
    {
      name: "Contact",
      url: "/contact",
    }
  ];
  
  const router = useRouter();
  // let currentPath = router.pathname;

  const [open, setOpen] = useState(false);

  return (
    <>

    <header className="absolute top-0 left-0 z-10 w-full">

      <Container>

        <div className="flex items-center justify-between py-4">

          <img className="w-full max-w-[175px] 3xl:max-w-[200px]" src="/images/logo.png" alt="Excelsior Logo" />

          <div className="flex items-center">

            <div className="flex-col hidden text-white mr-[3vw] md:flex">
              <a href={`tel:${global.phoneNumber}`} className="">{global.phoneNumber}</a>
              <a href={`mailto:${global.emailAddress}`} className="">{global.emailAddress}</a>
            </div>

            <button aria-label="Open Menu" open={open} onClick={() => setOpen(!open)} className={`btn-mobile-menu ${open ? 'open' : ''}`}>
                <span />
                <span />
                <span />
            </button>

          </div>

        </div>

      </Container>
      
    </header>

    {/* Slideout Menu */}
    <div open={open} className={`z-10 w-full md:w-1/2 bg-primary-dark text-white h-screen landscape:min-h-[600px] fixed right-0 transition duration-500 ${open ? 'translate-x-0' : 'transform translate-x-full'}`}>

        <button aria-label="Close Menu Menu" open={open} onClick={() => setOpen(!open)} className={`btn-mobile-menu open absolute top-[56px] right-[25px]`}>
            <span />
            <span />
            <span />
        </button>

        <div className="flex flex-col justify-center h-full p-8 font-black xl:p-16">

          <ul className="flex-col items-center justify-center mb-24 text-xl xl:text-2xl">

            {navItems.map((item, index) => {
              return(
                <li key={index} className="">
                  <FancyLink destination={item.url} a11yText={`Go to the ${item.name} page`} label={item.name} extraClasses="inline-block py-2 xl:py-4 tracking-wider uppercase" />
                </li>
              )
            })}

          </ul>
          
          <div className="text-sm lg:text-base">
            <p className="mb-4"><a href={`tel:${global.phoneNumber}`} className="">{global.phoneNumber}</a></p>
            <p className="mb-4"><a href={`mailto:${global.emailAddress}`} className="">{global.emailAddress}</a></p>
            <p>{global.address}</p>
          </div>

        </div>


        
    </div>
    {/* End Slideout Menu */}

    </>
  )
}