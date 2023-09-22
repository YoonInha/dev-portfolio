import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Iconify from '../Iconify';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

export default function ProjectCard({ imgSrc, title, description, repoLink, sourceLink, routeLink, techIcons }) {
  const router = useRouter();

  const handleLinkClick = () => {
    // 다른 페이지로 이동
    //{Todo : lottie 메모리 증식 문제 해결 후 router로 교체해야 함}
    router.push(routeLink);
    // window.location.replace(routeLink);
  };

  useEffect(() => {
    return function cleanup() {
      // console.log('clean up');
      window.location.reload();
    }
  }, []);

  return (
    <div className="relative flex max-w-xs flex-col rounded-lg border border-gray-200 shadow-md dark:border-gray-700 dark:bg-neutral-800/70">
      <img className="h-[150px] w-full rounded-t-lg object-cover" src={imgSrc} alt={title} />

      <div className="p-5">
        <h1 className="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">{title}</h1>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">{description}</p>

        {techIcons && techIcons.length > 0 && (
          <div className="mt-5 mb-7 flex flex-wrap gap-5">
            {techIcons.map(({ icon }, i) => (
              <Iconify key={`icon-${i}`} classes="text-2xl opacity-80" icon={icon} />
            ))}
          </div>
        )}
      </div>
      {(sourceLink !== '' || repoLink !== '' || routeLink !== '') && (
        <div className="absolute bottom-5 right-5 flex items-center space-x-10">
          {repoLink !== '' && (
            <a
              href={repoLink}
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-200 hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300"
            >
              <Iconify classes="text-2xl" icon="akar-icons:github-fill" />
            </a>
          )}
          {sourceLink !== '' && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-200 hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300"
            >
              <Iconify classes="text-2xl" icon="iconoir:open-new-window" />
            </a>
          )}
          {routeLink !== '' && (
            <button classes="text-2xl" icon="solar:document-text-linear" onClick={handleLinkClick} className="transform transition-all duration-200 hover:scale-110 hover:text-primary-600 dark:hover:text-primary-300">
              <Iconify classes="text-2xl" icon="solar:document-text-linear" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  repoLink: PropTypes.string,
  sourceLink: PropTypes.string,
  routeLink : PropTypes.string,
  techIcons: PropTypes.array,
};
