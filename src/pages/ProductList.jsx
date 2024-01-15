import { Button, TextField } from '@mui/material';
import React from 'react';

const ProductList = () => {
    return (
        <div align="center" className='txt'>
       <h3>Restaurant Type</h3><br/><br/>
       <TextField  label="Restuarant" name='restuarant' variant="outlined" type='text'/><br/><br/>
       <Button align="center" variant='contained'>Submit</Button>
      
    </div>
    );
};

export default ProductList;