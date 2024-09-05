import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function ScrollManager({ section, onSectionChange }) {
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  //   CSS made by useScroll is messed up maybe by tailwind so we have to correct it here
  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useEffect(() => {
    console.log("section=" + section);
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
        console.log("section " + section);
        console.log(data.scroll.current);
        console.log("page: " + data.pages);
      },
    });
  }, [section]);

  useFrame(() => {
    // console.log(`data.scroll.current = ${data.scroll.current}`);
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);

    if (data.scroll.current > lastScroll.current && curSection === 0) {
      onSectionChange(1);
    }

    // 0.4 is pas the data.scroll.current position of section 1 which is ~ 0.33
    // if (data.scroll.current > 0.4 && curSection === 1) {
    //   onSectionChange(2);
    // }

    if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 1 / data.pages
    ) {
      onSectionChange(0);
    }

    // if (
    //   data.scroll.current < lastScroll.current &&
    //   data.scroll.current < 3 / data.pages
    // ) {
    //   onSectionChange(1);
    // }
    lastScroll.current = data.scroll.current;
  });

  return null;
}
