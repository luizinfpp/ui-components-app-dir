'use client'
import { Josefin_Sans, Poppins } from '@next/font/google'
import styled from 'styled-components'
import ReactSlider from 'react-slider'
import { useEffect, useState } from 'react'
import Lvl2ToggleSwitchComponent from '../../components/level2-component-set/toggle-switch'
import Lvl2DoneIcon from '../../public/lvl2-advice-generator/done_icon'

type TimeLeftType = {
  hours: number
  minutes: number
  seconds: number
}

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
`

const Thumb = (props: any, state: any) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
)

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props: any) =>
    props.index === 2 ? '#f00' : props.index === 1 ? '#0f0' : '#ddd'};
  border-radius: 999px;
`

const Track = (props: any, state: any) => (
  <StyledTrack {...props} index={state.index} />
)

const StyledContainer = styled.div`
  overflow: auto;
  padding-right: 8px;
`

const StyledTrack2 = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props: any) => (props.index === 1 ? '#ddd' : '#0f0')};
  border-radius: 999px;
`

const Track2 = (props: any, state: any) => (
  <StyledTrack2 {...props} index={state.index} />
)

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
})

const Level2ComponentsPage = () => {
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

  const [darkMode, setDarkMode] = useState(false)

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
    <div
      className="bg-[#efefef] flex flex-col justify-center items-center gap-4"
      style={{ width: '100vw', height: '100vh' }}
    >
      <div
        id="card"
        className={`${josefin_sans.className} ${
          darkMode ? 'bg-[#141414] text-white' : 'bg-white text-black'
        } rounded-3xl px-16 py-6 flex flex-col items-center justify-start`}
      >
        <StyledContainer className="w-64">
          <StyledSlider
            defaultValue={[50, 75]}
            renderTrack={Track}
            renderThumb={Thumb}
            onChange={(value, index) =>
              console.log(`onChange: ${JSON.stringify({ value, index })}`)
            }
          />
        </StyledContainer>
      </div>
      <div
        id="card"
        className={`${josefin_sans.className} ${
          darkMode ? 'bg-[#141414] text-white' : 'bg-white text-black'
        } rounded-3xl px-16 py-6 flex flex-col items-center justify-start`}
      >
        <StyledContainer className="w-64">
          <StyledSlider
            defaultValue={[50]}
            renderTrack={Track2}
            renderThumb={Thumb}
          />
        </StyledContainer>
      </div>
      {hydrated && (
        <div
          id="card"
          className={`${poppins.className} ${
            darkMode ? 'bg-[#141414] text-white' : 'bg-white text-black'
          } text-[6em] rounded-3xl px-16 py-6 flex flex-col items-center justify-around`}
        >
          {timeLeft.hours}:
          {timeLeft.minutes > 9
            ? timeLeft.minutes
            : '0' + timeLeft.minutes.toString()}
          :
          {timeLeft.seconds > 9
            ? timeLeft.seconds
            : '0' + timeLeft.seconds.toString()}
        </div>
      )}
      <div
        id="card"
        className={`${poppins.className} ${
          darkMode ? 'bg-[#141414] text-white' : 'bg-white text-black'
        } text-lg w-[18vw] rounded-3xl px-16 py-6 flex flex-col items-center justify-around`}
      >
        <Lvl2ToggleSwitchComponent
          label="Dark Mode"
          value={darkMode}
          setValue={setDarkMode}
        />
      </div>
      <div
        id="card"
        className={`${poppins.className} ${
          darkMode
            ? 'bg-[#141414] fill-white'
            : 'bg-white stroke-[4px] stroke-black '
        } text-lg w-[18vw] rounded-3xl px-16 py-6 flex flex-col items-center justify-around`}
      >
        <Lvl2DoneIcon />
      </div>
    </div>
  )
}

export default Level2ComponentsPage
