import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GlobalStyle } from "../styles/GlobalStyle";
import { StyledApp } from "../styles/StyledApp";
import Header from "./Header";
import Image from "./Image";
import EmojiList from "./EmojiList";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const getPhotos = useCallback(() => {
    const API_KEY = `C8dEr9KNVhIsofQ452zBQXoarZ2wmVTysDEA8kf5Vr8`;
    let API_LINK = `https://api.unsplash.com/photos?client_id=`;
    if (query) API_LINK = `https://api.unsplash.com/search/photos?&query=${query}&client_id=`;

    API_LINK += API_KEY;
    API_LINK += `&page=${page}`;

    fetch(API_LINK)
      .then((res) => res.json())
      .then((data) => {
        const imageData = data.results ?? data;
        if (page === 1) setImages(imageData);
        setImages((images) => [...images, ...imageData]);
      })
      .catch((err) => console.log(err));
  }, [page, query]);

  useEffect(() => {
    getPhotos();
  }, [page, getPhotos]);

  const searchPhotos = (e) => {
    e.preventDefault();
    setPage(1);
    getPhotos();
  };

  const handleEmoji = (name) => {
    setQuery(name);
    setPage(1);
    getPhotos();
  };

  return (
    <StyledApp>
      <GlobalStyle />
      <Header onChange={(e) => setQuery(e.target.value)} onSubmit={searchPhotos} value={query} />
      <div className="wrapper">
        <EmojiList handleEmoji={handleEmoji} />
        <InfiniteScroll
          dataLength={images.length}
          next={() => setPage((page) => page + 1)}
          hasMore={true}
        >
          <div className="images">
            {images.map((image, index) => (
              <Image key={index} image={image} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </StyledApp>
  );
}

export default App;
