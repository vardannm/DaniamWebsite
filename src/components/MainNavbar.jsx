import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname); // Update active link based on current location
  }, [location]);

  return (
    <nav
      className={`fixed top-24 z-40 w-full py-4 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-navBack opacity-90" : "bg-transparent opacity-100"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-end mr-28 items-center font-light">
        <ul className="flex space-x-6 text-2xl">
          {[
            { path: "/", label: "HOME" },
            { path: "/projects", label: "PROJECTS" },
            { path: "/partners", label: "PARTNERS" },
            { path: "#team", label: "TEAM", external: true },
            { path: "/about", label: "ABOUT" },
          ].map((item) => (
            <li key={item.path}>
              {item.external ? (
                <a
                  href={item.path}
                  className={`px-3 py-2 rounded-full ${
                    activeLink === item.path ? "bg-neutral-800 text-white" : "text-white hover:bg-gray-700"
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.path}
                  className={`px-5 py-3 rounded-full ${
                    activeLink === item.path ? "bg-neutral-800 text-white" : "text-white hover:bg-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default MainNavbar;
