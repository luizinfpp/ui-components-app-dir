'use client'
import { Inter, Lexend_Deca } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })
const lexend_deca = Lexend_Deca({ subsets: ['latin'], weight: '400' })

const StatsCardPage = () => {
  return (
    <div
      className={`${inter.className} bg-[#090b1a] flex justify-center items-center w-[100vw] md:h-[100vh] py-16 md:py-0`}      
    >
      <div
        id="card"
        className="bg-[#1b1938] rounded-md w-[60vw] md:h-[50vh] grid md:grid-cols-2 grid-flow-row overflow-hidden"
      >
        <div className="p-12 flex flex-col justify-center items-center">
          <h1 className="text-white text-2xl my-2 font-[700] leading-normal">
            Get <span className="font-[700] text-[#aa5cdb]">insights</span> that
            help your business grow.
          </h1>
          <p className="text-white/75 text-sm my-3 leading-relaxed">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="grid md:grid-cols-3 grid-rows-3 gap-6 md:gap-1 text-white/75 text-sm md:w-[100%] m-4 md:m-3 text-center md:text-left">
            <div>
              <span className={`text-white text-xl font-[700]`}>10k+</span>
              <div className={`${lexend_deca.className} uppercase text-white/60 text-xs tracking-widest`}>companies</div>
            </div>
            <div>
              <span className={`text-white text-xl font-[700]`}>314</span>
              <div className={`${lexend_deca.className} uppercase text-white/60 text-xs tracking-widest`}>templates</div>
            </div>
            <div>
              <span className={`text-white text-xl font-[700]`}>12m+</span>
              <div className={`${lexend_deca.className} uppercase text-white/60 text-xs tracking-widest`}>queries</div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover h-[50vh] md:h-auto md:order-none order-first"
          style={{ backgroundImage: 'url(stats-card-header-desktop.jpg)' }}
        >
          <div className="w-[100%] h-[100%] bg-[#aa5cdb33] backdrop-contrast-125 backdrop-brightness-[0.7]"></div>
        </div>
      </div>
    </div>
  )
}

export default StatsCardPage
