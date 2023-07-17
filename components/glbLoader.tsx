import {FC, useEffect, useRef, useState} from 'react';
import { Html } from '@react-three/drei';
import {GLTFLoader, GLTF} from 'three/examples/jsm/loaders/GLTFLoader';

const Model:FC = () => {
    const [gltf,setGltf] = useState<GLTF>();
    const [progress,setProgress] = useState<number>(0);

    useEffect(() => {
        new GLTFLoader().load('/public/model1.gltf', (tmpGltf) => {
            setGltf(tmpGltf)
            console.log("loaded")
          },
          // called as loading progresses
          (xhr) => {
            setProgress((xhr.loaded / xhr.total) * 100)
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded")
          },
          // called when loading has errors
          (error) => {
            console.log("An error happened")
            console.log(error)
          });
    },[gltf]);

    return (
        <>
          {gltf ? (
            <primitive object={gltf.scene} />
          ) : (
            <Html center>{progress} % loaded</Html>
          )}
        </>
      )
    
};

export default Model;