import { useEffect, useState } from "react";
import { AsyncAPIService } from "../../utils/apiService";
import FileAttachmentLayout from "../../layout/file-attachment-layout/fileAttachment";
import CourseLoaderComponent from "../courseLoaderComponent/courseLoaderComponent";
import StyleSheets from "./style/file.module.css";

const FileAttachmentComponent = (props) => {

    const [attachments, setAttachments] = useState([]);
    const [pending, setPending] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState('');

    const getAttachment = () => {
        setPending(true);
        setError(false);
        AsyncAPIService(
            "/courses/" + props.id + "/attachments",
            "GET",
            {
                onSuccess(response) {
                    setPending(false);
                    setError(false);
                    setAttachments(response.data.data.attachments);
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

                },
                useAccessToken: true,
                useDeviceUid: true
            }
        )
    }

    const retry = () => {
        getAttachment();
    }

    useEffect(() => {
        getAttachment();
    }, [])

    return (
        <div>
            {pending ? <CourseLoaderComponent /> : null}
            {errorMessage != "" ? <span className={StyleSheets.center} style={{ color: 'white', fontFamily: 'IRANSans', position: 'absolute', backgroundColor: 'red', padding: '10px', borderRadius: '10px' }}>{errorMessage}</span> : null}
            {error ? <img className={StyleSheets.retryImg} onClick={retry} /> : null}

            {attachments ?
                attachments.map((el, index) => {
                    return (
                        <FileAttachmentLayout key={index} attachments={el} />
                    )
                })
                : null}
        </div>
    )
}

export default FileAttachmentComponent;