import { ErrorMessage, Field } from "formik"
import { InputFieldProps } from "../../interface/components"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({
    label,
    name,
    type,
    placeholder,
    className,
    id,
    error
} : InputFieldProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div className="flex flex-col gap-1">
            <span className="text-sm font-medium">{label}</span>
            {type === 'password' ? (
                <div className={`flex items-center gap-2 px-3 h-12 border rounded focus:outline-blue-500 ${className}`}>
                    <Field
                        type={isActive ? 'text' : 'password'}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        className={`placeholder:font-light text-sm flex flex-1 h-full focus:outline-none `}
                    />
                    {isActive ? 
                        <FaEyeSlash 
                            onClick={() => setIsActive(!isActive)} 
                            className="cursor-pointer"
                        /> : 
                        <FaEye 
                            onClick={() => setIsActive(!isActive)} 
                            className="cursor-pointer"
                        />
                    }
                </div>
            ) : (
                <Field
                    type={type}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className={`w-full h-12 indent-3 placeholder:font-light text-sm border rounded focus:outline-blue-500 ${className}`}
                />
            )}
            <ErrorMessage name={error} component="p" className="text-red-500 text-[10px]" />
        </div>
    )
}

export default InputField