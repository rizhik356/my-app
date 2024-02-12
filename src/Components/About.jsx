import React from "react";

const About = () => {
    return (
        <div className="about">
            <div className="about_content d-flex flex-column">
                <div className="about_frame d-flex flex-column">
                    <div className="frame_music d-flex flex-column">
                        <div className="frame_title d-flex align-items-center">
                            <div className="frame_title_icon music"></div>
                            <h3 className="frame_title_text">Free Apple Music Trial</h3>
                        </div>
                        <div className="frame_desription">Get 6 months of access to over 100 million songs, ad-free</div>
                    </div>
                    <div className="frame_store d-flex flex-column">
                        <div className="frame_title d-flex align-items-center">
                            <div className="frame_title_icon store"></div>
                            <h3 className="frame_title_text">In-Store Pickup</h3>
                        </div>
                        <span className="frame_desription">Pick up your Beats at an Apple Store near you</span>
                    </div>
                </div>
                <div className="line"></div>
                <div className="frame_properties d-flex flex-column">
                    <div className="frame_earbuds d-flex flex-column">
                        <h3>Earbuds</h3>
                        <div className="earbuds_frame d-flex flex-column">
                            <div className="frame_row d-flex">
                                <span>Height:</span>
                                <span>0.59 in / 1.5 cm</span>
                            </div>
                            <div className="frame_row d-flex">
                                <span>Weight</span>
                                <span>5 g</span>
                            </div>
                        </div>
                    </div>
                    <div className="frame_earbuds d-flex flex-column">
                        <h3>Case</h3>
                        <div className="earbuds_frame d-flex flex-column">
                            <div className="frame_row d-flex">
                                <span>Height:</span>
                                <span>1 in / 2.55 cm</span>
                            </div>
                            <div className="frame_row d-flex">
                                <span>Weight</span>
                                <span>48 g</span>
                            </div>
                            <div className="frame_row d-flex">
                                <span>Length:</span>
                                <span>2.83 in / 7.2 cm</span>
                            </div>
                            <div className="frame_row d-flex">
                                <span>Width:</span>
                                <span>2 in / 5.1 cm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;