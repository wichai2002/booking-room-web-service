import React, { useState } from "react";

interface SelectBasicInput<T> {
    isRequire?: boolean;
    className?: string;
    includeClassName?: string;
    disabled?: boolean;
    options: any[];
    valueField: string; // The key to use for the `value` field
    labelField: string;
    defalutLable: string;
    defalutValue?: any;
    onChange?: (value: T[keyof T]) => void; // Callback when value changes
}


const SelectBasic = <T,>({
    options,
    valueField,
    labelField,
    onChange,
    includeClassName = '',
    isRequire = false,
    className = '',
    disabled = false,
    defalutLable,
    defalutValue = ''
}: SelectBasicInput<T>) => {

    var defaultSelectClassName = "bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-800 dark:gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"

    if (className != '') {
        defaultSelectClassName = className
    }

    if (includeClassName != '') {
        defaultSelectClassName = `${defaultSelectClassName} ${includeClassName}`
    }

    const [selectedValue, setSelectedValue] = useState<T[keyof T] | any>()

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as T[keyof T];
        setSelectedValue(value);
        if (onChange) {
          onChange(value);
        }
      };

    return (
        <>
            <select
                className={defaultSelectClassName}
                disabled={disabled}
                required={isRequire}
                onChange={handleChange}
                value={selectedValue}
            >
                <option value={defalutValue} selected>{defalutLable}</option>
                {
                    options.map((option, index) => (
                        <option key={index+1} value={option[valueField]}>
                            {(option[labelField])}
                        </option>
                    ))
                }
            </select>
        </>
    )
}

export default SelectBasic