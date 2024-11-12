import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import React, { Suspense } from 'react'
import * as THREE from "three";
import IPhone from './IPhone'
import Lights from './LIghts';
import { div } from 'three/webgpu';
import Loader from './Loader';

const ModelView = ({index,groupRef,gsapType,item,size,setRotationState,cantrolRef}) => {
  return (
    
    <View
    index={index}
    id={gsapType}
    className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
       // Ambient Light
        <ambientLight intensity={0.3}/>
        <PerspectiveCamera makeDefault position={[0,0,4]}/>

        <Lights/>

        <OrbitControls
        makeDefault
        ref={cantrolRef}
        enableZoom={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0,0,0)}
        onEnd={()=> setRotationState(cantrolRef.current.getAzimuthalAngle())}
        />
        <group ref={groupRef} name={`${index === 1} ? 'small' : 'large'`}>

        <Suspense fallback={<Loader/>}>
        <IPhone
        scale={index ===1 ?[15,15,15]:[17,17,17]}
        item = {item}
        size = {size}
        />
        </Suspense>
    
        </group>


    </View>

       
 
    


  )
}

export default ModelView
