import React, {useState, useEffect} from "react";
import "./App.scss"; 

// import axios 
import axios from "axios"; 

// import components
import DataHeader from "./components/DataHeader"; 
import CreateImage from "./components/CreateImage";
import Header from "./components/Header"; 
import Footer from "./components/Footer"; 

// import styles 
import { Title, Description } from "./components/StyledComponents";


function App() {

  // example NASA PoD data 
  // {
  //   "date":"2019-07-17",
  //   "explanation":"It had never been done before. But with the words \"You're Go for landing\", 50 years ago this Saturday, Apollo 11 astronauts Aldrin and Armstrong were cleared to make the first try. The next few minutes would contain more than a bit of drama, as an unexpected boulder field and an unacceptably sloping crater loomed below.  With fuel dwindling, Armstrong coolly rocketed the lander above the lunar surface as he looked for a clear and flat place to land.  With only seconds of fuel remaining, and with the help of Aldrin and mission control calling out data, Armstrong finally found a safe spot -- and put the Eagle down.  Many people on Earth listening to the live audio felt great relief on hearing \"The Eagle has landed\", and great pride knowing that for the first time ever, human beings were on the Moon. Combined in the featured descent video are two audio feeds, a video feed similar to what the astronauts saw, captions of the dialog, and data including the tilt of the Eagle lander. The video concludes with the panorama of the lunar landscape visible outside the Eagle. A few hours later, hundreds of millions of people across planet Earth, drawn together as a single species, watched fellow humans walk on the Moon.   NASA Remembers: Apollo 50th: Next Giant Le",
  //   "media_type":"video",
  //   "service_version":"v1",
  //   "title":"Apollo 11: Descent to the Moon",
  //   "url":"https://www.youtube.com/embed/xc1SzgGhMKc?start=850"
  // }

  // possible PoD media types: image, video
  

  // useful hooks  
  const [date, setDate] = useState(""); 
  const [description, setDescription] = useState(""); 
  const [mediaType, setMediaType] = useState(""); 
  const [title, setTitle] = useState(""); 
  const [url, setUrl] = useState(""); 

  // three nasa related links to use for the nav bar 
  const [navBar] = useState({
    link1: ["https://www.nasa.gov/", "Home"],
    link2: ["https://apod.nasa.gov/apod/lib/aptree.html", "Index"],
    link3: ["https://apod.nasa.gov/apod/archivepix.html", "Archive"]
  })


  // get Nassa Api 
  useEffect(() => {

    // Nasa photo of the day (PoD) api (an object):
    // https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo 

    axios.get(`https://api.nasa.gov/planetary/apod?api_key=b0Bih3UDqh7IhDoLQPLLojYnHcx5qLow7Llc3hgH`)
      .then((response) => {
        // successful 

        // api object 
        console.log("PoD data:", response.data);
        const resData = response.data; 

        // date 
        setDate(resData.date); 
        // console.log("date:", resData.date);

        // explanation 
        setDescription(resData.explanation); 
        // console.log("explanation:", resData.explanation);

        // media type 
        setMediaType(resData.media_type); 
        // console.log("media type:", resData.media_type);

        // image/video title
        setTitle(resData.title); 
        // console.log("title:", resData.title);

        // url 
        setUrl(resData.url); 
        // console.log("url:", resData.url);
      })

      .catch((error) => {
        // unsuccessful 
        console.log("The API server is currently down.", error)
      })

  }, []);


  return (
    <div className="App">
      <Header navItems = {navBar}/>
      <CreateImage type = {mediaType} dataUrl = {url}/>
      <Title>Nasa's {mediaType} of the Day</Title>
      <DataHeader dataTitle = {title} currentDate = {date}/>
      <Description className = "description">{description}</Description>
      <Footer/>
    </div>
  );
}

export default App;
