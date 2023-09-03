import { useEffect } from "react";

/**
 * Represents the Loader component.
 * Displays an animated loader with SVG icons.
 *
 * @component
 * @param {function} setShowLoader - A function to set whether the loader should be displayed.
 */

const Loader = ({ setShowLoader }) => {
  useEffect(() => {
    // Automatically hide the loader after a delay
    setTimeout(() => {
      setShowLoader(false);
    }, 2800);
  }, [setShowLoader]);

  // Animation variants for the SVG icons
//   const iconVariant1 = {
//     hidden: {
//       pathLength: 0,
//       fill: "rgb(19, 26, 34)",
//     },
//     visible: {
//       pathLength: 5,
//       fill: "rgb(243, 243, 243)",
//       stroke: "rgb(243, 243, 243)",
//       strokeWidth: 3,
//       scale: 0,
//       transition: {
//         default: { duration: 3, ease: "easeIn" },
//         fill: { duration: 3, ease: [1, 0, 0.8, 1] },
//         stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
//         scale: { duration: 3, ease: [1, 1, 0.5, 0] },
//       },
//     },
//   };

//   const iconVariant2 = {
//     hidden: {
//       pathLength: 0,
//       fill: "rgb(19, 26, 34)",
//     },
//     visible: {
//       pathLength: 5,
//       fill: "rgb(72, 163, 198)",
//       stroke: "rgb(72, 163, 198)",
//       scale: 0,
//       strokeWidth: 3,
//       transition: {
//         default: { duration: 3, ease: "easeIn" },
//         fill: { duration: 3, ease: [1, 0, 0.8, 1] },
//         stroke: { duration: 3, ease: [1, 0, 0.8, 1] },
//         scale: { duration: 3, ease: [1, 1, 0.5, 0] },
//       },
//     },
//   };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {/* Animated SVG */}
   
    </div>
  );
};

export default Loader;