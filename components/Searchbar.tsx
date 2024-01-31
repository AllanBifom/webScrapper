"use client"
import { hostname } from 'os';
import React, { FormEvent, useState } from 'react'

const isValidAmazonProductUrl = (url:string) => {
    try{
        const parsedURL = new URL(url);
        const hostName = parsedURL.hostname;

      // check if hostname contains amazon.com or amazon.ca
      if(hostName.includes('amazon.') || hostName.includes('amazon') || hostName.includes('amazon.com')){
        return true;
      }  
    } catch (error) {
        return false;
    }
}

const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Stops reload
        const isValidLink = isValidAmazonProductUrl(searchPrompt);

        if(!isValidLink) return alert('Please provide a valid amazon link')

        try{
            setIsLoading(true);

            // Scrape the product page
            
        } catch (error) {
            console.log(error)
        }finally {
            setIsLoading(false);
        }
    }
    return (
    <form className='flex flex-wrap gap-4 mt-12'
    onSubmit={handleSubmit}
    >
        <input
        type='text'
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder='Enter product link'
        className='searchbar-input'
        />
        <button type='submit' className='searchbar-btn' disabled={searchPrompt === ''}>
            {isLoading ? 'Searching...' : 'Search'}
        </button>
    </form>
    )
}

export default Searchbar