import React from 'react';
import { Helmet } from 'react-helmet';
// Layout
import MainLayout from '../layouts/MainLayout';
// sections
import HomeHero from '../sections/HomeHero';
import Skills from '../sections/Skills';
import Works from '../sections/Works';
import Contact from '../sections/Contact';
// mock
import { documentTitle, documentDescription, imageUrl } from '../mock/profile';

export default function Home() {
  return (
    <MainLayout>
      <Helmet>
        <title>{documentTitle}</title>
        <meta name="description" content={documentDescription} />
        <meta property="og:title" content={documentTitle} />
        <meta property="og:description" content={documentDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content={window.location.href} /> */}
      </Helmet>
      <HomeHero />
      <Skills />
      <Works />
      <Contact />
    </MainLayout>
  );
}