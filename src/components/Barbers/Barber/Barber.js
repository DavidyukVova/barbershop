import React, {useEffect, useState} from 'react'
import Layout from "../../Layout";
import * as Api from "../../../api";

const Barber = ({match}) => {
    const {id} = match.params;

    const [item, setItem] = useState({});

    useEffect(e => {
        Api.get(`/catalog/product/${id}`)
            .then(response => {
                setItem(response.data);
            })
    }, [id]);

    return (
        <Layout>
            <p>This will be barber {item.id}</p>
        </Layout>
    )
};
export default Barber;