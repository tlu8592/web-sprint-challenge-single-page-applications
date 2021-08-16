import React from 'react'

const OrderForm = (props) => {
    const { values, update, submit, disabled, errors } = props

    const onChange = evt => {
        const { checked, name, type, value } = evt.target

        if (type === "checkbox") {
            update(name, checked)
        } else {
            update(name, value)
        }
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return(
      <div>
        <form id="pizza-form" onSubmit={evt => onSubmit(evt)}>
            <h1>Build Your Own Pizza</h1>
            <h3>Name</h3>
            <input 
                value={values.customerName}
                onChange={evt => onChange(evt)}
                id="name-input"
                name="customerName"
                type="text"
            />
            <p>{errors.customerName}</p>

            <h3>Choice of Size</h3>
                <select name='choiceOfSize' id='size-dropdown' onChange={evt => onChange(evt)} value={values.choiceOfSize}>
                    <option value=''>Select</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
            <p>{errors.choiceOfSize}</p>
            
            <h3>Add Toppings</h3>
            <div>
                <label>
                    Pepperoni
                    <input 
                        type="checkbox" 
                        name="pepperoni"
                        onChange={evt => onChange(evt)} 
                        checked={values.pepperoni} 
                    />
                </label>
                <label>
                    Cheese
                    <input 
                        type="checkbox" 
                        name="cheese" 
                        onChange={evt => onChange(evt)}
                        checked={values.cheese}
                    />
                </label>
                <label>
                    Sausage
                    <input 
                        type="checkbox" 
                        name="sausage" 
                        onChange={evt => onChange(evt)}
                        checked={values.sausage} 
                    />
                </label>
                <label>
                    Bell Peppers
                    <input 
                        type="checkbox" 
                        name="peppers" 
                        onChange={evt => onChange(evt)}
                        checked={values.peppers} 
                    />
                </label>
                <label>
                    Olives
                    <input 
                        type="checkbox" 
                        name="olives" 
                        onChange={evt => onChange(evt)}
                        checked={values.olives} 
                    />
                </label>
            </div>

            <h3>Special Instructions</h3>
            <input
                id="special-text" 
                type="text" 
                placeholder="Anything else you like to add?"  
                name="specialInstructions" 
                onChange={evt => onChange(evt)}
                value={values.specialInstructions} 
            />
            <div>
                <button id="order-button" disabled={disabled}>Add to order</button>
            </div>
        </form> 
      </div>  
      
    )
}

export default OrderForm