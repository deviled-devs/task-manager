import React, {useState} from 'react';

import styled from 'styled-components';
// import { Spring, config } from "react-spring";

const FabStyles = styled.div`
background: linear-gradient(0deg, #894FC6, #894FC6), #894FC6;
border-radius: 20px;

position: absolute;
right: 2.7%;
left: 93%;
top: 85.4%;
bottom: 6.44%;

color: #FFFFFF;

box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.12), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
transition: box-shadow 0.2s;
:hover {
  cursor: pointer;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12), 0 8px 8px 0 rgba(0, 0, 0, 0.24);
}
`;

// const [open, setOpen] = useState(false);
// const [openIcon, closeIcon]  = useState(props);

// const ActionButton = (props) => {
//   const toggleOpenState = () => setOpen(({ open }) => ({ open: !open }));
//    const renderActions = () => {
//       const startDegree = 0;
//       const endDegree = 90;
//       const startRadian = (startDegree * Math.PI) / 180;
//       const endRadian = (endDegree * Math.PI) / 180;
  
//       const childrenCount = React.Children.count(props.children);
//       let offset = 0;
//       if (childrenCount > 1) {
//         offset = (endRadian - startRadian) / (childrenCount - 1);
//       }
  
//       return React.Children.map(props.children, (item, index) => {
//         const angle = startRadian + offset * index;
//         return (
//           <Spring
//             config={{
//               friction: 10,
//               tension: 180
//             }}
//             from={{ x: 0, y: 0, opacity: 0 }}
//             to={{
//               x: open ? Math.cos(angle) * 90 : 0,
//               y: open ? Math.sin(angle) * 90 : 0,
//               opacity: open ? 1 : 0
//             }}
//           >
//             {({ x, y, opacity }) => {
//               return React.cloneElement(item, {
//                 style: {
//                   transform: `translateX(${-x}px) translateY(${-y}px)`,
//                   opacity
//                 },
//                 onClick: e => {
//                   if (item.props.onClick) {
//                     item.props.onClick(e);
//                   }
//                   toggleOpenState();
//                 }
//               });
//             }}
//           </Spring>
//         );
//       });
//     };

//     return (
//       <div open={open}>
//         {renderActions()}
//           <Spring
//             config={config.wobbly}
//             from={{ degree: 0 }}
//             to={{ degree: open ? 45 : 0 }}
//           >
//             {/* {({ degree }) => {
//               return (
//                 <More
//                   isClickable
//                   style={{
//                     transform: `rotate(${degree}deg)`
//                   }}
//                 />
//               );
//             }} */}
//           </Spring>
//       </div>
//     );

// };

const Fab = () => {
  return(
    <FabStyles/>
  );
};


export default Fab;