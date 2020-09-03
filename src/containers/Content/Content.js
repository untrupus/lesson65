import React, {useState, useEffect} from 'react';
import axiosOrders from "../../axiosOrders";
import './Content.css';

const Content = props => {
    const [content, setContent] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response =
                await axiosOrders
                    .get(props.match.params.name + '.json');
            const newContent = response.data;
            setContent(newContent);
        }
        fetchData().catch(console.error);
    }, [props.match.params.name]);

    return (
        <div>
            <h2>{content.title}</h2>
            <p>{content.content}</p>
        </div>
    );
};

export default Content;