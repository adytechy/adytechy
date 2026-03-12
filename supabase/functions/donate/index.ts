import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const { amount, currency, message, email } = await req.json()

  const txnRef = 'txn_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)

  const payload = {
    amount: amount.toString(),
    txnRef,
    mobileNumber: "08100000000",
    zainboxCode: "12963_Ee5sfyfQ5lYeYxsFqi7f",
    emailAddress: email || "ady3m@gmail.com",
    callBackUrl: "https://yourdomain.com/donation-success", // Replace with actual domain
    allowRecurringPayment: false,
    currencyCode: currency,
    logoUrl: "https://github.com/adytechy/ADYEM-PROJECTS/blob/main/Screenshot%202026-02-20%20181623.png"
  }

  try {
    const response = await fetch('https://api.zainpay.ng/v1/card/initiate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const data = await response.json()

    if (response.ok && data.success) {
      return new Response(JSON.stringify({ paymentUrl: data.paymentUrl }), {
        headers: { 'Content-Type': 'application/json' }
      })
    } else {
      return new Response(JSON.stringify({ error: 'Payment initiation failed' }), { status: 400 })
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 })
  }
})
