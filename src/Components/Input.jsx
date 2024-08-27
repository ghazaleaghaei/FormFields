const Input = ({
    name,
    type = "text",
    label,
    register,
    required,
    validationSchema,
    errors,
}) => {
    return <div>
        <label htmlFor={name}>{label}
            {required && <span>*</span>}
        </label>
        <input
            id={name}
            type={type}
            {...register(name, validationSchema)}
            autoComplete="false"
        />
        {errors && errors[name] && <span>{errors[name]?.message}</span>}
    </div>
}

export default Input
