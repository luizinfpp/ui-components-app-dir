"use client"
import { Outfit } from '@next/font/google'

const outfit = Outfit({ subsets: ['latin'] })

const Level1ComponentsPage = () => {
  return (
    <div
      className="bg-[#d6e2f0] flex justify-center items-center"
      style={{ width: '100vw', height: '100vh' }}
    >
      <div
        id="card"
        className={`${outfit.className} bg-white rounded-3xl w-72 h-[28rem] p-4 flex flex-col items-center justify-around`}
      >
        <div className="rounded-xl w-56 h-56 bg-[#3685FF] my-4 flex justify-center items-center">
          <div
            style={{
              height: 'auto',
              margin: '0 auto',
              width: '80%',
            }}
          >
            
          </div>
        </div>
        <h1 className="text-xl text-center font-bold">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[#7b879d] text-center my-4 text-sm">
          Scan the QR code to visit Google.com and take your coding skills to
          the next level
        </p>
      </div>
    </div>
  )
}

export default Level1ComponentsPage
