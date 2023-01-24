import { Flex, Text, Image } from '@chakra-ui/react'
import {Route, Routes, useNavigate} from 'react-router-dom'

import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
export default function Topics() {
    const navigate = useNavigate()
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
            flexDirection={'column'}
            justify='center'
            align={'center'}
            padding={'2%'}
            width={'100%'}>
            <Text fontWeight={'600'} fontSize={'32px'}>
                Topics
            </Text>
            <Flex>
                {topics &&
                    topics.map((topic) => {
                        return (
                            <Flex
                                key={topic.id}
                                align={'center'}
                                justifyContent={'center'}
                                flexWrap={'wrap'}
                                flexDirection={'column'}
                                width={'200px'}
                                height={'100px'}
                                backgroundColor={'blue.300'}
                                borderRadius={10}
                                marginRight={'2%'}
                                
                                >
                                <Text
                                    color={'white'}
                                    fontWeight={'600'}
                                    fontSize={20}>
                                    {topic.name}
                                </Text>
                            </Flex>
                        )
                    })}
            </Flex>
            
        </Flex>
         
    )
}
