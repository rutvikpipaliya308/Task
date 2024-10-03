import React from "react";

export const About = () => {
    return (
        <div className="flex h-[476px] pr-[252px] pb-[104px] pl-[252px] gap-[32px] bg-customBlue justify-center">
            <div className="flex flex-col h-[372px] rounded-[16px] pt-[104px] pb-[104px] gap-[32px] bg-[#F2F2F814] w-[1416px] items-center">
                <div className="h-[84px]">
                    <div className="h-[48px] w-full">
                        <p className="headline-medium">
                            Aliquam quis dui nec justo elementum posuere.
                        </p>
                    </div>
                    <div className="h-[28px] mr-auto">
                        <p className="body-large">
                            Vestibulum efficitur, magna eget egestas fringilla, dui nibh
                            cursus velit, id tempus lorem est ut dui.
                        </p>
                    </div>
                </div>
                <div className="w-[156px] h-[48px] rounded-[24px] pt-[12px] pb-[12px] pl-[32px] pr-[32px] bg-customPurple">
                    <button className="label-large">Inquire Now</button>
                </div>
            </div>
        </div>
    );
};
