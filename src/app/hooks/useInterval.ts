import { useEffect, useState } from "react";

export const useInterval = (callback: () => void, time: number | null) => {
	const [timer, setTimer] = useState<any>(null);

	useEffect(() => {
		if (time) {
			setTimer((state: any) => {
				if (state) {
					clearInterval(state);
				}

				return setInterval(callback, time);
			});
		} else {
			setTimer((state: any) => {
				if (state) {
					return clearInterval(state);
				}
				return null;
			});
		}
	}, [callback, time]);

	useEffect(() => {
		return () => {
			setTimer((state: any) => {
				return clearInterval(state);
			});
		};
	}, []);
};
