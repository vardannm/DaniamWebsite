import { useEffect, useState } from "react";
import '../assets/styles/ScrollToTop.css'; 
import { FaArrowUp } from "react-icons/fa";


const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
    setVisible(window.scrollY > 200); 
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`scroll-to-top ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
      <div className="circular-progress" style={{ background: `conic-gradient(#08acc9 ${scrollProgress +1}%, #ccc ${scrollProgress}%)` }}>
      <FaArrowUp style={{ color: '#fff' }} /> 
      </div>
    </div>
  );
};

export default ScrollToTopButton;
