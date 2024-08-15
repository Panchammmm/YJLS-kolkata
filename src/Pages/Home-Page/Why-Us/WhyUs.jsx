import React from "react";
import { useTranslation } from "react-i18next";

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

const Card = ({ Icon, disc, title }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-100 p-4 w-full max-w-[250px] h-auto flex flex-col items-center mx-auto rounded-lg shadow-lg">
      <div className="w-20 h-20 mb-3">
        {Icon}
      </div>
      <h1 className="text-xl font-medium bg-gradient-to-r from-orange-400 to-slate-600 bg-clip-text text-transparent text-center mb-3">
        {t(title)}
      </h1>
      <p className="text-sm text-slate-700 text-center font-light tracking-normal">
        {t(disc)}
      </p>
    </div>
  );
}

const WhyUs = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-5xl mx-auto py-28 px-4">
      <div>
        <h1 className="text-2xl lg:text-4xl font-bold text-center mb-4">
          {t("Why we are the")} <span className="text-orange-500">{t("Best!")}</span>
        </h1>
        <p className="text-center text-gray-600 mb-8">
          {t("Discover why Yume Japanese Language School is the top choice for mastering Japanese.")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((item, index) => (
          <Card
            key={index}
            Icon={<img className="w-full h-full object-contain" src={item.icon} alt={item.title} />}
            title={item.title}
            disc={item.disc}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;