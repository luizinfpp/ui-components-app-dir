"use client"
import { Josefin_Sans } from '@next/font/google'
import Lvl1PinkGradientBtn from '../../components/level1-component-set/pink-gradient-button'

const josefin_sans = Josefin_Sans({ subsets: ['latin'], weight: ['300', '400', '600'] })

const Level1ComponentsPage = () => {
  return (
    <div
      className="bg-[#efefef] flex flex-col justify-center items-center"
      style={{ width: '100vw', height: '100vh' }}
    >
      <div
        id="card"
        className={`${josefin_sans.className} bg-white rounded-3xl p-16 flex flex-col items-center justify-around`}
      >
        <Lvl1PinkGradientBtn />
      </div>
    </div>
  )
}

export default Level1ComponentsPage
