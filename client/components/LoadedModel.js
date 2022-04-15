import React, { useState } from "react"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"

const LoadedModel = (props) => {
    // const [rotation,setRotation] = useState([0,0,0])
    const model = useLoader(GLTFLoader,'../models/ftm/scene.gltf')

    return (
        <primitive object={model.scene}/>
    )
}

export default LoadedModel