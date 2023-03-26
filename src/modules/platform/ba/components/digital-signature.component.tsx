import SignatureCanvas from "react-signature-canvas";
import { Formik, Form, Field } from "formik";

const DigitalSign = ({
    signatureRef,
    handleSignatureChange,
    clearSignature,
    isSignatureEmpty,
}: any) => {
    return (
        <div className="mb-3">
            <label htmlFor="signature" className="form-label fw-bold">
                Digital Signature
            </label>
            <div className="border border-secondary p-3">
                <SignatureCanvas
                    ref={signatureRef}
                    canvasProps={{
                        className: "w-100 border",
                        height: "200",
                    }}
                    minWidth={2}
                    maxWidth={3}
                    penColor="black"
                    onEnd={handleSignatureChange}
                    onBegin={handleSignatureChange}
                />
            </div>
            <button
                type="button"
                className="btn btn-secondary mt-3"
                onClick={clearSignature}
            >
                Clear Signature
            </button>
            <Field
                name="signature"
                type="hidden"
                value={isSignatureEmpty ? "" : signatureRef.current.toDataURL()}
            />
        </div>
    );
};

export default DigitalSign;
