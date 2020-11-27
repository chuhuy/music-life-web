import React, {
	FunctionComponent,
	useState,
	Dispatch,
	SetStateAction,
	useEffect,
} from "react";

export type PageTitleContextType = {
	pageTitle: string;
	setPageTitle: Dispatch<SetStateAction<string>>;
};

export const PageTitleContext = React.createContext<
	PageTitleContextType | undefined
>(undefined);

export const PageTitleProvider: FunctionComponent = ({ children }) => {
	const [pageTitle, setPageTitle] = useState<string>("");

	useEffect(() => {
		document.title = pageTitle;
	}, [pageTitle]);

	return (
		<PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
			{children}
		</PageTitleContext.Provider>
	);
};
