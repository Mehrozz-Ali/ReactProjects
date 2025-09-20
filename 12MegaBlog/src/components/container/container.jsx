import React from "react";


function Container({children}){
    // both synatx are same 
    // return (
    //     <div className="w-full max-w-7xl mx-auto px-4">{children}</div>
    // )
     return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
}

export default Container