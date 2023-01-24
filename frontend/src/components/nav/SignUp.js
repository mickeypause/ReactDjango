import { Flex, Button, Input, Text } from '@chakra-ui/react'
import { login } from '../../redux/AuthSlice'
import { useDispatch } from 'react-redux'
export default function SignUp() {
    const dispath = useDispatch()
    return (
        <Flex flexDirection={'column'} width={'100%'}>
            <Input
                placeholder='login'
                marginBottom={'5%'}
                focusBorderColor='blue.100'
            />
            <Input
                placeholder='email'
                focusBorderColor='blue.100'
                marginBottom={'5'}
            />
            <Input
                placeholder='password'
                focusBorderColor='blue.100'
                marginBottom={'5%'}
            />
            <Input placeholder='repeat password' focusBorderColor='blue.100' />
            <Flex marginTop={'5%'} flexDirection={'row'}>
                <Text flexDirection={'row'}>Have account?&nbsp;</Text>
                <Text
                    color={'blue.400'}
                    fontWeight='600'
                    cursor={'pointer'}
                    onClick={() => {
                        dispath(login())
                    }}>
                    {' '}
                    Sing In
                </Text>
            </Flex>

            <Button
                bg={'blue.200'}
                fontWeight={'600'}
                _hover={{ bg: 'blue.100' }}
                marginTop={'5%'}
                onClick={() => {
                    console.log('button')
                }}>
                Create Account
            </Button>
        </Flex>
    )
}
