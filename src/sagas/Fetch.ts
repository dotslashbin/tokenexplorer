import DataFetcher from '../services/DataFetcher'

export default function* () {
	try {
		DataFetcher.token = '123'
		yield DataFetcher.QueryBalance()
	} catch (error) {
		console.error('Errr in the fetch saga', error)
	}
}
