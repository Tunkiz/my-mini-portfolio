import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HomeStyles';

const Hero = (props) => (
  <>
    <Section row nopadding id="home">
      <LeftSection>
        <SectionTitle main center>
          Hi, i'm Tunkis😎. Welcome. <br />
          
        </SectionTitle>
        <SectionText>
        I am a graduate currently doing Honours in Computer Sciences at University of Venda with the hunger to gain experience in the software development industry. 
        I am a Confident, Honourable and Loving person. Software development is my passion and I love exploring new technologies.
        </SectionText>
        <SectionText>
            I want to be a developer at <b>SovTech</b> because I want to learn from the best #WORLDCLASS. I read the company’s mission and vision and after finding out
            more information about the company from social media, I can clearly see how my goals align with the purposes of the
            company. There's nothing I love more than when I am working with other engaged individuals towards a common goal,
            and that's what excited me about this opportunity. <b>i have the artistry, engineering and I can work with people.</b>
            This opportunity will enable me to showcase my skills and be a valuable team member who is able to grow and lead others.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;