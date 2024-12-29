import React from "react";

import { ChildProps } from "../../../types/interfaces/childProps";


const Base: React.FC<ChildProps> = ({ component }) => {
    return (
        <div className="font-[sans-serif]">
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">

                    <div className="md:max-w-md w-full px-4 py-4">
                        {component}
                    </div>

                    {/* Side image display */}
                    <div className="md:h-full bg-[#000842] rounded-xl lg:p-12 p-8">
                        <img
                            src="https://readymadeui.com/signin-image.webp"
                            className="w-full h-full object-contain"
                            alt="login-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Base