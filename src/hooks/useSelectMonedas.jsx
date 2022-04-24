import { useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato' sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    border-radius: 10px;
    padding: 14px;

`

const useSelectMonedas = (label, options) => {

    const [state, setState] = useState('')
 
    const SelectMonedas = () =>(
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
            <option value=''>Seleccione</option>
                {options.map(option =>(
                    <option
                         key={option.id}
                        value={option.id}
                    >{option.nombre}</option>
                   
                ))}                
            </Select>
        </>
    )

    return [state, SelectMonedas]
}

export default useSelectMonedas