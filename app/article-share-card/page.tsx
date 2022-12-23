import { useState } from 'react'
import { motion } from 'framer-motion'

const ArticleShareCardPage = () => {

  return (
    <div
      className={`bg-gradient-to-b from-[#af67e9] to-[#6565e7] flex justify-center items-center w-[100vw] md:h-[100vh] py-16 md:py-0`}
    >
      <div
        id="card"
        className="bg-white rounded-md w-[70vw] md:h-[70vh] drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] grid md:grid-cols-2 grid-flow-row"
      >
        <div className="h-[50vh] md:h-auto relative">
          <div className="absolute top-0 -left-[10%] w-[100%] h-[100%] flex justify-center items-center">
            <img src="faq-accordion-woman.svg" alt="" className="w-[100%]" />
          </div>
        </div>
        <div className="p-8 flex flex-col justify-center ">
          <h1 className="text-black text-4xl mb-3 font-[700] leading-normal select-none">
            FAQ
          </h1>
          
        </div>
      </div>
    </div>
  )
}

export default ArticleShareCardPage
