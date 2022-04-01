import styled  from "styled-components";


interface Props {
    variant: string;
}

// primary  button
export const primaryButton = styled.button`

  background-color: #115FBF; 
  border: none;
  border-radius: 4px;
  width: ${(props: Props) => props.variant === "quiz" && "170px"};
  color: white;
  cursor: pointer;
  padding: 0.4em 1.0em;
  margin: 0.2em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
`;
// secondary button
export const secondaryButton = styled(primaryButton)`

background-color: white;
color: #115FBF;
border: 1px solid #115FBF;

`;