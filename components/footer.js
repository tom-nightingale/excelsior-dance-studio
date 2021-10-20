import { navItems } from '@/lib/navItems';
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'

export default function Footer({ global }) {
  return (
    <footer>

      <div className="py-12 bg-primary">

        <Container>

          <ul className="flex flex-wrap items-center justify-around max-w-screen-xl mx-auto text-lg font-black tracking-wider text-white uppercase">

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
              <div className="flex justify-between text-white">

                  <p>© Copyright Excelsior Dance Studios 2021 - All rights reserved</p>

                  <p>01623 479467               56 Station Street, Mansfield Woodhouse, NG19 8AB</p>

                  <ul>
                    <li>
                      <a href={global.youtubeUrl} rel="noreferrer" target="_blank">Youtube</a>
                    </li>

                     <li>
                      <a href={global.instagramUrl} rel="noreferrer" target="_blank">Insta</a>
                    </li>

                     <li>
                      <a href={global.facebookUrl} rel="noreferrer" target="_blank">Facebook</a>
                    </li>
                  </ul>

              </div>
        </Container>
      </div>

    </footer>
  )
}