import React from "react"

const Checkbox = ({
    register,
    options,
    label,
    required,
    name,
    errors,
    validationSchema,
}) => {
    return <>
        <label>{label}  {required && <span>*</span>}</label>
        {options.map(option =>
            <React.Fragment key={option.value}>
                <input
                    type="checkbox"
                    value={option.value}
                    name={option.value}
                    {...register(name, validationSchema)}
                    id={option.value}
                />
                <label htmlFor={option.value}>
                    {option.label}
                </label>
            </React.Fragment>
        )}
        {errors && errors[name] && <span>{errors[name]?.message}</span>}
    </>
}
export default Checkbox
