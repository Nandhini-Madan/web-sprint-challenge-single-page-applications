import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required('Please enter your name').min(3, 'That\'s not a real name.'),
    phone: yup.string().required('Please enter a phone number.').matches(/^[0-9]{10}$/, 'Please enter a valid phone number.')
})

const defaultFormState = {
    name: '',
    phone: '',
    bun: 'Sesame Seed',
    patties: '1',
    condiments: {
        ketchup: false,
        mustard: false,
        mayonaise: false,
        barbecue: false,
        lettuce: false,
        onion: false,
        cheese: false,
        bacon: false
    },
    instructions: ''
}

const defaultErrorState = {
    name: '',
    phone: ''
}

const Form = props => {
    const [formState, setFormState] = useState(defaultFormState);
    const [errors, setErrors] = useState(defaultErrorState);
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        schema.isValid(formState).then(valid => setIsDisabled(!valid));
    }, [formState, schema])

    const validate = e => {
        e.persist();
        yup.reach(schema, e.target.name).validate(e.target.value)
        .then(valid => setErrors({...errors, [e.target.name]: ''}))
        .catch(err => setErrors({...errors, [e.target.name]: err.errors[0]}));
    }

    const handleChange = e => {
        if (e.target.type === 'checkbox') {
            setFormState({
                ...formState,
                condiments: {
                    ...formState.condiments,
                    [e.target.value]: e.target.checked
                }
            })
        } else {
            setFormState({
                ...formState,
                [e.target.name]: e.target.value
            })
        }
        if (e.target.name === 'name' || e.target.name === 'phone') {
            validate(e);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Formdata",formState);
        axios.post("https://reqres.in/api/users", formState)
        .then(res => 
            
            props.addOrder(res.data))
        .catch(err => console.log("error",err));
    }

    return (
        <FormContainer>
            <h1> Build Your own Pizza</h1>
            <form onSubmit={handleSubmit}>
            <label>Name
                <input type='text' name='name' onChange={handleChange} data-cy='name' value={formState.name} />
                {errors.name.length > 0 && <p style={{color:'red'}}>{errors.name}</p>}
            </label>
            <label>Phone Number
                <input type='tel' name='phone' onChange={handleChange} data-cy='phone' value={formState.phone} />
                {errors.phone.length > 0 && <p style={{color:'red'}}>{errors.phone}</p>}
            </label>
            <label>Select Bun
                <select name='bun' data-cy='bun' defaultValue='Sesame Seed' onChange={handleChange}>
                    <option value='Sesame Seed'>Sesame Seed</option>
                    <option value='Pretzel'>Pretzel</option>
                    <option value='Brioche'>Brioche</option>
                    <option value='Clabatta'>Clabatta</option>
                    <option value='Kaiser Roll'>Kaiser Roll</option>
                </select>
            </label>
            <fieldset>
                <label>
                    <input checked type='radio' name='patties' onChange={handleChange} data-cy='1' value='1' />
                    1 patty
                </label>
                <label>
                    <input type='radio' name='patties' onChange={handleChange} data-cy='2' value='2' />
                    2 patties
                </label>
                <label>
                    <input type='radio' name='patties' onChange={handleChange} data-cy='3' value='3' />
                    3 patties
                </label>
            </fieldset>
            <fieldset>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} data-cy='ketchup' value='ketchup' />
                    Ketchup
                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} data-cy='mustard' value='mustard' />
                    Mustard
                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} data-cy='mayonaise' value='mayonaise' />
                    Mayonaise
                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} data-cy='barbecue' value='barbecue' />
                    Barbecue
                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} data-cy='onion' value='onion' />
                    Onion
                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} data-cy='lettuce' value='lettuce' />
                    Lettuce
                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} data-cy='cheese' value='cheese' />
                    Cheese
                </label>
                <label>
                    <input type='checkbox' name='condiments' onChange={handleChange} data-cy='bacon' value='bacon' />
                    Bacon
                </label>
            </fieldset>
            <label>
                <textarea name='instructions' data-cy='instructions' onChange={handleChange} value={formState.instructions} />
            </label>
            <button data-cy="submit-button" disabled={isDisabled} type='submit'>Order Your Burger</button>
            </form>
        </FormContainer>
    );
}

const FormContainer = styled.div`
    margin: 5rem auto;
    width: 900px;
    display: flex;
    flex-direction: row;
    color:black;

`

export default Form;