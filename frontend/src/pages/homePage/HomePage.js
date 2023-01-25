import { Flex, Text } from '@chakra-ui/react'
import Discussions from './Discussions'

export default function HomePage() {
    return (
        <Flex alignSelf={'center'} justify={'center'} marginTop={'30px'} paddingBottom={'20px'}>
            <Flex width={'55%'} justify={'center'} flexDirection={'column'}>
                <Discussions />
            </Flex>
        </Flex>
    )
}
