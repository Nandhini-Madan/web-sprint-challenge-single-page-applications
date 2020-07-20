import React from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components';
import Form from './Form';
import OrderCard from './OrderCard';
import piz from "../images/Pizza.jpg";

const Home = props => {
    return (
        <div>


            <HomeContainer>
                <header>
                    <h1>Lambda Eats</h1>
                    <nav>
                        <a href="/pizza">Pizza</a>
                        <a>Help</a>
                    </nav>

                </header>
                <div>
                    <img src="https://media.timeout.com/images/101629097/image.jpg"></img>
                    <a href="/Pizza">
                        <button>Pizza</button> </a>
                    {props.orders.map((order, i) => < OrderCard key={i} order={order} />)}
                </div>
                <div>
                    <label>
                        Gowtham City
                    </label>
                    <Location_selection>
                        <Section_container>
                            <img src="/images/Pizza.jpg"></img>
                            < h2>McDonald's</h2>
                            <p>AMerican Burger</p>
                            <div>
                                <button>20-30 min</button>
                                <button>$5.99 deliveryFee</button>
                            </div>
                        </Section_container>
                        <Section_container>
                            <img src="Pizza.jpg"></img>
                            < h2>McDonald's</h2>
                            <p>AMerican Burger</p>
                            <div>
                                <button>20-30 min</button>
                                <button>$5.99 deliveryFee</button>
                            </div>

                        </Section_container>
                    </Location_selection>


                </div>

            </HomeContainer>

        </div>
    );
}


const HomeContainer = styled.div
    `
max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding-right:2%;
  padding-left:2%;
  background-color:yellow;

header{
    padding-top:30px;
    padding-bottom:30px;
display:flex;
flex-direction:row;
}
h1{
    color:red;
    margin-right:60%;
}
a{
    color:black;
    text-align:right;
    margin-left:90%;
    text-decoration:none;
}
img{
    width:750px;
    height:400px;
}`

const Location_selection = styled.div
    `display:flex;
flex-direction:row;
width:100Px;

img{
    width:200px;
    height:200px;
}
h2{
    padding-bottom:10px;
}`

const Section_container=styled.div`

padding-right:20px;
`

export default Home;