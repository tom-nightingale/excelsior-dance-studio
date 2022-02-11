import { useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function Carousel({ items }) {

    useEffect(() => {
        var carouselArrows = document.querySelectorAll(".carousel-arrow");
        carouselArrows.forEach((arrow) => {
        arrow.addEventListener("click", function() {
            arrow.parentNode.parentNode.querySelector('.carousel-arrow-left').classList.add('opacity-100');

            var carouselContainer = arrow.parentNode.parentNode.querySelector('.carousel-container');
            var carouselItem = arrow.parentNode.parentNode.querySelectorAll('.carousel-item');
            var x;

            if (arrow.classList.contains('carousel-arrow-right')) {
            x = (carouselItem[0].offsetWidth) + carouselContainer.scrollLeft;
            carouselContainer.scrollTo({
                left: x,
                behavior: "smooth",
            });
            } else {
            x = (carouselItem[0].offsetWidth) - carouselContainer.scrollLeft;
            carouselContainer.scrollTo({
                left: -x,
                behavior: "smooth",
            });
            }
        })
        });
    });

    return(
        <div className="py-8">

            <div className="relative w-full">

                <div className="relative px-4 mx-auto lg:px-6">
                    
                    <div className="flex w-full overflow-x-auto scrolling-touch carousel-container">
                        {items.map((item, index) => {
                            let imageUrl = "";
                            item.profilePhoto ? imageUrl = item.profilePhoto.asset.url : '';

                            return (
                                <div className="flex-none w-1/2 px-4 xs:w-1/3 md:w-1/3 lg:w-1/4 carousel-item" key={index}>
                                    <div className="w-full">                            
                                        <img className="block w-full" src={imageUrl} alt="" />
                                        {item.name &&
                                            <p className="mt-4 text-lg font-black leading-snug tracking-wider uppercase">{item.name}</p>
                                        }
                                        {item.position && 
                                            <p>{item.position}</p>
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="absolute top-0 left-0 flex items-center h-full text-2xl">
                        <button className="px-0 py-2 carousel-arrow carousel-arrow-left" aria-label="Previous">
                            <FiChevronLeft />
                        </button>
                    </div>
                    
                    <div className="absolute top-0 right-0 flex items-center h-full text-2xl bg-orange-500">
                        <button className="px-0 py-2 carousel-arrow carousel-arrow-right" aria-label="Next">
                            <FiChevronRight />
                        </button>
                    </div>

                </div>

            </div>
        
        </div>
    )
}