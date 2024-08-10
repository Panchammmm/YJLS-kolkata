import { FaPassport, FaBriefcase, FaUserGraduate, FaUniversity, FaLanguage, FaUserTie } from 'react-icons/fa';
import pro from "../../../assets/program.png";

const Program = () => {
    const features = [
        { icon: FaPassport, title: "Student Visa", description: "Guidance and support for obtaining student visas to study abroad." },
        { icon: FaBriefcase, title: "Job Visa", description: "Comprehensive assistance for acquiring job visas in various countries." },
        { icon: FaUserGraduate, title: "TITP Visa", description: "Specialized training and guidance for the TITP visa program." },
        { icon: FaUniversity, title: "Top Colleges and Universities", description: "Guidence towards leading global universities and colleges for higher education." },
        { icon: FaLanguage, title: "JLPT and NAT", description: "Expert preparation for Japanese language proficiency tests like JLPT and NAT." },
        { icon: FaUserTie, title: "Placement Preparation", description: "Personalized coaching to help you secure the best job opportunities." }
    ];

    return (
        <div className="bg-gray-100 py-[120px]">
            <h2 className="text-4xl font-bold text-center mb-16">
                Our <span className="text-orange-500">Programs</span>
            </h2>

            <div className="flex flex-wrap px-20 align-middle justify-center">

                {/* Image Section */}
                <div className="scale-[1.5] pr-10 -translate-y-10">
                    <img src={pro} alt="Students" className="h-[45vh]" />
                </div>

                {/* Text Section */}
                <div className="w-1/2 pl-12 flex justify-start">
                    <div className="grid grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <feature.icon className="text-orange-500 text-3xl mr-4" />
                                <div>
                                    <h4 className="font-bold text-lg">{feature.title}</h4>
                                    <p className="text-gray-700">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program;