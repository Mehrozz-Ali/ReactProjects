import React from "react"

function Button ({
    children,
    type="button",
    bgColor='bg-blue-600',
    textColor='text-white',
    className='', // it is empty because if user want to add some styling then it will store in in this empty className
    ...props // it is because of that if there are some more properties but we have forget it then by using this ...props it will add automatically on site 
}){
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>
    )
}


export default Button