import * as yup from 'yup'

const schema = yup.object().shape({
    customerName: yup.string().required().min(2, "name must be at least 2 characters"),
    choiceOfSize: yup.string().required("pizza size is required"),
    pepperoni: yup.boolean(),
    cheese: yup.boolean(),
    sausage: yup.boolean(),
    peppers: yup.boolean(),
    olives: yup.boolean(),
    specialInstructions: yup.string()
})

export default schema