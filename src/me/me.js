import { PhoneOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Image } from "antd";
import React from "react";
import skills from '../skills.png';
import language from '../translate.png';
import interest from '../mental-health.png';
import personal_image from '../25021415-pranay.jpeg';
import Display from "../common/display";
function Me() {
    const cardCss = "drop-shadow-2xl w-1/4 h-full bg-orange-200 text-white"
    const skillsList = ["Angular", "Python", "HTML", 'Tailwind CSS', "Data structures",
        "Java Spring Boot", "Junit", "Angular Unit testing"
    ]
    const languages = ["English", "Telugu", "Hindi"];
    const interests = ["Travelling", "Cooking", "Cricket", "Competitive Programming"];

    return (
        <div className="pt-10 h-full">
            <Card
                className={cardCss}
            >
                <div className="text-center"><Avatar size={110} src={personal_image} className="mx-auto " /></div>
                <image src={language} ></image>
                <div className="flex flex-col gap-3">
                    <Display image={skills} header="SKILLS" inputList={skillsList}></Display>
                    <Display image={language} header="LANGUAGES" inputList={languages}></Display>
                    <Display image={interest} header="INTERESTS" inputList={interests}></Display>
                </div>
            </Card>
        </div >
    );
}
export default Me;