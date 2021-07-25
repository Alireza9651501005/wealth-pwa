import { Component } from "react";
import { useSelector } from "react-redux";
import NavBar from "../../features/nav/nav";
import SingnOutLayout from "../../layout/signout-layout/singnOutLayout";


const WalletComponent = () => {

  const state = useSelector(state => state);
  const login = state.LogInReducer.isLogIn;

  const handleStatusBasedOnItemSelect = () => {
    console.log('changed');
  }


  return (
    <NavBar itemSelected="wallet">
      {
        login ? <div>
          <div style={{ height: '50px', paddingTop: '10px', textAlign: 'center', backgroundColor: '#232a47', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
            <span style={{ marginRight: 'auto', color: 'white', fontFamily: 'IRANSans' }}>اعتبار</span>
            <br />
          </div>
        </div>
          :
          <div>
            <div style={{ height: '50px', paddingTop: '10px', textAlign: 'center', backgroundColor: '#232a47', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
              <span style={{ marginRight: 'auto', color: 'white', fontFamily: 'IRANSans' }}>اعتبار</span>
              <br />
            </div>
            <SingnOutLayout />
          </div>
      }
    </NavBar>
  )
}
export default WalletComponent;