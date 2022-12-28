'use client'
import { useEffect, useRef, useState } from 'react'
import { Manrope } from '@next/font/google'
import ArticleShareArrowSvg from '../../public/article-share-icon-share'
import ArticleShareFacebookSvg from '../../public/article-share-icon-facebook'
import ArticleSharePinterestSvg from '../../public/article-share-icon-pinterest'
import ArticleShareTwitterSvg from '../../public/article-share-icon-twitter'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const manrope = Manrope({ subsets: ['latin'], weight: ['500', '700'] })

const ArticleShareBaloon = styled.div`
  //for the baloon drawing
  &:before {
    content: '';
    position: absolute;
    top: -webkit-calc(
      100% - 10px
    ); /*may require prefix for old browser support*/
    top: calc(100% - 10px); /*i.e. half the height*/
    left: calc(50% - 7px); /* centralize horizontally */
    left: -webkit-calc(50% - 8px);
    height: 20px;
    width: 20px;
    background: #48556a;
    transform: rotate(45deg);
    border-bottom: inherit;
    border-right: inherit;
    box-shadow: inherit;
  }
`

const ArticleShareMobileStrip = styled.div`
  mask: linear-gradient(to left, #fff 0% 49.999%, transparent 50% 100%);
  mask-size: 200% 100%;
  mask-position: 0% 0%;

  @keyframes mask-reveal {
      0% {
        mask-position: left;
      }

      100% {
        mask-position: right;
      }
    }

    @keyframes mask-reveal-rev {
      0% {
        mask-position: right;
      }

      100% {
        mask-position: left;
      }
    }

  &.animated {
    animation: mask-reveal 0.5s 0s ease forwards;
  }

  &.animated-reverse {
    animation: mask-reveal-rev 0.5s 0s ease forwards;
  }
`

const ArticleShareCardPage = () => {
  const [shareActive, setShareActive] = useState<boolean>(false)
  const [baloonWidth, setBaloonWidth] = useState<number>(0)
  const [shareBtnPosition, setShareBtnPosition] = useState({ x: 0, y: 0 })
  const [showBaloon, setShowBaloon] = useState(false)

  const shareRef = useRef<HTMLDivElement>(null)
  const baloonRef = useRef<HTMLDivElement>(null)

  const ResizePageBaloonPositioning = () => {
    //put the baloon on right position
    let rect = shareRef.current?.getClientRects()
    let btnX: number, btnY: number
    let btnW: number

    if (rect && rect[0].left) btnX = rect[0].left
    else btnX = 0
    if (rect && rect[0].top) btnY = rect[0].top
    else btnY = 0
    if (rect && rect[0].width) btnW = rect[0].width
    else btnW = 0

    setShareBtnPosition({
      x: btnX - baloonWidth / 2 + btnW / 2 - 3,
      y: btnY - 75,
    })

    //giver 200ms to evaluate proper postion and baloon appeas without translate
    setTimeout(() => {
      setShowBaloon(true)
    }, 200)
  }

  const ShareBtnClick = () => {
    let s: boolean = shareActive
    setShareActive(!s)

    if (showBaloon == true) setShowBaloon(false)
  }

  useEffect(() => {
    const closeShareWhenClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu, then close the menu
      if (
        shareActive &&
        shareRef.current &&
        !shareRef.current.contains(e.target)
      ) {
        setShareActive(false)
      }
    }

    document.addEventListener('mousedown', closeShareWhenClickedOutside)
    window.addEventListener('resize', ResizePageBaloonPositioning)

    ResizePageBaloonPositioning()

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', closeShareWhenClickedOutside)
      window.removeEventListener('resize', ResizePageBaloonPositioning)
    }
  }, [shareActive, baloonWidth])

  return (
    <div
      className={`${manrope.className} bg-[#ecf2f8] relative flex justify-center items-center w-[100vw] h-[100vh] md:py-0 font-[500]`}
      onResize={ResizePageBaloonPositioning}
    >
      <div
        id="card"
        className="bg-white rounded-md overflow-hidden w-[70vw] h-[90vh] md:h-[60vh] drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] grid md:grid-cols-5 md:grid-rows-1 grid-rows-5 grid-cols-1"
      >
        <div className="md:col-span-2 row-span-2 md:h-auto relative">
          <img
            src="article-share-drawers.jpg"
            alt=""
            className="object-cover object-center h-[100%] w-[100%]"
          />
        </div>
        <div className="md:p-8 flex flex-col md:justify-center justify-between md:col-span-3 row-span-3">
          <h1 className="text-[#48556a] md:text-2xl text-lg mb-3 md:mt-0 mt-8 md:px-0 px-8 font-[700] leading-normal select-none">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="text-[#6d7f97] leading-relaxed md:text-md text-sm md:px-0 px-8">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="flex md:h-16 h-24 mt-4 gap-2 w-[100%] relative md:px-0 px-8 md:pb-0 pb-6 md:pt-0 pt-4">
            <div className="rounded-[50%] overflow-hidden">
              <img src="article-share-avatar.jpg" alt="" className="h-[100%]" />
            </div>
            <div className="flex flex-col justify-center">
              <h5 className="text-sm md:text-md font-[700] text-[#48556a]">
                Michelle Appleton
              </h5>
              <p className="text-xs md:text-sm text-[#9eafc2]">28 Jun 2020</p>
            </div>
            <div className="flex-grow"></div>
            <div className="flex flex-col justify-center relative">
              {/* {shareActive && (
                <ArticleShareBaloon
                  //using ref to make previous div same size - easier to centralize
                  ref={baloonRef => {
                    if (baloonRef) {
                      setBaloonWidth(baloonRef.clientWidth)
                    }
                  }}
                  className={`fixed flex px-5 py-4 rounded-md gap-3 top-0 fill-white bg-[#48556a]`}
                  style={{
                    top: '-55px',
                    left: '49%',
                    transform: 'translate(-50%, 0)',
                  }}
                >
                  <p className="text-white/70 tracking-[0.35em] text-sm ">
                    SHARE
                  </p>
                  <ArticleShareTwitterSvg />
                  <ArticleSharePinterestSvg />
                  <ArticleShareFacebookSvg />
                </ArticleShareBaloon>
              )} */}
              <div
                onClick={ShareBtnClick}
                ref={shareRef}
                className={`mx-6 rounded-full p-2 hover:cursor-pointer hover:fill-white z-20 ${
                  shareActive
                    ? 'bg-[#48556a] fill-white hover:bg-[#6d7f97]'
                    : 'bg-[white] hover:bg-[#6d7f97] fill-[#48556a]'
                }`}
              >
                <ArticleShareArrowSvg />
              </div>
            </div>
            <ArticleShareMobileStrip className={`absolute top-0 left-0 bg-[#48556a] w-[100%] h-[100%] flex px-5 pb-6 pt-4 gap-3 justify-center items-center fill-white z-10 ${shareActive? "animated" : "animated-reverse"}`}>
              <p className="text-white/70 tracking-[0.35em] text-sm ">SHARE</p>
              <ArticleShareTwitterSvg />
              <ArticleSharePinterestSvg />
              <ArticleShareFacebookSvg />
              <div className="h-1 w-8"></div>
            </ArticleShareMobileStrip>
          </div>
        </div>
      </div>
      {shareActive && (
        <ArticleShareBaloon
          //baloon on absolute here to escape overflow
          ref={baloonRef => {
            if (baloonRef) {
              setBaloonWidth(baloonRef.clientWidth)
            }
          }}
          className={`fixed flex px-5 py-4 rounded-md gap-3 top-0 fill-white bg-[#48556a]`}
          style={{
            top: shareBtnPosition.y,
            left: shareBtnPosition.x,
            opacity: showBaloon ? 1 : 0,
          }}
        >
          <p className="text-white/70 tracking-[0.35em] text-sm ">SHARE</p>
          <ArticleShareTwitterSvg />
          <ArticleSharePinterestSvg />
          <ArticleShareFacebookSvg />
        </ArticleShareBaloon>
      )}
    </div>
  )
}

export default ArticleShareCardPage
