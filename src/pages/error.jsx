import NicoJr from "../assets/img/error-clicker/face_nico_jr.png"

function Error() {
    return (
        <>
        <div className="flex flex-col justify-center justify-items-center h-screen">
            <h1 className="text-xl flex justify-center lg:text-8xl">404</h1>
            <p className="text-sm flex justify-center lg:text-3xl">Page Not Found</p>
        </div>
        <div className="flex justify-center">
            <img src={NicoJr}/>
        </div>
        </>
    )
}

export default Error;