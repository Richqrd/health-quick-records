import React from "react";
import { Flex, Switch, Text, Link, Box } from "@chakra-ui/react";
import jsPDF from "jspdf";

const Toggle = ({ editable, switchEdit, name }) => {
  const containerStyles = {
    justify: "center",
    align: "center",
    height: "10vh",
  };

  const innerFlexStyles = {
    align: "center",
    gap: "10px",
  };

  const textStyles = {
    fontSize: "1.2rem",
  };

  const linkStyles = {
    color: "blue.500",
  };

  // Download SVG
  // const downloadQrCode = () => {
  //   const svg = document.getElementById("qrcode");
  //   if (!svg) {
  //     alert("QR Code not found!");
  //     return;
  //   }

  //   const svgData = new XMLSerializer().serializeToString(svg);
  //   const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  //   const url = URL.createObjectURL(svgBlob);

  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = "qrcode.svg";
  //   link.click();

  //   // Clean up
  //   URL.revokeObjectURL(url);
  // };

  // Download PDF
  // const downloadQrCode = () => {
  //   const svg = document.getElementById("qrcode");
  //   if (!svg) {
  //     alert("QR Code not found!");
  //     return;
  //   }
  
  //   const canvas = document.createElement("canvas");
  //   const context = canvas.getContext("2d");
  //   const svgData = new XMLSerializer().serializeToString(svg);
  
  //   const img = new Image();
  //   const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  //   const url = URL.createObjectURL(svgBlob);
  
  //   img.onload = () => {
  //     canvas.width = img.width;
  //     canvas.height = img.height;
  //     context.drawImage(img, 0, 0);
  
  //     const pdf = new jsPDF(); // Ensure jsPDF is imported in your project
  //     const imgData = canvas.toDataURL("image/png");
  //     pdf.addImage(imgData, "PNG", 0, 0);
  //     pdf.save("qrcode.pdf");
  
  //     // Clean up
  //     URL.revokeObjectURL(url);
  //   };
  
  //   img.src = url;
  // };

  // Download PNG
  // const downloadQrCode = () => {
  //   const svg = document.getElementById("qrcode");
  //   if (!svg) {
  //     alert("QR Code not found!");
  //     return;
  //   }
  
  //   const canvas = document.createElement("canvas");
  //   const context = canvas.getContext("2d");
  
  //   // Set desired resolution
  //   const desiredWidth = 1080; // Width in pixels
  //   const desiredHeight = 1080; // Height in pixels
  
  //   const svgData = new XMLSerializer().serializeToString(svg);
  //   const img = new Image();
  //   const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  //   const url = URL.createObjectURL(svgBlob);
  
  //   img.onload = () => {
  //     // Set canvas resolution
  //     canvas.width = desiredWidth;
  //     canvas.height = desiredHeight;
  
  //     // Scale the image to fit the canvas
  //     context.drawImage(img, 0, 0, desiredWidth, desiredHeight);
  
  //     const pngUrl = canvas.toDataURL("image/png");
  
  //     const link = document.createElement("a");
  //     link.href = pngUrl;
  //     link.download = "qrcode.png";
  //     link.click();
  
  //     // Clean up
  //     URL.revokeObjectURL(url);
  //   };
  
  //   img.src = url;
  // };

  // Custom PNGs

  // const downloadQrCode = () => {
  //   const svg = document.getElementById("qrcode");
  //   if (!svg) {
  //     alert("QR Code not found!");
  //     return;
  //   }
  
  //   const canvas = document.createElement("canvas");
  //   const context = canvas.getContext("2d");
  
  //   // Set desired resolution
  //   const qrWidth = 1080; // QR code width in pixels
  //   const qrHeight = 1080; // QR code height in pixels
  //   const textHeight = 200; // Space for the text below
  //   const canvasWidth = qrWidth; // Canvas width matches the QR code
  //   const canvasHeight = qrHeight + textHeight; // Total height for QR code and text
  
  //   const svgData = new XMLSerializer().serializeToString(svg);
  //   const img = new Image();
  //   const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  //   const url = URL.createObjectURL(svgBlob);
  
  //   img.onload = () => {
  //     // Set canvas resolution
  //     canvas.width = canvasWidth;
  //     canvas.height = canvasHeight;
  
  //     // Draw the QR code
  //     context.drawImage(img, 0, 0, qrWidth, qrHeight);
  
  //     // Add text below the QR code
  //     context.font = "80px Arial";
  //     context.fillStyle = "black";
  //     context.textAlign = "center";
  //     let inp_name = "";
      
  //     if (name === 'undefined' || name == null) {
  //         inp_name = "";
  //         console.log(name);
  //     } else {
  //         inp_name = "\nfor " + name; // Use \n for new lines in the text
  //         console.log(name);
  //     }
      
  //     // Split the text by new lines and render each line
  //     const text = "Please scan this health record" + inp_name;
  //     const lines = text.split("\n"); // Split text into lines based on \n
  //     const lineHeight = 80; // Adjust line height as needed
      
  //     lines.forEach((line, index) => {
  //         context.fillText(line, canvasWidth / 2, qrHeight + 80 + (index * lineHeight));
  //     });
      
  //     const pngUrl = canvas.toDataURL("image/png");
  
  //     const link = document.createElement("a");
  //     link.href = pngUrl;
  //     link.download = "qrcode_with_text.png";
  //     link.click();
  
  //     // Clean up
  //     URL.revokeObjectURL(url);
  //   };
  
  //   img.src = url;
  // };

  const downloadQrCode = () => {
    const svg = document.getElementById("qrcode");
    if (!svg) {
      alert("QR Code not found!");
      return;
    }
  
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    // Adjustable height for the top image
    const topImgDesiredHeight = 500; // Change this value to resize the top image
  
    // Set desired resolution for the QR code
    const qrWidth = 1080; // QR code width in pixels
    const qrHeight = 1080; // QR code height in pixels
    const textHeight = 200; // Space for the text below
  
    // Calculate canvas dimensions
    const canvasWidth = qrWidth; // Canvas width matches the QR code
    const canvasHeight = qrHeight + textHeight + topImgDesiredHeight;
  
    const svgData = new XMLSerializer().serializeToString(svg);
    const qrImg = new Image();
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const qrUrl = URL.createObjectURL(svgBlob);
  
    const topImg = new Image();
    topImg.src = "/bunnyqr.png"; // Ensure bunny.png is in the public directory
  
    topImg.onload = () => {
      qrImg.onload = () => {
        // Set canvas resolution
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
  
        // Maintain aspect ratio for the top image
        const imgWidth = (topImg.width / topImg.height) * topImgDesiredHeight; // Scale width proportionally
        const imgX = (canvasWidth - imgWidth) / 2; // Center horizontally
        const imgY = 50; // Top of the canvas
        context.drawImage(topImg, imgX, imgY, imgWidth, topImgDesiredHeight);
  
        // Draw the QR code below the top image
        context.drawImage(qrImg, 0, topImgDesiredHeight, qrWidth, qrHeight);
  
        // Add text below the QR code
        context.font = "80px Arial";
        context.fillStyle = "black";
        context.textAlign = "center";
        let inp_name = "";
  
        if (name === "undefined" || name == null) {
          inp_name = "";
          console.log(name);
        } else {
          inp_name = "\nfor " + name;
          console.log(name);
        }
  
        // Split the text by new lines and render each line
        const text = "Please scan this health record" + inp_name;
        const lines = text.split("\n");
        const lineHeight = 80;
  
        lines.forEach((line, index) => {
          context.fillText(line, canvasWidth / 2, topImgDesiredHeight + qrHeight + 80 + index * lineHeight);
        });
  
        const pngUrl = canvas.toDataURL("image/png");
  
        const link = document.createElement("a");
        link.href = pngUrl;
        link.download = "qrcode_with_text.png";
        link.click();
  
        // Clean up
        URL.revokeObjectURL(qrUrl);
      };
  
      qrImg.src = qrUrl;
    };
  
    topImg.onerror = () => {
      alert("Failed to load the top image. Ensure 'bunny.png' is in the correct directory.");
    };
  };

  return (
    <Flex {...containerStyles}>
      <Flex {...innerFlexStyles}>
        <Switch id="switch" size="lg" onChange={switchEdit} />
        {editable === 1 ? (
          <Box>
            <Text {...textStyles}>Toggle to Scan</Text>
            <Link as="button" onClick={downloadQrCode} {...linkStyles}>
              Click to download
            </Link>
          </Box>
        ) : (
          <Text {...textStyles}>Toggle to Edit</Text>
        )}
      </Flex>
    </Flex>
  );
};

export default Toggle;