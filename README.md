# Midtrans Snap JS Library

Library JavaScript untuk integrasi pembayaran dengan Midtrans Snap.

## Instalasi

Clone repository ini atau download file distribusi dari folder `dist`.

### Instalasi melalui npm

Anda juga dapat menginstal library ini menggunakan npm:

```bash
npm install eko-midtrans-snap
```

## Penggunaan
### Penggunaan di JavaScript
Berikut adalah contoh penggunaan dasar di dalam proyek JavaScript:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Midtrans Payment</title>
</head>
<body>
  <button id="pay-button">Pay Now</button>
  <script src="path/to/dist/eko-midtrans-snap.js"></script>
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
## Penggunaan di Vue.js
Untuk menggunakan library ini di proyek Vue.js, ikuti langkah-langkah berikut:

1. Instalasi Library:
   Anda dapat menginstal library ini menggunakan npm:
   ```bash
   npm install eko-midtrans-snap
   ```
2. Buat Komponen Vue untuk Pembayaran:
   Buat file komponen baru, misalnya MidtransButton.vue.
   ```javascript
     <template>
      <button @click="payNow">Pay Now</button>
     </template>
  
    <script>
      import EkoMidtransSnap from 'eko-midtrans-snap';
      
      export default {
        props: {
          clientKey: {
            type: String,
            required: true
          },
          transactionToken: {
            type: String,
            required: true
          }
        },
        methods: {
          payNow() {
            const midtrans = new EkoMidtransSnap({
              client_key: this.clientKey
            });
      
            midtrans.payNow({
              token: this.transactionToken,
              onSuccess: (result) => {
                console.log('Transaction success:', result);
              },
              onError: (error) => {
                console.error('Transaction failed:', error);
              },
              onPending: (result) => {
                console.log('Transaction pending:', result);
              },
              onClose: () => {
                console.log('Transaction closed.');
              }
            });
          }
        }
      };
    </script>
    
    <style scoped>
      button {
        background-color: #4CAF50;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border: none;
      }
    </style>
    ```
3. Gunakan Komponen di Aplikasi Vue:
   Misalnya, di dalam file App.vue:
   ```javascript
    <template>
      <div id="app">
        <MidtransButton
          :clientKey="clientKey"
          :transactionToken="transactionToken"
        />
      </div>
    </template>
    
    <script>
    import MidtransButton from './components/MidtransButton.vue';
    
    export default {
      name: 'App',
      components: {
        MidtransButton
      },
      data() {
        return {
          clientKey: 'YOUR_CLIENT_KEY_HERE',
          transactionToken: 'YOUR_TRANSACTION_TOKEN_HERE'
        };
      }
    };
    </script>
   ```
Dengan langkah-langkah ini, Anda dapat mengintegrasikan Midtrans Snap dalam proyek Vue.js Anda menggunakan library eko-midtrans-snap.

### License MIT
