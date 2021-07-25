
import NavBar from "../../features/nav/nav";
import SingnOutLayout from "../../layout/signout-layout/singnOutLayout";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AsyncAPIService } from "../../utils/apiService";
import { debounce } from "@material-ui/core";
import MessageLayout from "../../layout/message-layout/messageLayout";
import StyleSheets from "./style/message.module.css";
import HomeLoaderComponent from "../homeLoaderComponent/homeLoaderComponent";

const MessageComponent = () => {

  const state = useSelector(state => state);
  const login = state.LogInReducer.isLogIn;
  const [data, setData] = useState();
  const [message, setMessage] = useState([]);
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);

  const [numOfPage, setNumOfPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  window.onscroll = debounce(() => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      loadMore();
    }
  }, 100);

  const loadMore = () => {
    console.log('end of scroll');
    if (numOfPage != lastPage) {
      let newPageNum = numOfPage;
      setNumOfPage(newPageNum++);
      userMessage();
    }
    else {
      console.log('else');
    }
  }

  const userMessage = () => {
    setPending(true);
    setError(false);
    AsyncAPIService(
      "/user/profile/my-messages?page=" + numOfPage,
      "GET",
      {
        onSuccess(res) {
          if (lastPage === 0) {
            setLastPage(res.data.data.last_page);
          }
          setPending(false);
          setError(false);
          setData(res.data.data);
          setMessage(res.data.data.message);
        }
        ,
        onFail(err) {
          setPending(false);
          setError(true);
        }
      },
      {
        // headers: {
        //   Authorization: 'Bearer ' + access_token,
        //   device_uuid: uuid
        // }
      },
      {
        toast: {
          fail: "مشکلی در ارتباط با سرور به وجود آمده است",
        },
        useAccessToken: true,
        useDeviceUid: true
      }
    )
  }

  useEffect(() => {
    if (login) {
      userMessage();
    }
  }, [])

  return (
    <NavBar itemSelected="message">
      <div style={{ height: '50px', paddingTop: '10px', textAlign: 'center', backgroundColor: '#232a47', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
        <span style={{ marginRight: 'auto', color: 'white', fontFamily: 'IRANSans' }}>پیام ها</span>
        <br />
      </div>
      {
        login ?
          <div>
            {error ? <span className={StyleSheets.centerSpan} onClick={userMessage}>
              تلاش مجدد
              <img className={StyleSheets.moreChance} />
            </span>
              : null}
            {pending ? <HomeLoaderComponent />
              : null}
            {data ? <MessageLayout message={message} /> : null}
          </div>
          :
          <div>
            <SingnOutLayout />
          </div>
      }
    </NavBar>
  )
}

export default MessageComponent;