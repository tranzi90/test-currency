import React, {useEffect, useState} from 'react'
import { Container, Table } from "react-bootstrap"
import CurrencyItem from "./CurrencyItem"
import axios from "axios"
import DropdownList from "./DropdownList"

const App = () => {
	const [currency, setCurrency] = useState({})
	const [names, setNames] = useState({})

	useEffect( () => {
		async function fetchData() {
			// const currentRates = await axios.get('http://data.fixer.io/api/latest?access_key=b8d1c676f1ce61e37325aa06be69d48c')
			// const { rates } = currentRates.data

			// const currencies = await axios.get('http://data.fixer.io/api/symbols?access_key=b8d1c676f1ce61e37325aa06be69d48c')
			// const { symbols } = currencies.data
			// setNames(symbols)
		}
		fetchData();
	}, [])

	const showInfo = (eventKey) => {

		setCurrency({ name: eventKey, flag: 'https://flagcdn.com/16x12/za.png' })
	}

	return (
		<Container>
			<DropdownList names={names} showInfo={showInfo} />
			<Table>
				<thead>
					<tr>
						<th>Flag</th>
						<th>Name</th>
						<th>Rate</th>
					</tr>
				</thead>
				<tbody>
					<CurrencyItem currency={currency} />
				</tbody>
			</Table>
		</Container>
	)
}

export default App
