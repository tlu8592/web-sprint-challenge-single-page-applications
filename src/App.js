import React, { useEffect, useState } from "react"
import * as yup from 'yup'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import OrderForm from './components/OrderForm'
import schema from './formSchema'
import axios from 'axios'


const initialFormValues = {
  customerName: '',
  choiceOfSize: '',
  pepperoni: false,
  cheese: false,
  sausage: false,
  peppers: false,
  olives: false,
  specialInstructions: ''
}

const initialFormErrors = {
  name: '',
  choiceOfSize: '',
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [orders, setOrders] = useState([])
  const [disabled, setDisabled] = useState(false)
  
  // const getOrders = () => {
  //     axios.get('https://reqres.in/api/orders')
  //       .then(response => {
  //         const newOrders = response.data
  //         setNewOrders(newOrders)
  //       })
  // }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(response => {
        setOrders([...orders, newOrder])
      })
      .catch(error => console.log(error))
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const verifyValid = () => {
    schema
    .isValid(formValues)
    .then(isSchemaValid => {
      setDisabled(!isSchemaValid)
    })
  }

  useEffect(() => {
    verifyValid()
  }, [formValues])

  
  const changeHandler = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.message
        })
      })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.customerName.trim(),
      choiceOfSize: formValues.choiceOfSize.trim(),
      toppings: ["pepperoni", "cheese", "sausage", "pepper", "olives"].filter(topping => formValues[topping]),
      specialInstructions: formValues.specialInstructions.trim()
    }
    postNewOrder(newOrder)
  }

  console.log(orders)
  
  return (
    <div className='App'>
      <Route path='/' component={NavBar} />
      
      <Switch>
        <Route path='/pizza'>
          <OrderForm 
            values={formValues} 
            update={changeHandler} 
            submit={formSubmit} 
            disabled={disabled} 
            errors={formErrors}
          />
        </Route>
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
};

export default App;
