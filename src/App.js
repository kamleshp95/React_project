import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';
import Netflix from './Netflix';
import Amazon from './Amazon';



// const faveSeries = "amazon"

// const FavS = () =>{
//   if (faveSeries === "netflix"){
//     return <Netflix />;
//   } else{
//     return <Amazon />;
//   }
// };


const App = () => (
  <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>
    {Sdata.map((val) =>{
      return(
        <Card 
          key={val.id}
          imgsrc={val.imgscr}
          title={val.title}
          sname={val.sname}
          link={val.links}
        />
      );
    })}

    {/* <FavS /> */}
    {/* {faveSeries === "netflix" ? <Netflix /> : <Amazon />} */}
  </>
);

export default App;
