// import styled, { css } from "styled-components";

// const Row = styled.div`
//   display: flex;

//   ${(props) =>
//     props.type === "horizontal" &&
//     css`
//       justify-content: space-between;
//       align-items: center;
//     `}

//   ${(props) =>
//     props.type === "vertical" &&
//     css`
//       flex-direction: column;
//       gap: 1.6rem;
//     `}
// `;

// Row.defaultProps = {
//   type: "vertical",
// };

export default function Row({children}){
  return <div className="flex justify-between">
    {children}
  </div>
}
