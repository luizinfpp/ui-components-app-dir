import { useEffect, useState } from 'react'
import Lvl2AdviceIcon from '../../public/lvl2-advice-generator/icon-dice'

type Advice = {
  id: number
  content: string
} | null

const Level2AdviceGeneratorComponent = () => {
  const [advice, setAdvice] = useState<Advice>(null)

  const FetchAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdvice({id: data.slip.id, content: data.slip.advice}))
  }

  useEffect(() => {
    FetchAdvice()
  }, [])

  return (
    <div
      id="card"
      className={`bg-[#323a49] w-[40vw] rounded-xl p-12 flex flex-col items-center justify-around relative`}
    >
      <h2 className="text-xs text-[#52ffa8] uppercase tracking-[0.3rem] text-center mb-8">
        Advice #{advice != null ? advice.id : ''}
      </h2>
      <p className="text-center text-white/70 text-2xl mb-6">
        {advice != null ? advice.content : 'Loading...'}
      </p>
      <button className="fill-black bg-[#52ffa8] rounded-full p-6 absolute bottom-0 translate-y-1/2 hover:shadow-[0px_0px_10px_10px_#52ffa888] active:bg-[#39b175]" onClick={FetchAdvice}>
        <Lvl2AdviceIcon />
      </button>
    </div>
  )
}

export default Level2AdviceGeneratorComponent
