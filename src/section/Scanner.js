import { 
    Heading,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, 
    Box} from '@chakra-ui/react'
import { Scanner } from '@yudiel/react-qr-scanner';


const ScannerSection = (props) => {
    const scanResponse = (result) => {
        console.log("yay");
        console.log(result);

        props.onScan(result)
    }

    return (
        <section style={styles.section}>
            <div style={styles.scannerContainer}>
                <Scanner onScan={scanResponse} />
            </div>
        </section>
    );
};

const size = '30vh'

const styles = {
    section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: size, // Full height of the viewport
        backgroundColor: '', // Optional background color
        marginBottom: '10px',
    },
    scannerContainer: {
        width: size,
        height: size,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid #000', // Optional border
        borderRadius: '8px', // Optional rounded corners
        backgroundColor: '#fff', // Optional background for the scanner
    },
};

export default ScannerSection;
    

