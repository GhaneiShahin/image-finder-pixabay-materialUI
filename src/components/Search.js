import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from '@material-ui/core';
import ImageResults from './ImageResults';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  formControl: {
    margin: theme.spacing(1),
    width: '20%',
    marginTop: 20,
  },
}));

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [amount, setAmount] = useState(20);
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const classes = useStyles();

  const apiUrl = 'https://pixabay.com/api';
  const apiKey = '13527704-251872ca839295e2a60cf007b';

  const handleTextChange = (e) => {
    const val = e.target.value;
    setSearchText(val);
    if (val === '') {
      setImages([]);
    } else {
      axios
        .get(
          `${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`
        )
        .then((res) => setImages(res.data.hits))
        .catch((err) => console.log(err));
    }
  };

  const onAmountChange = (e, index, value) => setAmount(value);
  return (
    <div className={classes.root}>
      <TextField
        style={{ width: '60%' }}
        name="searchText"
        value={searchText}
        onChange={handleTextChange}
        placeholder="Search for images..."
        color="secondary"
      />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Amount</InputLabel>
        <Select
          name="amount"
          value={amount}
          onChange={onAmountChange}
          id="grouped-select"
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
      <br />
      {images.length > 0 ? (
        <ImageResults
          images={images}
          currentImg={currentImg}
          setCurrentImg={setCurrentImg}
          open={open}
          setOpen={setOpen}
        />
      ) : null}
    </div>
  );
};

export default Search;
