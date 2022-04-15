import React, { useState } from "react"
import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import { useFrame } from '@react-three/fiber'
import {useSpring} from 'react-spring'

const Box = (props) => {
    const [rotation,setRotation] = useState([0,0,0])
    const textureMap = useLoader(TextureLoader,'../textures/map.jpg')
    const boxRef = React.useRef()
    // const styles = useSpring({
    //     loop: true,
    //     from: {rotateZ: 0},
    //     to: {rotateZ: 360},
    //     duration: 2000,
    // });
    // function MyAnimatedBox() {
    //   useFrame(() => {
    //     console.log("Hey, I'm executing every frame!")
    //   })}
    let angle = 0
    useFrame(({ clock }) => {
        boxRef.current.rotation.x +=1
        let sign;
        if (Math.floor(angle/Math.PI)%2==0){
            sign = 1
        }else{
            sign = -1
        }
        boxRef.current.position.x = 20*Math.cos(angle)
        boxRef.current.position.y = sign*20*Math.sin(Math.sqrt((Math.abs(1-Math.pow(boxRef.current.position.x/20,2)))))
        angle+=.01
        console.log(angle)
      })

    return (
        // <animated.div style = {{...styles}}>
        <mesh rotation={[30, 80, 30]} ref ={boxRef}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            {/* <meshLambertMaterial attach='material' color='blue' /> */}
            {/* <meshStandardMaterial map={textureMap}/> */}
            <meshNormalMaterial attach="material"/>
        </mesh>
        // </animated.div>
    )
}

export default Box