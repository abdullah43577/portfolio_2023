import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const { VITE_API_SERVER } = import.meta.env;
import useFetch from '../hooks/useFetch';
import useFadeUpEffect from '../hooks/useFadeUpEffect';
import ReactLoader from '../helper/loader';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const element = useRef(null);
  useFadeUpEffect(element);

  useEffect(() => {
    document.title = 'Projects | Abdullah Ayoola';

    return () => {
      document.title = 'Abdullah Ayoola | Fullstack Engineer';
    };
  }, []);

  useEffect(() => {
    const FetchProjects = async function () {
      try {
        const data = await useFetch(`${VITE_API_SERVER}/get_projects`);
        setProjects(data.projects);
      } catch (err) {
        console.log(err);
      }
    };

    FetchProjects();
  }, []);

  const project = projects?.map((data, i) => {
    return (
      <Link key={i} to={data._id} className="border border-transparent bg-zinc-50 flex items-center gap-3 hover:border-gray-200 cursor-pointer p-4 rounded-lg">
        <div className="bg-gray-100 p-2 rounded-md min-w-[60px] min-h-[60px] flex items-center justify-center">
          <img src={data.logo} alt="" className="w-[40px]" />
        </div>

        <div>
          <h4 className="font-medium mb-2">{data.title}</h4>
          <p className="text-sm">{data.tagline}</p>
        </div>
      </Link>
    );
  });

  return (
    <section ref={element} className="fade translate-y-[100px] opacity-5">
      <div className="max-w-7xl mx-auto px-8 xl:px-0">
        <h2 className="text-3xl font-bold dark:text-white">Projects</h2>
        <p className="my-6">
          Among countless projects, these are my proudest achievements — <span className="italic">a testament to my dedication and creativity.</span>
        </p>

        <section className={`projects ${project.length <= 0 ? 'flex' : 'grid'} items-center justify-center`}>{project.length > 0 ? project : <ReactLoader />}</section>
      </div>
    </section>
  );
}
