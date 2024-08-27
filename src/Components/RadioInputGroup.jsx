import { RadioInput } from "./Exports"

const RadioInputGroup = ({
    errors,
    register,
    watch,
    configs,
}) => {
    const { name, validationSchema = {}, options } = configs
    return <>
        {
            options.map((item) =>
                <RadioInput
                    key={item.value}
                    label={item.label}
                    name={name}
                    id={item.value}
                    register={register}
                    validationSchema={validationSchema}
                    value={item.value}
                    watch={watch}
                />
            )}
        {errors && errors[name] && <span>
            {errors[name]?.message}
        </span>}
    </>
}

export default RadioInputGroup
