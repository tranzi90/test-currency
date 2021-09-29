import React, {useEffect, useState} from 'react'
import { Container, Table } from "react-bootstrap"
import CurrencyItem from "./CurrencyItem"
import axios from "axios"
import DropdownList from "./DropdownList"

const App = () => {
	const [currency, setCurrency] = useState('')

	useEffect( () => {
		async function fetchData() {
			// const rates = await axios.get('http://data.fixer.io/api/latest?access_key=b8d1c676f1ce61e37325aa06be69d48c')
			// console.log(rates.data.rates)
		}
		fetchData();
	}, [])

	return (
		<Container>
			<DropdownList/>
			<Table>
				<thead>
					<tr>
						<th>Flag</th>
						<th>Name</th>
						<th>Rate</th>
					</tr>
				</thead>
				<tbody>
					<CurrencyItem currency={currency} key={currency.id} />
				</tbody>
			</Table>
		</Container>
	)
}

export default App
