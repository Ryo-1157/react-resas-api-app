import React from 'react';
import { ReactNode } from 'react';
import styles from '../../styles/Atoms/CheckboxLabel.module.scss';

type Prefecture = {
	prefCode: number;
	prefName: string;
	children: ReactNode;
};

export const CheckboxLabel: React.FC<Prefecture> = React.memo((props) => {
	const { prefCode, prefName, children } = props;
	return (
		<label htmlFor={`prefCode-${prefCode}`} className={styles.bl_checkBpxLabel}>
			{children}
			{prefName}
		</label>
	);
});
