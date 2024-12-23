import { useEffect, useRef } from 'react';
import { useStore } from 'react-redux';

export const useResetForm = (reset) => {
	const store = useStore();

	const previousWasLogout = useRef(null);

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			const newWasLogout = store.getState().wasLogout;

			if (previousWasLogout.current !== null && newWasLogout !== previousWasLogout.current) {
				reset();
			}

			previousWasLogout.current = newWasLogout;
		});

		return () => {
			unsubscribe();
		};
	}, [store, reset]);
};
