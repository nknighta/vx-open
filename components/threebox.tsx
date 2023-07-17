import * as THREE from "three";
import { use, useRef,useState} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Model from "./glbLoader";

const TestBox= ({props}:any) => {
    const mesh = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.008));

    return (
        <mesh   
            {...props}
            ref={mesh}
            scale={active ? 1.5: 1}
            onClick={() => setActive(!active) }
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(true)}>
                <boxGeometry args={[5, 5, 5]} />
                <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />    
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
            <Model/>
        </Canvas>
    )
};

export default ThreeBox;