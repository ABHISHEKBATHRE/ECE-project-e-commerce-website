import React from 'react'
import Card from '../Card/Card'
import Buy from '../../Buy/Buy'
const Home = () => {
  return (
    <div className='h-[calc(100vh-320px)] lg:h-[69vh] m-auto overflow-y-auto bg-slate-200 ' style={{border:`4px solid black`}}>
      <div className=' flex flex-col  lg:flex-row  lg:justify-center items-center overflow-y-auto h-full' >
      <Card link={"src/images/Object_sensor_image.png"} title={"Object Sensor"} des={"It senses that object is solid or semisolid or liquid."}
      price={799}/>
       <Card link={"src/images/micro_drone_img.png"} title={"Micro Drone"} des={"How obstacle sensing can be done using drones."}
       price={499}/>
      <Card link={"src/images/spider_robot_img.png"} title={"Sprayer Robot"} des={"It is used for spraying and for grass-cutting."}
      price={899}/>
      <Card link={"src/images/alcohol_sense_img.png"} title={"Alcohol Sense"} des={"It is used for spraying and for grass-cutting."}
      price={999}/>
       <Card link={"src/images/footstep_charging_img.png"} title={"Footstep Charging"} des={"Generate Power from human steps."}
      price={699}/>
      </div>
    </div>
  )
}

export default Home
