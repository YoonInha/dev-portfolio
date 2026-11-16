import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
// Layout
import MainLayout from '../layouts/MainLayout';
// sections
import EditorHero from '../sections/EditorHero';
import RoboticsSection from '../sections/RoboticsSection';
import GameSoftwareSection from '../sections/GameSoftwareSection';
import Capabilities from '../sections/Capabilities';
import ContactLog from '../sections/ContactLog';
// mock
import { documentTitle, documentDescription } from '../mock/profile';

// Scroll to the section named in the URL hash (e.g. /#robotics).
// Handles arriving from another page as well as menu clicks on this page.
const scrollToHash = () => {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    scrollToHash();
    router.events.on('hashChangeComplete', scrollToHash);
    router.events.on('routeChangeComplete', scrollToHash);
    return () => {
      router.events.off('hashChangeComplete', scrollToHash);
      router.events.off('routeChangeComplete', scrollToHash);
    };
  }, [router.events]);

  const meta = (
    <>
      <title>{documentTitle}</title>
      <meta name="description" content={documentDescription} />
      <meta property="og:title" content={documentTitle} />
      <meta property="og:description" content={documentDescription} />
      <meta property="og:image" content="/imgsrc/CDNResource/RobotArm_01/robot_01.jpg" />
      <meta property="og:type" content="website" />
    </>
  );

  return (
    <MainLayout meta={meta}>
      <EditorHero />
      <RoboticsSection />
      <GameSoftwareSection />
      <Capabilities />
      <ContactLog />
    </MainLayout>
  );
}
