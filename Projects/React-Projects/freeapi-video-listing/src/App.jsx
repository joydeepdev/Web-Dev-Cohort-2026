import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.freeapi.app/api/v1/public/youtube/videos?page=${page}&limit=6`,
        );
        const json = await res.json();

        // Based on FreeAPI structure
        setVideos(json.data.data);
        setTotalPages(json.data.totalPages || 27);
      } catch (error) {
        console.error('Error loading videos:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchVideos();
  }, [page]);

  
  const getPaginationGroup = () => {
    const range = [];
    const delta = 2; // Number of pages to show before/after current page

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // Always show first
        i === totalPages || // Always show last
        (i >= page - delta && i <= page + delta) // Show pages around current
      ) {
        range.push(i);
      } else if (range[range.length - 1] !== '...') {
        range.push('...');
      }
    }
    return range;
  };

  return (
    <div className="yt-container">
      <header className="yt-header">
        <div className="logo">
          <span className="play-icon">▶</span>
          <h1>YouTube Clone</h1>
        </div>
      </header>

      <main className="video-grid">
        {loading ? (
          <div className="loader">Loading videos...</div>
        ) : (
          videos.map((video) => {
            const { snippet, statistics, contentDetails } = video.items;
            const videoId = video.items.id;
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

            return (
              <a
                key={video.id}
                href={videoUrl}
                target="_blank"
                rel="noreferrer"
                className="video-link-wrapper"
              >
                <div className="video-card">
                  <div className="thumbnail-wrapper">
                    <img
                      src={snippet.thumbnails.high.url}
                      alt={snippet.title}
                      className="thumbnail"
                    />
                    <span className="duration">
                      {contentDetails.duration
                        .replace('PT', '')
                        .replace('M', ':')
                        .replace('S', '')}
                    </span>
                  </div>

                  <div className="video-info">
                    <img
                      src={snippet.thumbnails.default.url}
                      className="channel-avatar"
                      alt="channel"
                    />
                    <div className="text-content">
                      <h3 className="video-title">{snippet.title}</h3>
                      <p className="channel-name">{snippet.channelTitle}</p>
                      <p className="video-meta">
                        {parseInt(statistics.viewCount).toLocaleString()} views
                        • {new Date(snippet.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })
        )}
      </main>

      <footer className="pagination-wrapper">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="nav-btn"
        >
          Prev
        </button>

        <div className="page-numbers">
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={() => typeof item === 'number' && setPage(item)}
              className={`page-number ${page === item ? 'active' : ''} ${item === '...' ? 'dots' : ''}`}
              disabled={item === '...'}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="nav-btn"
        >
          Next
        </button>
      </footer>
    </div>
  );
}

export default App;
