import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { makeStyles, TextField } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './AddProduct.css'

const GET_ALL_CATEGORY = gql`
query getAllCategory {
    getAllCategory{
    categoryName
    }
}
`;


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      display: 'flex',
      flexDirection: 'column',
      width: '25ch',
    },
  },
}));

function AddProduct() {


  const { loading, error, data } = useQuery(GET_ALL_CATEGORY);
  const classes = useStyles();


  const onChangeHanlder = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>
      <form className={classes.root}>
        <TextField className="form-field" id="outlined-basic" label="Product Name" variant="outlined" />
        <TextField className="form-field" id="outlined-basic" label="Product Description" variant="outlined" />
        <TextField className="form-field" id="outlined-basic" label="Product Price" variant="outlined" />
        <input type="file" onChange={onChangeHanlder}/>

        <Select className="form-field">
          {data?.getAllCategory.map(category => <MenuItem>{category.categoryName}</MenuItem>)}
        </Select>
      </form>
    </div>
  )
}

export default AddProduct
