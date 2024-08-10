import React from "react";
import Card from "./Card";

import Trainer from '../../../assets/why-us/teacher.png';
import Success from '../../../assets/why-us/success.png';
import Resource from '../../../assets/why-us/resource.png';
import Support from '../../../assets/why-us/support.png';
import Practice from '../../../assets/why-us/practice.png';
import Discussion from '../../../assets/why-us/discussion.png';
import Fees from '../../../assets/why-us/fees.png';
import Test from '../../../assets/why-us/test.png';

const cardData = [
  { icon: Trainer, title: "Experienced Trainer", disc: "Certified faculty offer personalized guidance and industry insights." },
  { icon: Success, title: "Highest Success Rate", disc: "Proven approach ensures exceptional results in language proficiency tests." },
  { icon: Fees, title: "Affordable Fees", disc: "Top-quality coaching at competitive rates, ensuring value for money." },
  { icon: Support, title: "Online Support", disc: "Get timely assistance and personalized feedback throughout your learning." },
  { icon: Practice, title: "Questions to Practice", disc: "Engage in challenging exercises to strengthen language skills." },
  { icon: Test, title: "Real Time Tests", disc: "Simulate real exam conditions to maximize performance." },
  { icon: Resource, title: "Latest Resources", disc: "Access cutting-edge learning materials for a dynamic educational experience." },
  { icon: Discussion, title: "Discussion Sessions", disc: "Participate in interactive discussions to enhance critical thinking." }
];

const WhyUs = () => {
  return (
    <div className="max-w-5xl mx-auto pt-[120px] pb-[140px]">
      <div>
        <h1 className="text-3xl font-bold text-center mb-4 capitalize">why choose us</h1>
        <p className="text-center text-gray-600 mb-8">At Yume Japanese Language School, we focus on your success by offering top-notch training. From expert faculty to the latest resources, discover why we’re the best choice for mastering Japanese.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10 justify-center items-center">
        {cardData.map((item, index) => (
          <div key={index}>
            <Card
              Icon={<img className="w-20 h-auto" src={item.icon} alt={item.title} />}
              title={item.title}
              disc={item.disc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;