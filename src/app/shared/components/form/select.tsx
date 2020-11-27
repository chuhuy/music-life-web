import React from "react";
import { Field } from "formik";

export const Select = ({ children, ...props }: any) => {
	return (
		<Field as="select" {...props} className={`w-100 ${props.className}`}>
			{children}
		</Field>
	);
};
