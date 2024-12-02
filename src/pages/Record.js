import React, { useEffect, useState } from 'react';
import { 
    Heading, 
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, 
    Box,
    Flex,
    Link,
    Switch} from '@chakra-ui/react'


import Bio from '../section/Bio';
import Contacts from '../section/Contacts';
import Medications from '../section/Medications';
import ScannerSection from '../section/Scanner';
import QRSection from '../section/QR';
import Toggle from '../section/Toggle';
import History from '../section/History';
import Other from '../section/Medications copy';

const Record = () => {

    const placeholderObj = {
        Name: null,
        Age: null,
    };
    const [scanResult, setScanResult] = useState(placeholderObj); // State to hold scanner data

    const handleScan = (result) => {
        const rawData = result[0]?.rawValue || ""; // Safely access rawValue

        // Parse JSON
        try { 
            const jsonObject = JSON.parse(rawData);
            setScanResult(jsonObject); 
            console.log("Set scan result")
        } catch (error) {
            console.error("Invalid JSON:", error.message);
        }
    };

    // Log scanResult whenever it changes
    useEffect(() => {
        console.log("Scan Result:", scanResult);
    }, [scanResult]);

    const [editable, setEditable] = useState(0); // State to hold scanner data

    const switchEdit = () => {
        setEditable((prev) => (prev === 0 ? 1 : 0));
      };

    return (
    <>

        <Toggle editable={editable} switchEdit={switchEdit} name={scanResult.Name} />

        {editable === 1 ? (
            <QRSection recordData={scanResult} />
        ) : (
            <ScannerSection onScan={handleScan} />
        )}
        
        
        <Accordion defaultIndex={[0,1,2,3,4]} allowMultiple> {/* defaultIndex={[0,1]} */}
            
            <Bio query={scanResult} editable={editable} editFunc={setScanResult} />
            <Contacts query={scanResult} editable={editable} editFunc={setScanResult} />
            <History query={scanResult} editable={editable} editFunc={setScanResult} />
            <Medications query={scanResult} editable={editable} editFunc={setScanResult} />

            <Other query={scanResult} editable={editable} editFunc={setScanResult} />


        </Accordion>

    </>
    );
  }
  
  export default Record;