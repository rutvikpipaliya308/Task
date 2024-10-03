import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../actions/reviewActions";

export const CustomerReview = () => {
    const dispatch = useDispatch();
    const [currentUser, setCurrentUser] = useState(1);
    const { loading, reviews, error } = useSelector((state) => state.reviews);

    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch]);

    const toggleCurrentUser = (id) => {
        setCurrentUser(id);
    };

    return (
        <div className="h-[1056px] flex flex-col pt-[104px] pr-[252px] pb-[104px] pl-[252px] gap-[48px] bg-customBlue">
            <p className="w-[1416px] h-[48px] headline-medium">
                What customers think about our product:
            </p>
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-[168px] h-[752px]">
                    <div className="flex flex-col h-full gap-[48px] w-[264px]">
                        {loading && (
                            <p className="text-customWhite text-center">Loading...</p>
                        )}
                        {error && (
                            <p className="text-customWhite text-center">Error: {error}</p>
                        )}

                        {!loading &&
                            !error &&
                            reviews.length > 0 &&
                            reviews.map((review) => (
                                <div
                                    className="flex flex-col w-full h-[152px] gap-[16px]"
                                    onClick={() => toggleCurrentUser(review.id)}
                                    key={review.id}
                                >
                                    <div
                                        class={`w-[80px] h-[80px] ${review.id === currentUser &&
                                            "rounded-full p-[3px] bg-gradient-to-br from-[#5BB6D6] via-[#CD428E] to-[#544C9A]"
                                            }`}
                                    >
                                        <img
                                            src={`/Images/User${review.id}.png`}
                                            class="w-full h-full rounded-full object-cover bg-white p-[3px]"
                                            alt="profile image"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[4px] h-[56px]">
                                        <div className="h-[28px]">
                                            <p className={`title-small ${review.id !== currentUser && "!text-[#86868B]"}`}>{review.name}</p>
                                        </div>
                                        <div className="h-[24px]">
                                            <p className={`body-medium ${review.id !== currentUser && "!text-[#86868B]"}`}>
                                                Principal, Visual Designs Inc.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {reviews.map(
                    (review) =>
                        currentUser === review.id && (
                            <div className="h-[616px] w-[984px]" key={review.id}>
                                <p className="headline-large">{review.comment}</p>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};
