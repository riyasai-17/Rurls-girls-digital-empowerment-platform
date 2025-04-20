// youtube-api.js
const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_API_KEY = "AIzaSyBS40K26gNnJc7v1_BloLLsmh1rxgLe3Pc"; // Replace with your key

async function getVideos(query) {
  // ... (your getVideos function using fetch or axios) ...
}

async function searchYouTube(searchTerm) {
  const videos = await getVideos(searchTerm);
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = ''; // Clear previous results

  if (videos && videos.length > 0) {
    videos.forEach(video => {
      const videoDiv = document.createElement('div');
      videoDiv.innerHTML = `<h3>${video.snippet.title}</h3><iframe width="420" height="315" src="https://www.youtube.com/embed/${video.id.videoId}"></iframe>`;
      resultsDiv.appendChild(videoDiv);
    });
  } else {
    resultsDiv.textContent = 'No videos found.';
  }
}

// You might want to attach the event listener here if the HTML is loaded
// document.addEventListener('DOMContentLoaded', () => {
//   const searchButton = document.getElementById('searchButton');
//   const searchInput = document.getElementById('searchInput');
//   if (searchButton && searchInput) {
//     searchButton.addEventListener('click', () => {
//       searchYouTube(searchInput.value);
//     });
//   }
// });