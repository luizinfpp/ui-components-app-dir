import { useEffect, useState } from 'react'
import Level2AnimatedTimerPieceComponent from './animated-timer-piece'

type TimeLeftType = {
  hours: number
  minutes: number
  seconds: number
}

const Lvl2AnimatedTimerComponent = () => {
  
  const calculateTimeLeft = (): TimeLeftType => {
    let timeLeft: TimeLeftType = { hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const difference = +new Date('2025-02-28T18:30:00+05:30') - +new Date()
  const [timeLeft, setTimeLeft] = useState<TimeLeftType>(calculateTimeLeft())

  const [hydrated, setHydrated] = useState(false)
  // During this first run, hydrated will have the default value of false, which will cause the component to return null. Also in this first run, useEffect() will call setHydrated(true), which will trigger a second render after the first has completed.
  // By the time the second render runs, the app will already be hydrated, so there is no need to worry about the errors occurring anymore. At this point hydrated will be true, so the randomized numbers will render normally.

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    setHydrated(true)

    return () => clearTimeout(timer)
  })

  return (
    <>
      {hydrated && (
        <div
          id="card"
          className={`bg-white text-black text-[6em] rounded-3xl px-16 py-6 flex flex-col items-center justify-around`}
        >
          {timeLeft.hours}:
          {timeLeft.minutes > 9
            ? timeLeft.minutes
            : '0' + timeLeft.minutes.toString()}
          :
          {timeLeft.seconds > 9
            ? timeLeft.seconds
            : '0' + timeLeft.seconds.toString()}
          <div className="flex gap-3">
            <Level2AnimatedTimerPieceComponent showNumber={timeLeft.minutes} />
            <Level2AnimatedTimerPieceComponent showNumber={timeLeft.seconds} />
          </div>
        </div>
      )}
    </>
  )
}

export default Lvl2AnimatedTimerComponent
