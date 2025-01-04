#!/bin/bash

curl -X POST https://us-central1-contact-form-56558.cloudfunctions.net/sendContactEmail -H "Content-Type: application/json" -d '{
  "name": "John Doe",
  "businessName": "Apples & Pears Ltd",
  "email": "john.doe@example.com",
  "phoneNumber": "0121 532 6173",
  "message": "I am interested in your services."
}'