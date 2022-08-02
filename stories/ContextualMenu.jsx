import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {useCallback, useState} from 'react';

import { Button } from './Button'
import css from './ContextualMenu.module.less';

const Popup = (props) => {
	console.log(props.direction)
	return (
		<div className={css.contextualMenu}>
			<div className={css.container}>
				<p>Item one</p>
				<p>Item two</p>
			</div>
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

Popup.propTypes = {
	direction: PropTypes.oneOf(['above', 'below'])
}

Popup.defaultProps = {
	direction: 'below'
}
