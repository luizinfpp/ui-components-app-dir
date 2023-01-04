'use client'
import { Space_Grotesk } from '@next/font/google'
import { useEffect, useState } from 'react'
import Lvl1PinkGradientBtn from '../../components/level1-component-set/pink-gradient-button'

const space_grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500'] })

const Level2ExpensesChartPage = () => {

  return (
    <div
      className="bg-[#efefef] flex flex-col justify-center items-center gap-4"
      style={{ width: '100vw', height: '100vh' }}
    >
      <div
        id="card"
        className={`${space_grotesk.className} bg-white rounded-3xl px-16 py-6 flex flex-col items-center justify-around`}
      >
        <Lvl1PinkGradientBtn />
      </div>
    </div>
  )
}

export default Level2ExpensesChartPage
