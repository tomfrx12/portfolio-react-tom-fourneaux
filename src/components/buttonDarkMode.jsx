const ButtonDarkMode = ({ itsDark }) => {
    return (
        <div className={`flex items-center justify-center border border-[#efefef] rounded-[10px] h-[46px] w-[46px] m-auto relative cursor-pointer transition-all duration-500 ${itsDark ? 'bg-[var(--color-red-background-dark)]' : 'bg-[var(--color-red-background)]'}`}>
            <img src="/svg/sun.svg" alt="sun" className={`absolute w-5 h-5 transition-all duration-500 z-1 ${itsDark ? 'opacity-0' : 'opacity-100'}`}/>
            <img src="/svg/moon.svg" alt="moon" className={`absolute w-4 h-4 transition-all duration-500 z-1 ${itsDark ? 'opacity-100' : 'opacity-0'}`}/>
        </div>
    );
}

export default ButtonDarkMode;