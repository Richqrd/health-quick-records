import { 
    Heading,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, 
    Box} from '@chakra-ui/react'
import Entry from '../components/Entry';

const Other = (props) => {
    return (
    <>
    <AccordionItem>
        <h2>
        <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>

            <Heading size='md'>
                Other Details
            </Heading>
            
            </Box>
            <AccordionIcon />
        </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>

        <Entry label="Misc" editable={props.editable} query={props.query} editFunc={props.editFunc} />

        </AccordionPanel>
    </AccordionItem>
    </>
    );
    }
    
    export default Other;