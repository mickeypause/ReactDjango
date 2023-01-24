import { Button, Flex, Input } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
export default function ResetPassword() {
    const dispath = useDispatch()
    return (
        <Flex flexDirection={'column'} width={'100%'}>
            <Input
                placeholder='Provide your email'
                focusBorderColor='blue.100'
            />

            <Button
                bg={'blue.200'}
                fontWeight={'600'}
                _hover={{ bg: 'blue.100' }}
                marginTop={'5%'}
                onClick={() => {
                    console.log('button')
                }}>
                Reset Password
            </Button>
        </Flex>
    )
}
