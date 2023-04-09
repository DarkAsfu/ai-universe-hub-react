import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Card = () => {
    const [data, setData] = useState([])
    const [singleData, setSingleData] = useState({})
    const [showAll, setShowAll] = useState(false)
    const [uniqueId, setUniqueId] = useState(null)
    const handleShowAll = () => {
        setShowAll(true)
    }
    console.log(uniqueId);
    // const handleId = (id, name) =>{
    //     console.log(id, name);
    // }
    const handleSort = () =>{
        const sortedData = data.sort((a, b) => {
            return new Date(b.published_in) - new Date(a.published_in);
            // return new Date(a.published_in) - new Date(b.published_in);
        });
        setData([...data, sortedData]);
    };
    useEffect(() => {
        console.log('hello form use effect')
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
            .then(res => res.json())
            .then(data => setSingleData(data.data))
    }, [uniqueId])
    console.log(singleData)
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(
                `https://openapi.programming-hero.com/api/ai/tools`
            );
            const data = await res.json();
            setData(data.data.tools)
        };
        loadData();
    }, []);
    return (
        <div>
            <span onClick={handleSort}>
                <Button>Sort by date</Button>
            </span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12'>
                {
                    data.slice(0, showAll ? 12 : 6).map(singleData => <SingleData key={singleData.id} singleData={singleData} setUniqueId={setUniqueId}></SingleData>)
                };
            </div>
            {!showAll && (
                <span className='text-center' onClick={handleShowAll}>
                    <Button >See more</Button>
                </span>
            )}
            <Modal singleData={singleData}></Modal>
        </div>
    );
};

export default Card;