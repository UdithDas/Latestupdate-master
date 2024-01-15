import React, { useEffect, useState } from 'react';
import { Button, Rating, TextField } from '@mui/material'
import './Product.css'
import axios from 'axios'

const Product = () => {

    var [rating, setRating] = useState([]);
    const [input,setInput] = useState({
        uid:'',
        rating:''
    })

    useEffect(()=>{
        axios.get("http://localhost:4005/sview")
        .then(response =>{
            console.log(response.data)
            setRating(response.data)
        })
        .catch(err=>console.log(err))
    },[])


    const addHandler = (e) => {
        const {name,value}=e.target
        setInput((input) => ({...input,[name]:value}))
        console.log(input)
        }

        const savedata = () => {
            const formdata = new FormData();
            formdata.append('uid', input.uid);
            formdata.append('rating', input.rating);
            fetch('http://localhost:4005/ratingnew',
                { method: 'post', body: formdata, })
                .then((response) => response.json())
                .then((data) => {
                    alert("record saved");
                })
                .catch((err) => {
                    console.log("error");
            })
        }

    return (
        <div align="center" className='txt'>
       <h3>Restaurant Rating</h3><br/><br/>
       <TextField  label="Restuarant id" name='restuarant' variant="outlined" type='text'/><br/><br/>
       Rating Approved by Govt&nbsp;&nbsp;<Rating name="size-small" defaultValue={3} size='small' onChange={addHandler} /><br/><br/>
       <Button align="center" variant='contained' onClick={savedata}>Submit</Button>
      
    </div>
    );
};

export default Product;