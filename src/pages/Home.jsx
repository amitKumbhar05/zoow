import React, { useRef } from 'react'
import carousel_1 from '../images/carousel-1.jpg';
import carousel_2 from '../images/carousel-2.jpg'
import carousel_3 from '../images/carousel-3.jpg'
import {ImageScroll} from '../components/';


function Home() {
    const ref = useRef(null);
    const images = [
        carousel_1,
        carousel_2,
        carousel_3
    ]

    const handleclk = (e)=>{
        e.preventDefault();
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

  return (
    <div >
        <div className="flex h-[100vh] w-full">
            <div className="w-full  flex flex-col pl-[20px] justify-center items-center bg-[url(./images/tiger.jpg)] bg-center bg-cover flex-wrap">
                <h1 className='text-white text-[60px] pl-5 font-bold '>Enjoy Wonderful Day With Your Family</h1>
                <button className="bg-green-700 p-7 text-2xl rounded-lg mt-[20%] opacity-[100%] shadow-sm shadow-black text-white font-bold cursor-pointer" ><a onClick={handleclk} href="">READ MORE</a></button>
            </div>
            <div className=" w-full">
                <ImageScroll images={images}/>
            </div>
        </div>

        <div ref={ref} className='flex flex-col my-10 p-5 shadow-black shadow-sm mx-3'>
            <h1 className='self-center text-5xl mb-6 font-bold'>Welcome</h1>
            <p>
            Welcome to our extraordinary world of wildlife at ZOO<span className='text-red-600'>W</span>! Step into a realm where the wonders of the animal kingdom come to life. As you wander through our lush and vibrant habitats, you'll have the chance to encounter creatures from every corner of the globe. Whether you're an animal enthusiast, a family seeking adventure, or someone looking for a peaceful escape into nature, ZOO<span className='text-red-600'>W</span> has something for everyone. Join us for an unforgettable journey filled with awe-inspiring moments, educational insights, and a profound appreciation for the incredible creatures we share our planet with. Come and explore, learn, and be inspired by the beauty and diversity of the animal world. We can't wait to share this wild experience with you!
            </p>
        </div>

    </div>
  )
}

export default Home
