import React from 'react'
import codes from '../codes.json'

const CurrencyItem = ({ currency: { flags, name, rate } }) => {

    let selectedFlags = flags.map(flag => <img src={`https://flagcdn.com/16x12/${flag}.png`} alt='' />)
    const firstCode = flags[0]
    const firstFlag = selectedFlags[0]

    selectedFlags.shift()
    flags.shift()

    return (
        <>
            <tr>
                <td>{ firstFlag } {codes[firstCode]}</td>
                <td> { name } </td>
                <td> { rate } </td>
            </tr>
            { selectedFlags
                .map((flag, ind) =>
                    <tr key={ind}>
                        <td>{flag} {codes[flags[ind]]}</td>
                    </tr>
                )
            }
        </>
    );
};

export default CurrencyItem