import React, {useEffect, useState} from 'react'
import { Container, Table } from "react-bootstrap"
import CurrencyItem from "./CurrencyItem"

const App = () => {
	const [currency, setCurrency] = useState()

	useEffect(() => {

	}, [])

	return (
		<Container>
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
