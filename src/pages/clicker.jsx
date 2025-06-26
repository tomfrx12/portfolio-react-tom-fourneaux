import { Text } from "../components/texte";

function Clicker() {
    return (
        <>
            <div className="flex flex-col justify-center justify-items-center h-screen">
                <Text size="base" className="flex justify-center">404</Text>
                <Text tag="p" size="base" className="flex justify-center">Page Not Found</Text>
            </div>
        </>
    )
}

export default Clicker;