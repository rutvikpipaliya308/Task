import React from 'react'

export const Footer = () => {
    return (
        <div className='flex gap-[48px] flex-col h-[324px] pt-[48px] pr-[252px] pb-[16px] pl-[252px] bg-gradient-to-t from-black to-[#453C88]'>
            <div className='w-[1416px] h-[164px] flex flex-row justify-between'>
                <div className='flex flex-col w-[604px] gap-[104px]'>
                    <div className='w-[155.9px] h-[32px]'>
                        <img src='/Images/Logo1.png'></img>
                    </div>
                    <div className='w-full h-[28px] flex flex-row justify-between'>
                        <p className='body-large w-[79px]'>About Us</p>
                        <p className='body-large w-[96px]'>Contact Us</p>
                        <p className='body-large w-[166px]'>Terms & Conditions</p>
                        <p className='body-large w-[119px]'>Privacy Policy</p>
                    </div>
                </div>
                <div className='h-[168px] w-[558px] flex flex-col gap-[32px] justify-between'>
                    <div className='h-[73px] gap-[5px] flex flex-col justify-between'>
                        <div className='h-[40px]'>
                            <p className='headline-small'>Join our mailing list</p>
                        </div>
                        <div className='h-[28px]'>
                            <p className='body-large'>Subscribe to get the latest news and updates right to your inbox.</p>
                        </div>

                    </div>
                    <div className='flex flex-row gap-[16px]'>
                        <div className='w-[400px] h-[56px] flex gap-[8px] rounded-[8px] border-[1px] pt-[16px] pr-[16px] pl-[16px] border-[#424245]'>
                            <input className='h-[24px] w-[368px] body-medium !text-[#6E6E73] bg-transparent' type='text' placeholder='Email Address'></input>
                        </div>
                        <div className='w-[142px] h-[56px] rounded-[28px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] bg-customPurple'>
                            <div className='w-[78px] h-[24px]'><p className='label-large text-customWhite'>Subscribe</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[16px] h-[48px] w-[1416px] justify-between'>
                <div className='w-[1614px] border-[1px] border-[#424245]'></div>
                <div className='flex flex-row h-[32px] justify-between items-center'>
                    <div className='h-[20px]'><p className='body-small !text-[#86868B]'>© 2024 Askitect. All rights reserved.</p></div>
                    <div className='flex flex-row justify-between h-[32px] w-[176px]'>
                        <img src='/Images/FB.png' className='w-[32px] h-full'></img>
                        <img src='/Images/X.png' className='w-[32px] h-full'></img>
                        <img src='/Images/In.png' className='w-[32px] h-full'></img>
                        <img src='/Images/YT.png' className='w-[32px] h-full'></img>
                    </div>
                    <div className='w-[260px] h-[20px]'>
                        <p className='body-small !text-[#86868B]'>Made by Magneto IT Solutions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
