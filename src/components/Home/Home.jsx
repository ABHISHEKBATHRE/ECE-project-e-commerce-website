import React from 'react'
import Card from '../Card/Card'
import Buy from '../../Buy/Buy'
const Home = () => {
  return (
    <div className='h-[calc(100vh-320px)] lg:h-[69vh] mt-0.4 overflow-y-auto ' style={{backgroundImage:`url("https://t4.ftcdn.net/jpg/05/12/00/49/360_F_512004957_1Zjmq4zv674TPZpsLKNQ9BIt3kpCcsSV.jpg")`, border:`4px solid black`}}>
      <div className=' flex flex-col lg:flex-row lg:justify-center items-center overflow-y-auto h-full'>
      <Card link={"https://qph.cf2.quoracdn.net/main-qimg-6d1e6bcd3a00b52ca39d6d6d4254ca72-lq"} title={"ObjectSensor"} des={"It senses that object is solid or semisolid or liquid."}
      price={799}/>
       <Card link={"https://nevonprojects.com/wp-content/uploads/2021/10/lidar-micro-drone-outer-sm.jpg"} title={"LIDAR Micro Drone"} des={"How obstacle sensing can be done using drones."}
       price={499}/>
      <Card link={"https://nevonprojects.com/wp-content/uploads/2024/01/pesticide-spider-robot-web-main.jpg"} title={"Pesticide Sprayer Robot"} des={"It is used for spraying and for grass-cutting"}
      price={899}/>
      <Card link={"https://nevonprojects.com/wp-content/uploads/2021/01/arduino-alcohol-sense-system.jpg"} title={"Arduino Alcohol Sense"} des={"It is used for spraying and for grass-cutting"}
      price={999}/>
       <Card link={"https://nevonprojects.com/wp-content/uploads/2019/06/Advance-foot-step-power-generation-with-RFID-based-mobile-charging_2.jpg"} title={"Footstep Charging"} des={"Generate Power from human steps"}
      price={1199}/>
      </div>
    </div>
  )
}

export default Home
