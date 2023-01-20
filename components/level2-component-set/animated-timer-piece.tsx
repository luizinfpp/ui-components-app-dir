import styled from 'styled-components'
import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'

const ClippedCornersDiv = styled(motion.div)`
  -webkit-clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 15%, 90% 0);
  clip-path: polygon(
    5% 0,
    0 10%,
    0 90%,
    5% 100%,
    95% 100%,
    100% 90%,
    100% 10%,
    95% 0
  );
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`

const Level2AnimatedTimerPieceComponent = ({ showNumber }: any) => {
  const [first, setFirst] = useState(true)
  const [currentNumber, setCurrentNumber] = useState<number | null>(null)
  const [updatedNumber, setUpdatedNumber] = useState<number | null>(null)

  const controls = useAnimationControls()
  const controls2 = useAnimationControls()

  const animateTimer = () => {
    controls
      .start({
        rotateX: 180,
        backgroundColor: '#343650',
        transition: { duration: 0.2 },
      })
      .then(() => {
        setCurrentNumber(showNumber)

        setTimeout(() => {
          controls
            .start({
              opacity: 0,
              rotateX: 0,
              backgroundColor: '#292a3f',
              transition: { duration: 0 },
            })
            .then(() => {

              setTimeout(() => {
                controls.start({
                  opacity: 1,
                  transition: { duration: 0 },
                }).then(() => {setUpdatedNumber(showNumber == 0 ? 59 : showNumber - 1)});

                controls2.start({
                  opacity: 1,
                  transition: { duration: 0 },
                })
              }, 200)
            })

          controls2.start({
            rotateX: 0,
            opacity: 0,
            backgroundColor: '#292a3f',
            transition: { duration: 0 },
          })
        }, 200)
      })

    controls2.start({
      rotateX: 180,
      backgroundColor: '#343650',
      transition: { duration: 0.2 },
    })
  }

  useEffect(() => {
    animateTimer()
  }, [showNumber])

  return (
    <div
      className="relative flex flex-col z-0"
      style={{ perspective: '1000px' }}
    >
      <div className={`relative`}>
        <ClippedCornersDiv
          className={`bg-[#292a3f] text-[#fb6087] h-1/2 overflow-hidden px-3`}
        >
          {updatedNumber &&
            (updatedNumber > 9
              ? updatedNumber
              : '0' + updatedNumber.toString())}
        </ClippedCornersDiv>
        <ClippedCornersDiv
          className={`bg-[#292a3f] text-[#fb6087] h-1/2 px-3 absolute z-10 top-0`}
          style={{
            originX: 0.5,
            originY: 1,
            rotateY: 0,
            rotateX: 0,
            rotateZ: 0,
          }}
          animate={controls}
        >
          <motion.div className="">
            {currentNumber &&
              (currentNumber > 9
                ? currentNumber
                : '0' + currentNumber.toString())}
          </motion.div>
        </ClippedCornersDiv>
        <ClippedCornersDiv
          className={`bg-[#292a3f] text-[#fb6087] h-1/2 overflow-hidden px-3 absolute z-20 top-0`}
          style={{
            originX: 0.5,
            originY: 1,
            rotateY: 180,
            rotateX: 0,
            rotateZ: 0,
            y: 1
          }}
          animate={controls2}
        >
          <motion.div style={{ rotateZ: 180 }}>
            {updatedNumber &&
              (updatedNumber > 9
                ? updatedNumber
                : '0' + updatedNumber.toString())}
          </motion.div>
        </ClippedCornersDiv>
      </div>
      <div className={`relative z-0`}>
        <ClippedCornersDiv className="bg-[#343650] text-[#fb6087] h-1/2 overflow-hidden -top-1/2 relative px-3 z-0"
          style={{y: 1}}>
          <div className="-translate-y-1/2">
            {currentNumber &&
              (currentNumber > 9
                ? currentNumber
                : '0' + currentNumber.toString())}
          </div>
        </ClippedCornersDiv>
      </div>
    </div>
  )
}

export default Level2AnimatedTimerPieceComponent
