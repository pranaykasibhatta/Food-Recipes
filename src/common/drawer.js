import { Button, Drawer, Input, Typography } from "antd";
import React, { useState } from "react";
import ImageUpload from "./imageUpload";
import TextArea from "./TextArea";
import TextAreaCommon from "./TextArea";

const Drawer_Common = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const Footer = <div className="flex flex-row gap-2"><Button type="primary">Submit</Button><Button danger>Cancel</Button></div>
    return (
        <>
            <Button type="dashed"   onClick={showDrawer} className="border-dashed 
            border-orange-600 text-orange-600 " style={{ width: "20%", marginLeft: "80%" }}>
                Add Recipe
            </Button>
            <Drawer title="Recipe Details" onClose={onClose} open={open}  footer={Footer}>
                <div className="flex flex-col gap-4">
                    <label className="font-bold">Recipe Name:</label>
                    <Input placeholder="Recipe Name" />
                    <div className="flex flex-col gap-0">
                        <label className="font-bold">Add DescriptionName:</label>
                        <TextAreaCommon placeHolder="Add Description"></TextAreaCommon>
                    </div>
                    <div className="flex flex-col gap-0">
                        <label className="font-bold">Add Recipe:</label>
                        <TextAreaCommon  placeHolder="Add Recipe"></TextAreaCommon>
                    </div>
                    <ImageUpload></ImageUpload>
                </div>
            </Drawer>
        </>
    );
}

export default Drawer_Common;