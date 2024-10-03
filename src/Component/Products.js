import React from "react";

export const Products = () => {
    return (
        <div className="h-[940px] flex flex-col justify-center items-center bg-customBlue pt-[104px] pr-[252px] pb-[104px] pl-[252px]">
            <div className="flex flex-col justify-between gap-[96px] w-[1416px] h-[732px]">
                <div className="flex flex-col gap-[48px] w-full">
                    <p className="title-medium">Products & Solutions</p>
                    <div className="gap-[24px] flex flex-col">
                        <p className="display-small">Askitect AI</p>
                        <p className="body-large">
                            Aenean tristique, tellus id posuere tincidunt, enim tortor
                            scelerisque quam, vitae faucibus felis nunc vitae nulla. Etiam
                            tincidunt nisl sed quam tempor.
                        </p>
                        <button className="w-[152px] h-[48px] rounded-[24px] pt-[12px] pr-[24px] pl-[32px] pb-[12px] bg-customPurple text-customWhite flex items-center">
                            <p className="label-large">Try Now</p>
                            <span>
                                <img src="/Images/Icon.png"></img>
                            </span>
                        </button>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="w-[440px] h-[128px] flex flex-col gap-[8px]">
                            <p className="title-large w-full">Maecenas eleifend</p>
                            <p className="body-large h-[84px] w-full">
                                Curabitur sit amet lacinia justo. Nullam accumsan velit quam,
                                quis euismod dui sodales a. Proin non tincidunt neque.
                            </p>
                        </div>
                        <div className="w-[440px] h-[128px] flex flex-col gap-[8px]">
                            <p className="title-large w-full">Duis ac ipsum nulla</p>
                            <p className="body-large h-[84px] w-full">
                                Aliquam pretium enim odio dapibus, non imperdiet lorem euismod.
                                Curabitur blandit urna ante, ac accumsan lorem aliquet.
                            </p>
                        </div>
                        <div className="w-[440px] h-[128px] flex flex-col gap-[8px]">
                            <p className="title-large w-full">Duis laoreet posuere</p>
                            <p className="body-large h-[84px] w-full">
                                Vivamus eros metus, vestibulum ut erat aliquam, pellentesque
                                consectetur libero. Vestibulum laoreet dictum magna at suscipit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[32px] w-full h-[208px] flex-col">
                    <p className="headline-medium">
                        You may need our services if you want to:
                    </p>
                    <div className="flex flex-row justify-between h-[128px]">
                        <div className="bg-customPurpleBlue flex flex-col p-[32px] gap-[8px] rounded-[16px] w-[440px]">
                            <p className="title-small">Purchase Evaluation</p>
                            <div className="flex flex-row gap-[8px]">
                                <a href="#" className="body-large !text-[#8C7CFF] ">
                                    Learn More
                                </a>
                                <span>
                                    <img src="/Images/Icon.png"></img>
                                </span>
                            </div>
                        </div>
                        <div className="bg-customPurpleBlue flex flex-col p-[32px] gap-[8px] rounded-[16px] w-[440px]">
                            <p className="title-small">Pre Construction Consultation</p>
                            <div className="flex flex-row gap-[8px]">
                                <a href="#" className="body-large !text-[#8C7CFF]">
                                    Learn More
                                </a>
                                <span>
                                    <img src="/Images/Icon.png"></img>
                                </span>
                            </div>
                        </div>
                        <div className="bg-customPurpleBlue flex flex-col p-[32px] gap-[8px] rounded-[16px] w-[440px]">
                            <p className="title-small">Construction Quality Evaluation</p>
                            <div className="flex flex-row gap-[8px]">
                                <a href="#" className="body-large !text-[#8C7CFF]">
                                    Learn More
                                </a>
                                <span>
                                    <img src="/Images/Icon.png"></img>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
