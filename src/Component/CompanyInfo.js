import React from 'react'

export const CompanyInfo = () => {
    return (
        <div className='flex flex-row gap-[168px] h-[522px] pr-[252px] pl-[252px] bg-customBlue items-center'>
            <div className='w-[552px] h-[332px] flex flex-col justify-between gap-[24px]'>
                <div className='h-[112px]'><p className='headline-large'>Blandit turpis ut augue pulvinar rutrum.</p></div>
                <div className='h-[196px]'><p className='body-large'>Maecenas sit amet dui et purus imperdiet venenatis. Donec placerat arcu vulputate dictum blandit. Pellentesque tincidunt congue nunc, eget cursus mauris efficitur vel. Proin et nunc ultrices libero pharetra congue vitae sit amet odio. Fusce quis quam quis erat congue eleifend. Curabitur magna diam, interdum sed tincidunt et, finibus et ipsum. Cras justo mauris imperdiet vitae metus vel placerat nunc.</p></div>
            </div>
            <div className='w-[696px] h-full'>
                <img src='/Images/Model.png'></img>
            </div>
        </div>
    )
}
