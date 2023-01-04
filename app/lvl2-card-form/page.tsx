'use client'
import { Space_Grotesk } from '@next/font/google'
import { useEffect, useState } from 'react'
import Lvl2CardFormComponent from '../../components/level2-component-set/signup-component'

const space_grotesk = Space_Grotesk({ subsets: ['latin'], weight: ['500'] })

const Level2CardFormPage = () => {

  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [cardExpMM, setCardExpMM] = useState<string>('');
  const [cardExpYY, setCardExpYY] = useState<string>('');
  const [cardCvc, setCvc] = useState<string>('');

  return (
    <div
      className={`${space_grotesk.className} bg-[#efefef] flex justify-center items-center`}
      style={{ width: '100vw', height: '100vh' }}
    >
      <div
        className={`h-[100%] w-[40vw] font-[500] bg-cover flex flex-col items-center justify-center gap-8`}
        style={{ backgroundImage: 'url("lvl2-card-form/bg-main-desktop.png")' }}
      >
        <div className="relative left-20">
          <img src="lvl2-card-form/bg-card-front.png" alt="" />
          <div className='text-white absolute bottom-0 p-4 w-[100%]'>
            <p className='py-6 text-3xl'>{cardNumber == ''?  "0000 0000 0000 0000" : cardNumber}</p>
            <div className='flex w-[100%] justify-between text-sm'>
              <p className='uppercase'>{cardName == ''?  "YOUR NAME" : cardName}</p>
              <p>{cardExpMM == ''?  "00" : cardExpMM}/{cardExpYY == ''?  "00" : cardExpYY}</p>
            </div>
          </div>
        </div>
        <div className="relative left-40">
          <img src="lvl2-card-form/bg-card-back.png" alt="" />
          <div className='text-white absolute top-9 right-0 text-right p-14 w-[100%]'>
              <p>{cardCvc == ''?  "000" : cardCvc}</p>
          </div>
        </div>
      </div>
      <div className="bg-white h-[100%] w-[100%] flex items-center justify-center">
        <Lvl2CardFormComponent setCardNumber={setCardNumber} setCardName={setCardName} setCardExpMM={setCardExpMM} setCardExpYY={setCardExpYY} setCvc={setCvc} />
      </div>
    </div>
  )
}

export default Level2CardFormPage
