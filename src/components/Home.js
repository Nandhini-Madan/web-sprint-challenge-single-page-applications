import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Form from'./Form';
import OrderCard from './OrderCard';

const Home = props => {
    return (
        <HomeContainer>
            <header>
                <h1>You Build It, You Eat It</h1>
                
            </header>
           <p> <Link to='/Pizza'>Build Your Pizza</Link></p>
        {props.orders.map((order, i) => < OrderCard key={i} order={order} />)}
        </HomeContainer>
    );
}

const HomeContainer = styled.div`
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    header {
        width: 100%;
        
        background-color: black;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 60%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        h1 {
            color: #fff;
            margin-top: 5rem;
            font-size: 3.6rem;
            backdrop-filter: brightness(40%);
            padding: 20px;
            border-radius: 15px;
        }
    }
    a {
        text-decoration: none;
        font-size: 2.4rem;
        padding: 20px;
        border: 3px solid #fff;
        color: black;
        margin: 5rem 0 5rem 0;
        &:hover {
            background: rgba(255, 255, 255, 0.05);
        }
    }
    div {
        color: blue;
    }
   
`

export default Home;