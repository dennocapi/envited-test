import { useState } from 'react'

export const Button = ({ text, onClick }) => {
    return (
        <>
            <button
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all bg-gradient-to-r from-[#8456EC] to-[#E87BF8] hover:from-[#E87BF8] hover:to-[#8456EC]`}
                onClick={onClick}
            >
                {text}
            </button>
        </>
    )
}

export const Input = ({ type, name, placeholder, className, label, }) => {
    const [focus, setFocus] = useState(false)

    return (
        <>
            <label htmlFor={name} className="block text-sm font-medium text-[#240D57]">
                {label}
            </label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm ${className}`}
                style={{
                    borderColor: `${(focus && "#E87BF8") || ""}`,
                }}
                onFocus={() => { setFocus(true) }}
                onBlur={() => { setFocus(false) }}
            />
        </>
    )
}

export const ImageUpload = ({ name, onChange, label }) => {

    return (
        <><label htmlFor={name} className="block text-sm font-medium text-[#240D57]">
            {label}
        </label>
            <div className="w-full flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                        <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2"
                        >
                            <span>Upload a file</span>
                            <input name={name} type="file" className="sr-only" onChange={onChange} />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                </div>
            </div>

        </>
    )
}
