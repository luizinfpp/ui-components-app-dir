'use client'
import { motion, useAnimationControls } from "framer-motion";
import styled from "styled-components";

type ToggleSwitchProps = {
  label: string,
  value: boolean,
  setValue: Function
}

const Lvl2ToggleSwitchComponent = ({ label, value, setValue } : ToggleSwitchProps) => {

  const controls = useAnimationControls();

  const ToggleValue = () => {
    let val = value;

    if(val){
      controls.start({
        left: 0, right: 'auto',
        transition: {duration: 0.3}
      }).then(() => setValue(!val));
    }else{
      controls.start({
        left: 'auto', right: 0,
        transition: {duration: 0.3}
      }).then(() => setValue(!val));
    }
  }

  return (
    <div className="w-full">
      {label}{" "}
      <div className="w-full" onClick={ToggleValue}>
        <input type="checkbox" className="checkbox hidden" 
               name={label} checked={value} onChange = {() => {}}/>
        <motion.div className={`w-full h-12 relative rounded-3xl bg-[#11115a] flex items-center justify-center`}>
          <motion.div className="absolute my-auto mx-2 rounded-full bg-white h-8 w-8" initial={{left: (value? 'auto': 0), right: (value? 0: 'auto')}} animate={controls}></motion.div>
        </motion.div>
      </div>
    </div>
  );
};
  
export default Lvl2ToggleSwitchComponent;