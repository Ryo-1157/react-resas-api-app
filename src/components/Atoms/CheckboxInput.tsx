import { Prefecture } from '../../type';
import styles from '../../styles/Atoms/CheckboxInput.module.scss';
import React from 'react';

export const CheckboxInput: React.FC<Prefecture> = React.memo((props) => {
	const { prefCode, prefName, onChange } = props;
	return (
		<input
			className={styles.bl_checkboxInput}
			type="checkbox"
			id={`prefCode-${prefCode}`}
			name={prefName}
			onChange={(event) => {
				onChange(prefName, prefCode, event.target.checked);
			}}
		/>
	);
});
