// import {Button} from "react-bootstrap-v5";
// import {useHistory} from "react-router-dom";
// import {Redirect} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";


const AddVideo = () =>{

    const [toDashboard, setToDashboard] = useState("")

    const dataChangeHandler = (event:any) => {
        setToDashboard(event.target.value);
    };

    const submitData = (event:any) => {
        event.preventDefault();

        const inputData={
            videoLink:toDashboard,
        }
        axios.post("https://mercurysolsweb.herokuapp.com/rest/api/admin/add_video",inputData).then((resp)=>{
            if(resp.status ===200 )
            {
                Swal.fire<any>('Successfully Inserted')
            }
            else {
                Swal.fire<any>('Error')
            }
            setToDashboard('');
    })
    }

    return(
        <>
            <h1>Add Homepage Video</h1>
            <form className="pt-5"  onSubmit={submitData}>
                <label>Insert Video Link: </label>
                <input type="text" name="videoLink" onChange={dataChangeHandler} value={toDashboard} required={true}/>
                <button type="submit" className="bg-primary btn-sm">Submit</button>
            </form>
        </>
    )
}
export default AddVideo;