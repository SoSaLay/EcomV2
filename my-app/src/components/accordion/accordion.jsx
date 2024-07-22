import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import styles from './styles.scss'


function FAQAccordion() {
  return (
    <Accordion allowToggle className="faq-accordion">

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: 'teal.500', color: 'white' }}>
            <Box as="span" flex="1" textAlign="left">
            What services do you offer?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        We offer comprehensive market research services including demographic research, competitor analysis, financial modeling, strategic investment planning, and personalized business solutions.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: 'teal.500', color: 'white' }}>
            <Box as="span" flex="1" textAlign="left">
            How do you ensure the accuracy of your research?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Our team uses a combination of advanced data analytics, industry expertise, and thorough validation processes to ensure the accuracy and reliability of our research findings.
        </AccordionPanel>
      </AccordionItem>


      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: 'teal.500', color: 'white' }}>
            <Box as="span" flex="1" textAlign="left">
            What is the typical turnaround time for a project?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        The turnaround time depends on the scope and complexity of the project. Typically, projects are completed within 4-6 weeks. We provide a detailed timeline in our project proposal.
        </AccordionPanel>
      </AccordionItem>



      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: 'teal.500', color: 'white' }}>
            <Box as="span" flex="1" textAlign="left">
            How much do your services cost?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        The cost varies based on the specific needs and scope of the project. We offer customized pricing and provide a detailed cost breakdown in our proposal after discussing your requirements.
        </AccordionPanel>
      </AccordionItem>



      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: 'teal.500', color: 'white' }}>
            <Box as="span" flex="1" textAlign="left">
            Can you provide examples of past projects or case studies?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        Yes, we can share anonymized case studies and examples of past projects upon request. These will give you an idea of our expertise and the impact of our work.
        </AccordionPanel>
      </AccordionItem>


    </Accordion>
  );
}

export default FAQAccordion;
