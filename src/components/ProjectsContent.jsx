import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import styles from "./Projects.module.css";
import images from "../constants/images";

gsap.registerPlugin(ScrollTrigger, Flip);

const projects = [
  {
    id: 1,
    title: "Seamless Trade Connectivity",
    year: "GTTK",
    image: images.pic10,
  },
  {
    id: 2,
    title: "Sustainable Energy and Infrastructure",
    year: "GTTK",
    image: images.pic11,
  },
  {
    id: 3,
    title: "AI-Driven Solution",
    year: "GTTK",
    image: images.pic12,
  },
  {
    id: 4,
    title: "Seamless Transactions and Customer Support",
    year: "GTTK",
    image: images.pic15,
  },
];

const ProjectContent = () => {
  const [view, setView] = useState("list");
  const projectsContainerRef = useRef(null);
  const headerLogoRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const imagePreviewRef = useRef(null);

  useEffect(() => {
    // Ensure refs are available
    if (!headerLogoRef.current || !projectsContainerRef.current) return;

    // Header logo animation
    const logoPaths = headerLogoRef.current.querySelectorAll(".logo-path");
    if (logoPaths.length > 0) {
      gsap.set(logoPaths, { clipPath: "inset(100% 0 0 0" });

      gsap.to(logoPaths, {
        clipPath: "inset(0% 0 0 0)",
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.3,
      });
    }

    // Initial projects animation
    const projectItems =
      projectsContainerRef.current.querySelectorAll(".project-item");
    if (projectItems.length > 0) {
      gsap.from(projectItems, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08,
      });
    }

    ScrollTrigger.refresh();
  }, []);

  // const toggleView = (newView) => {
  //   if (view === newView || !projectsContainerRef.current) return;

  //   const projectItems =
  //     projectsContainerRef.current.querySelectorAll(".project-item");
  //   if (projectItems.length === 0) return;

  //   const state = Flip.getState(projectItems);
  //   setView(newView);

  //   Flip.from(state, {
  //     duration: 1,
  //     ease: "power2.out",
  //     absolute: true,
  //     onComplete: () => ScrollTrigger.refresh(),
  //   });
  // };

  const handleMouseEnter = (project, e) => {
    if (!imagePreviewRef.current) return;

    setHoveredProject(project);
    updateHoverPosition(e);

    gsap.to(imagePreviewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!imagePreviewRef.current) return;

    gsap.to(imagePreviewRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => setHoveredProject(null),
    });
  };

  const handleMouseMove = (e) => {
    if (hoveredProject) {
      updateHoverPosition(e);
    }
  };

  const updateHoverPosition = (e) => {
    setHoverPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        <div ref={headerLogoRef} className={styles.headerLogo}>
          <svg viewBox="0 0 67 19" xmlns="http://www.w3.org/2000/svg">
            <g fill="var(--warm-off-white)">
              <path
                className="logo-path"
                d="m56.7888 18c0-5.304 2.256-10.72798 5.208-13.24798v-.048h-7.848v-3.288h12.168v3.048c-3.768 3.048-5.208 8.42398-5.208 13.53598z"
              />
              <path
                className="logo-path"
                d="m39.4973 18v-17.159973h8.088c3.816 0 6.12 1.776003 6.12 4.896003 0 2.4-1.344 3.816-3.48 4.29597v.048c4.296.744 2.736 7.392 3.72 7.68v.24h-4.488c-.84-.72.72-5.976-2.952-5.976h-2.688v5.976zm4.32-9.50397h2.928c1.728 0 2.64-.624 2.64-2.064s-.912-2.064-2.64-2.064h-2.928z"
              />
              <path
                className="logo-path"
                d="m33.022 18v-17.159973h4.32v17.159973z"
              />
              <path
                className="logo-path"
                d="m24.173 18.384c-4.968 0-7.296-3.72-7.296-8.66402 0-4.944 2.328-8.688 7.296-8.688s7.272 3.744 7.272 8.688c0 4.94402-2.304 8.66402-7.272 8.66402zm-3.048-8.66402c0 3.00002.672 5.30402 3.048 5.30402s3.024-2.304 3.024-5.30402c0-3-.648-5.328-3.048-5.328s-3.048 2.328-3.048 5.328z"
              />
              <path
                className="logo-path"
                d="m.594849 18v-17.159973h4.320001l5.99995 10.199973h.048v-10.199973h4.3201v17.159973h-4.3201l-5.99995-10.19997h-.048v10.19997z"
              />
            </g>
          </svg>
        </div>

        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <h1>
              Products and Services<sup>10</sup>
            </h1>
          </div>
          {/* <div className={styles.viewToggle}>
            <button
              className={`${styles.toggleBtn} ${
                view === "list" ? styles.active : ""
              }`}
              onClick={() => toggleView("list")}
              data-view="list"
            >
              List
            </button>
            <button
              className={`${styles.toggleBtn} ${
                view === "grid" ? styles.active : ""
              }`}
              onClick={() => toggleView("grid")}
              data-view="grid"
            >
              Grid
            </button>
          </div> */}
        </div>

        <div
          ref={projectsContainerRef}
          className={`${styles.projectsContainer} ${
            view === "list" ? styles.listView : styles.gridView
          }`}
          onMouseMove={handleMouseMove}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.projectItem}
              data-id={project.id}
            >
              <div className={styles.projectImageContainer}>
                <img
                  className={styles.projectImage}
                  src={project.image}
                  alt={project.title}
                  crossOrigin="anonymous"
                />
              </div>
              <div
                className={styles.projectTitle}
                onMouseEnter={(e) => handleMouseEnter(project, e)}
                onMouseLeave={handleMouseLeave}
              >
                {project.title}
              </div>
              <div
                className={styles.projectYear}
                onMouseEnter={(e) => handleMouseEnter(project, e)}
                onMouseLeave={handleMouseLeave}
              >
                {project.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview that follows mouse */}
      <div
        ref={imagePreviewRef}
        className={styles.imagePreview}
        style={{
          left: `${hoverPosition.x + 20}px`,
          top: `${hoverPosition.y + 20}px`,
          backgroundImage: hoveredProject
            ? `url(${hoveredProject.image})`
            : "none",
          opacity: 0,
          transform: "scale(0.9)",
        }}
      />
    </div>
  );
};

export default ProjectContent;
