import React from "react";

interface TextInputProps {
    type: string;
    name: string;
    isRequire?: boolean
    className?: string
    placeholder?: string
    value: any;
    label?: string
    labelClassName?: string
    min?: number;
    max?: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// component for TextFieldInput
const TextInput: React.FC<TextInputProps> = ({
    type,
    name,
    isRequire = false,
    className,
    placeholder = "",
    value,
    label,
    labelClassName,
    max,
    min,
    onChange
}) => {

    var defaultClassName = "w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
    var defaultLabelClassName = "text-gray-800 text-sm block mb-2";

    return (
        <>
            <label 
            htmlFor={label} 
            className={`${defaultLabelClassName} ${labelClassName || ""}`.trim()}
            >
                {label || name}
            </label>
            <div className="relative flex items-center">
                <input
                    type={type}
                    name={name}
                    className={`${defaultClassName} ${className || ""}`.trim()}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={isRequire}
                    maxLength={max}
                    minLength={min}
                />
            </div>
        </>


    )
}


export default TextInput