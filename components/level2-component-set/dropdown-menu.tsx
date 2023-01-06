import { useEffect, useState } from 'react'
import Lvl2ExpandMoreIcon from '../../public/lvl2-dropdown-menu/expand_more'
import { useAnimationControls, motion } from 'framer-motion'
import Lvl2MenuBurgerIcon from '../../public/lvl2-advice-generator/menu_burger'
import Lvl2CloseMenuIcon from '../../public/lvl2-advice-generator/close_menu'

const Level2DropdownMenuComponent = () => {
  const [featuresDropdown, setFeaturesDropdown] = useState(false)
  const [companyDropdown, setCompanyDropdown] = useState(false)

  const [sideNavOpen, setSideNavOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const controls = useAnimationControls()
  const controlsBg = useAnimationControls()

  const watchPageResizeBreakpoint = () => {
    if (window.outerWidth > 768) {
      setIsMobile(false)
      setSideNavOpen(false)
      setCompanyDropdown(false)
      setFeaturesDropdown(false)
    } else {
      setIsMobile(true)
    }
  }

  const closeSideNav = () => {
    controlsBg
      .start({
        opacity: 0,
        transition: { duration: 0.6, ease: 'easeIn' },
      })
      
    controls
      .start({
        x: '100vw',
        transition: { duration: 0.6, ease: 'easeIn' },
      })
      .then(() => {
        setSideNavOpen(false)
      })
  }

  const openSideNav = () => {
    const request = new Promise<void>(resolve => {
      setSideNavOpen(true)
      resolve()
    })

    request.then(() => {
      controlsBg
      .start({
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeIn' },
      })

      controls.start({
        x: 0,
        transition: { duration: 0.6, ease: 'easeIn' },
      })
    })
  }

  useEffect(() => {
    window.addEventListener('resize', watchPageResizeBreakpoint)

    watchPageResizeBreakpoint()

    return () => {
      // Cleanup the event listener
      window.removeEventListener('resize', watchPageResizeBreakpoint)
    }
  }, [])

  return (
    <div className="absolute top-0 md:left-0 right-0 w-full bg-[#fafafa] text-[#141414] flex justify-center">
      <div className="max-w-screen-xl relative px-6 md:px-4 flex-grow flex items-center justify-between md:justify-center">
        <div className="text-xl font-[700] px-6 py-4 md:mx-14">
          <span className="tracking-[0.4rem]">LOGO</span>
        </div>
        {
          (!isMobile || sideNavOpen) && 
          <motion.div className='absolute md:hidden z-10 bg-[#141414]/40 w-screen h-screen top-0 left-0' initial={{opacity: 0}} animate={controlsBg}>
          </motion.div>
        }
        {(!isMobile || sideNavOpen) && (
          <motion.div
            className="flex md:flex-grow flex-col md:flex-row absolute md:relative z-20 md:z-0 top-0 bg-[#fafafa] h-screen md:h-auto md:min-h-0 overflow-y-scroll md:overflow-y-auto right-0 pb-14 md:pb-0"
            initial={{ x: isMobile ? '100vw' : 0 }}
            animate={controls}
          >
            <div
              className="md:hidden flex justify-center self-end mr-10 mb-4 items-center p-4 fill-[#141414]] w-16 h-16 hover:fill-[#696969] hover:cursor-pointer"
              onClick={closeSideNav}
            >
              <Lvl2CloseMenuIcon />
            </div>
            <div className="flex md:flex-grow flex-col md:flex-row px-8 md:px-0 mb-4 md:mb-0">
              <div className="relative">
                <div
                  className="text-sm font-[500] px-6 py-4 flex items-center hover:fill-[#696969] hover:text-[#696969] hover:cursor-pointer"
                  onMouseOver={() => {if(!isMobile) setFeaturesDropdown(true)}}
                  onMouseLeave={() => {if(!isMobile) setFeaturesDropdown(false)}}
                  onClick={() => {if(isMobile) setFeaturesDropdown(!featuresDropdown)}}
                >
                  Features{' '}
                  <motion.span
                    className="w-6 h-6"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: featuresDropdown ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Lvl2ExpandMoreIcon />
                  </motion.span>
                </div>
                {featuresDropdown && (
                  <div className="relative md:absolute md:top-full flex flex-col bg-[#fafafa] p-2">
                    <div className="text-sm font-[500] px-6 py-4 hover:text-[#696969] hover:cursor-pointer">
                      Todo List
                    </div>
                    <div className="text-sm font-[500] px-6 py-4 hover:text-[#696969] hover:cursor-pointer">
                      Calendar
                    </div>
                    <div className="text-sm font-[500] px-6 py-4 hover:text-[#696969] hover:cursor-pointer">
                      Reminders
                    </div>
                    <div className="text-sm font-[500] px-6 py-4 hover:text-[#696969] hover:cursor-pointer">
                      Planning
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <div
                  className="text-sm font-[500] px-6 py-4 flex items-center hover:fill-[#696969] hover:text-[#696969] hover:cursor-pointer"
                  onMouseOver={() => {if(!isMobile) setCompanyDropdown(true)}}
                  onMouseLeave={() => {if(!isMobile) setCompanyDropdown(false)}}
                  onClick={() => {if(isMobile) setCompanyDropdown(!companyDropdown)}}
                >
                  Company{' '}
                  <motion.span
                    className="w-6 h-6"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: companyDropdown ? 180 : 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Lvl2ExpandMoreIcon />
                  </motion.span>
                </div>
                {companyDropdown && (
                  <div className="relative md:absolute md:top-full  flex flex-col bg-[#fafafa] p-2">
                    <div className="text-sm font-[500] px-6 py-4 hover:text-[#696969] hover:cursor-pointer">
                      History
                    </div>
                    <div className="text-sm font-[500] px-6 py-4 hover:text-[#696969] hover:cursor-pointer">
                      Our Team
                    </div>
                    <div className="text-sm font-[500] px-6 py-4 hover:text-[#696969] hover:cursor-pointer">
                      Blog
                    </div>
                  </div>
                )}
              </div>
              <div className="text-sm font-[500] px-6 py-4 hover:text-[#696969] hover:cursor-pointer">
                Careers
              </div>
              <div className="text-sm font-[500] px-6 py-4 hover:text-[#696969] hover:cursor-pointer">
                About
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center mx-16 md:mx-0">
              <div className="text-sm font-[500] px-6 py-4 hover:text-[#696969] hover:cursor-pointer">
                Login
              </div>
              <div className="text-sm font-[500] mx-2 my-2 px-14 md:px-4 py-2 rounded-2xl border-2 border-[#141414] hover:border-[#696969] hover:text-[#696969] hover:cursor-pointer">
                Register
              </div>
            </div>
          </motion.div>
        )}
        <div
          className="md:hidden flex justify-center items-center p-4 fill-[#141414]] w-16 h-16 hover:fill-[#696969] hover:cursor-pointer"
          onClick={openSideNav}
        >
          <Lvl2MenuBurgerIcon />
        </div>
      </div>
    </div>
  )
}

export default Level2DropdownMenuComponent
