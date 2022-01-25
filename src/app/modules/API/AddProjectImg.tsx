import axios from "axios";
import Swal from "sweetalert2";
import {useState} from "react";
import FormData from 'form-data'

const AddProjectImg = () =>{
    const [toImg, setToImg] = useState("")

    const imgHandler = (event:any) => {
        setToImg(event.target.files[0]);
        console.log(toImg);
    };

    const submitImg = (event:any) => {
        event.preventDefault();
        const form = new FormData();
        form.append("file", toImg);
        console.log(form)

        axios.post("https://mercurysolsweb.herokuapp.com/rest/api/admin/add_feature_image",form)
            .then((resp)=>{
            if(resp.status ===200 )
            {
                Swal.fire<any>('Successfully Inserted')

            }
            else if(resp.status ===500) {
                Swal.fire<any>('Error')
            }

        })
    }
    return(
        <form className="row g-3" onSubmit={submitImg}>
            <div className="input-group mb-3" style={{width:600}}>
                <input type="file" name="file" className="form-control" id="file" onChange={imgHandler}/>
                    <input type="submit" className="input-group-text" value="Upload"/>
            </div>
        </form>
    )
}
export default AddProjectImg;