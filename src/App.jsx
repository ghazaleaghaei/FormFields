import { useForm } from "react-hook-form"
import {
    Input,
    RadioInputGroup,
    Select,
    Checkbox,
} from "./Components/Exports"

function App() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        getValues,
    } = useForm({
        defaultValues: {
            categories: "test3",
            gender: "female",
            interest: ['react.js', 'vue.js'],
            name: "testttttttt",
            title: "test example",
        }
    })
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
                        value: 10,
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
                        value: 10,
                        message: "name length 20...."
                    }
                }}
                errors={errors}
            // title={getValues("title")}  **if we want access to input with name "title" in this input field
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
            <Select
                label="categories"
                name="categories"
                register={register}
                required
                validationSchema={{
                    required: "categories is required",
                }}
                errors={errors}
                options={[
                    {
                        value: "test1",
                        label: "test1",
                    },
                    {
                        value: "test2",
                        label: "test2",
                    },
                    {
                        value: "test3",
                        label: "test3",
                    },
                ]}

            />
            <Checkbox
                register={register}
                name="interest"
                label="interest"
                required
                validationSchema={{
                    required: "categories is required",
                }}
                errors={errors}
                options={[
                    {
                        value: "vue.js",
                        label: "vue.js",
                    },
                    {
                        value: "react.js",
                        label: "react.js",
                    },
                    {
                        value: "node.js",
                        label: "node.js",
                    },
                ]}
            />
            <button type="submit">submit</button>
        </form>
    )
}

export default App
