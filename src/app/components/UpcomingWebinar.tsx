'use client'

import { HoverBorderGradient } from "@/app/components/ui/hover-border-gradient";
import { HoverEffect } from "./ui/card-hover-effect";
import Link from "next/link";

const UpcomingWebinar = [
    {
        title: "Guitar Mastery for Beginners: Start Your Musical Journey",
        description: "This webinar is designed for aspiring guitarists! Learn the basics, including chord progressions, strumming patterns, and tips to enhance your playing. Our expert instructors will break down everything you need to kickstart your musical journey.",
        link: <Link href='#'>Register Now</Link>
      },
      {
        title: "Piano Techniques for All Levels: From Basics to Advanced",
        description: "Dive into the world of piano playing with our comprehensive guide for all skill levels. Whether you're just starting or looking to enhance your expertise, this webinar covers key exercises, hand coordination, and improvisation techniques.",
        link: <Link href='#'>Register Now</Link>
      },
      {
        title: "Drumming with Precision: Build Your Rhythm",
        description: "Unlock the art of drumming with precision and power. In this webinar, you'll learn rhythm-building techniques, proper stick handling, and how to maintain tempo. Perfect for those who want to improve their timing and coordination.",
        link: <Link href='#'>Register Now</Link>
      },
      {
        title: "Violin Masterclass: Bowing Techniques & Finger Placement",
        description: "Enhance your violin playing by mastering the right bowing techniques and finger placement. This webinar focuses on fine-tuning your skills for smoother and more expressive performances, led by an expert violinist.",
        link: <Link href='#'>Register Now</Link>
      },
      {
        title: "Singing Fundamentals: Strengthen Your Voice",
        description: "Discover vocal techniques to improve your singing voice. This webinar covers breath control, pitch accuracy, and vocal exercises to build confidence in your singing abilities. Ideal for beginners and those looking to enhance their vocal range.",
        link: <Link href='#'>Register Now</Link>
      },
      {
        title: "Music Theory 101: Understanding the Language of Music",
        description: "This webinar delves into the fundamentals of music theory, including scales, intervals, chords, and harmony. Whether you're a musician or a music enthusiast, you'll gain valuable insights into how music works and how to apply theory to your playing.",
        link: <Link href='#'>Register Now</Link>
      }
      
]

function UpcomingWenbinar (){
    return(
        <div className="p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div>
                    <div className="text-center">
                        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">UPCOMING WEBINARS</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Come And Join Us</p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect
                        items={UpcomingWebinar.map(webinar => (
                            {
                            title: webinar.title,
                            description: webinar.description,
                            link: '/'
                            }
                        ))}
                        />
                    </div>
                </div>
                <div className="mt-10 text-center">
                <div className=" flex justify-center text-center  mt-8">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                        >
                            
                            <a href='http://localhost:3001/login'>Book Your Seat</a>
                        </HoverBorderGradient>
                        </div>
                </div>
            </div>  
        </div>
    )
}

export default UpcomingWenbinar