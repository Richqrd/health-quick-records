import QRCode from "react-qr-code";

const QRSection = (props) => {
    let qrvalue = JSON.stringify(props.recordData)
    return (
        
        <section style={styles.section}>
            <div style={styles.scannerContainer}>
                <QRCode value={qrvalue} style={{ width: "100%", height: "100%", objectFit: "contain" }}
                id="qrcode" />
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
    },
};

export default QRSection;
    

