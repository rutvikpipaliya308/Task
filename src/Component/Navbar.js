import React from 'react'

export const Navbar = () => {
    return (
        <div className="w-full flex justify-between items-center pt-[24px] pl-[108px] pr-[108px] pb-[24px] h-[96px] bg-transparent">
            <div className="flex items-center">
                <img src='/Images/Logo.png' className="h-[32px] w-[32px]"></img>
                <p className="h-[28px] w-[43px] font-normal text-base text-white">Logo</p>
            </div>
            <div className="flex items-center gap-[48px] h-[48px]">
                <a href="#" className="text-customWhite h-[28px] text-[18px]">Askitect AI</a>
                <a href="#" className="text-customWhite h-[28px] text-[18px]">Solutions</a>
                <a href="#" className="text-customWhite h-[28px] text-[18px]">Pricing</a>
                <a href="#" className="text-customWhite h-[28px] text-[18px]">About Us</a>
                <a href="#" className="text-customWhite h-[28px] text-[18px]">Contact Us</a>
                <a href="#" className="text-customWhite h-[28px] text-[18px]">中国人</a>
                <div className=" flex w-[257px] gap-[24px] justify-between">
                    <button className="text-white bg-customPurple rounded-[24px] p-[12px_32px]" >Log In</button>
                    <button className="text-white rounded-[24px] p-[12px_32px] border border-white">Sign Up</button>
                </div>

            </div>
        </div>
    )
}