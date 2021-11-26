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
        I am a graduate currently doing Honours in Computer Sciences at University of Venda with the hunger to gain experience in the software development industry. 
        I am a Confident, Honourable and Loving person. Software development is my passion and I love exploring new technologies.
        </SectionText>
        <SectionText>
            I want to be a developer at <b>SovTech</b> because I want to learn from the best #WORLDCLASS. I read the company’s mission and vision. After conducting my research I realized how my goals align with the purposes of the
            company. I have nothing but respect for the technological innovations SovTech has been developing. And I want nothing more than to be a part of a company that is changing the world. I see that as a way of moving forward in 
            my career. <b>I have the artistry, engineering and I can work with people.</b>
            This opportunity will enable me to showcase my skills and be a valuable team member who is able to grow and lead others.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;