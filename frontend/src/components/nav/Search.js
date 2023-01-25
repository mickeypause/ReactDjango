import { Flex, Input, Text } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Search() {
    const [input, setInput] = useState('')
    const [productList, setProductsList] = useState([])
    const navigate = useNavigate()
    const handleChange = (event) => setInput(event.target.value)

    const searhFor = async (input) => {
        if (input.length >= 1) {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/discussions/?search=${input}`
                )
                setProductsList(response.data)
            } catch (err) {
                console.info(err)
            }
        } else {
            setProductsList([])
        }
    }
    console.log(input)
    useEffect(() => {
        searhFor(input)
    }, [input])

    return (
        <Flex flexDirection='column' flexGrow={1}>
            <Flex>
                <Input
                    placeholder='Search'
                    variant={'filled'}
                    focusBorderColor='blue.100'
                    margin={'20px'}
                    _placeholder={{ color: 'blue.200', fontWeight: '600' }}
                    value={input}
                    onChange={handleChange}
                />
            </Flex>

            <Flex
                position={'absolute'}
                top={'40px'}
                margin={'20px'}
                flexDirection={'column'}
                bg='white'
                width={'80%'}
                justify={'center'}
                borderBottomRadius={10}
                alignSelf={'center'}
            >
                {productList &&
                    productList.slice(0, 3).map((product) => {
                        return (
                            <Flex
                                marginBottom={'5px'}
                                padding={'10px'}
                                _hover={{ bg: 'gray.200' }}
                                cursor={'pointer'}
                                onClick={() => {
                                    navigate(`/discussions/${product.id}`)
                                    setInput('')
                                }}
                            >
                                <Text>{product.title}</Text>
                            </Flex>
                        )
                    })}
            </Flex>
        </Flex>
    )
}
