import React from "react";
import { Field } from "formik";

export const Textarea = ({ ...props }: any) => {
	return <Field as="textarea" {...props} />;
};
