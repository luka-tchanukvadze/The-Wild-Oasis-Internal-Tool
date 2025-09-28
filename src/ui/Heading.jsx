import styled, { css } from "styled-components";

// const test = css`
// font-size: ${10 > 5 ? "30px" : "5px"};
//   text-align: center;
// background-color: var(--color-brand-50);
// `;

// /* ${test} */ down in heading
const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}


     ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

  line-height: 1.4;
`;

export default Heading;
