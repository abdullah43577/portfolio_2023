import { useEffect, useRef } from 'react';
import useFadeUpEffect from '../hooks/useFadeUpEffect';

export default function Photos() {
  const element = useRef(null);
  useFadeUpEffect(element);
  useEffect(() => {
    document.title = 'Photos | Abdullah Ayoola';

    return () => {
      document.title = 'Abdullah Ayoola | Fullstack Engineer';
    };
  }, []);

  return (
    <section ref={element} className="fade translate-y-[100px] opacity-5">
      <div className="max-w-7xl mx-auto px-8 xl:px-0">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Photos</h2>

        <p className="italic">Coming Soon!</p>
      </div>
    </section>
  );
}
