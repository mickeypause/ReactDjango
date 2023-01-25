import { Flex, Text, Input, Textarea, Select, Button } from '@chakra-ui/react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reading } from '../../redux/DiscussionSlice'
export default function EditDiscussionPage({ discussion }) {
    const [title, setTitle] = useState(discussion.title)
    const [description, setDiscription] = useState(discussion.description)
    const [topic, setTopic] = useState(discussion.topic)
    const navigate = useNavigate()
    const dispatch = useDispatch()
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
                    <Textarea
                        placeholder={'Title'}
                        defaultValue={title}
                        marginBottom={'20px'}
                        resize={'none'}
                        maxLength={255}
                        onChange={(event) => {
                            setTitle(event.target.value)
                        }}
                    />
                    <Textarea
                        placeholder='Write Something'
                        minHeight={'200px'}
                        marginBottom={'20px'}
                        defaultValue={description}
                        onChange={(event) => {
                            setDiscription(event.target.value)
                        }}
                    />
                    <Select
                        placeholder='Select Topic'
                        marginBottom={'20px'}
                        value={topic}
                        onChange={(event) => setTopic(event.target.value)}
                    >
                        <option value={1}>Crypto</option>
                        <option value={3}>IT</option>
                        <option value={2}>News</option>
                    </Select>
                    <Button
                        onClick={() => {
                            if (title !== '' && description !== '' && topic !== '') {
                                try {
                                    const request = axios({
                                        method: 'PUT',
                                        url: `http://127.0.0.1:8000/api/discussions/${discussion.id}/`,
                                        data: {
                                            title: title,
                                            description: description,
                                            topic: topic,
                                        },
                                    })
                                } catch (error) {
                                    console.info(error)
                                }
                                dispatch(reading())
                                navigate('/')
                            }
                        }}
                    >
                        Confirm Editing
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
