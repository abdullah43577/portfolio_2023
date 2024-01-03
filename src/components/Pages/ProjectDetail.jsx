import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
const { VITE_API_SERVER } = import.meta.env;
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import useFadeUpEffect from '../hooks/useFadeUpEffect';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Projectdata() {
  const { id } = useParams();
  const { data: dataObj } = useFetch(`${VITE_API_SERVER}/get_single_project/${id}`);
  const data = dataObj.project;
  const nav = useNavigate();
  const element = useRef(null);
  useFadeUpEffect(element);

  useEffect(() => {
    document.title = 'Project | Abdullah Ayoola';

    return () => {
      document.title = 'Abdullah Ayoola | Fullstack Engineer';
    };
  }, []);

  return (
    <section ref={element} className="fade translate-y-[100px] opacity-5">
      <div className="max-w-4xl mx-auto px-8 xl:px-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <div className="border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer" onClick={() => nav(-1)}>
              <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </div>
            <h2 className="font-bold text-xl xl:text-3xl text-gray-700 dark:text-white">{data?.title || <Skeleton />}</h2>
          </div>
          <a href={data?.liveURL} target="_blank" rel="noreferrer" className="border border-transparent px-3 py-2 hover:border-gray-400 cursor-pointer rounded-md dark:text-white">
            Explore
          </a>
        </div>

        {data?.screenshot ? <img src={data?.screenshot} alt={`${data?.title} logo`} className="rounded-xl screenshot" /> : <Skeleton height={150} baseColor="gray" />}

        <section className="my-8">
          <h2 className="font-bold text-lg xl:text-2xl text-gray-700 pb-4 dark:text-white">Overview</h2>
          <p>{data?.description}</p>
          <br />

          <a href={data?.githubURL} className="underline text-blue-500 flex items-center gap-1 cursor-pointer">
            <svg fill="#3b82f6" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
              <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
            <span>View on Github</span>
          </a>
        </section>

        <section className="skills">
          <h2 className="font-bold text-lg xl:text-2xl text-gray-700 pb-4 dark:text-white">Stack/Technologies</h2>

          <ul>
            {data?.techStacks?.length > 0 ? (
              data.techStacks.map((stack, i) => (
                <li key={i} className="text-[#e88091] font-bold">
                  {stack}
                </li>
              ))
            ) : (
              <Skeleton count={3} baseColor="gray" />
            )}
          </ul>
        </section>
      </div>
    </section>
  );
}
