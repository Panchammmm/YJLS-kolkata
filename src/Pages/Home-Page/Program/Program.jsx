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
            <h2 className="lg:text-4xl text-[28px] font-bold text-center mb-10 lg:mb-20">
                Our <span className="text-orange-500">Programs</span>
            </h2>

            <div className="flex flex-wrap items-center justify-center px-4 lg:px-20">
                {/* Image Section */}
                <div className="w-full lg:w-auto lg:scale-[1.5] lg:pr-10 lg:-translate-y-10 mb-16 lg:mb-0">
                    <img src={pro} alt="Students" className="h-[45vh] mx-auto lg:mx-0" />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 lg:pl-12 flex justify-center lg:justify-start">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <feature.icon size={35} className="text-orange-500 text-3xl mr-4" />
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