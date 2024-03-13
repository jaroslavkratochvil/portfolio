import userEvent from '@testing-library/user-event';
import { color } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
// import twilio from 'twilio';

  const TransportOrder = () => {
  const [price, setPrice] = useState('');
  let formattedPrice
  let startingRate
  const fromAddressRef = useRef(null);
  const toAddressRef = useRef(null);

  const [travelTime, setTravelTime] = useState('');

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
            if (distance <= 10) {
              startingRate = 30; // Nastupní sazba
            } else if (distance >= 11 && distance <= 50) {
              startingRate = 100;
            } else if (distance >= 51 && distance <= 100) {
              startingRate = 120;
            } else {
              startingRate = 400;
            }
            const ratePerKm = 9; // Sazba za kilometr
            const ratePerMinute = 6;
            let totalPrice = startingRate + (distance * ratePerKm) + (travelTime * ratePerMinute);

            totalPrice = Math.ceil(totalPrice); // Zaokrouhlení nahoru na celé číslo
            formattedPrice = totalPrice.toLocaleString('cs-CZ');
            setPrice(formattedPrice);

          } else {
            console.error('Error calculating distance:', status);
          }
        }
      );
    } catch (error) {
      console.error('Error calculating price:', error);
    }
  };

  const calculateTravelTime = () => {
    if (!fromAddressRef || !toAddressRef) return;
  
    const directionsService = new window.google.maps.DirectionsService();
    const request = {
      origin: fromAddressRef.current.value, // Získání hodnoty z referencí
      destination: toAddressRef.current.value, // Získání hodnoty z referencí
      travelMode: 'DRIVING'
    };
  
    directionsService.route(request, (response, status) => {
      if (status === 'OK') {
        const durationText = response.routes[0].legs[0].duration.text;
        const durationParts = durationText.split(' ');
        let travelTimeInMinutes = 0;
  
        for (let i = 0; i < durationParts.length; i++) {
          const part = durationParts[i];
          if (!isNaN(part)) {
            if (durationParts[i + 1] === 'hour' || durationParts[i + 1] === 'hours') {
              travelTimeInMinutes += parseInt(part) * 60;
            } else if (durationParts[i + 1] === 'min' || durationParts[i + 1] === 'mins') {
              travelTimeInMinutes += parseInt(part);
            }
          }
        }
  
        setTravelTime(travelTimeInMinutes); // Nastavení doby dojezdu v minutách
      } else {
        console.error('Error calculating travel time:', status);
        setTravelTime('N/A');
      }
    });
  };
  

  return (
    <div className='transportOrder'>
      <h3>Transport Order Form</h3>
      <form>
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
          <label htmlFor="price" style={{color:'orange'}}>Price: {price} CZK</label>
          <br/>
          {/* <button className='orderButton' onClick={handleOrderSubmit}>Send an inquiry</button> */}
        </div>
      </form>
    </div>
  );
};

export default TransportOrder;
