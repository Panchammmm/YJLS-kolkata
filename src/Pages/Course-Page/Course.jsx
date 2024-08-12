import React from "react";

import coursebg from "../../assets/page-banner/courses.png";
import JLPTCourse from "./JLPTCourse";

export default function Course() {
    return (
        <section>
            <div className="bg-black pt-5">
                <img src={coursebg} alt="course"></img>
            </div>

            <JLPTCourse />
        </section>
    )
}