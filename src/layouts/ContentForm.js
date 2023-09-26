import React from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
export default function ContentForm({contentTitle}) {
  const router = useRouter();
  return (
    <>
      <section className="container mx-auto mt-16 space-y-10 pb-16 sm:pb-16 space-x-5 md:space-x-0">
        <h3 className="text-center font-lato text-3xl font-semibold text-primary-700 dark:text-primary-300 sm:text-4xl">
          {contentTitle}
        </h3>
      </section>
      <button
        type="button"
        className={`fixed bottom-7 left-5 z-[2000] rounded-full bg-primary-700 p-3 text-xs font-medium uppercase leading-tight text-primary-50 shadow-md transition-all duration-200 ease-in-out hover:bg-primary-700/80 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-2 active:shadow-lg dark:border-primary-700 dark:bg-primary-500 dark:hover:bg-primary-700 dark:focus:ring-primary-600`}
        onClick={GotoHome}
      >
        <Icon icon="lucide:home" width="24" height="24" />
      </button >
      <div id="contact" />
    </>
  );

  function GotoHome() {
    // window.location.replace('/');
    router.push('/');
  }}
