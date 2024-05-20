
"use client"; 
import React from 'react';
import Head from 'next/head';
import MusicRecommender from '../components/MusicRecommender';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Music Recommender</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <MusicRecommender />
      </main>
      <style jsx>{`
        .main {
          padding: 2rem;
          background-color: #282c34;
          color: white;
          transition: background-color 0.5s, color 0.5s;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Home;
