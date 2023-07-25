import * as THREE from "three";
import {useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const TestBox= ({props}:any) => {
    const mesh = useRef<THREE.Mesh>(null!);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.008));

    return (
        <mesh   
            {...props}
            ref={mesh}>
                <boxGeometry args={[2,2,2]} />
                <meshStandardMaterial color={"orange"} />
        </mesh>
    );
};

const ThreeBox = () => {
    return (
        <Canvas style={{
            height: "80vh",
        }}>
            <ambientLight />
            <color attach="background" args={["#000000"]} />
            <pointLight position={[10, 10, 10]} />
            <TestBox/>
        </Canvas>
    )
};

export default ThreeBox;