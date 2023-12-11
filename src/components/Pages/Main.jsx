import { useRef } from 'react';
import Hero from '../Layout/Hero';
import useFadeUpEffect from '../hooks/useFadeUpEffect';

export default function Main() {
  const element = useRef(null);
  useFadeUpEffect(element);

  return (
    <section ref={element} className="fade translate-y-[100px] opacity-5">
      <Hero />

      <div className="max-w-7xl mx-auto px-8 xl:px-0">
        <h2 className="text-xl lg:text-3xl font-bold mb-10 dark:text-white">Work Experience</h2>

        <section id="grid">
          <div className="flex items-start gap-5 lg:gap-10">
            <a className="experience border border-gray-200 min-w-[60px] min-h-[60px] flex items-center justify-center p-2 dark:border-gray-800" href="" target="_blank" rel="noreferrer">
              <img src="/nexi_img.jpg" alt="hng icon" className="w-[60px]" />
            </a>

            <div>
              <h4 className="text-xl font-bold dark:text-white">Nexilistings</h4>
              <span className="text-sm dark:text-white">Frontend Developer</span>
              <div className="mt-2 text-sm">
                <span>OCT 20, 2023 -</span> <span className="text-[#16a34a]">PRESENT</span>
              </div>
              <p className="py-4">
                As a Frontend Developer at Nexilistings, I'm revolutionizing student housing by creating a user-friendly platform connecting artisans with students. Simplifying housing choices and payments, my role contributes to an innovative and
                efficient housing solution.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 lg:gap-10">
            <a className="experience border border-gray-200 min-w-[60px] min-h-[60px] flex items-center justify-center dark:border-gray-800" href="" target="_blank" rel="noreferrer">
              <img src="/hng_img.jpg" alt="hng icon" className="w-[40px]" />
            </a>

            <div>
              <h4 className="text-xl font-bold dark:text-white">HNGx</h4>
              <span className="text-sm dark:text-white">Backend Deveoper (Intern)</span>
              <div className="mt-2 text-sm">AUG 25 - AUG 50</div>
              <p className="py-4">Certainly! Here's the updated short note: Interned at HNGx as a Backend Developer, leveraging Node.js for hands-on learning and contributing to dynamic projects.</p>
            </div>
          </div>

          <div className="flex items-start gap-5 lg:gap-10">
            <a className="experience border border-gray-200 min-w-[60px] min-h-[60px] flex items-center justify-center dark:border-gray-800" href="" target="_blank" rel="noreferrer">
              <img src="/fcc_img.jpg" alt="freecodecamp icon" className="w-[40px]" />
            </a>

            <div>
              <h4 className="text-xl font-bold dark:text-white">Freecodecamp</h4>
              <span className="text-sm dark:text-white">Responsive Web Design</span>
              <div className="mt-2 text-sm">MARCH 3, 2022</div>
              <p className="py-4">
                This certification is earned by completing 300 hours of coding challenges and projects. The projects include building a Tribute Page, Survey Form, Product Landing Page, Technical Documentation Page, and a Personal Portfolio Webpage.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5 lg:gap-10">
            <a className="experience border border-gray-200 min-w-[60px] min-h-[60px] flex items-center justify-center dark:border-gray-800" href="" target="_blank" rel="noreferrer">
              <img src="/udemy_img.png" alt="udemy icon" className="w-[40px]" />
            </a>

            <div>
              <h4 className="text-xl font-bold dark:text-white">Udemy</h4>
              <span className="text-sm dark:text-white">Complete Javascript Course: From Zero to Expert!</span>
              <div className="mt-2 text-sm">
                <span>AUG 25, 2022 -</span> <span>PRESENT</span>
              </div>
              <p className="py-4">This certification is earned by completing ~ 70 hours of coding challenges and projects.</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
