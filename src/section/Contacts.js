import { 
    Heading,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, 
    Box} from '@chakra-ui/react'

import Entry from '../components/Entry';

const Contacts = (props) => {
    return (
    <>
    <AccordionItem>
        <h2>
        <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
            <Heading size='md'>Emergency Contacts</Heading>
            </Box>
            <AccordionIcon />
        </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et venenatis tortor, eleifend cursus risus. 
        Maecenas porta tempus tellus vitae posuere. In hac habitasse platea dictumst. */}

        <Entry label="Contact" editable={props.editable} query={props.query} editFunc={props.editFunc} />

        </AccordionPanel>
    </AccordionItem>
    </>
    );
    }
    
    export default Contacts;