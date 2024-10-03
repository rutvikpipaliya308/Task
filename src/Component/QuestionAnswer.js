import React from "react";

export const QuestionAnswer = ({
    item,
    FAQs,
    activeQuestion,
    toggleQuestion,
    index,
}) => {
    return (
        <div className="flex flex-col gap-[32px]" key={item.id}>
            <div className="w-full h-[32px] gap-[32px] flex flex-row justify-between">
                <p className="title-large">{item.question}</p>
                <div
                    className="rounded-full h-[32px] w-[32px]"
                    onClick={() => toggleQuestion(item.id)}
                >
                    {activeQuestion === item.id ? (
                        <img src="/Images/UpArrow.png"></img>
                    ) : (
                        <img src="/Images/DownArrow.png"></img>
                    )}
                </div>
            </div>
            {FAQs.length - 1 === index ? null : (
                <div className="h-[1px] w-full bg-[#D2D2D7]"></div>
            )}
            {activeQuestion === item.id && (
                <>
                    <div className="h-[84px]">
                        <p className="body-large !text-[#CCCDD7]">{item.answer}</p>
                    </div>
                    {FAQs.length - 1 === index ? null : (
                        <div className="h-[1px] w-full bg-[#D2D2D7]"></div>
                    )}
                </>
            )}
        </div>
    );
};
