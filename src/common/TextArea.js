import React, { useState } from "react";
import { Input } from 'antd';
const { TextArea } = Input;
const TextAreaCommon = ({placeHolder}) =>{
    const [value, setValue] = useState('');
    return (
        <div
        style={{
          margin: '24px 0',
        }}
      >
      <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeHolder}
        autoSize={{
          minRows: 4,
          maxRows: 4,
        }}
      />
      </div>
    )
}

export default TextAreaCommon;