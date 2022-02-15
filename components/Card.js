import { m } from 'framer-motion'
import Image from 'next/image'

export default function Card({ image, name, position, containerClasses, cardClasses, variants }) {
    return (
        <>
        {variants && (
        <m.div variants={variants} className={containerClasses}>
            <div className={cardClasses}>
                <div className="relative w-full mb-4 bg-gray-200">
                    <div className="relative w-full h-72">                    
                        <Image layout="fill" objectFit="cover" objectPosition="center" alt="Excelsior Dance Studio" className="relative z-0 w-full h-full" src={image.asset.url} /> 
                    </div>
                </div>
                <p className="font-black uppercase">{name}</p>
                <p>{position}</p>
            </div>
        </m.div>
        )}

        {!variants && (
        <div className={`${containerClasses}`}>
            <div className={cardClasses}>
                <div className="relative w-full h-72">                    
                    <Image layout="fill" objectFit="cover" objectPosition="center" alt="Excelsior Dance Studio" className="relative z-0 w-full h-full" src={image.asset.url} /> 
                </div>
                <p className="font-black uppercase">{name}</p>
                <p>{position}</p>
            </div>
        </div>
        )}
        </>
    )
}