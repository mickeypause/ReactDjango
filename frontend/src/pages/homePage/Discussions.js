import { Flex, Text, Image } from '@chakra-ui/react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import Moment from 'react-moment'
import { useEffect, useState } from 'react'
export default function Discussions() {
    const navigate = useNavigate()

    const [discussions, setDiscussions] = useState([])

    async function fetchDiscussions() {
        const response = await axios.get('http://localhost:8000/api/discussions')
        setDiscussions(response.data)
    }
    useEffect(() => {
        fetchDiscussions()
    }, [discussions])

    return (
        <Flex flexDirection='column' marginTop={'50px'}>
            <Text>Discussions {discussions.length}</Text>
            {discussions &&
                discussions.map((discussion) => {
                    return (
                        <Flex
                            cursor={'pointer'}
                            key={discussion.id}
                            _hover={{ border: '0.6px solid gray' }}
                            border={'0.6px solid transparent'}
                            bg={'white'}
                            marginTop={'10px'}
                            borderRadius={5}
                            padding='10px'
                            flexDirection={'column'}
                            onClick={() => {
                                navigate(`/discussions/${discussion.id}`)
                            }}
                        >
                            <Flex align={'center'}>
                                <Text fontWeight={'600'} width={'10%'}>
                                    {discussion.topic_name}
                                </Text>

                                <Flex flexDirection={'column'} width={'90%'}>
                                    <Flex fontSize={10}>
                                        <Text>Posted &nbsp;</Text>
                                        <Moment fromNow>{discussion.created_at}</Moment>
                                    </Flex>

                                    <Text>{discussion.title}</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                    )
                })}
        </Flex>
    )
}
