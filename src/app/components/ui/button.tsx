type Props = {
    text:string;
    size: 1 | 2 | 3;
    onClick:() => void;
}

export const Button = ({text,onClick, size}:Props) => {
    return(
        <button
            className={`flex justify-center items-center bg-white px-6 py-3 rounded-3xl text-black font-bold
                ${size === 1 && "h-14 text-lg"}
                ${size === 2 && "h-10 text-md"}
                ${size === 3 && "h-7 text-xs"}
                `}
            onClick={onClick}
         >
            {text}
        </button>
    );
}