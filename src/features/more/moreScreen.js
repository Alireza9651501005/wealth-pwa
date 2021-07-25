import MoreLiveLessonComponent from "../../component/moreLiveLesson/moreLiveLesson";
import MoreLeatestLessonComponent from "../../component/MoreLeatestLesson/MoreLeatestLesson";
import NavBar from "../nav/nav";

function MoreScreen(props) {

    return (
        <NavBar itemSelected="more">
            {props.location.state.moreTitle === "moreLeatestCourseList" ? <MoreLeatestLessonComponent /> : null}
            {props.location.state.moreTitle === "moreLiveCourseList" ? <MoreLiveLessonComponent /> : null}
        </NavBar>

    );
}

export default MoreScreen;