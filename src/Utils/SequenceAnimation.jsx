import React, { useMemo, useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SequenceAnimation = ({totalFrames,path,totalHeight,totalWidth}) => {

    gsap.registerPlugin(ScrollTrigger);

    const canvasRef = useRef(null);
    const videoInfo = {
        currentFrame: 0,
      };

    useGSAP(() => {
        gsap.to(videoInfo, {
            currentFrame: totalFrames,
            snap: "currentFrame",
            ease: "none",
            scrollTrigger: {
              trigger: canvasRef.current,
              start: "start bottom",
              end: "bottom center",
              scrub: 1,
            },
            onUpdate: render,
          });
    },[])

   

    const images = useMemo(() => {
        const loadedImages = [];
        for(let i = 1 ; i <= totalFrames ; i++){
            const img = new Image();
            img.src =  `/${path}/${i.toString().padStart(4, "0")}.webp`,
            loadedImages.push(img);
        }
        return loadedImages;
    },[])

    function render() {
        canvasRef.current?.getContext('2d')?.drawImage(images[videoInfo.currentFrame], 0, 0);
      }

    return (
        <canvas ref={canvasRef} width={totalWidth} height={totalHeight}></canvas>
    )
}

export default SequenceAnimation



    