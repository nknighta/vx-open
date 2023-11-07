import * as THREE from "three";
import {useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";

const TestBox= ({props}:any) => {
    const mesh = useRef<THREE.Mesh>(null!);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.008));

    return (
        <mesh
            {...props}
            ref={mesh}>
                <boxGeometry args={[2,2,2]} />
                <meshStandardMaterial color={"purple"} />
        </mesh>
    );
};

const ThreeBox = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            color: "black",
            height: "600px",
        }}>
                <Canvas style={{
                    height: "60vh",
                }}>
                    <ambientLight />
                    <color attach="background" args={["#000011"]} />
                    <pointLight position={[10, 10, 10]} />
                    <TestBox/>
                </Canvas>
            <div style={{
                position: "absolute",
                width: "100%",
                height: "50vh",
                fontSize: "4.3rem",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: 50,
                margin: 50,
                color: "#fff"
            }}>
                Welcome Web3 development.
            </div>
        </div>
    )
};


/**
 *

 */

export default ThreeBox;