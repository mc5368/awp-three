import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Box from './components/Box'
import AnimatedSphere from './components/AnimatedSphere'
import LoadedModel from './components/LoadedModel'
import { OrbitControls } from '@react-three/drei'

const App = () => {

    return (
        <div>
            <Canvas className='canvas'>
                <OrbitControls/>
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <Suspense fallback={null}>
                <Box/>
                </Suspense>
            </Canvas>
            <Canvas className='canvas'>
                <OrbitControls/>
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} intensity={1}/>
                <Suspense fallback={null}>
                <LoadedModel/>
                </Suspense>
            </Canvas>
        </div>
    )
}
export default App;