import React, { useEffect, useState } from 'react';

const Card = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=40')
            .then((res) => {

                return res.json()
            })
            .then(json => setdata(json.products))
    }, []);
    //console.log(data)
    return (
        <div>
            {
                // data != [] ?
                //     data.map((item, index) => <div>

                //         <li className='' key={index}> {item.brand}</li>
                //         <li className='' key={index}> {item.price}</li>
                //         <li className='' key={index}> {item.price}</li>
                //     </div>)
                //     : "data not found"
                // data.forEach(element => {
                //     console.log(element.brand);
                //     return <li>{element.brand}</li>
                // })
                data.filter(items => items.category == "smartphones").map((items, index) => {

                    return <div key={index}>
                        <li>{items.title}</li>
                        <li>{items.brand}</li>
                        <li>{items.price}</li>
                        <li>{items.description}</li>
                        <img src={items.thumbnail} alt="" />
                        <li>{items.category}</li>

                    </div>
                })
            }
        </div>
    );
}

export default Card;
