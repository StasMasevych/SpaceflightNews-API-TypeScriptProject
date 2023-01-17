

import {useState, ChangeEvent} from 'react'

import { useNewsContext } from '../../hooks/useNewsContext';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//

const NewsSearch: React.FC = () => {
  const [text, setText] = useState('')
  const {data, searchNews} = useNewsContext()

  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>):void => {
    setText(e.target.value)
    console.log(searchNews!(data!, text))
  }

  console.log(text)

  return (

    <form className="search-form">
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
        '& > :not(style)': { m: 4, width: '50ch' },
       
      }}
      >
      <TextField 
        //id="standard-basic" 
        id="fullWidth"
        label="Search" 
        color="primary"
        fullWidth
        type='search'
        sx={{
            mb:"3rem",
        }}
        value={text}
        onChange={onChangeHandler}
        />
        
    </Box>
  
    </form>
    
  );
}

export default NewsSearch