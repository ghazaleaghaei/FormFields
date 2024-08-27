const RadioInput = ({
    label,
    name,
    register,
    validationSchema,
    value,
    errors,
    watch,
    id,
}) => {
    return <div>
        <input
            type="radio"
            name={name}
            {...register(name, validationSchema)}
            value={value}
            id={id}
            checked={watch(name) === value}
        />
        <label htmlFor={id}>{label}</label>
        {errors && errors[name] && <span>{errors[name]?.message}</span>}
    </div>
}

export default RadioInput
