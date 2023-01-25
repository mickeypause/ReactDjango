import { Button, Flex, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import Moment from 'react-moment'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { editing } from '../../redux/DiscussionSlice'
import { useNavigate } from 'react-router-dom'
import EditDiscussionPage from './EditDiscusssion'
export default function DetailDiscussionPage() {
    const discussionStatus = useSelector((state) => state.discussion.status)
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()

    const [discussion, setDiscussion] = useState({})

    async function fetchDiscussion() {
        const response = await axios.get(`http://localhost:8000/api/discussions/${id}`)
        setDiscussion(response.data)
    }
    useEffect(() => {
        fetchDiscussion()
    }, [])

    if (discussionStatus !== 'reading') {
        if (discussion) {
            console.log(discussion)
        }
        return <EditDiscussionPage discussion={discussion} />
    }
    return (
        <Flex alignSelf={'center'} justify={'center'} marginTop={'90px'} paddingBottom={'20px'}>
            <Flex
                width={'50%'}
                justify={'center'}
                flexDirection={'column'}
                bg={'white'}
                padding={'10px'}
            >
                <Flex flexDirection={'column'}>
                    <Flex>
                        <Text>Posted &nbsp;</Text>
                        <Moment fromNow>{discussion && discussion.created_at}</Moment>
                    </Flex>
                    <Text fontWeight={'600'} fontSize={'30px'}>
                        {discussion && discussion.title}
                    </Text>
                    <Text>{discussion && discussion.description}</Text>
                    <Flex justify={'center'} align={'center'} marginTop={'20px'}>
                        <Button
                            width={'70px'}
                            marginRight={'20px'}
                            bg={'red.500'}
                            color={'white'}
                            _hover={{ bg: 'red.400' }}
                            onClick={() => {
                                try {
                                    axios({
                                        method: 'DELETE',
                                        url: `http://127.0.0.1:8000/api/discussions/${id}`,
                                    })
                                } catch (error) {
                                    console.info(error)
                                }
                                navigate('/')
                            }}
                        >
                            Delete
                        </Button>
                        <Button
                            width={'70px'}
                            bg={'blue.300'}
                            color={'white'}
                            _hover={{ bg: 'blue.200' }}
                            onClick={() => {
                                dispatch(editing())
                            }}
                        >
                            Edit
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
