import { Flex, Image } from '@chakra-ui/react'
import RightBlock from './RightBlock'
import { useNavigate } from 'react-router-dom'
import Search from './Search'

export default function Nav() {
    const navigate = useNavigate()
    return (
        <div style={{ position: 'fixed', width: '100%', top: 0 }}>
            <Flex bg={'white'} height='60px' padding='5px 10px' align={'center'} width={'100%'}>
                <Flex
                    width={'70px'}
                    justify={'center'}
                    align={'center'}
                    cursor={'pointer'}
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    <Image src='./logo192.png' height={'60px'} />
                </Flex>
                <Search />
                <RightBlock />
            </Flex>
        </div>
    )
}
