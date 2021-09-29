import React from 'react'

const CurrencyItem = ({ currency: { flag, name, rate } }) => {
    return (
        <tr>
            <td><img src={ flag } alt='' /></td>
            <td> { name } </td>
            <td> { rate } </td>
        </tr>
    );
};

export default CurrencyItem