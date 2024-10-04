
import {Spotlight} from "@/app/components/ui/Spotlight"
import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";

function HeroSection(){
    return (
        <div className="h-auto md:h-[50rem] w-full rounded-md flex-col items-center  relative overflow-hidden mx-auto py-10 md:py-0 -mt-20"
        >
            <div className="h-screen flex justify-center items-center">
                <div className="text-center">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                    <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl 
                        font-bold bg-clip-text text-transparent 
                        bg-gradient-to-b from-neutral-50 to-neutral-400"
>
                        Master The Art Of Music
                    </h1>
                    <p className="mt-8 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                        Master the Art of Music with our expert-led courses designed for all skill levels. 
                        Whether you are a beginner picking up an instrument for the first time or an advanced musician looking to refine your technique, 
                        our comprehensive lessons will guide you every step of the way. Start your musical journey today and unlock your full potential!
                    </p>

                    <div className=" flex justify-center text-center  mt-8">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                            
                            <span>Explorer Courses</span>
                        </HoverBorderGradient>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection