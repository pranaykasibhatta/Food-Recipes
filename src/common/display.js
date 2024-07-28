import { Button, Image } from "antd";
import React from "react";

const Display = ({ image, inputList, header }) => {
    const list = { inputList }
    return (
        <div>
            <div className="flex gap-2">
                <Image alt="example" src={image} preview={false} />
                <h1 className="font-bold">{header}</h1>
            </div>
            <ul>
                {inputList.map((item, index) => (
                    <Button key={index} className="ml-2 mt-2">{item}</Button>
                ))}
            </ul>
        </div>
    );
};

export default Display;