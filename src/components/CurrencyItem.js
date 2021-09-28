import React from 'react'

const CurrencyItem = ({ flag, name, rate }) => {
    return (
        <tr>
            <td> { flag } </td>
            <td> { name } </td>
            <td> { rate } </td>
        </tr>
    );
};

export default CurrencyItem