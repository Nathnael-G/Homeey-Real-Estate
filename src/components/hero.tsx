import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

function Hero() {
  return (
    <main className="flex justify-center py-10">
      <div className="relative max-w-[1320px] w-full h-[620px] rounded-2xl overflow-hidden">
        <Image
          src="/hero-bg-img.png"
          alt="hero background"
          fill
          className="object-cover rounded-2xl"
          priority
        />

        <div className="absolute top-20 left-10 z-10 text-white max-w-xl">
          <p className="text-sm md:text-base mb-2">Vision for Your Life</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Find Your Best <br /> Real Estate
          </h1>
          <p className="text-sm md:text-base mt-4 mb-6 max-w-md">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores qui ratione sequi nesciunt.
          </p>

          <div className="flex gap-4 mb-4">
            <p className="bg-white text-black px-3 py-1 rounded-full text-sm">Buy</p>
            <p className="bg-white text-black px-3 py-1 rounded-full text-sm">Sell</p>
            <p className="bg-white text-black px-3 py-1 rounded-full text-sm">Rent</p>
          </div>

          <div className="flex gap-4 items-center bg-white bg-opacity-80 p-4 rounded-lg text-black">
            <select name="location" id="location" className="p-2 rounded border w-[120px] md:w-[150px]">
              <option value="">Location</option>
              <option value="AA">AA</option>
              <option value="Hawassa">Hawassa</option>
              <option value="Gondor">Gondor</option>
            </select>
            <select name="property" id="property" className="p-2 rounded border w-[120px] md:w-[150px]">
              <option value="">Property</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
            </select>
            <select name="price" id="price" className="p-2 rounded border w-[120px] md:w-[150px]">
              <option value="">Price</option>
              <option value="0-100k">0 - 100K</option>
              <option value="100k-300k">100K - 300K</option>
              <option value="300k+">300K+</option>
            </select>
            <Button type="submit" className="mt-2 md:mt-0">Search</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
