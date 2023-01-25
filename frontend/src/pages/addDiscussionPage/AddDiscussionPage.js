import { Flex, Textarea, Select, Button } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function AddDiscussionPage() {
    const [title, setTitle] = useState('')
    const [description, setDiscription] = useState('')
    const [topic, setTopic] = useState('')
    const navigate = useNavigate()
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
                        placeholder='Title'
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
                        onChange={(event) => {
                            setDiscription(event.target.value)
                        }}
                    />
                    <Select
                        placeholder='Select Topic'
                        marginBottom={'20px'}
                        onChange={(event) => setTopic(event.target.value)}
                        value={topic}
                    >
                        <option value={1}>Crypto</option>
                        <option value={3}>IT</option>
                        <option value={2}>News</option>
                    </Select>
                    <Button
                        onClick={() => {
                            if (title !== '' && description !== '' && topic !== '') {
                                try {
                                    axios({
                                        method: 'POST',
                                        url: 'http://127.0.0.1:8000/api/discussions/',
                                        data: {
                                            title: title,
                                            description: description,
                                            topic: topic,
                                        },
                                    })
                                } catch (error) {
                                    console.info(error)
                                }
                                navigate('/')
                            }
                        }}
                    >
                        Create Discussion
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}
