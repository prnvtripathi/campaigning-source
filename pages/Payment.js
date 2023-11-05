<!DOCTYPE html>
<html>
<head>
    <title>TON Wallet Payment Page</title>
    <style>
        /* Add some basic styling to the page */
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        #qr-code {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>TON Wallet Payment Page</h1>

    <p>Scan the QR code or click the link to receive payments:</p>

    <div id="qr-code">
        <!-- This is where your QR code will appear -->
        <img id="qrcode" src="ton_wallet_qr_code.png" alt="TON Wallet QR Code">
    </div>

    <p>Payment URL:</p>
    <a id="payment-link" href="https://yourtonwallet.com/receive">https://yourtonwallet.com/receive</a>

    <script>
        // JavaScript to dynamically update the QR code and payment link
        // You can use a library like 'qrcode-generator' to generate QR codes or
        // fetch it from an API if you have one.

        // Replace the following URL with your TON wallet QR code image URL
        const qrCodeImageUrl = "ton_wallet_qr_code.png";
        
        // Replace the following URL with your payment URL
        const paymentUrl = "https://yourtonwallet.com/receive";

        // Update the QR code image source
        const qrCodeImage = document.getElementById("qrcode");
        qrCodeImage.src = qrCodeImageUrl;

        // Update the payment link URL
        const paymentLink = document.getElementById("payment-link");
        paymentLink.href = paymentUrl;
    </script>
</body>
</html>
