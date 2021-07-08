/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react'
import { FormControl, FormLabel, FormControlLabel, makeStyles, Radio, RadioGroup } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import TokenAction from '../../stores/tokens/TokenAction'

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}))

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function TokenDropdown(props: any):JSX.Element {
	const classes = useStyles()
	const [choice, setChoice] = useState('choice')

	const { tokens } = props

	const dispatch = useDispatch()	


	const handleChange = (event: any) => {
		setChoice(event.target.value)
		dispatch(TokenAction.RequestGetDetails(choice))
	}

	return (
		<FormControl className={classes.formControl}>
			<FormLabel>Choose your token</FormLabel>
			<RadioGroup aria-label="Tokens" name="Tokens" value={choice} onChange={handleChange}>
				{tokens.map((token: any): JSX.Element => <FormControlLabel value={token.hash} control={<Radio />} label={token.label} />)}
			</RadioGroup>
		</FormControl>
	)
}