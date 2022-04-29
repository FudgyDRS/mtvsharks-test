import { useState } from 'react';
import {
    Container,
    ChakraProvider,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Input,
    extendTheme,
    Box,
  } from '@chakra-ui/react'

interface Props { amount?: string; label?: string }
export default function NumberInputField({ amount, label }: Props) {
  const [state, setState] = useState('')
  //const handleChange = (event) => setValue(event.target.value)
  return (
    <div>
        <label>{label}</label>
        <input  placeholder='1'
            type="text" 
            value={state} 
            name={amount}
            onChange={(e: any) => setState(e.target.value)}
        />
        {state}
    </div>
  );

}
