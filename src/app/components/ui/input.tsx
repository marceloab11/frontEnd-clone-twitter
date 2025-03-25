"use client";

import { faEye, faEyeSlash, IconDefinition } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
    placeholder:string;
    value?:string;
    onChange?:(newValue:string) => void;
    password?:boolean;
    filled?:boolean;
    icon?:IconDefinition;
}

export const Input = ({placeholder, value, onChange, password, filled, icon}:Props) =>{
    
    const [sowPassword, setShowPassword] = useState(false);
    
    return(
        <div className={`has-[:focus]:border-white flex items-center border-2 border-gray-700 h-14 rounded-3xl ${filled ? "bg-gray-700" : ""}`}>
            
               {icon &&
             <FontAwesomeIcon icon={icon} className="text-gray-500 ml-4" />
            }
            <input
            type={password && !sowPassword ? "password" : "text"}
            className="flex-1 h-full px-4 bg-transparent outline-none"
            placeholder={placeholder}
            onChange={e => onChange && onChange(e.target.value)}  
            value={value}
        />

        {password &&
            <FontAwesomeIcon
            icon={sowPassword ? faEye : faEyeSlash}
            className="cursor-pointer mr-4 size-6"
            onClick={() => setShowPassword(!sowPassword)}
            />
        }
        </div>
    )
}