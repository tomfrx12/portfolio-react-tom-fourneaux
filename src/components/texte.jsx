// import { tv } from 'tailwind-variants';
// import PropTypes from "prop-types";
 
// const text = tv({
//   variants: {
//     name: {
//       h1: 'm-5 text-center bg-black text-base lg:text-2xl',
//     },
//     size: {
//       md: 'text-base lg:text-2xl',
//     },
//     align: {
//       center: "text-center",
//       left: "text-left",
//       right: "text-right",
//     },
//   },
//   compoundVariants: [
//     {
//       size: ["sm", 'md'],
//       align: ["center", "left", "right"],
//       tag: ["h1"],
//     }
//   ],
// });

// const Text = ({ tag: Tag, name, size, align, children, ...props}) => {
//   return (
//     <Tag className={text({name, size, align})}  {...props}>
//       {children}
//     </Tag>
//   );
// };

// Text.propTypes = {
//   tag: PropTypes.elementType.isRequired,
//   name: PropTypes.string,
//   size: PropTypes.string,
//   align: PropTypes.string,
//   children: PropTypes.node,
// };

// export {Text};