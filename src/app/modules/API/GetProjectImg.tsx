import {Table} from "react-bootstrap-v5";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {KTSVG} from '../../../_metronic/helpers'
import moment from "moment";
import Swal from 'sweetalert2'


const GetProjectImg = () =>{
    const [img,setImg]= useState<any[]>([]);
    useEffect(()=>{
        axios.get("https://mercurysolsweb.herokuapp.com/rest/api/admin/get_feature_image")
            .then((resp)=>{
                // let a = resp.data.data;
                // console.log(a);
                setImg(resp.data.data)
                console.log(setImg(resp.data.data));
            })
    },[])


    return(
        <>
            <div className='card-body py-3'>
                {/* begin::Table container */}
                <div className='table-responsive'>
                    {/* begin::Table */}
                    <table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
                        {/* begin::Table head */}
                        <thead>
                        <tr className='fw-bolder text-muted'>
                            <th className='w-25px'>
                                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                    <input
                                        className='form-check-input'
                                        type='checkbox'
                                        value='1'
                                        data-kt-check='true'
                                        data-kt-check-target='.widget-13-check'
                                    />
                                </div>
                            </th>
                            <th className='min-w-150px'>Id</th>
                            <th className='min-w-140px'>Created At</th>
                            <th className='min-w-120px'>Video Link</th>
                            <th className='min-w-100px text-end'>Actions</th>
                        </tr>
                        </thead>
                        {/* end::Table head */}
                        {/* begin::Table body */}
                        <tbody>

                        {
                            img.map((img,i) =>{
                                return(
                                    <tr key={i}>
                                        <td>
                                            <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                <input className='form-check-input widget-13-check' type='checkbox' value='1' />
                                            </div>
                                        </td>

                                        <td>
                                            <a className='text-dark fw-bolder text-hover-primary fs-6'>
                                                {i+1}
                                            </a>
                                        </td>

                                        <td>
                                            <a  className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                {moment(img.createdAt).format("DD-MM-YYYY")}
                                            </a>
                                        </td>

                                        <td>
                                            <a className='text-dark fw-bolder text-hover-primary d-block mb-1 fs-6'>
                                                {img.image}
                                            </a>
                                        </td>


                                        {/*<td>*/}
                                        {/*    <span className='badge badge-light-success'>Approved</span>*/}
                                        {/*</td>*/}

                                        <td className='text-end'>
                                            {/*<a className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>*/}
                                            {/*    <KTSVG path='/media/icons/duotune/general/gen019.svg' className='svg-icon-3' />*/}
                                            {/*</a>*/}

                                            <a  className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                                                <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                            </a>

                                            <a className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                <KTSVG path='/media/icons/duotune/general/gen027.svg' className='svg-icon-3' />
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                        {/* end::Table body */}
                    </table>
                    {/* end::Table */}
                </div>
                {/* end::Table container */}
            </div>
        </>
    )
}
export default GetProjectImg;