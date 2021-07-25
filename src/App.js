import './App.css';
import SplashScreen from './features/splash/splashScreen';
import { Provider } from "react-redux";
import store from './store/store';
import { Route, Switch, BrowserRouter, Router } from "react-router-dom";
import HomeScreen from './features/home/homeScreen'
import NavBar from './features/nav/nav';
import MoreScreen from "./features/more/moreScreen";
import CoursesComponent from "./component/courses/Courses";
import ProfileComponent from "./component/profile/Profile";
import MessageComponent from "./component/message/Message";
import WalletComponent from "./component/wallet/Wallet";
import ActionResolver from "./actions/ActionResolver";
import LogInFormComponent from "./component/logInForm/logInForm";
import UserPassWordComponent from "./component/userPassWord/userPassWord";
import RegisterUserComponent from "./component/registerUser/registerUser";
import VerifySmsCodeComponent from "./component/verifySmsCode/verifySmsCode";
import CourseViewComponent from "./component/CourseView/courseView";
import CourseDetailUserLogInComponent from "./component/courseDetailUserLogIn/courseDetailUserLogIn";
import EditProfileComponent from "./component/editProfile/EditProfile";
import AccountSettingComponent from "./component/accountSetting/accountSetting";
import ChangePasswordComponent from "./component/changePassword/changePassword";
import LeaderBoardComponent from "./component/leaderBoard/leaderBoard";
import PublicProfileComponent from "./component/publicProfile/publicProfile";
import NetworkScoreComponent from "./component/networkScore/networkScore";
import ScoreReport from "./component/scoreReport/scoreReport";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {/* <SplashScreen /> */}
        <Switch>
          <Route path="/Home" render={(props) => <HomeScreen {...props} />} />
          <Route path="/Nav" render={(props) => <NavBar {...props} />} />
          <Route path="/courses" component={CoursesComponent} />
          <Route path="/profile" component={ProfileComponent} />
          <Route path="/message" component={MessageComponent} />
          <Route path="/wallet" component={WalletComponent} />
          <Route path="/More" render={(props) => <MoreScreen {...props} />} />
          <Route path="/actionResolver" render={(props) => <ActionResolver {...props} />} />
          <Route path="/login" render={(props) => <LogInFormComponent {...props} />} />
          <Route path="/codePass" render={(props) => <UserPassWordComponent {...props} />} />
          <Route path="/register" render={(props) => <RegisterUserComponent {...props} />} />
          <Route path="/verifyCode" render={(props) => <VerifySmsCodeComponent {...props} />} />
          <Route path="/courseView" render={(props) => <CourseViewComponent {...props} />} />
          <Route path="/courseViewDetail" render={(props) => <CourseDetailUserLogInComponent {...props} />} />
          <Route path="/editProfile" component={EditProfileComponent} />
          <Route path="/accountSetting" component={AccountSettingComponent} />
          <Route path="/networking" component={NetworkScoreComponent} />
          <Route path="/changePass" component={ChangePasswordComponent} />
          <Route path="/scoreReport" component={ScoreReport} />
          <Route path="/leaderBoard" render={(props) => <LeaderBoardComponent {...props} />} />
          <Route path="/publicProfile" render={(props) => <PublicProfileComponent {...props} />} />
          {/* <Route path="/:id/:name" component={MoreLeatestLessonComponent} /> */}
          <Route path="/" component={SplashScreen} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
