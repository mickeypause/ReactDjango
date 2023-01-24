import {
    Modal,
    ModalOverlay,
    Button,
    useDisclosure,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import SignUp from './SignUp'
import LogIn from './LogIn'
import { resetPassword, register, login } from '../../redux/AuthSlice'
import ResetPassword from './ResetPassword'
export default function AuhtModal() {
    //Redux
    const dispath = useDispatch()
    const modalStatus = useSelector((state) => state.auth.modalStatus)

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                bg={'blue.300'}
                color={'white'}
                fontWeight={'400'}
                _hover={{ bg: 'blue.100' }}
                width={'100px'}
                onClick={() => {
                    onOpen()
                }}>
                Log in
            </Button>

            <Modal
                isOpen={isOpen}
                onClose={() => {
                    dispath(login())
                    onClose()
                }}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {modalStatus === 'login' && 'Log In'}
                        {modalStatus === 'register' && 'Sign Up'}
                        {modalStatus === 'reset' && 'Reset Password'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}>
                        <Flex width={'80%'} justify='center' align={'center'}>
                            {modalStatus === 'login' && <LogIn />}
                            {modalStatus === 'register' && <SignUp />}
                            {modalStatus === 'reset' && <ResetPassword />}
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
