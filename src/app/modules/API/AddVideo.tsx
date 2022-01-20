
// import {Button} from "react-bootstrap-v5";
// import {useHistory} from "react-router-dom";
// import {useState} from "react";

const AddVideo = () =>{

    // const [toDashboard, setToDashboard] = useState(false)
    // let history = useHistory();
    //
    //
    // if (toDashboard === true) {
    //     history.push('/')
    // };

    return(
        <>
            {/*action="https://mercurysolsweb.herokuapp.com/rest/api/admin/add_video"*/}
            <h1>Add Homepage Video</h1>
            <form className="pt-5" method="post" action="https://mercurysolsweb.herokuapp.com/rest/api/admin/add_video" >
                <label>Insert Video Link: </label>
                <input type="text" name="videoLink" required={true}/>
                <button type="submit"  className="bg-primary btn-sm">Submit</button>
                {/*onSubmit={() =>  history.push('/')}*/}
            </form>
        </>
    )
}
export default AddVideo;