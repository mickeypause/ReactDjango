import { Button, Flex, Input, Text } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { register, resetPassword } from '../../redux/AuthSlice'
export default function LogIn() {
    const dispath = useDispatch()
    return (
        <Flex flexDirection={'column'} width={'100%'}>
            <Input
                placeholder='login'
                marginBottom={'5%'}
                focusBorderColor='blue.100'
            />
            <Input placeholder='password' focusBorderColor='blue.100' />

            <Flex marginTop={'5%'} flexDirection={'row'}>
                <Text flexDirection={'row'}>Forget your password? &nbsp;</Text>
                <Text
                    color={'blue.400'}
                    fontWeight='600'
                    cursor={'pointer'}
                    onClick={() => {
                        dispath(resetPassword())
                    }}>
                    {' '}
                    Reset password
                </Text>
            </Flex>
            <Button
                bg={'blue.200'}
                fontWeight={'600'}
                _hover={{ bg: 'blue.100' }}
                marginTop={'5%'}
                onClick={() => {
                    console.log('button')
                    dispath(register())
                }}>
                Sign Up
            </Button>
        </Flex>
    )
}
