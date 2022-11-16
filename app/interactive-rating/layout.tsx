"use client"
import * as React from 'react'
import styled from 'styled-components'
import { AnimatePresence } from 'framer-motion'

const Screen = styled.div`
  background-color: #141519;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  @media (max-width: 650px) {
    width: 350px;
  }

  @media (min-width: 650px) {
    width: 450px;
    height: 430px;
  }

  background-color: #1f2630;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`

const InteractiveRatingLayout = ({ children }: any) => {
  return (
    <Screen>
      <Container>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </Container>
    </Screen>
  )
}

export default InteractiveRatingLayout
