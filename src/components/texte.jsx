import { tv } from 'tailwind-variants';
import PropTypes from "prop-types";
 
const text = tv({
  variants: {
    name: {
      h1: 'm-5 text-center bg-black text-base lg:text-2xl',
    },
    size: {
      md: 'text-base lg:text-2xl',
    },
    align: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
  },
});

const Text = ({ tag: Tag, name, size, align, children, className, ...props}) => {
  return (
    <Tag className={text({name, size, align, className})}  {...props}>
      {children}
    </Tag>
  );
};

Text.propTypes = {
  tag: PropTypes.elementType.isRequired,
  name: PropTypes.string,
  size: PropTypes.string,
  align: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.node,
};

export {Text};

// const Texte = ({ tag: Tag, balise, couleur = "classique", texte, lien, marge, padding, className, children }) => {
//   return (
//     <Tag className={texteTags({ balise, couleur, marge, padding, className })} href={lien}>
//       {children ? children : texte}
//     </Tag>
//   );
// };

// export { Texte };