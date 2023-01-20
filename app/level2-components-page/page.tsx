'use client'
import { Josefin_Sans, Poppins } from '@next/font/google'
import styled from 'styled-components'
import ReactSlider from 'react-slider'
import { useEffect, useState } from 'react'
import Lvl2ToggleSwitchComponent from '../../components/level2-component-set/toggle-switch'
import Lvl2DoneIcon from '../../public/lvl2-advice-generator/done_icon'
import Lvl2AnimatedTimerComponent from '../../components/level2-component-set/animated-timer'

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
  
  const [darkMode, setDarkMode] = useState(false)

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
      <Lvl2AnimatedTimerComponent />
      
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
