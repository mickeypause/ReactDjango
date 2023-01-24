import { Flex, Text } from '@chakra-ui/react'
import Discussions from './Discussions'
import axios from 'axios'
import {useQuery} from '@tanstack/react-query'
import Topics from './Topics'
export default function HomePage() {
    async function fetchTopics() {
        const response = await axios.get('http://localhost:8000/api/topics')
        const topics = response.data
        return topics
    }

    const {
        status,
        error,
        data: topics,
    } = useQuery({
        queryKey: ['topics'],
        queryFn: fetchTopics,
    })

    return (
        <Flex
            alignSelf={'center'}
            justify={'center'}
            marginTop={'10px'}
            paddingBottom={'20px'}>
            <Flex width={'55%'} justify={'center'} flexDirection={'column'}>
                <Topics/>
                <Discussions />
            </Flex>
        </Flex>
    )
}
