'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiRupee } from "react-icons/bi";
import { LiaPercentSolid } from "react-icons/lia";

interface TextAreaProps {
    id: string;
    label: string;
    rows?: number;
    cols?: number;
    disabled?: boolean;
    formatPrice?: boolean;
    formatPercentage?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const TextArea: React.FC<TextAreaProps> = ({ 
    id, 
    label, 
    rows = 4, // Default rows value
    cols, // Optional cols, if you want to specify
    disabled, 
    formatPrice, 
    formatPercentage, 
    required, 
    register, 
    errors 
}) => {
    return (
        <div className="w-full relative">
            {formatPrice && (
                <BiRupee size={24} className="text-neutral-700 absolute top-5 left-2"/>
            )}
            {formatPercentage && (
                <LiaPercentSolid size={24} className="text-neutral-700 absolute top-5 left-2"/>
            )}
            <textarea 
                id={id} 
                disabled={disabled} 
                rows={rows} 
                cols={cols}
                {...register(id, { required })} 
                placeholder=" "
                className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition
                disabled:opacity-70 disabled:cursor-not-allowed ${(formatPrice || formatPercentage) ? 'pl-9' : 'pl-4'}
                ${errors[id] ? 'border-rose-500' : 'border-neutral-300'} ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}`}
            />
            <label 
                htmlFor={id} // Improved accessibility
                className={`absolute text-md duration-150 transform -translate-y-3 top-5 z-1 origin-[0]
                ${(formatPrice || formatPercentage) ? 'left-9' : 'left-4'} peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                peer-focus:scale-75 peer-focus:-translate-y-4 ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}`}>
                {label}
            </label>
        </div>
    );
}

export default TextArea;
