import React from 'react'
import Choices from '../form/TokenDropdown'
export default function Main(): JSX.Element {
	
	
	const tokens = [{
		label:'AliceCoin', 
		hash:'0x5938fc8af82250ad6cf1da3bb92f4aa005cb2717'
	},
	{
		label: 'BobCoin', 
		hash:'0xacfbdcf4693b1780e474116211f7f4795f24e06a'
	}
	]

	return (
		<div>
			The main window
			<Choices tokens={tokens}/>
		</div>
	)
}