import React from 'react';

const Modal = (props) => {
    console.log(props)
    const { id, description, tool_name, features, image_link, integrations } = props.singleData;
    console.log(integrations)
    // console.log(Object.values(features || {}))
    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card lg:card-side bg-base-100">

                        <div className="card-body border-2 mr-3 w-1/2">
                            <h2 className="card-title">{description ? description : "Not Found"}</h2>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-2xl font-bold mb-3'>Features</h1>
                                    {
                                        Object.values(features || {}).map((feature, index) => <p>{index + 1}. {feature.feature_name}</p>)
                                    }
                                </div>
                                <div>
                                    <h1 className='text-2sxl font-bold mb-3'>Intregation</h1>
                                    {
                                        (integrations || []).map((int, index) => (<p>{index+1}. {int ? int : "not found"}</p>))
                                    }
                                </div>
                            </div>
                        </div>
                        <figure className='w-1/2'><img className="w-full h-96" src={image_link && image_link[0]} alt="Album" /></figure>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;