import { Modal } from "antd";
import React from "react";
import "../styles/Model.css"
const CommonModal = ({title,isVisible,isCancel,image,styles,desc}) =>{
 
    return(
        <Modal
        title={title}
        open={isVisible}
        onCancel={isCancel}
        width={900}
      >
       <div className="flex flex-row gap-2">
         <img alt={title} src={image} className={styles} />
          <p className="break-all">{desc}</p>
       </div>
      </Modal>
    );
}

export default CommonModal;