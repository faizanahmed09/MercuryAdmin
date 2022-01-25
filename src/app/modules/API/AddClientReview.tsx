import axios from 'axios'
import {useState} from 'react'
import swal from 'sweetalert2';
import FormData from 'form-data'

const AddClientReview = () => {
    const [clientName, setclientName] = useState();
    const [clientCountry, setclientCountry] = useState();
    const [filez, setfilez] = useState(undefined);
    const [clientDesignation, setclientDesignation] = useState();
    const [clientReview, setclientReview] = useState();

    function handleclientName(event:any){
        setclientName(event.target.value)
    }
    function handleclientCountry(event:any){
        setclientCountry(event.target.value)
    }
    function handlefile(event:any){
        var path = event.target.files[0];
        setfilez(path);
        console.log(filez)
    }
    function handleclientDesignation(event:any){
        setclientDesignation(event.target.value)
    }
    function handleclientReview(event:any){
        setclientReview(event.target.value)
    }

    function handleSubmit(e:any){
        e.preventDefault();
        const form = new FormData();
        form.append("clientName", clientName);
        form.append("clientCountry", clientCountry);
        form.append("file", filez);
        form.append("clientDesignation", clientDesignation);
        form.append("clientReviews", clientReview);
        console.log('Form',form)


        // const inputData={
        //     clientName: clientName,
        //     clientCountry:clientCountry,
        //     file:filez,
        //     clientDesignation:clientDesignation,
        //     clientReviews:clientReview,
        // }

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'accept': 'application/json','Content-Type': `multipart/form-data;boundary=${form}` },
        //     body: JSON.stringify(form),
        // };

        // fetch('https://mercurysolsweb.herokuapp.com/rest/api/admin/add_client_review',requestOptions)

        axios({
            url: "https://mercurysolsweb.herokuapp.com/rest/api/admin/add_client_review",
            method:'POST',
            data: form,
            headers:{
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': 'multipart/form-data',
            }

        })
            .then((resp)=>{
                if(resp.status===200){
                    console.log(resp.status)
                    swal.fire('successfull')
                }
                else{
                    swal.fire('error')
                }

            })
    }

    return (
        <>

            <h1>Add Client Review</h1>
            <form encType="multipart/form-data" onSubmit={handleSubmit} >
                <label>Client Name </label>
                <input type="text" name="clientName" id="clientName" onChange={handleclientName}/>
                <label>Client country</label>
                <input type="text" name="clientCountry" id="clientCountry" onChange={handleclientCountry}/>
                <label>Client Picture</label>
                <input type="file" name="file" id="file" onChange={handlefile} />
                <label>Client Review</label>
                <input type="text" name="clientReviews" id="clientReview" onChange={handleclientDesignation} />
                <label>Client Designation</label>
                <input type="text" name="clientDesignation" id="clientDesignation" onChange={handleclientReview}/>
                <button type="submit" className="bg-primary btn-sm">Submit</button>
            </form>

        </>
    )
}

export default AddClientReview;