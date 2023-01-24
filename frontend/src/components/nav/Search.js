import { Flex, Input,Text } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'

export default function Search() {
    const [input, setInput] = useState('')
    const [productList, setProductsList] = useState([])

    const [value, setValue] = useState('')
    const handleChange = (event) => setValue(event.target.value)
  
    const searhFor = async (input) => {
      if (input.length >= 1) {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/discussions/?search=${input}`
          )
          setProductsList(response.data)
          console.log(productList)
        } catch (err) {
          console.info(err)
        }
      } else {
        setProductsList([])
      }
    }
  
    return (
        <Flex flexGrow={1}>
            <Input
                placeholder='Search'
                variant={'filled'}
                focusBorderColor='blue.100'
                margin={'20px'}
                _placeholder={{ color: 'blue.200', fontWeight: '600' }}
                value={value}
                onChange={handleChange}
            
            />
            <Flex>
               {productList && productList.map((product) => {
                return (
                    <Flex>
                        <Text>{product.title}</Text>
                    </Flex>
                )
               })}
            </Flex>
        </Flex>
    )
}
