import React from "react";
import { FAQs } from "../FAQs";
import { useState } from "react";
import { QuestionAnswer } from "./QuestionAnswer";

export const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState(1);

    const toggleQuestion = (id) => {
        setActiveQuestion(activeQuestion === id ? 1 : id);
    };

    return (
        <div className="flex flex-col h-[906px] gap-[48px] pt-[104px] pb-[104px] pr-[252px] pl-[252px] bg-customBlue">
            <div className="h-[48px]">
                <p className="headline-medium">Frequently asked questions:</p>
            </div>
            <div className="max-h-[602px] w-[1416px] flex flex-col gap-[32px]">
                {FAQs.map((item, i) => {
                    return (
                        <QuestionAnswer
                            item={item}
                            index={i}
                            FAQs={FAQs}
                            activeQuestion={activeQuestion}
                            toggleQuestion={toggleQuestion}
                        />
                    );
                })}
            </div>
        </div>
    );
};
