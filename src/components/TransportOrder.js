import userEvent from '@testing-library/user-event';
import { color } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
// import twilio from 'twilio';

  const TransportOrder = () => {
  const [price, setPrice] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [totalPriceDiscounted, setTotalPriceDiscounted] = useState('');
  const formattedPrice = 0;
  let totalPriceWithDiscount = 0;
  let discountedPrice;
  const fromAddressRef = useRef(null);
  const toAddressRef = useRef(null);
  const promoCodeRef = useRef(null);
  const customerNameRef = useRef(null);
  const customerPhoneRef = useRef(null);

  const accountSid = 'ACcbc1fb3e315cf89f21aaf422fd3357dd';
  const authToken = 'c065477742b5805c1293172ed079d4a5';
  // const client = require('twilio')(accountSid, authToken);

  useEffect(() => {
    const autocompleteFrom = new window.google.maps.places.Autocomplete(
      fromAddressRef.current,
      { types: ['address'] }
    );

    const autocompleteTo = new window.google.maps.places.Autocomplete(
      toAddressRef.current,
      { types: ['address'] }
    );

    autocompleteFrom.addListener('place_changed', () => {
      calculatePrice();
    });

    autocompleteTo.addListener('place_changed', () => {
      calculatePrice();
    });
  }, []);

/*   function sendOrderViaWhatsapp() {
    calculatePrice();

    client.messages
    .create({
        body: `Máte novou poptávku jízdy: Jméno: ${customerNameRef} \n Telefon: ${customerPhoneRef} \n Cesta z: ${fromAddressRef} \n Cesta do: ${toAddressRef} \n Za cenu: ${promoCode ? totalPriceDiscounted : formattedPrice}`,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+420792323842'
    })
    .then(message => console.log(message.sid))
    .done();
  } */

  const calculatePrice = async () => {
    try {
      const fromPlace = fromAddressRef.current.value;
      const toPlace = toAddressRef.current.value;
      if (!fromPlace || !toPlace) return;

      const service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [fromPlace],
          destinations: [toPlace],
          travelMode: 'DRIVING',
        },
        (response, status) => {
          if (status === 'OK') {
            const distance = response.rows[0].elements[0].distance.value / 1000; // Vzdálenost v kilometrech
            // Zde můžete provést výpočet ceny na základě vzdálenosti
            const startingRate = 40; // Nastupní sazba
            const ratePerKm = 40; // Sazba za kilometr
            let totalPrice = startingRate + distance * ratePerKm;

            // Upravení ceny na základě promo kódu
            if (promoCode.toUpperCase() === 'VIP10') {
               discountedPrice = totalPrice * 0.95; // Sleva 5 %
               console.log("Po 5% slevě je cena: " + discountedPrice)
            } else if (promoCode.toUpperCase() === 'SUPERVIP') {
              discountedPrice = totalPrice * 0.9; // Sleva 10 %
            }

            totalPrice = Math.ceil(totalPrice); // Zaokrouhlení nahoru na celé číslo
            formattedPrice = totalPrice.toLocaleString('cs-CZ');
            setPrice(formattedPrice);

            // Podmínka pro zobrazení slevy na základě promo kódu
            if (promoCode.toUpperCase() === 'VIP10') {
              totalPriceWithDiscount = Math.ceil(discountedPrice);
              console.log("Nová cena po slevě je: " + totalPriceWithDiscount)
              setTotalPriceDiscounted(totalPriceWithDiscount.toLocaleString('cs-CZ'));
            } else if (promoCode.toUpperCase() === 'SUPERVIP') {
              totalPriceWithDiscount = Math.ceil(discountedPrice);
              console.log("Nová cena po slevě je: " + totalPriceWithDiscount)
              setTotalPriceDiscounted(totalPriceWithDiscount.toLocaleString('cs-CZ'));
            } else {
              setTotalPriceDiscounted(''); // Pokud není promo kód zadán, vynulujte zobrazenou slevu
              console.log("Promokod neni zadan.")
            }
          } else {
            console.error('Error calculating distance:', status);
          }
        }
      );
    } catch (error) {
      console.error('Error calculating price:', error);
    }
  };

  const handlePromoCodeSubmit = (event) => {
    event.preventDefault(); // Zastavení výchozí akce formuláře
    // Zde se nastaví promo kód na hodnotu z pole
    setPromoCode(promoCodeRef.current.value.toUpperCase()); // Převedení hodnoty na velká písmena
    calculatePrice(); // Přepočítání ceny po změně promo kódu
  };

/*   const handleOrderSubmit = (event) => {
    event.preventDefault(); // Zastavení výchozí akce formuláře
    sendOrderViaWhatsapp();
    // Zde se nastaví promo kód na hodnotu z pole
    
  }; */

  return (
    <div className='transportOrder'>
      <h3>Transport Order Form</h3>
      <form>
      <div>
          <label htmlFor="fromAddress">Name / Vaše jméno</label>
          <br/>
          <input style={{height: '20px', width: '300px', backgroundColor:'grey'}}
            type="text"
            id="fromAddress"
            ref={customerNameRef}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="fromAddress">Phone / Vaše telefonní číslo</label>
          <br/>
          <input style={{height: '20px', width: '300px', backgroundColor:'grey'}}
            type="text"
            id="fromAddress"
            ref={customerPhoneRef}
            placeholder="Enter your phone"
          />
        </div>
        <div>
          <label htmlFor="fromAddress">From / Výchozí adresa</label>
          <br/>
          <input style={{height: '20px', width: '300px', backgroundColor:'grey'}}
            type="text"
            id="fromAddress"
            ref={fromAddressRef}
            placeholder="Enter From Address"
          />
        </div>
        <div>
          <label htmlFor="toAddress">To / Destinace</label>
          <br/>
          <input style={{height: '20px', width: '300px', backgroundColor:'grey'}}
            type="text"
            id="toAddress"
            ref={toAddressRef}
            placeholder="Enter To Address"
          />
        </div>
        <div>
        <label htmlFor="promoCode">Promo code</label>
          <br/>
          <input style={{height: '20px', backgroundColor:'grey'}}
            type="text"
            id="promoCode"
            ref={promoCodeRef}
            placeholder="Enter Promo Code"
          />
          {/* Tlačítko pro potvrzení promo kódu */}
          <button className='promoButton' onClick={handlePromoCodeSubmit}>Submit</button>
        </div>
        <div>
          <label htmlFor="price" style={{color:'orange'}}>Price: {promoCode ? totalPriceDiscounted : price} CZK</label>
          <br/>
          {/* <button className='orderButton' onClick={handleOrderSubmit}>Send an inquiry</button> */}
        </div>
      </form>
    </div>
  );
};

export default TransportOrder;
