'use client'
import { DM_Sans } from '@next/font/google'
import Level2ExpensesChartComponent from '../../components/level2-component-set/expenses-chart-component'

const dm_sans = DM_Sans({ subsets: ['latin'], weight: ['400', '700'] })

const Level2ExpensesChartPage = () => {

  return (
    <div
      className="bg-[#f8e9dd] flex flex-col justify-center items-center gap-4"
      style={{ width: '100vw', height: '100vh' }}
    >
      <div
        id="card"
        className={`${dm_sans.className} bg-white w-[40vw] rounded-3xl px-16 py-6 flex flex-col items-center justify-around`}
      >
        <div className='text-white bg-[#ec775f] flex flex-col w-full p-4 rounded-2xl'>
          <h2 className='text-xs'>My balance</h2>
          <h4 className='text-xl font-[700]'>$921.48</h4>
        </div>
        <Level2ExpensesChartComponent />
      </div>
    </div>
  )
}

export default Level2ExpensesChartPage
