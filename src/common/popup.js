import React from 'react';
import { Button, message, Popconfirm, Image } from 'antd';
import mirchi from '../mirchi.jpg';

const confirm = (e) => {
    console.log(e);
    message.success('Click on Yes');
};

const cancel = (e) => {
    console.log(e);
    message.error('Click on No');
};

const DynamicPopup = () => {
    return (
        <Popconfirm
            title="Recipe Details"
            description="Recipies are delicious"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
        >
            <Button>
                <Image
                    width={200}
                    src={mirchi}
                    preview={true} 
                />
            </Button>
        </Popconfirm>
    );
};

export default DynamicPopup;
