import Image from 'next/image'
import React from 'react'

export default function Case({url, logoWidth, logoAlt, img, tags, children}) {
  return (
    <div className="p-6 shadow-case rounded-lg hover:shadow-case-hover transition transition-shadow transition-duration-300 ease-in-out dark:bg-darkgrey text-text">
      <div className="portfolio-case h-full">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col h-full"
          href={url}
        >
          <div className="h-24 max-h-24 text-center mb-4">
            <Image
              placeholder="blur"
              width={logoWidth}
              height={100}
              alt={`Logo ${logoAlt}`}
              src={img}
            />
          </div>
          {children}
          <div className="flex flex-col mt-4 flex-grow justify-end">
            <ul className="flex flex-wrap">
              {tags.map((tag, i) => (
                <li
                  className="bg-primary text-white text-sm my-1 py-1 px-4 mr-2 rounded-md"
                  key={i}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </a>
      </div>
    </div>
  )
}
