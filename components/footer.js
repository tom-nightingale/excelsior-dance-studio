import { navItems } from '@/lib/navItems';
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { FiInstagram, FiYoutube, FiFacebook } from "react-icons/fi";

export default function Footer({ global }) {
  return (
    <footer>

      <div className="py-16 bg-primary">

        <Container>

          <ul className="flex flex-col items-center justify-around max-w-screen-xl mx-auto text-lg font-black tracking-wider text-white uppercase md:flex-row md:flex-wrap">

              {navItems.map((item, index) => {
                return(
                  <li key={index} className="">
                    <FancyLink destination={item.url} a11yText={`Go to the ${item.name} page`} label={item.name} extraClasses="inline-block py-2 xl:py-4" />
                  </li>
                )
              })}

            </ul>
            
        </Container>

      </div>

      <div className="py-8 bg-primary-dark">
        <Container>
              <div className="flex flex-col justify-between text-sm text-center text-white lg:flex-row lg:text-left">

                  <p className="my-4 lg:my-0">© Copyright Excelsior Dance Studios 2021 - All rights reserved</p>

                  <p className="my-4 lg:my-0"><a className="transition duration-500 text-primary-light hover:text-white" href={`tel:${global.phoneNumber}`}>{global.phoneNumber}</a> <span className="text-xs">&bull;</span> {global.address}</p>

                  <ul className="flex items-center justify-center my-4 text-2xl lg:justify-start text-primary-light lg:my-0">
                    <li>
                      <a href={global.youtubeUrl} rel="noreferrer" target="_blank" className="inline-block mx-2 transition duration-500 hover:text-white"><FiYoutube /></a>
                    </li>

                     <li>
                      <a href={global.instagramUrl} rel="noreferrer" target="_blank" className="inline-block mx-2 transition duration-500 hover:text-white"><FiInstagram /></a>
                    </li>

                     <li>
                      <a href={global.facebookUrl} rel="noreferrer" target="_blank" className="inline-block mx-2 transition duration-500 hover:text-white"><FiFacebook /></a>
                    </li>
                  </ul>

              </div>
        </Container>
      </div>

    </footer>
  )
}