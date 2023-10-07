import React, { useState } from 'react';

function App() {

  const [file, setFile] = useState(null);

  const convert = () => {
    const VIDEO_URL = document.getElementById('url').value;
    const FTYPE = 'mp3';
    const url = `https://api.vevioz.com/apis/single/${FTYPE}?url=${VIDEO_URL}`;
    setFile(url);
  }

  return (
    <div className="App">
      <h1>
        YouTube to MP3 Converter
      </h1>
      <p>
        Convert YouTube videos to MP3 files.
      </p>
      <input type="text" id="url" placeholder="Enter YouTube URL" />
      <button onClick={convert}>
        Convert
      </button>
      {
        file &&
        <iframe id="singleButtonApi" src={file} width="100%" height="100%" allowtransparency="true" title='url'></iframe>
      }
    </div>
  );
}

export default App;
