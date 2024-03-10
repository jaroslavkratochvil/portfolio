import React, { useState } from 'react';

function AddressForm() {
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Zde můžete provést další akce, jako odeslání dat na server
    console.log('Odesílání formuláře...');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Adresa z:</label>
        <input
          type="text"
          value={fromAddress}
          onChange={(e) => setFromAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Adresa do:</label>
        <input
          type="text"
          value={toAddress}
          onChange={(e) => setToAddress(e.target.value)}
        />
      </div>
      <div>
        <label>Cena za dopravu:</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button type="submit">Odeslat</button>
    </form>
  );
}

export default AddressForm;
