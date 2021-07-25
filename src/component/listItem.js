import LeatestCourseListComponent from './list/leatestCourseListComponent'
import LiveCourseList from "./liveList/liveCourseListComponent";

const ItemList = ({ contents, itemLayout }) => {
    switch (itemLayout) {
        case 'course':
            return <LeatestCourseListComponent contents={contents} />
            break;
        case 'live':
            return <LiveCourseList contents={contents} />
            break;
        default:
            return null;
    }
}

export default ItemList;