export default function Card({ image, name, position, containerClasses, cardClasses }) {
    return (
        <div className={containerClasses}>
            <div className={cardClasses}>
                <div className="relative w-full mb-4 bg-gray-200">
                    <img src={image.asset.url} alt={name} />
                </div>
                <p className="font-black uppercase">{name}</p>
                <p>{position}</p>
            </div>
        </div>
    )
}