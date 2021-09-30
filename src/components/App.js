import React, {useEffect, useState} from 'react'
import { Container, Table } from "react-bootstrap"
import CurrencyItem from "./CurrencyItem"
import axios from "axios"
import DropdownList from "./DropdownList"
import CountryCurrs from '../currency.json'

const App = () => {
	const [currency, setCurrency] = useState(null)
	const [names, setNames] = useState({})
	const [rates, setRates] = useState({})

	useEffect( () => {
		async function fetchData() {
			const currentRates = await axios.get('http://data.fixer.io/api/latest?access_key=b8d1c676f1ce61e37325aa06be69d48c')
			const { rates } = currentRates.data
			setRates(rates)

			const currencies = await axios.get('http://data.fixer.io/api/symbols?access_key=b8d1c676f1ce61e37325aa06be69d48c')
			const { symbols } = currencies.data
			setNames(symbols)
		}
		fetchData();
	}, [])

	const showInfo = (eventKey) => {
		const abbr = Object.keys(names).find((key) => names[key] === eventKey)
		const countryCodes = Object.keys(CountryCurrs).filter((key) => CountryCurrs[key] === abbr)

		let rate = rates[abbr]
		const flags = countryCodes.map(code => code.toLowerCase())

		setCurrency({ name: eventKey, flags, rate })
	}

	return (
		<Container>
			<DropdownList names={names} showInfo={showInfo} />
			<Table>
				<thead>
					<tr>
						<th>Флаг</th>
						<th>Название</th>
						<th>Курс</th>
					</tr>
				</thead>
				<tbody>
				{
					currency && <CurrencyItem currency={currency} />
				}
				</tbody>
			</Table>
		</Container>
	)
}

export default App
