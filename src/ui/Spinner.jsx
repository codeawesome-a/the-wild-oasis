// import styled, { keyframes } from "styled-components";

// const rotate = keyframes`
//   to {
//     transform: rotate(1turn)
//   }
// `;

// const Spinner = styled.div`
//   margin: 4.8rem auto;

//   width: 6.4rem;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   background: radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000)
//       top/10px 10px no-repeat,
//     conic-gradient(#0000 30%, var(--color-brand-600));
//   -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
//   animation: ${rotate} 1.5s infinite linear;
// `;

// export default Spinner;
import React from "react";
function Spinner() {
  return (
    <div
      className="mx-auto my-20 w-16 aspect-square rounded-full 
                 animate-spinSlow 
                 bg-[radial-gradient(farthest-side,var(--color-brand-600)_94%,#0000)_top/10px_10px_no-repeat,conic-gradient(#0000_30%,var(--color-brand-600))] 
                 [mask-image:radial-gradient(farthest-side,#0000_calc(100%-10px),#000_0)] 
                 [--webkit-mask:radial-gradient(farthest-side,#0000_calc(100%-10px),#000_0)]"
    ></div>
  );
}

export default Spinner;
