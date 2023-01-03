"use client"
import { Josefin_Sans, Poppins } from '@next/font/google'
import Lvl1PinkGradientBtn from '../../components/level1-component-set/pink-gradient-button'
import Lvl1SignupComponent from '../../components/level1-component-set/signup-component'

const josefin_sans = Josefin_Sans({ subsets: ['latin'], weight: ['300', '400', '600'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600', '700'] })

const Level1ComponentsPage = () => {
  return (
    <div
      className="bg-[#efefef] flex flex-col justify-center items-center gap-4"
      style={{ width: '100vw', height: '100vh' }}
    >
      <div
        id="card"
        className={`${josefin_sans.className} bg-white rounded-3xl px-16 py-6 flex flex-col items-center justify-around`}
      >
        <Lvl1PinkGradientBtn />
      </div>
      <div
        id="card"
        className={`${poppins.className} bg-white rounded-3xl px-16 py-6 flex flex-col items-center justify-around`}
      >
        <Lvl1SignupComponent />
      </div>
    </div>
  )
}

export default Level1ComponentsPage
