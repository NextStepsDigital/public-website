#!/bin/bash

curl -X POST https://us-central1-contact-form-56558.cloudfunctions.net/sendContactEmail -H "Content-Type: application/json" -d '{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "message": "I am interested in your services."
}'