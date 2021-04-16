import React from 'react';
import ReactDom from 'react-dom';
import Card from './Card'
import Sdata from './Sdata'

function ncard(val){
  return(
    <Card 
    imgsrc =  {val.imgsrc}
    title  =  {val.title}
    sname  =  {val.sname}
    link   =  {val.link}
  />
  )
}

ReactDom.render(
  <>

  <h1 className = "heading_style">List Of Top Web Series</h1>
  {Sdata.map(ncard)}
   
  </>
  ,document.getElementById('root')
);