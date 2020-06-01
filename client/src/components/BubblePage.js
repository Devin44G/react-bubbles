import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  useEffect(() => {
    axiosWithAuth()
      .get('/api/colors')
      .then(res => {
        console.log('DATA: ', res.data);
        setColorList(res.data);
      })
      .catch(err => console.error('THERE HAS BEEN AN ERROR: ', err));
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
