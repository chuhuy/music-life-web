import React, { forwardRef } from "react";

export const Radio = forwardRef((props: any, ref: any) => {
  const { field, label} = props;

  return (
    <label className="containerCheckbox">
      {label}
      <input type="radio" {...field} {...props}/>
      <span className="checkmark radio-button" />
    </label>
  );
})
