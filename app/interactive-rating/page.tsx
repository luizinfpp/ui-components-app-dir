"use client"
import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const Screen = styled.div`
    background-color: #141519;
    width: 100%;
    height: 100%;
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

const ContainerPages = styled(motion.div)`
    width: 380px;
    height: 100%;
    position: absolute;
    padding: 35px;

    color: white;
    font-family: 'Overpass', 'sans-serif';

    #starContainer {
        background-color: #282e36;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
    }

    #thankYouContainer {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        h4 {
            font-weight: 400;
            font-size: 0.9rem;
            margin: 25px 0;
            padding: 10px 15px;
            border-radius: 20px;
            color: hsl(25, 97%, 53%);
            background-color: #282e36;
        }

        h2 {
            margin: 20px 0;
            font-size: 1.7rem;
        }

        p {
            text-align: center;
        }
    }

    h2 {
        color: white;
        font-family: 'Overpass', 'sans-serif';
        margin: 30px 0 20px 0;
    }

    p {
        font-size: 15px;
        color: hsl(217, 12%, 63%);
        line-height: 1.5rem;
    }

    button {
        margin: 5px 0;
        width: 100%;
        height: 44px;
        background-color: hsl(25, 97%, 53%);
        border: none;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            margin: 0;
            padding: 0;
            font-family: 'Overpass', 'sans-serif';
            text-transform: uppercase;
            color: white;
            font-size: 0.9rem;
            letter-spacing: 0.3rem;
            font-weight: 700;
        }

        &:hover {
            p {
                color: hsl(25, 97%, 53%);
            }

            background-color: white;
            cursor: pointer;
        }
    }
`

const RadioGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;

    div {
        background-color: #282e36;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: hsl(216, 12%, 54%);
            cursor: pointer;

            p {
                color: white;
            }
        }

        &.selected {
            background-color: hsl(25, 97%, 53%);

            p {
                color: white;
            }
        }
    }

    p {
        margin: 0;
        position: relative;
        top: 2px;
        vertical-align: center;
    }
`

const InteractiveRatingPage = () => {
    let buttons = Array.from({ length: 5 }, (_, i) => i + 1) //start in 1

    const [currentBtn, setCurrentBtn] = useState(0)
    const [isSelected, setIsSelected] = useState(false)

    const RadioSelect = (key: number) => {
        setCurrentBtn(key)
    }

    return (
        <Screen>
            <Container>
                <AnimatePresence mode='wait'>
                    {!isSelected && (
                        <ContainerPages
                            key="firstPage"
                            initial={{ x: 500 }}
                            animate={{ x: 0 }}
                            exit={{ x: -500 }}
                        >
                            <span id="starContainer">
                                <img
                                    src="interactive-rating-icon-star.svg"
                                    alt="Star"
                                />
                            </span>
                            <h2>How did we do?</h2>
                            <p>
                                Please let us know how we did with your support
                                request. All feedback is appreciated to help us
                                improve our offering!
                            </p>
                            <RadioGroup>
                                {buttons.map(b => {
                                    return (
                                        <div
                                            key={b}
                                            onClick={() => RadioSelect(b)}
                                            className={
                                                currentBtn == b
                                                    ? 'selected'
                                                    : ''
                                            }
                                        >
                                            <p>{b}</p>
                                        </div>
                                    )
                                })}
                            </RadioGroup>
                            <button
                                onClick={() => {
                                    setIsSelected(true)
                                }}
                            >
                                <p>Submit</p>
                            </button>
                        </ContainerPages>
                    )}
                    {isSelected && (
                        <ContainerPages
                            key="secondPage"
                            initial={{ x: 500 }}
                            animate={{ x: 0 }}
                            exit={{ x: -500 }}
                        >
                            <div id="thankYouContainer">
                                <img
                                    src="interactive-rating-thank-you.svg"
                                    alt="Thank You"
                                />
                                <h4>You selected {currentBtn} of 5</h4>
                                <h2>Thank you!</h2>
                                <p>
                                    We appreciate you taking the time to give a
                                    rating. If you ever need more support, don’t
                                    hesitate to get in touch!
                                </p>
                            </div>
                        </ContainerPages>
                    )}
                </AnimatePresence>
            </Container>
        </Screen>
    )
}

export default InteractiveRatingPage
