export default class DataFetcher {
	static token = ''

	static QueryBalance(): void {
		console.log(`execute axios for: ${this.token}`)
	}
}
