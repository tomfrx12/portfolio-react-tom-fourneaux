import { Text } from "../components/texte";

function Error() {
    return (
        <>
            <div className="flex flex-col justify-center justify-items-center h-screen">
                <Text size="base" className="flex justify-center">404</Text>
                <Text tag="p" size="base" className="flex justify-center">Page Not Found</Text>
            </div>
            {/* <div className="flex justify-center">
                <img src={NicoJr}/>
            </div> */}
        </>
    )
}

export default Error;