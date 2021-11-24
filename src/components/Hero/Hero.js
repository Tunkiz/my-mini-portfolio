import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding id="home">
      <LeftSection>
        <SectionTitle main center>
          Hi, i'm Tunkis😎. Welcome. <br />
          
        </SectionTitle>
        <SectionText>
            I am a talented Computer Science graduate with hunger to gain experience in the software development industry. 
            I am a Confident, Honourable and Loving person. Software development is my passion.
        </SectionText>
        <SectionText>
            I want to be a developer at <b>SovTech</b> because i want to learn from the best. I read the company’s mission and vision. After finding out
            more information about your company from social media, I can clearly see how my goals align with the purposes of the
            company. There's nothing I love more than when I am working with other engaged individuals towards a common goal,
            and that's what excited me about this opportunity. <b>i have the artistry, engineering and i can work with people.</b>
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;