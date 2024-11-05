// App.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51Q8WWBP10ZcvbEkx92samylwYgNZzyamOSoJg2bRQdUKbKc5IZhkghN0yAdzQYhgcidorJJrp5bAPRnmheoAKEro00iCSgkU2M');

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default App;