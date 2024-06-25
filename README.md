# Midtrans Snap JS Library

## Instalasi

Clone repository ini atau download file distribusi dari folder `dist`.

## Penggunaan

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Midtrans Payment</title>
</head>
<body>
  <button id="pay-button">Pay Now</button>
  <script src="path/to/dist/midtrans-snap.js"></script>
  <script>
    const midtrans = new EkoMidtransSnap({
        client_key: 'YOUR_CLIENT_KEY'
    });

    document.getElementById('pay-button').addEventListener('click', function() {
        midtrans.payNow({
            token: 'YOUR_TRANSACTION_TOKEN_HERE',
            onSuccess: () => {
                alert('Success')
            },
            onError: () => {
                alert('Error')
            },
            onPending: () => {
                alert('Pending');
            },
            onClose: () => {
                alert('Close')
            }
        });
    });
  </script>
</body>
</html>
```