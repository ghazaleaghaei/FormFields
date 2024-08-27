import { useForm } from "react-hook-form"
import {
    Input,
    RadioInputGroup,
} from "./Components/Exports"

function App() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        getValues,
    } = useForm()
    const submitHandler = (data) => {
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <Input
                name="title"
                label="projectTitle"
                register={register}
                required
                validationSchema={{
                    required: "title is required",
                    minLength: {
                        value: 20,
                        message: "title length 20...."
                    }
                }}
                errors={errors}
            />
            <Input
                name="name"
                label="name"
                register={register}
                required
                validationSchema={{
                    required: "name is required",
                    minLength: {
                        value: 20,
                        message: "name length 20...."
                    }
                }}
                errors={errors}
            // title={getValues("title")}  **if we want access to input with name title in this input field
            />
            <div>
                <RadioInputGroup
                    errors={errors}
                    register={register}
                    watch={watch}
                    configs={{
                        name: "gender",
                        validationSchema: { required: "gender is required" },
                        options: [
                            {
                                value: "male",
                                label: "male",
                            },
                            {
                                value: "female",
                                label: "female",
                            }
                        ]
                    }
                    }
                />
            </div>
            <button type="submit">submit</button>
        </form>
    )
}

export default App
