import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import React from "react";

function Animate({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const childrenArray = React.Children.toArray(children);

  return (
    <div ref={ref}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, ease: "easeIn", delay: index * 0.8 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export default Animate;
