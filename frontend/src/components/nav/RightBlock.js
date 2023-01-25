import { Flex, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
export default function RightBlock() {
    const navigate = useNavigate()
    return (
        <>
            <Flex justify={'center'} align={'center'}>
                <Button
                    onClick={() => {
                        navigate('/discussions/addNew')
                    }}
                    backgroundColor={'blue.300'}
                    color={'white'}
                    _hover={{ bg: 'blue.200' }}
                >
                    Add Discussion
                </Button>
            </Flex>
        </>
    )
}
