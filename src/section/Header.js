import {Heading, Text } from '@chakra-ui/react'

const Header = () => {
    return (
        <Text m={3} mb={0}>
        <Heading>Health Quick Records, HQR</Heading>
        A QR code based storage system for your important health records.
        </Text>
    );
};

export default Header