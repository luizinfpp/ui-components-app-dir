"use client"
import { useState } from "react"
import AccordionOptionComponent from "./accordionFiles/accordionOption"

type AccordionComponentPropsObject = {
  title: string,
  content: string
};

type AccordionComponentProps = {
  accordionContent: AccordionComponentPropsObject[];
};

const AccordionComponent = ({ accordionContent } : AccordionComponentProps) => {
  const [accordionSelected, setAccordionSelected] = useState<number>(0)

  const SelectAccordionOption = (index: number) => {
    if (accordionSelected == 0) setAccordionSelected(index)
    if (accordionSelected == index) setAccordionSelected(0)
    else setAccordionSelected(index)
  }

  return (
    <div id="accordion-faq" className="flex flex-col">
      {accordionContent.map((value, index) => {
        return(
          <AccordionOptionComponent key={index} accordionSelected={accordionSelected} SelectAccordionOption={SelectAccordionOption} title={value.title} content={value.content} index={index+1}/>
        );
      })}
      
    </div>
  )
}

export default AccordionComponent
