
"use client"; 
import React, { useState } from 'react';
import axios from 'axios';

interface SongDetail {
  song_name: string;
  artist_name: string;
  id: string;
  artwork_url: string;
}

const MusicRecommender: React.FC = () => {
  const [song, setSong] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [recommendations, setRecommendations] = useState<SongDetail[]>([]);

  const getRecommendations = async () => {
    const baseUrl = 'http://52.204.126.181:8000/api/recommend/';
    const params = { song, artist };
    
    try {
      const response = await axios.get(baseUrl, { params });
      setRecommendations(response.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Music Recommender</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Song"
          value={song}
          onChange={(e) => setSong(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="input"
        />
        <button onClick={getRecommendations} className="button">
          Get Recommendations
        </button>
      </div>
      <div>
        <h2 className="subtitle">Recommendations:</h2>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Artwork</th>
                <th>Song Name</th>
                <th>Artist Name</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((rec) => (
                <tr key={rec.id}>
                  <td>
                    <img src={rec.artwork_url} alt={`${rec.song_name} artwork`} className="artwork" />
                  </td>
                  <td>{rec.song_name}</td>
                  <td>{rec.artist_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 2rem;
          text-align: center;
          background-color: #282c34;
          color: white;
          min-height: 100vh;
        }
        .title {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
        .form {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .input {
          padding: 0.5rem;
          margin: 0.5rem;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        .button {
          padding: 0.5rem 1rem;
          margin: 0.5rem;
          border-radius: 4px;
          background-color: #61dafb;
          color: #282c34;
          cursor: pointer;
          border: none;
        }
        .button:hover {
          background-color: #21a1f1;
        }
        .subtitle {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .table-container {
          overflow-x: auto;
        }
        .table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 1rem;
        }
        .table th, .table td {
          padding: 0.5rem;
          border: 1px solid #ddd;
        }
        .artwork {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default MusicRecommender;
