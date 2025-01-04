---
title: "Contact"
date: 2023-12-18T18:20:23+07:00
draft: false
description: This my next awesome post about stuff that my audience love to read.
featured_image: ../assets/images/defaults/featured_image.jpg
---

# Tell us about your plans

<form id="contact-form" method="POST" class="">
  <div class="">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label for="name" class="block text-sm font-semibold leading-6 text-white">Name</label>
        <div class="mt-2.5">
          <input type="text" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" required>
          <span id="error-name" class="text-red-500 text-sm hidden">Your name is required.</span>
        </div>
      </div>
      <div>
        <label for="business-name" class="block text-sm font-semibold leading-6 text-white">Business / Charity name</label>
        <div class="mt-2.5">
          <input type="text" name="business-name" id="business-name" autocomplete="family-name" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" required>
          <span id="error-business-name" class="text-red-500 text-sm hidden">Business name is required.</span>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold leading-6 text-white">Email</label>
        <div class="mt-2.5">
          <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" required>
          <span id="error-email" class="text-red-500 text-sm hidden">Valid email is required.</span>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="phone-number" class="block text-sm font-semibold leading-6 text-white">Phone number</label>
        <div class="mt-2.5">
          <input type="tel" name="phone-number" id="phone-number" autocomplete="tel" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" required>
          <span id="error-phone-number" class="text-red-500 text-sm hidden">Phone number is required.</span>
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="message" class="block text-sm font-semibold leading-6 text-white">Message</label>
        <div class="mt-2.5">
          <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" required></textarea>
          <span id="error-message" class="text-red-500 text-sm hidden">Message is required.</span>
        </div>
      </div>
      <input type="text" name="honeypot" id="honeypot" style="display:none;">
    </div>
    <div class="mt-8 flex justify-end">
      <button type="submit" id="submit-button" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Send message</button>
    </div>
  </div>
</form>

<script>
  document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    // Clear previous error messages
    document.querySelectorAll('.text-red-500').forEach(error => error.classList.add('hidden'));

    // Validate fields
    let isValid = true;

    function showError(fieldId, errorId, message) {
      const errorElement = document.getElementById(errorId);
      errorElement.textContent = message;
      errorElement.classList.remove('hidden');
      isValid = false;
    }

    const name = document.getElementById('name').value.trim();
    const businessName = document.getElementById('business-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phone-number').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) showError('name', 'error-name', 'Your name is required.');
    if (!businessName) showError('business-name', 'error-business-name', 'Business name is required.');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) showError('email', 'error-email', 'Valid email is required.');
    if (!phoneNumber) showError('phone-number', 'error-phone-number', 'Phone number is required.');
    if (!message) showError('message', 'error-message', 'Message is required.');

    if (!isValid) return;

    // Submit the form data
    try {
      const response = await fetch('https://sendcontactemail-zyvvz6fuva-uc.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, businessName, email, phoneNumber, message }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset();
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred while sending your message. Please try again.');
      console.error('Error:', error);
    }
  });
</script>
