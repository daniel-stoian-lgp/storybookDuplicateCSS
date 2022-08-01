import React, {useCallback, useState} from 'react';

import { Button } from './Button'

const Popup = () => {
	return (
		<div style={{width: '200px', backgroundColor: 'teal', position: 'absolute', top: '175px', left: '225px'}}>
			<p>Item one</p>
			<p>Item two</p>
		</div>
	)
}

export const ContextualMenu = () => {
	const [popupVisible, setPopupVisible] = useState(false);

	const handleClick = useCallback(() => {
		setPopupVisible(true);
		if (popupVisible) {
			setPopupVisible(false);
		}
	}, [popupVisible])

	return (
		<div style={{width: '500px', height: '400px'}}>
			<Button
				style={{position: 'absolute', top: '150px', left: '200px'}}
				label="Hello Contextual"
				onClick={handleClick} />
			{popupVisible ? <Popup /> : null}
		</div>
	)
}
