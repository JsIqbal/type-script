import React, { useState, useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

interface DigitalSignatureProps {
    onSave: (signature: string) => void;
}

const DigitalSignature: React.FC<DigitalSignatureProps> = ({ onSave }) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const signatureCanvasRef = useRef<SignatureCanvas>(null);

    const handleStartDrawing = () => {
        setIsDrawing(true);
    };

    const handleEndDrawing = () => {
        setIsDrawing(false);
    };

    const handleClear = () => {
        signatureCanvasRef.current?.clear();
    };

    const handleSave = () => {
        const signature = signatureCanvasRef.current?.toDataURL("image/png");
        if (signature) {
            onSave(signature);
        }
    };

    return (
        <div>
            <SignatureCanvas
                ref={signatureCanvasRef}
                penColor="black"
                canvasProps={{ width: 500, height: 200 }}
                onBegin={handleStartDrawing}
                onEnd={handleEndDrawing}
            />
            <div>
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleSave} disabled={!isDrawing}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default DigitalSignature;
