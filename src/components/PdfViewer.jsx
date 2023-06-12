import PDF from '../assets/official_cv.pdf'

const PdfViewer = () => {


    // Pdf file view from modal
    return (
        <div className="d-flex justify-content-center">         
            <iframe src={PDF} style={{width: '100%', minHeight: '75vh'}} title="Official-CV" id="pdf-frame"/> 
        </div>
    );
};

export default PdfViewer;

