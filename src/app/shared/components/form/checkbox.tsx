import React, { forwardRef } from "react";
import { Field } from "formik";

export function Checkbox(props: any) {
	return <Field {...props} component={BaseCheckbox} />;
}

const BaseCheckbox = forwardRef<any, HTMLInputElement>(
	({ label, ...props }: any, ref) => {
		return (
			<label className="containerCheckbox">
				{label}
				<input type="checkbox" {...props} ref={ref} />
				<span className="checkmark" />
			</label>
		);
	}
);
