import { useEffect, useState } from "react";
import { AsyncAPIService, CONFIG } from "../../utils/apiService";
import ChaptersLayout from "../../layout/chapters-layout/chapters";
import StyleSheets from "./style/chapter.module.css";
import CourseLoaderComponent from "../courseLoaderComponent/courseLoaderComponent";

const ChaptersComponent = (props) => {

    const [chapters, setChapters] = useState([]);
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [pending, setPending] = useState(false);
    const [error, setError] = useState('');

    const getChapters = () => {
        setPending(true);
        setError(false);
        AsyncAPIService(
            "/courses/" + props.id + "/chapters",
            "GET",
            {
                onSuccess(response) {
                    setPending(false);
                    setError(false);
                    setData(response.data);
                    let newchapters = chapters.concat(response.data.data.chapters);
                    setChapters(newchapters);

                },
                onFail(error) {
                    setError(true);
                    setPending(false);
                    if (error.response != undefined) {
                        setErrorMessage(error.response.data.error);
                        setTimeout(() => {
                            setErrorMessage('');
                        }, 2000);
                    }
                    else {
                        setErrorMessage('مشکلی در ارتباط با سرور به وجود آمده است');
                        setTimeout(() => {
                            setErrorMessage('');
                        }, 2000);
                    }
                }
            },
            {
                // headers: {
                //     Authorization: "Bearer " + Authorization,
                //     device_uuid: device_uuid
                // }
            },
            {
                toast: {
                    fail: "مشکلی در ارتباط با سرور به وجود آمده است",
                },
                useAccessToken: true,
                useDeviceUid: true
            }
        );
    }


    const retry = () => {
        getChapters();
    }

    useEffect(() => {
        getChapters();
    }, [])

    return (
        <div>
            {pending ? <CourseLoaderComponent /> : null}
            {errorMessage != "" ? <span className={StyleSheets.center} style={{ color: 'white', fontFamily: 'IRANSans', position: 'absolute', backgroundColor: 'red', padding: '10px', borderRadius: '10px' }}>{errorMessage}</span> : null}
            {error ? <img className={StyleSheets.retryImg} onClick={retry} /> : null}
            {data ?
                <div>
                    {chapters.map((el, index) => {
                        return (
                            <div key={index}>
                                <div style={{ float: 'right', marginRight: '30px', marginLeft: '30px', fontFamily: 'IRANSans', position: 'static' }} key={index}>
                                    <p>{el.title}</p>
                                </div>
                                <br />
                                <br />
                                <div style={{ marginTop: '10px' }}>
                                    <ChaptersLayout lessons={el.lessons} />
                                </div>
                                <br />
                            </div>
                        )
                    })}
                </div>
                : null}
        </div>
    )

}

export default ChaptersComponent;