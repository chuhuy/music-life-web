import { useContext, useEffect } from "react";
import { PageTitleContextType, PageTitleContext } from "../contexts/PageTitle";

export const usePageTitle = (title?: string) => {
	const context = useContext<PageTitleContextType | undefined>(
		PageTitleContext
	);
	if (context === undefined) {
		throw new Error("usePagTitle must be used in PageTitleProvider");
	}

	useEffect(() => {
		if (title) {
			context.setPageTitle(title);
		}
	}, [title, context]);

	return context;
};
