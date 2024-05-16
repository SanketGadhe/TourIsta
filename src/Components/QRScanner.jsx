import React from 'react'

const QRScanner = (props) => {
  <script src="https://unpkg.com/html5-qrcode"></script>
function domReady(fn) {
  if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
  ) {
      setTimeout(fn, 1000);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}

domReady(function () {
  function onScanSuccess(decodeText, decodeResult) {
      
      props.setoutput(decodeText)
      console.log(props.output)
  }

  let htmlscanner = new Html5QrcodeScanner(
      "my-qr-reader",
      { fps: 10, qrbos: 250 }
  );
  htmlscanner.render(onScanSuccess);
});
  return (
    <div  className='absolute right-0 z-40'>
  
      <div className="container">
        <h1>Scan QR Codes</h1>
        <div className="section">
            <div id="my-qr-reader">
            </div>
        </div>
    </div>
    
    <script src="script.js"></script>
    </div>
  )
}

export default QRScanner
