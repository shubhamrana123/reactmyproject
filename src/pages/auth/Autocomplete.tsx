import React from 'react'
// import { Autocomplete } from '@mui/material'
// import TextField from '@mui/material'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const Autocompletes = () => {

    const userNames = [
        // {id:1,name:'ankit'},
        // {id:2,name:'vivek'},
        // {id:3,name:'rohit'},
        // {id:4,name:'rahul'},
        // {id:5,name:'aniket'},
        'ankit','vivek','shivam' ,'rahul' ,'aniket'
    ]

    const options = ['Option 1', 'Option 2'];
    const handleSearch = () =>{

    }

    const [value, setValue] = React.useState<string | null>(userNames[0]);
    const [inputValue, setInputValue] = React.useState('');
  return (
<>
<Autocomplete







options={options}

// isOptionEqualToValue={(option:any, value:any) => option.id === value.id}

// defaultValue={searchValue}



renderInput={(params) => (

    < TextField

        {...params}

        placeholder="Search for a client"

        
        />
)}
/>
  
  {/* <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
            // alert("change")
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
            
            // alert("input")
          setInputValue(newInputValue);
        }}
      
        options={userNames}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params}  />}
      />
      
    </div> */}
</>
  )
}

export default Autocompletes