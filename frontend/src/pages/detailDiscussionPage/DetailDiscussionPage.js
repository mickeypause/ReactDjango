import { Flex, Text} from "@chakra-ui/react";
import {useParams} from 'react-router-dom'
import {useQuery} from '@tanstack/react-query'
import MakeComment from "./MakeComment";
import Moment from 'react-moment'
import axios from "axios";
export default function DetailDiscussionPage() {
    const {id} = useParams()

    async function fetchDiscussion() {
        const response = await axios.get(
            `http://localhost:8000/api/discussions/${id}`
        )
        const discussion = response.data
        return discussion
    }

    const {
        status,
        error,
        data: discussion,
    } = useQuery({
        queryKey: ['discussion'],
        queryFn: fetchDiscussion,
    })
    return (
        <Flex
            alignSelf={'center'}
            justify={'center'}
            marginTop={'10px'}
            paddingBottom={'20px'}>
            <Flex width={'50%'} justify={'center'} flexDirection={'column'} bg={'white'} padding={'10px'}>
            <Flex flexDirection={'column'}>
                <Flex>

                                        <Text>
                                            Posted by {discussion && discussion.author} &nbsp;
                                        </Text>
                                        <Moment fromNow>
                                            {discussion &&discussion.created_at}
                                        </Moment>
                </Flex>
                                        <Text fontWeight={'600'} fontSize={'30px'}>{discussion && discussion.title}</Text>
                                        <Text>{discussion && discussion.description}</Text>
                                    </Flex>
                                    <MakeComment />
                
            </Flex>
        </Flex>
    )
}