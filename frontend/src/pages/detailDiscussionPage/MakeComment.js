import { Flex,Textarea, Button } from "@chakra-ui/react";

export default function MakeComment() {

    return (
        <Flex width={'70%'} flexDirection='column' alignSelf={'center'} marginTop={'10px'}>
            <Textarea placeholder="Comment" aria-multiline={'true'} height={'130px'}/>
            <Button>Comment</Button>

           
        </Flex>
    )
}