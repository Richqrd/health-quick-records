import { 
    Heading,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, 
    Box} from '@chakra-ui/react'
import Entry from '../components/Entry';

const Medications = (props) => {
    return (
    <>
    <AccordionItem>
        <h2>
        <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
            <Heading size='md'>Medications</Heading>
            </Box>
            <AccordionIcon />
        </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
        
        <Entry label="List" editable={props.editable} query={props.query} editFunc={props.editFunc} />

        </AccordionPanel>
    </AccordionItem>
    </>
    );
    }
    
    export default Medications;