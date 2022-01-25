import {Table} from "react-bootstrap-v5";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import moment from "moment";
import Swal from 'sweetalert2'


const GetClientReview = () =>{
    const [client,setClient]= useState<any[]>([]);
    useEffect(()=>{
        axios.get("https://mercurysolsweb.herokuapp.com/rest/api/admin/get_client_review")
            .then((resp)=>{
                // let a = resp.data.data;
                // console.log(a);
                setClient(resp.data.data)
                console.log(setClient(resp.data.data));
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
                                        data-kt-check-target='.widget-9-check'
                                    />
                                </div>
                            </th>
                            <th className='min-w-150px'>Name</th>
                            <th className='min-w-140px'>Country</th>
                            <th className='min-w-120px'>Client Review</th>
                            <th className='min-w-100px text-end'>Actions</th>
                        </tr>
                        </thead>
                        {/* end::Table head */}
                        {/* begin::Table body */}
                        <tbody>

                        {
                            client.map((client,i) =>{
                                return(
                                    <tr>
                                        <td>
                                            <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                                <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                                            </div>
                                        </td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <div className='symbol symbol-45px me-5'>
                                                    <img src={toAbsoluteUrl('/media/avatars/300-14.jpg')} onError={client.clientImage}  />
                                                </div>
                                                <div className='d-flex justify-content-start flex-column'>
                                                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                        {client.clientName}
                                                    </a>
                                                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                        {client.clientDesignation}
                      </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <a href='#' className='text-dark fw-bolder text-hover-primary d-block fs-6'>
                                                {client.clientCountry}
                                            </a>
                                            <span className='text-muted fw-bold text-muted d-block fs-7'>
                   {moment(client.createdAt).format("DD-MM-YYYY")}
                  </span>
                                        </td>
                                        <td>
                                            <div className='d-flex flex-column w-100 me-2'>
                                                <div className='d-flex flex-stack mb-2'>
                                                    <a className='text-dark text-hover-primary fs-6 fw-bold'>
                                                        {client.clientReview}
                                                    </a >
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='d-flex justify-content-end flex-shrink-0'>
                                                <a className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                                                    <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                                                </a>
                                                <a className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                                    <KTSVG
                                                        path='/media/icons/duotune/general/gen027.svg'
                                                        className='svg-icon-3'
                                                    />
                                                </a>
                                            </div>
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
export default GetClientReview;