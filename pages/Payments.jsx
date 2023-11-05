import React, { useState } from 'react';

function Payment() {
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState('');

  const handlePayment = async () => {
    try {
      // Check if TonKeeper is available
      if (typeof TonKeeper === 'undefined') {
        alert('TonKeeper is not available. Please install the TonKeeper extension.');
        return;
      }

      // Create a payment object
      const payment = {
        to: receiver,
        amount: amount,
        currency: 'TON', // Adjust this based on your use case
        message: 'Payment for your service', // Optional
      };

      // Prompt the user to sign the payment
      const signedPayment = await TonKeeper.send(payment);

      // Handle the signed payment, e.g., send it to your server for processing

      // You can also provide feedback to the user, for example:
      alert('Payment sent successfully!');
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Make a Payment with TonKeeper</h2>
      <div>
        <label>Receiver Address:</label>
        <input
          type="text"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
      </div>
      <div>
        <label>Amount (TON):</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handlePayment}>Send Payment</button>
    </div>
  );
}

export default Payment;
