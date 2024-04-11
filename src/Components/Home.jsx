 
import { useEffect, useState } from 'react';
import Header from './Header';
import { useLoaderData} from "react-router-dom";
import StateCards from './StateCards';


const Home = () => {
    // const information = useLoaderData();
    // console.log(information);

const [states, setStates]= useState([]);

useEffect(()=>{
    fetch('information.json')
    .then(res=>res.json())
    .then(data => setStates(data))
},[])
console.log(states);



    return (
        <div>
             <Header></Header>

 <div className='mt-12'>
    <h1 className='text-2xl font-bold'>Industrial States</h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4 items-center justify-center'>
        {
            states.map((cardItem,id)=>(
                <StateCards key={id} cardItem={cardItem}></StateCards>
            ))
        }
    </div>
 </div>
        </div>
    );
};

export default Home;