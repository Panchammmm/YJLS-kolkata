import React from "react";
import "./abt.css";
import aboutbg from "../../assets/page-banner/about.png";

export default function About() {
    return (
        <section>
            <div className="bg-black pt-5">
                <img src={aboutbg} alt="aboutus"></img>
            </div>

            <Info />
        </section>
    )
}

function Info() {
    return (
        <div className="bg-gray-100 pt-[100px] pb-[120px] flex flex-col justify-center">
            <h1 className="text-3xl font-bold capitalize text-center mb-3">Meet the <span className="text-orange-500">Founder</span></h1>
            <p className="text-center text-gray-600 mb-14">
            Our founder is not only the visionary behind this institution but also the lead educator,<br></br> committed to guiding our students to success.
            </p>

            <div className="image-container mx-auto">
                <div className="image-card shadow-2xl">
                    <img src="https://yjls-kolkata.com/static/media/hall_img7.4e1a4f627899ed02a252.jpg" alt="Image 2" />
                </div>
                <div className="image-card shadow-2xl">
                    <img src="https://yjls-kolkata.com/static/media/hall_img3.e0ad980c90efe40809d9.jpg" alt="Image 1" />
                </div>
                <div className="image-card shadow-2xl">
                    <img src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/300903319_108013825368549_2806843362946799778_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0VB7CpCOykIQ7kNvgGtiGDt&_nc_ht=scontent.fccu3-1.fna&oh=00_AYCCTlVpN1JYPqOFs6376TzwSFc51vrfjoSdI-YltgPUyg&oe=66C1099F" alt="Image 3" />
                </div>
                <div className="image-card shadow-2xl">
                    <img src="https://scontent.fccu3-1.fna.fbcdn.net/v/t39.30808-6/300882217_108014165368515_740063985039310532_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cDk88cRacZ4Q7kNvgHXulqw&_nc_ht=scontent.fccu3-1.fna&oh=00_AYCrYCtp3U2LtB0OtUtaCHYsK6GACSvSrWGhekaa1AueaA&oe=66C10162" alt="Image 4" />
                </div>
            </div>

            {/* about section */}
            <p className="text-xl text-stone-700 w-[70%] mx-auto text-center mt-20">
                皆さん、こんにちは。I am JYOTIRMOY GAYEN, and my aim in teaching Japanese is to enhance cultural understanding and strengthen ties between Japan and India through language education. With extensive experience in Japan, I've gained valuable insights that I'm eager to share with others.
                <br></br>
                <br></br>
                By establishing this platform for learning Japanese, I'm providing students with opportunities to explore a new culture, pursue careers in Japanese companies, and contribute to the growing connections between our nations. My background and qualifications, including passing the JLPT N2, greatly enrich my teaching and demonstrate my commitment to mastering the language.
                <br></br>
                <br></br>
                My approach of offering both online and offline study options is modern and adaptable, catering to the diverse needs of students. I am excited to bring the knowledge and teaching techniques I gained from my experiences at Sister Nivedita University Kolkata (SNU) and East Point School (CBSE) to my new institution.
                <br></br>
                <br></br>
                Everyone hopes for our community to become a vibrant hub of learners passionate about Japanese language and culture. If you have any questions or require assistance, please don't hesitate to reach out—I am here to help.
                ありがとうございました。
            </p>
        </div>
    )
}