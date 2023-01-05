'use client'
import { Manrope } from '@next/font/google'
import Level2AdviceGeneratorComponent from '../../components/level2-component-set/advice-generator'
import Level2ExpensesChartComponent from '../../components/level2-component-set/expenses-chart-component'

const manrope = Manrope({ subsets: ['latin'], weight: ['800'] })

const Level2AdviceGeneratorPage = () => {

  return (
    <div
      className="bg-[#1f2632] flex flex-col justify-center items-center gap-4"
      style={{ width: '100vw', height: '100vh' }}
    >
      <div
        className={`${manrope.className}`}
      >
        <Level2AdviceGeneratorComponent />
      </div>
    </div>
  )
}

export default Level2AdviceGeneratorPage
