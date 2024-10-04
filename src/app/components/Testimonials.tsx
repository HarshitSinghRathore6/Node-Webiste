'use client'

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MusicTestimonials = [
    {
      quote: "Learning guitar at this institution has been a life-changing experience. The instructors are patient, knowledgeable, and extremely passionate about teaching. Mr. John’s method helped me progress from a beginner to a confident player in just a few months!",
      name: "John Smith",
      title: "Guitar Classes with Mr. John"
    },
    {
      quote: "Ms. Emily’s piano lessons have transformed my playing. Her attention to detail and encouraging teaching style made the learning process enjoyable and effective. I went from struggling with scales to playing full songs in no time.",
      name: "Emily Johnson",
      title: "Piano Lessons with Ms. Emily"
    },
    {
      quote: "Mr. Aaron is a phenomenal violin instructor. His passion for music is infectious, and his dedication to his students’ progress is unparalleled. Thanks to him, I’ve grown confident in my violin performance and technique.",
      name: "Aaron Davis",
      title: "Violin Classes with Mr. Aaron"
    },
    {
      quote: "I had the best experience learning drums with Mr. Chris. His energy and enthusiasm are contagious, making every lesson exciting. I’ve improved my rhythm and coordination in just a few weeks!",
      name: "Chris Lee",
      title: "Drum Lessons with Mr. Chris"
    },
    {
      quote: "Ms. Clara’s saxophone lessons are the highlight of my week. She makes challenging concepts easy to grasp and her feedback has greatly improved my playing. Highly recommend for anyone looking to learn the saxophone.",
      name: "Clara Wilson",
      title: "Saxophone Lessons with Ms. Clara"
    },
    {
      quote: "Ms. Sarah is a wonderful vocal coach. Her teaching methods helped me not only improve my singing technique but also boosted my confidence to perform in front of others. I’ve grown so much under her guidance.",
      name: "Sarah Martinez",
      title: "Vocal Lessons with Ms. Sarah"
    },
    {
      quote: "Mr. David’s flute lessons are inspiring and enjoyable. His passion for the instrument shines through in every lesson, and he always makes sure we understand both the technique and the music behind each piece.",
      name: "David Brown",
      title: "Flute Classes with Mr. David"
    },
    {
      quote: "Learning bass guitar with Mr. Mike has been a fantastic journey. His expertise and teaching style make complex techniques accessible, and he’s always supportive. I’ve grown immensely as a musician thanks to him.",
      name: "Mike Garcia",
      title: "Bass Guitar Lessons with Mr. Mike"
    },
    {
      quote: "Ms. Rachel makes learning the ukulele so much fun! Her easy-going and creative teaching style made it effortless to pick up the instrument and start playing my favorite songs. Highly recommend for beginners and advanced players alike.",
      name: "Rachel Taylor",
      title: "Ukulele Classes with Ms. Rachel"
    }
  ];
  
  

function Testimonials(){
    return(
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]relative flex items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-8-10 w-full overflow-hidden">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                    items={MusicTestimonials}
                    direction="right"
                    speed="slow"
                />
                </div>
            </div>
        </div>
    )
}



export default Testimonials