import { useState } from "react";
import NavBar from "../../features/nav/nav";
import SingnOutLayout from "../../layout/signout-layout/singnOutLayout";
import store from "../../store/store";
import MyCoursesComponent from "../myCourses/MyCourses";
import { useSelector } from "react-redux";

const CoursesComponent = () => {

  const state = useSelector(state => state);
  const userLogIn = state.LogInReducer.isLogIn;

  return (
    <NavBar itemSelected="courses">

      {userLogIn ? <MyCoursesComponent /> :
        <div>
          <div style={{ height: '50px', paddingTop: '10px', textAlign: 'center', backgroundColor: '#232a47', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
            <span style={{ marginRight: 'auto', color: 'white', fontFamily: 'IRANSans' }}>دوره های من</span>
            <br />
          </div>
          <SingnOutLayout />
        </div>
      }
    </NavBar>
  )
}

export default CoursesComponent;