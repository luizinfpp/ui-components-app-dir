import { motion } from "framer-motion"

type AccordionOptionProps = {
  accordionSelected: number,
  SelectAccordionOption: Function,
  title: string,
  content: string,
  index: number
};

const AccordionOptionComponent = ({accordionSelected, SelectAccordionOption, title, content, index} : AccordionOptionProps) => {
  return (
    <div className="my-3">
      <div
        className={`text-md hover:text-[#f47c57] ${
          accordionSelected == index
            ? 'font-[700] text-[#1d1e35]'
            : 'text-[#4a4b5e]'
        } hover:cursor-pointer flex justify-between items-center`}
      >
        <div onClick={() => SelectAccordionOption(index)}>
          {title}
        </div>
        <motion.img src="faq-accordion-arrow-down.svg" alt="" className="h-[100%]" animate={{ rotate: accordionSelected == index ? 180 : 0}} transition={{duration: 0.6}}/>
      </div>

      <motion.div
        className="text-sm text-[#787887] overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: accordionSelected == index ? '' : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="pt-3">
          {content}
        </div>
      </motion.div>
    </div>
  )
}

export default AccordionOptionComponent
