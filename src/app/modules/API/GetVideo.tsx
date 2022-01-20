import {Table} from "react-bootstrap-v5";
import {useEffect, useState} from "react";
import axios from "axios";


const GetVideo = () =>{
    const [video,setVideo]= useState<any[]>([]);
    useEffect(()=>{
        axios.get("https://mercurysolsweb.herokuapp.com/rest/api/admin/get_home_video").then((resp)=>{
            // let a = resp.data.data;
            // console.log(a);
            setVideo(resp.data.data)
            console.log(setVideo(resp.data.data));
        })
    },[])


    return(
        <>
            <Table striped bordered hover >
                <thead>
                <tr>
                    <th>id</th>
                    <th>Created At</th>
                    <th>Video Link </th>
                </tr>
                </thead>

                <tbody>
                {
                    video.map((video,i) =>{
                       return(
                           <>
                           <tr key={i}>
                               <td>{video._id}</td>
                               <td>{video.createdAt}</td>
                               <td>{video.videoLink}</td>
                           </tr>
                           </>
                           )
                    })
                }
                </tbody>
            </Table>
        </>
    )
}
export default GetVideo;