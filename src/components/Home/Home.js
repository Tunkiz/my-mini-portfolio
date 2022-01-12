import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HomeStyles';
import { FaSmileWink } from 'react-icons/fa';

const Hero = (props) => (
  <>
    <Section row nopadding id="home">
      <LeftSection>
        <SectionTitle main center>
          Hi, i'm Tunkis<FaSmileWink size="4rem" />. Welcome. <br />
          
        </SectionTitle>
        <SectionText>
        I am a BSc graduate with Honours degree in Computer Sciences at University of Venda. I have the hunger to gain experience in the software development industry. 
        I am a Confident, Honourable and Loving person. Software development is my passion and I love exploring new technologies.
        </SectionText>
        <SectionText>
           
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
