import React, { useEffect, useState } from "react";
import thumbnail11 from "../../assets/thumbnail1.png";
import thumbnail12 from "../../assets/thumbnail2.png";
import thumbnail13 from "../../assets/thumbnail3.png";
import thumbnail14 from "../../assets/thumbnail4.png";
import thumbnail15 from "../../assets/thumbnail5.png";
import thumbnail16 from "../../assets/thumbnail6.png";
import thumbnail17 from "../../assets/thumbnail7.png";
import thumbnail18 from "../../assets/thumbnail8.png";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../Data.js";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    
    const videoList_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then(response=>response.json())
      .then(data => setData(data.items));
  };
  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <div className="feed">
      {data.map((item ,index)=>{
        return(
          <Link  key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>{value_converter(item.statistics.viewCount)} views & bull;{moment(item.snippet.publishedAt).fromNow()}</p>
        </Link>
        )
      })}
     
    </div>
  );
};

export default Feed;
