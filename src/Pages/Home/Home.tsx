import React, { useEffect } from "react";
import HeroCarousel from "../Carousel/HeroCarousel";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../services/store/Store";
import { addUser } from "../../services/store/userDetailsSlice";
import patientDummyData from "../../services/store/Store";
import { useDispatch } from "react-redux";
import axios from "axios";

function Home() {
  // const userDetails = useSelector((state: RootState) => state.userDetails);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   debugger;
  //   axios
  //     .get("https://dummyjson.com/users")
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error));
  // }, []);

  const callGetApi = (event: any) => {
    event.preventDefault();
    alert("Click on Call Get api");
  };

  return (
    <>
      <div>{<HeroCarousel />}</div>
      <br />
      <a href="" onClick={(event) => callGetApi(event)}>
        CallGetApi
      </a>
    </>
  );
}

export default Home;
