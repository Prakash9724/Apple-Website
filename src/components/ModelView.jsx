import { PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import * as THREE from "three";
import IPhone from './IPhone'
import Lights from './LIghts';
import { div } from 'three/webgpu';

const ModelView = ({index,groupRef,gsapType,item,size,setRotationSize,cantrolRef}) => {
  return (
    
    <View
    index={index}
    id={gsapType}
    className={`border-2 border-red-500 w-full h-full ${index === 2}?'right-[-100%] : ''`}
    >
       // Ambient Light
        <ambientLight intensity={0.3}/>
        <PerspectiveCamera makeDefault position={[0,0,4]}/>

        <Lights/>

        <Suspense fallback={<div>Loading</div>}>
        <IPhone />
        </Suspense>
    

    </View>

       
 
    


  )
}

export default ModelView
