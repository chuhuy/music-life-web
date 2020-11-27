export const toAbsoluteUrl = (pathname: string) =>
	process.env.PUBLIC_URL + pathname;

export const getRoutePathWithParam = (
	path: string,
	data?: { [key: string]: string }
) => {
	let result = path;

	for (const k in data) {
		result = result.replace(`:${k}`, data[k]);
	}

	return result;
};

export function getCurrentUrl(location: any) {
	return location.pathname.split(/[?#]/)[0];
}

export function checkIsActive(location: any, url: string, exact?: boolean) {
	const current = getCurrentUrl(location);
	if (!current || !url) {
		return false;
	}

	if (exact && current === url) {
		return true;
	}

	if (current.indexOf(url) > -1) {
		return true;
	}

	return false;
}

export const isCurrentUrl = (location: any, url: string, exact?: boolean) => {
	const current = getCurrentUrl(location);

	if (exact && current === url) {
		return true;
	}

	if (current.indexOf(url) > -1) {
		return true;
	}

	return false;
};
