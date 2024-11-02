function openTrailer(videoUrl) {
    const trailerPage = `trailer.html?video=${encodeURIComponent(videoUrl)}`;
    window.location.href = trailerPage;
}

