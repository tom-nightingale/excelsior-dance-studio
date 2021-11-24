import sanity from "@/lib/sanity"
import { useNextSanityImage } from 'next-sanity-image';

export default function Card({ index, image, name, position, containerClasses, cardClasses }) {
    // const Img = useNextSanityImage(
	// 	sanity,
	// 	image
	// );

    return (
        <div className={containerClasses}>
            <div className={cardClasses}>
                <div className="relative w-full mb-4 bg-gray-200">
                    <img src={image.asset.url} alt={name} />
                </div>
                <p className="font-bold uppercase">{name}</p>
                <p>{position}</p>
            </div>
        </div>
    )
}