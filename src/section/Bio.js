import { 
    Heading,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, 
    Box,
    Input,
    Text} from '@chakra-ui/react'
import Entry from '../components/Entry';

const Bio = (props) => {

    return (
    <>
    <AccordionItem>
        <h2>
        <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
            <Heading size='md'>Patient Biography</Heading>
            
            </Box>
            <AccordionIcon />
        </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>

        <Entry label="Name" editable={props.editable} query={props.query} editFunc={props.editFunc} />
        <Entry label="Age" editable={props.editable} query={props.query} editFunc={props.editFunc} />
        <Entry label="Birthday" editable={props.editable} query={props.query} editFunc={props.editFunc} />
        <Entry label="Phone" editable={props.editable} query={props.query} editFunc={props.editFunc} />
        <Entry label="OHIP" editable={props.editable} query={props.query} editFunc={props.editFunc} />

        </AccordionPanel>
    </AccordionItem>
    </>
    );
    }
    
    export default Bio;