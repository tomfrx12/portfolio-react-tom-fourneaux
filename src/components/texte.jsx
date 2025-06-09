import { tv } from 'tailwind-variants';
import PropTypes from "prop-types";
 
const text = tv({
  variants: {
    name: {
      h1: 'p-[5px] text-center text-xl lg:text-4xl',
      h2: 'm-[0] text-center text-lg lg:text-3xl',
      h3: 'm-[0] text-lg lg:text-3xl',
    },
    size: {
      base: 'text-base lg:text-2xl',
      lg: 'text-lg lg:text-3xl',
      xl: 'text-xl lg:text-4xl',
    },
    align: {
      center: "text-center",
      left: "text-left",
      right: "text-right",
    },
    background: {
      black: "bg-black",
      white: "bg-white",
    },
    color: {
      black: "text-black",
      white: "text-white",
    },
  },
});

export const Text = ({ tag: Tag, name, size, align, background, color, children, className}) => {
  return (
    <Tag className={text({name, size, align, background, color, className})}>
      {children}
    </Tag>
  );
};

Text.propTypes = {
  tag: PropTypes.elementType.isRequired,
  name: PropTypes.string,
  size: PropTypes.string,
  align: PropTypes.string,
  background: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.node,
};