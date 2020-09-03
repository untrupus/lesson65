import React, {useEffect, useState} from 'react';
import PAGES from "../../Pages";
import axiosOrders from "../../axiosOrders";
import './Edit.css';

const Edit = props => {
    const [page, setPage] = useState({
        title: '',
        content: '',
    });
    const [pageName, setPageName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            if (pageName !== 'Choose page') {
                const response = await axiosOrders.get(pageName + '.json');
                const newPage = response.data;
                setPage(newPage);
            } else {
                const noChange = {
                    title: '',
                    content: '',
                };
                setPage(noChange)
            }
        }
        fetchData().catch(console.error);
    }, [pageName]);

    const selectPage = event => {
        const value = event.target.value;
        setPageName(value)
    };

    const pageChanged = event => {
        const name = event.target.name;
        const value = event.target.value;
        setPage(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const saveChanges = async (event) => {
        event.preventDefault()
        const pageCopy = {...page};
        try {
            if (page.title !== '' && page.content !== '') {
                const url = pageName + '.json';
                await axiosOrders.put(url, pageCopy);
                props.history.push({
                    pathname: '/pages/' + pageName
                });
            } else {
                alert('Fill in all fields');
            }
        } finally {
            console.log('success');
        }
    };

    const options = PAGES.map(page => (
        <option key={page.id} value={page.id}>{page.title}</option>
    ));

    return (
        <div>
            <h2>Edit page</h2>
            <form onSubmit={saveChanges}>
                <select
                    name="page"
                    className="selectField"
                    value={pageName}
                    onChange={selectPage}
                >
                    <option defaultChecked={true}>Choose page</option>
                    {options}
                </select>
                <p>Title</p>
                <input
                    type="text"
                    name="title"
                    className="field"
                    value={page.title ||''}
                    onChange={pageChanged}
                />
                <p>Content</p>
                <textarea name="content"
                          value={page.content}
                          onChange={pageChanged}
                          className="textarea"/>
                <br/>
                <button type="submit" className="btn">Save</button>
            </form>
        </div>
    );
};

export default Edit;