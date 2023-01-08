'use client'
import { Epilogue } from '@next/font/google'
import Level2DropdownMenuComponent from '../../components/level2-component-set/dropdown-menu'

const epilogue = Epilogue({ subsets: ['latin'], weight: ['500', '700'] })

const Level2DropdownMenuPage = () => {

  return (
    <div
      className="bg-[#696969] overflow-hidden relative" // PROBLEM WITH OVERFLOW HIDDEN - Not hiding scrollbar - Solution: If you are trying to hide absolute positioned elements make sure the container of those absolute positioned elements is relatively positioned.
      style={{ width: '100vw', height: '100vh'}}
    >
      <div
        className={`${epilogue.className}`}
      >
        <Level2DropdownMenuComponent />
      </div>
    </div>
  )
}

export default Level2DropdownMenuPage