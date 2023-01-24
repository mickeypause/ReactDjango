import { Flex, Image } from '@chakra-ui/react'
import RightBlock from './RightBlock'
import { useNavigate } from 'react-router-dom'
import Search from './Search'

export default function Nav() {
    const navigate = useNavigate()
    return (
        <Flex bg={'white'} height='60px' padding='5px 10px' align={'center'}>
            <Flex
                width={'70px'}
                justify={'center'}
                align={'center'}
                cursor={'pointer'}
                onClick={() => {
                    navigate('/')
                }}>
                <Image src='./logo192.png' height={'60px'} />
            </Flex>
            <Search />
            <RightBlock />
        </Flex>
    )
}
