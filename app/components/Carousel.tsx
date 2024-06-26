'use client';

import { Carousel } from "@material-tailwind/react";
import Image from 'next/image';

interface CarouselProps {
    imageSrc: string[];
}

const CarouselDefault: React.FC<CarouselProps> = ({ imageSrc }) => {
    return (
        <Carousel className="rounded-xl" autoplay loop navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                    <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                            activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                    />
                ))}
            </div>
        )}>
            {
                imageSrc.map((image, index) => (
                    <div key={index} className="h-full w-full relative">
                        <Image src={image} alt={`Cover Image ${index+1}`} layout="fill" objectFit="cover" />
                    </div>
                ))
            }
        </Carousel>
    );
}

export default CarouselDefault;
