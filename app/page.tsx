import HeroCarousel from '@/components/HeroCarousel'
import Searchbar from '@/components/Searchbar'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
      <section className='px-6 md:px-20 py-24'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>
            <p className='small-text'>
              Smart shopping begins now
              <Image 
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
              <h1 className='head-text'>
                Be in Control,
                <span className='text-primary'>
                  SpendSmart
                </span>
              </h1>
              <p className='mt-6'>
                Save more with this powerful self-serve product and growth analytical tool.
              </p>
            <Searchbar />
          </div>
          <HeroCarousel />
        </div>

      </section>
      <section className='trending-section'>
        <h2 className='section-text'>
          Trending
        </h2>
        <div className='flex flex-wrap gap-x-8 gap-y-16'>
          {['ABC','DEF','GHI','JKL'].map((product) =>(
            <div>
              {product}
            </div>
          )
          )}
        </div>
      </section>
    </>
  )
}

export default Home