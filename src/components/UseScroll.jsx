import React, { useEffect } from "react";

import { useInView } from 'react-intersection-observer'
import { useAnimationControls } from 'framer-motion'

function UseScroll() {
    const controls = useAnimationControls();
    const [element, inView] = useInView({ threshold: 0.5 });
    useEffect(() => {
        if (inView) {
        controls.start("show");
        } else {
        controls.start("hidden");
        }
    }, [controls, inView]);

  return [element, controls];
}

export default UseScroll
