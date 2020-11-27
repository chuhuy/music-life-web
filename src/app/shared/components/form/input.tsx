import React from "react";
import { Field } from "formik";

export const Input = ({ ...props }: any) => {
	return <Field as="input" {...props} />;
};
