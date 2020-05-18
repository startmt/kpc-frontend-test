import React from "react";
import styled from "styled-components";
interface SectionProps extends React.HTMLProps<SVGElement> {
  size: number;
  children: React.ReactElement;
}
const Section = ({ size, children, ...rest }: SectionProps) => {
  return (
    <SectionWrapper size={size} {...rest}>
      {children}
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div.attrs((props: SectionProps) => ({
  size: props.size || 1,
}))`
  padding-top: ${(props: SectionProps) => props.size * 8}px;
`;

export default Section;
