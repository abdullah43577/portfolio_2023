import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
const { VITE_API_SERVER } = import.meta.env;
import useFetch from '../hooks/useFetch';
import useFadeUpEffect from '../hooks/useFadeUpEffect';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Projects() {
  const { data } = useFetch(`${VITE_API_SERVER}/get_projects`, 'getProjects');
  const { projects } = data || {};
  const element = useRef(null);
  useFadeUpEffect(element);

  useEffect(() => {
    document.title = 'Projects | Abdullah Ayoola';

    return () => {
      document.title = 'Abdullah Ayoola | Fullstack Engineer';
    };
  }, []);

  const project =
    projects?.map((data, i) => {
      return (
        <Link key={i} to={data._id} className="border border-transparent bg-zinc-50 flex items-center gap-3 hover:border-gray-200 cursor-pointer p-4 rounded-lg dark:bg-zinc-800 dark:hover:border-zinc-600">
          <div className="bg-gray-100 p-2 rounded-md min-w-[60px] min-h-[60px] flex items-center justify-center">
            <img src={data.logo} alt="" className="w-[40px]" />
          </div>

          <div>
            <h4 className="font-medium mb-2 dark:text-white">{data.title}</h4>
            <p className="text-sm dark:text-white">{data.tagline}</p>
          </div>
        </Link>
      );
    }) || [];

  const skeletonProjects = Array.from({ length: 9 }, (_, i) => (
    <div key={i} className="border border-transparent bg-zinc-50 flex items-center gap-3 cursor-not-allowed p-4 rounded-lg dark:bg-zinc-800">
      <Skeleton circle width={60} height={60} />
      <div>
        <Skeleton width={200} height={24} />
        <Skeleton width={280} height={16} />
      </div>
    </div>
  ));

  return (
    <section ref={element} className="fade translate-y-[100px] opacity-5">
      <div className="max-w-7xl mx-auto px-8 xl:px-0">
        <h2 className="text-3xl font-bold dark:text-white">Projects</h2>
        <p className="my-6">
          Among countless projects, these are my proudest achievements — <span className="italic">a testament to my dedication and creativity.</span>
        </p>

        <section className={`projects ${project?.length <= 0 ? 'flex flex-wrap' : 'grid'} items-center justify-center`}>{project?.length > 0 ? project : skeletonProjects}</section>
      </div>
    </section>
  );
}
