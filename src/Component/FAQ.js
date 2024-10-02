import React from 'react';
import { FAQs } from '../FAQs';
import { useState } from 'react';

export const FAQ = () => {

    const [activeQuestion, setActiveQuestion] = useState(1);

    const toggleQuestion = (id) => {
        setActiveQuestion(activeQuestion === id ? 1 : id);
    };

    return (
        <div className='flex flex-col h-[906px] gap-[48px] pt-[104px] pb-[104px] pr-[252px] pl-[252px] bg-customBlue'>
            <div className='h-[48px]'><p className='headline-medium'>Frequently asked questions:</p></div>
            <div className='max-h-[602px] w-[1416px] flex flex-col gap-[32px]'>
                {FAQs.map((item, i) => {
                    return (<div className='flex flex-col gap-[32px]' key={item.id}>
                        <div className='w-full h-[32px] gap-[32px] flex flex-row justify-between'>
                            <p className='title-large'>{item.question}</p>
                            <div className='rounded-full h-[32px] w-[32px]' onClick={() => toggleQuestion(item.id)}>{activeQuestion === item.id ? <img src='/Images/UpArrow.png'></img> : <img src='/Images/DownArrow.png'></img>}</div>
                        </div>
                        {FAQs.length - 1 === i ? null : <div className='h-[1px] w-full bg-[#D2D2D7]'></div>}
                        {activeQuestion === item.id && (<>
                            <div className='h-[84px]'><p className='body-large !text-[#CCCDD7]'>{item.answer}</p></div>
                            <div className='h-[1px] w-full bg-[#D2D2D7]'></div>
                        </>)}
                    </div>)
                })}
            </div>
        </div>
    )
}
