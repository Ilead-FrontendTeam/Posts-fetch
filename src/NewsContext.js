import React, { createContext , useState,useEffect} from "react";
import axios from "axios";


export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [news, setNews] = useState([]);

   // USING axios TO GET API DATA
   useEffect(() => {
    async function fetchData() {
    const newsList = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-03-19&sortBy=publishedAt&apiKey=46dcd37477df409ba609afa80c9ca0bb');
    setNews(newsList.data.articles)
    }
    fetchData()
 },[])
  return (
    <NewsContext.Provider value={[news, setNews]}>
      {props.children}
    </NewsContext.Provider>
  );
};
