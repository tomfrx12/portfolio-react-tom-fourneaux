import { Link } from "react-router";

export default function ButtonNav({children, link, className = ""}) {
    return (
        <Link to={`/${link}`} className={`relative flex-col p-8 ${className}`} onClick={() => window.scrollTo(0, 0)}>
            <a
                href=""
                className="group relative inline-block cursor-pointer align-middle text-center min-h-[30px] no-underline select-none"
            >
                <span className="relative block bg-(--color-primary) px-5 py-2.5 text-[#EBEBEB] transition-all duration-500">
                    {children}
                </span>

                <svg
                    className="pointer-events-none absolute h-[calc(100%)] w-[calc(100%)] overflow-visible scale-y-[-1] transition-transform duration-1000 ease-in-out delay-0 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:delay-800"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="-8"
                        y="50"
                        width="100%"
                        height="100%"
                        fill="none"
                        stroke="#EBEBEB"
                        strokeWidth="2"
                        pathLength="100"
                        className="[stroke-dasharray:100] [stroke-dashoffset:100] transition-all duration-1000 ease-in-out group-hover:[stroke-dashoffset:0]"
                    />
                </svg>
            </a>
        </Link>
    );
};

