import React from 'react'
import {Dropdown} from "react-bootstrap"

const DropdownList = () => {
    return (
        <Dropdown className='select'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Выберите валюту
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">eur</Dropdown.Item>
                <Dropdown.Item href="#/action-2">usd</Dropdown.Item>
                <Dropdown.Item href="#/action-3">rub</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownList;