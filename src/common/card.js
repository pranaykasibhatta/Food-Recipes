import { Button, Card, Image } from "antd";
import { useState } from "react";
import CommonModal from "./Model";
const { Meta } = Card;
const CardComponent = ({ title, image, styles, desc, imageStyle,desc_style}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Card
        hoverable
        className={styles}
        cover={<Image alt="example" src={image} preview={true} />}
      >

        <Meta title={title} description={desc?.length > 100 ? desc.substring(0, 100) + '...' : desc} 
        style={desc_style}/>
        <div className="flex flex-row gap-2">
          {desc?.length > 100 && (
            <Button type="link" onClick={showModal}>
              more details
            </Button>
          )}
          <Button type="link" onClick={showModal}>Recipe</Button>
        </div>
      </Card>
      <CommonModal
        isVisible={isModalVisible}
        title={title}
        isCancel={handleCancel}
        image={image}
        desc={desc}
        styles={imageStyle}
      >
      </CommonModal>
    </div>
  )
}

export default CardComponent;