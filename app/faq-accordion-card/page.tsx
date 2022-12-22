import { Kumbh_Sans } from '@next/font/google'
import { useState } from 'react'
import { motion } from 'framer-motion'
import AccordionComponent from '../../components/accordion'

const kumbh = Kumbh_Sans({ subsets: ['latin'], weight: ['400', '700'] })

const FaqAccordionCardPage = () => {
  
  const accordionContent = [
    {
      title: "How many team members can I invite?",
      content:
        'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    },
    {
      title: 'What is the maximum file upload size?',
      content:
        'No more than 2GB. All files in your account must fit your allotted storage space.',
    },
    {
      title: 'How do I reset my password?',
      content:
        'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    },
    {
      title: 'Can I cancel my subscription?',
      content:
        'Yes! Send us a message and we’ll process your request no questions asked.',
    },
    {
      title: 'Do you provide additional support?',
      content:
        'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
    },
  ]

  return (
    <div
      className={`${kumbh.className} bg-gradient-to-b from-[#af67e9] to-[#6565e7] flex justify-center items-center w-[100vw] md:h-[100vh] py-16 md:py-0`}
    >
      <div
        id="card"
        className="bg-white rounded-md w-[70vw] md:h-[70vh] drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] grid md:grid-cols-2 grid-flow-row"
      >
        <div className="h-[50vh] md:h-auto relative">
          <div className="absolute top-0 -left-[10%] w-[100%] h-[100%] flex justify-center items-center">
            <img src="faq-accordion-woman.svg" alt="" className="w-[100%]" />
          </div>
        </div>
        <div className="p-8 flex flex-col justify-center ">
          <h1 className="text-black text-4xl my-3 font-[700] leading-normal">
            FAQ
          </h1>

          <AccordionComponent accordionContent={accordionContent} />
        </div>
      </div>
    </div>
  )
}

export default FaqAccordionCardPage
