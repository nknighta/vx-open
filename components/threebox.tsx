import type { NextPage } from "next";
import * as THREE from "three";
import { useEffect } from "react";
import {GLTFloader} from "three/examples/jsm/loaders/GLTFLoader";

const ThreeBox: NextPage = ({children}:any) => {
    let canvas: HTMLElement
    useEffect(() => {
        if (canvas) return

        canvas = document.getElementById("canvas");
        const sizes = {
            width: innerWidth,
            height: innerHeight,
        }
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(85, (sizes.width * 1.2 )/ sizes.height, 1, 100);

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas as HTMLCanvasElement,
            antialias: true,
            alpha: true
        });

        renderer.setSize(window.innerWidth , window.innerHeight -50 );
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setClearColor(0x12, 2.2);

        const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
        const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff2200 });
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

        const boxGeometry2 = new THREE.BoxGeometry(3, 3, 3);
        const boxMaterial2 = new THREE.MeshBasicMaterial({ color: 0xff22ff });
        const boxMesh2 = new THREE.Mesh(boxGeometry2, boxMaterial2);

        boxMesh.position.set(-1, 1, -5.2);
        boxMesh.rotation.set(0.4, 0.2, 0);

        boxMesh2.position.set(-1, 1, -5.2);
        boxMesh2.rotation.set(0.4, 0.2, 0);

        scene.add(boxMesh);
        
        scene.add(boxMesh2);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 0.5);
        scene.add(pointLight);

        const clock = new THREE.Clock();

        const tick = () => {
            const elapsedTime = clock.getElapsedTime();
            let pal = 0.39;
            let paltest = 0.69;
            boxMesh.rotation.x = pal * elapsedTime;
            boxMesh.rotation.y = pal * elapsedTime;
            boxMesh.rotation.z = pal * elapsedTime;

            boxMesh2.rotation.x = pal * elapsedTime;
            boxMesh2.rotation.y = pal * elapsedTime;
            boxMesh2.rotation.z = pal * elapsedTime;

            boxMesh2.rotation.x = paltest * elapsedTime/ 3;
            boxMesh2.rotation.y = paltest * elapsedTime * 2;
            boxMesh2.rotation.z = pal * elapsedTime * 9;
            renderer.render(scene, camera);

            window.requestAnimationFrame(tick);
        };

        tick();

        window.addEventListener("resize", () => {
            camera.aspect = window.innerWidth  / window.innerHeight;
            camera.updateProjectionMatrix();
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
        });

    }, [])
    return (
        <div style={{
            position: "relative",
            overflow: "hidden",
            paddingTop: "66.42%",
        }}>
            <canvas id="canvas" 
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                }}/>
                {children}
        </div>
    );
};

export default ThreeBox;