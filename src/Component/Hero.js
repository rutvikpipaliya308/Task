import React from 'react'
import { Navbar } from './Navbar';

export const Hero = () => {
    return (
        <section className="relative w-full h-[968px] bg-cover bg-center top-0 bg-slate-500"
            style={{ backgroundImage: 'url("/Images/Home.png")' }}>

            <Navbar />

            {/* Text Content */}
            <div className='flex flex-col justify-center items-center h-full'>
                <div className="flex flex-col justify-between w-[1128px] h-[300px] text-center text-white">
                    <div className='h-[220px] flex flex-col gap-[24px]'>
                        <h1 className="font-semibold text-[72px] text-customWhite leading-[83px]">
                            Vivamus pretium elit,<br /> venenatis quam scelerisque non.
                        </h1>
                        <p className="text-[20px] leading-[28px] font-semibold text-customWhite">
                            Fusce egestas fermentum elit ac sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <button className="bg-customPurple text-customWhite w-[166px] h-[48px] mb-0 p-[12px] pl-[32px] pr-[24px] text-[16px] rounded-full flex m-auto items-center">
                        <p>Let's Start</p>
                        <span className="material-icons"><img src='/Images/Icon.png'></img></span>
                    </button>
                </div>

            </div>

        </section>
    )
}