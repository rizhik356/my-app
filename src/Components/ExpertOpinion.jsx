import React, { useState } from "react";

const ExpertsOpinion = () => {

    const [flex, setFlex] = useState('justify-content-center');
    const [activeClass, setActiveClass] = useState('1');

    const handleCenter = (e) => {
        setActiveClass(e.target.id);
        setFlex('justify-content-center');
    };

    const handleStart = (e) => {
        setActiveClass(e.target.id);
        setFlex('justify-content-between');
    };
    const handleEnd = (e) => {
        setActiveClass(e.target.id);
        setFlex('justify-content-end');
    };

    return (
        <div className="expert_opinion d-flex flex-column">
            <div className="expert_opinion_h">
                <h2>What the Experts are Saying</h2>
            </div>
            <div className="slider_review">
                <div className={`reviews d-flex ${flex}`}>
                <div className="review_item d-flex flex-column justify-content-between">
                            <span>“These deliver superior audio experience across all frequency ranges.”</span>
                        <div className="review_frame d-flex flex-column">
                            <div className="review_frame_line"></div>
                            <div className="review_iconname d-flex">
                                <div className="reviev_icon"></div>
                                <span>@DailyTekk<br />Tech Reviewer</span>
                            </div>
                        </div>
                    </div>
                    <div className="review_item d-flex flex-column justify-content-between">
                            <span>“The noise cancellation on these earbuds is easily top tier.”</span>
                        <div className="review_frame d-flex flex-column">
                            <div className="review_frame_line"></div>
                            <div className="review_iconname d-flex">
                                <div className="reviev_icon"></div>
                                <span>@FlossyCarter<br />Tech Reviewer</span>
                            </div>
                        </div>
                    </div>
                    <div className="review_item d-flex flex-column justify-content-between">
                            <span>“How do they sound on phone calls? These headphones sound great.”</span>
                        <div className="review_frame d-flex flex-column">
                            <div className="review_frame_line"></div>
                            <div className="review_iconname d-flex">
                                <div className="reviev_icon"></div>
                                <span>@PayetteForward<br />Tech Reviewer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review_slider d-flex justify-content-center align-items-center">
                <button className=
                    {
                        activeClass === '0' 
                        ? 'review_slider_button_active' 
                        : 'review_slider_button'
                    } 
                    id={0} 
                    onClick={handleStart}>          
                </button>
                <button 
                    className=
                    {
                        activeClass === '1' 
                        ? 'review_slider_button_active' 
                        : 'review_slider_button'
                    } 
                    id={1} 
                    onClick={handleCenter}>
                 </button>
                <button 
                    className={
                        activeClass === '2' 
                        ? 'review_slider_button_active' 
                        : 'review_slider_button'
                    } 
                    id={2} 
                    onClick={(e) => handleEnd(e)}>
                </button>
            </div>
        </div>
    )
};

export default ExpertsOpinion;