import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  flex-wrap: ${(props) => (props.flexWrap ? "wrap" : "nowrap")};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
`;

export default FlexBox;
