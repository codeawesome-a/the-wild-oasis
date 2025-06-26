// import styled, { css } from "styled-components";

// // const test = css`
// //   text-align: center;
// //   ${10 > 5 && "background-color: yellow"}
// // `;

// const Heading = styled.h1`
//   ${(props) =>
//     props.as === "h1" &&
//     css`
//       font-size: 3rem;
//       font-weight: 600;
//     `}

//   ${(props) =>
//     props.as === "h2" &&
//     css`
//       font-size: 2rem;
//       font-weight: 600;
//     `}
    
//     ${(props) =>
//     props.as === "h3" &&
//     css`
//       font-size: 2rem;
//       font-weight: 500;
//     `}
    
//   line-height: 1.4;
// `;
import React from 'react';
export default function Heading({ as = "h1", children }) {
  const baseStyles = "leading-snug"; // line-height: 1.4 ≈ leading-snug

  const typeStyles = {
    h1: "text-4xl font-semibold", // ≈ 3rem
    h2: "text-2xl font-semibold", // ≈ 2rem
    h3: "text-2xl font-medium",   // ≈ 2rem with less weight
  };

  const Tag = as; // 'h1', 'h2', or 'h3'

  return <Tag className={`${baseStyles} ${typeStyles[as]}`}>{children}</Tag>;
}
