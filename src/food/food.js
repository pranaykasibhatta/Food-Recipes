import React from "react";
import { Button, Card } from 'antd';
import mirchiImg from '../mirchi.jpg';
import CardComponent from "../common/card";
import Aloo from '../dumaloo.jpg'
import panner from '../paneer.jpg'
import egg from '../egg.jpg'
import Drawer_Common from "../common/drawer";
const Food = () => {
  const mirchi = "w-4/5 drop-shadow-2xl";
  const aloo = "w-3/4  drop-shadow-2xl"
  const egg_style = "w-1/2 h-2/3 mx-auto my-auto drop-shadow-2xl"
  const mirchiStyle = "w-2/3 h-2/3 mx-auto my-auto drop-shadow-2xl"

  return (
   <div className="overflow-auto pt-10">
    <Drawer_Common></Drawer_Common>
        <div className="grid grid-cols-3 gap-2 mt-2 ">
            <CardComponent title="Mirchi Bajji" image={mirchiImg} imageStyle={mirchiStyle}
             styles={mirchi} 
             desc_style={{height: "160px"}}
             desc={"This is one of those recipes in which, you will be able to enjoy chillies without their spiciness. Thus, this Mirchi Bajji is also a popular one at my home and I make it on many occasions. Since, there’s no heat from the chilies in this recipe, it is liked by one and all. There are many variations, like the Mirchi Vada and Mirchi Pakoda famous in Northern and Western India. But the Chilli Bajji is quite a distinct one from Southern India."}
             ></CardComponent>
           
            <CardComponent title="Dum Aloo" image={Aloo} styles={aloo} imageStyle={egg_style}
            desc={"This is one of those recipes in which, you will be able to enjoy chillies without their spiciness. Thus, this Mirchi Bajji is also a popular one at my home and I make it on many occasions. Since, there’s no heat from the chilies in this recipe, it is liked by one and all. There are many variations, like the Mirchi Vada and Mirchi Pakoda famous in Northern and Western India. But the Chilli Bajji is quite a distinct one from Southern India."}
            ></CardComponent>
            <CardComponent title="Paneer Butter Masala" image={panner}  styles={aloo} imageStyle={egg_style}
            desc={"This is one of those recipes in which, you will be able to enjoy chillies without their spiciness. Thus, this Mirchi Bajji is also a popular one at my home and I make it on many occasions. Since, there’s no heat from the chilies in this recipe, it is liked by one and all. There are many variations, like the Mirchi Vada and Mirchi Pakoda famous in Northern and Western India. But the Chilli Bajji is quite a distinct one from Southern India."}
            ></CardComponent>
            <CardComponent title="egg masala" image={egg} styles={mirchi} imageStyle={egg_style}
            desc={"This is one of those recipes in which, you will be able to enjoy chillies without their spiciness. Thus, this Mirchi Bajji is also a popular one at my home and I make it on many occasions. Since, there’s no heat from the chilies in this recipe, it is liked by one and all. There are many variations, like the Mirchi Vada and Mirchi Pakoda famous in Northern and Western India. But the Chilli Bajji is quite a distinct one from Southern India."}
            ></CardComponent>
        </div>
   </div>
  );
}

export default Food;
