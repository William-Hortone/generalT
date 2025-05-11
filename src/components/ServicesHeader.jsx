import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Header.module.css';

const ServiceHeader = () => {
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);

  useEffect(() => {
    // Store references to the event handlers so we can remove them later
    const handlers = new Map();

    // Logo circles hover animation
    const circles = [circle1Ref.current, circle2Ref.current];
    
    circles.forEach((circle, i) => {
      if (!circle) return;

      const handleMouseEnter = () => {
        gsap.to(circle, {
          x: i === 0 ? -8 : 8,
          duration: 0.5,
          ease: 'power2.out'
        });
      };

      const handleMouseLeave = () => {
        gsap.to(circle, {
          x: 0,
          duration: 0.5,
          ease: 'power2.out'
        });
      };

      // Store the handlers
      handlers.set(circle, { handleMouseEnter, handleMouseLeave });

      // Add event listeners
      circle.addEventListener('mouseenter', handleMouseEnter);
      circle.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      // Clean up event listeners
      circles.forEach(circle => {
        if (!circle) return;
        const { handleMouseEnter, handleMouseLeave } = handlers.get(circle) || {};
        if (handleMouseEnter) {
          circle.removeEventListener('mouseenter', handleMouseEnter);
        }
        if (handleMouseLeave) {
          circle.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);

  return (
    <header className={styles.siteHeader}>
      <div className={styles.gridContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logoCircles}>
            <div ref={circle1Ref} className={`${styles.circle} ${styles.circle1}`}></div>
            <div ref={circle2Ref} className={`${styles.circle} ${styles.circle2}`}></div>
          </div>
        </div>

        <nav className={styles.mainNav}>
          <ul>
            <li><a href="#" className={styles.active}>SELECTED WORKS<sup>10</sup></a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">JOURNAL</a></li>
          </ul>
        </nav>

        <div className={styles.contactLink}>
          <a href="mailto:hi@filip.fyi">+GET IN TOUCH</a>
        </div>
      </div>
    </header>
  );
};

export default ServiceHeader;