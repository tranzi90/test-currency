import React from 'react'
import {Dropdown} from "react-bootstrap"

const DropdownList = ({ names, showInfo }) => {
    return (
        <Dropdown className='select' onSelect={showInfo}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Выберите валюту
            </Dropdown.Toggle>

            <Dropdown.Menu>
                { Object.values(names).map((name) =>
                    <Dropdown.Item key={name} eventKey={name}> {name} </Dropdown.Item>
                )}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default DropdownList