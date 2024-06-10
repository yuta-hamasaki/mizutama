"use client";
import { useInView } from 'react-intersection-observer';

export const FadeIn = ({ children }) => {
  const { ref, inView } = useInView({
    rootMargin: '-30px',
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`${inView ? "opacity-100" : "opacity-0 translate-y-[50%]"} duration-[0.5s]`}>
      {children}
    </div>
  );
};

export default FadeIn;
