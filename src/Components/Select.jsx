const Select = ({
    label,
    required,
    name,
    register,
    options,
    errors,
    validationSchema,
}) => {
    console.log(errors)
    return <div>
        <label htmlFor={name}>
            {label}
            {required && <span>*</span>}
        </label>
        <select {...register(name, validationSchema)} id={name}>
            {
                options.map(option =>
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                )}
        </select>
        {errors && errors[name] && <span>{errors[name]?.message}</span>}
    </div>
}
export default Select
