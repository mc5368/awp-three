import React, { useState } from "react"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"

import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"

const AnimatedSphere = (props) => {
    const textureMap = useLoader(TextureLoader,'../textures/Earth_Western_Hemisphere.jpg')

    return (
        <Sphere visible args={[3,100,200]}>
            {/* <meshStandardMaterial map={textureMap}/> */}
            <MeshDistortMaterial color="#CBBAED" distort={1} speed={.5} roughness={0}/>
        </Sphere>
    )
}

export default AnimatedSphere