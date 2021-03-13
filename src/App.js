import React, { useState, useEffect } from "react";
import Suggestion from "./Suggestion";
function App() {
 
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState();
  const [result, setResult] = useState([]);
  const [source, setSource] = useState();
  const[result1,setResult1]=useState();
  const [destination, setDestination] = useState();
  const host =
    "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/";
  const headers = {
    "x-rapidapi-key": "e020bd1963msh1673b37a5bea532p1e43d3jsn622ad43e58de",
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
  };
  const fetchApiCall = async (query) => {
    const response = await fetch(
      `${host}browsequotes/v1.0/US/USD/en-US/${source}/${destination}/2021-03-15?inboundpartialdate=2019-12-01`,
      {
        method: "GET",
        headers: headers,
      }
    );
    //  setResult(await response.json());
     const data=await response.json();
    
     const {Carriers}=data;
     
      for(var i=0;i<Carriers.length;i++){
        console.log(Carriers[i].Name);
      }
  };

  function sourceEntry(event) {
    setSource(event.target.value);
  }

  function destinationEntry(event) {
    // console.log(event.target.value)
    setDestination(event.target.value);
  }

  //----------------------FETCHING SUGGESTION API----------------------------------//
  // const original_value = async (query) => {
  //   const response = await fetch(
  //     `${host}autosuggest/v1.0/UK/GBP/en-GB/?query=${query}`,
  //     {
  //       method: "GET",
  //       headers: headers,
  //     }
  //   );

  //   //  const data=await response.json();
  //   // console.log(data.Places[0])
  //   // console.log(typeof(data.Places))
  //   setResult(await response.json());
  // };

  // function getSourceSuggestion(query) {
  //   original_value(query);
  // }
  //----------------------FETCHING SUGGESTION ENDS HERE----------------------------------//

  return (
    <>
      <div>
        <label htmlFor="sourceroot">Source Root</label>
        <input
          // onChange={(e) => getSourceSuggestion(e.target.value)} FUNCTION GETsOURCEsUGGESTION CALLING
          onChange={sourceEntry}
          value={source}
          placeholder="enter source name"
          type="text"
          name="sourceroot"
        />
        {/* {result.map((data) => {
          return <h1>{data.MinPrice}</h1>;
        })} */}
        {/* {result.Places.map((data)=>{
   {console.log(data)}
      })} */}
        {/* {console.log(typeof(result))} */}
        {/* {!loaded?<h2>Application is loading...</h2>:} */}
        {/* {console.log(result.Places[0])} */}
        {/* {console.log(typeof(result.Places))} */}
        {/* {console.log(result.Places)} */}

  {/* {result.Quotes?result.Quotes.map((data)=>{
    return <h1>{data}</h1>
  }):null} */}
 
  {/* {result1.map((data)=>{
  return <h1>{data}</h1>
  })} */}
        <label htmlFor="destinationroot">Destination Root</label>
        <input
          value={destination}
          onChange={destinationEntry}
          placeholder="enter destination name"
          type="text"
          name="destinationroot"
        ></input>

        <label htmlFor="departure">Departure Date</label>
        <input type="date" id="departure" name="departure" />

        <button onClick={fetchApiCall} type="button">
          Click Me!
        </button>
        {!loaded?<h2>Application is loading...</h2>:
      <List>
      {items.map(item => (
       <ListItem>
         <ListItemText primary={item.email} secondary={item.first_name} />
       </ListItem> 
      ))}
    </List>
    }


      </div>
    </>
  );
}

export default App;
