import React from 'react';

const songsData = [
  { id: 1, title: 'Chilla Chilla', artist: 'Aniruth', src: '/path/to/song1.mp3' },
  { id: 2, title: 'Leo Theme', artist: 'Anirudth', src: '/path/to/song2.mp3' },
  { id: 3, title: 'KattuMalli', artist: 'Ilayaraja', src: '/path/to/song3.mp3' },
];

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: 'green' }}>
      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'white' }}>
        <h1 style={{ color: 'white', backgroundColor: 'lightseagreen', border: '2px solid white', padding: '10px', marginTop: '-20px', maxWidth: '100%' }}>Folk Music</h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: '20px' }}>
          {songsData.map((song) => (
            <div
              key={song.id}
              style={{ borderColor: 'black', padding: '10px', margin: '10px', cursor: 'pointer', backgroundColor: 'lightgrey', border: '2px solid black' }}
            >
              <p>{song.title}</p>
              <p>{song.artist}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderBottomColor: 'lightseagreen', borderBottomWidth: '3px' }}>
          <h2>Now Playing</h2>
          <img src={"https://static.thenounproject.com/png/2577569-200.png"} alt="Music Logo" />
          <p>Chilla Chilla</p>
          <p>Anirudh</p>
          <div style={{ display: 'flex', flexDirection: 'row',gap:'2rem', justifyContent: 'center', alignItems: 'center', border: '2px solid black',}}>
            <button
              style={{
                padding: '10px',
                marginTop: '10px',
                backgroundColor: '#3498db',
                color: 'whitesmoke',
               
                cursor: 'pointer',
                width: '50px',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <svg xmlns="https://www.svgrepo.com/show/512685/previous-999.svg" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </button>

            <button
              style={{
                padding: '10px',
                marginTop: '10px',
                backgroundColor: '#3498db',
                color: 'whitesmoke',
               
                cursor: 'pointer',
                width: '50px',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <svg xmlns="https://www.svgrepo.com/show/507382/pause-square.svg" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18V6M9 18V6" />
              </svg>
            </button>

            <button
              style={{
                padding: '10px',
                marginTop: '10px',
                backgroundColor: '#3498db',
                color: 'whitesmoke',
              
                cursor: 'pointer',
                width: '50px',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V6M15 18V6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
