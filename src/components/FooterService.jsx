import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Footer.module.css';

gsap.registerPlugin(ScrollTrigger);

const FooterService = () => {
  const footerLogoRef = useRef(null);
  const footerHeaderRef = useRef(null);
  const footerSectionsRef = useRef([]);

  useEffect(() => {
    // Footer logo animation
    const logoPaths = footerLogoRef.current?.querySelectorAll('.logo-path');
    if (logoPaths) {
      gsap.set(logoPaths, { clipPath: 'inset(100% 0 0 0)' });
      
      ScrollTrigger.create({
        trigger: footerLogoRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(logoPaths, {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.2,
            ease: 'power2.out',
            stagger: 0.15
          });
        },
        once: true
      });
    }

    // Footer header animation
    if (footerHeaderRef.current) {
      ScrollTrigger.create({
        trigger: footerHeaderRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.from(footerHeaderRef.current.querySelector('.light-text'), {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power2.out'
          });

          gsap.from(footerHeaderRef.current.querySelector('.bold-text'), {
            opacity: 0,
            y: 20,
            duration: 0.8,
            delay: 0.2,
            ease: 'power2.out'
          });
        },
        once: true
      });
    }

    // Footer sections animation
    if (footerSectionsRef.current.length > 0) {
      ScrollTrigger.batch(footerSectionsRef.current, {
        start: 'top 90%',
        onEnter: batch => gsap.from(batch, {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power2.out'
        }),
        once: true
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div ref={footerHeaderRef} className={styles.footerHeader}>
          <h2>
            <span className={styles.lightText}>Tianjin General kouta,</span>
            <span className={styles.boldText}>international Trade Co. Ltd.</span>
          </h2>
        </div>

        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <div ref={el => footerSectionsRef.current[0] = el} className={styles.footerSection}>
              <h3>Contact</h3>
              <p><a href="mailto:generalkouta21@gmail.com">generalkouta21@gmail.com</a></p>
              <p><a href="tel:+381631943959">+381.63.TARA.959</a></p>
            </div>

            <div ref={el => footerSectionsRef.current[1] = el} className={styles.footerSection}>
              <h3>&nbsp;</h3>
              <p>&nbsp;</p>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <div ref={el => footerSectionsRef.current[2] = el} className={styles.footerSection}>
              <p><a href="#">Sound</a></p>
              <p><a href="#">Vision</a></p>
              <p><a href="#">Feeling</a></p>
            </div>

            <div ref={el => footerSectionsRef.current[3] = el} className={styles.footerSection}>
              <h3>Fragments</h3>
              <p>Receive Signals</p>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <div ref={el => footerSectionsRef.current[4] = el} className={styles.footerSection}>
              <p><a href="/">Home</a></p>
              <p><a href="#">Services<sup>(10)</sup></a></p>
              <p><a href="#">Gallery</a></p>
            </div>

            <div ref={el => footerSectionsRef.current[5] = el} className={styles.footerSection}>
              <h3>Location</h3>
              <p>China, Beijing</p>
            </div>
          </div>
        </div>

        <div ref={footerLogoRef} className={styles.footerLogo}>
          <svg viewBox="0 0 67 19" xmlns="http://www.w3.org/2000/svg">
            <g fill="var(--warm-off-black)">
              <path className="logo-path" d="m56.7888 18c0-5.304 2.256-10.72798 5.208-13.24798v-.048h-7.848v-3.288h12.168v3.048c-3.768 3.048-5.208 8.42398-5.208 13.53598z" />
              <path className="logo-path" d="m39.4973 18v-17.159973h8.088c3.816 0 6.12 1.776003 6.12 4.896003 0 2.4-1.344 3.816-3.48 4.29597v.048c4.296.744 2.736 7.392 3.72 7.68v.24h-4.488c-.84-.72.72-5.976-2.952-5.976h-2.688v5.976zm4.32-9.50397h2.928c1.728 0 2.64-.624 2.64-2.064s-.912-2.064-2.64-2.064h-2.928z" />
              <path className="logo-path" d="m33.022 18v-17.159973h4.32v17.159973z" />
              <path className="logo-path" d="m24.173 18.384c-4.968 0-7.296-3.72-7.296-8.66402 0-4.944 2.328-8.688 7.296-8.688s7.272 3.744 7.272 8.688c0 4.94402-2.304 8.66402-7.272 8.66402zm-3.048-8.66402c0 3.00002.672 5.30402 3.048 5.30402s3.024-2.304 3.024-5.30402c0-3-.648-5.328-3.048-5.328s-3.048 2.328-3.048 5.328z" />
              <path className="logo-path" d="m.594849 18v-17.159973h4.320001l5.99995 10.199973h.048v-10.199973h4.3201v17.159973h-4.3201l-5.99995-10.19997h-.048v10.19997z" />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default FooterService;