import { Text } from "./texte";

export const PresentationIndex = ({children}) => {
    return (
        <Text tag="p" size="base" className="border-l-5 border-l-[#ff6347] m-[0px 0px 20px 20px] px-[15px] mt-10">
            {children}
        </Text>
    );
}