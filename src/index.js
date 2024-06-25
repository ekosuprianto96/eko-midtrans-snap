export default class EkoMidtransSnap {
    constructor(options) {
        this.client_key = options.client_key || '',
        this.url_sandbox = options.url_sandbox || 'https://app.sandbox.midtrans.com/snap/snap.js',
        this.url_prod = options.url_prod || 'https://app.midtrans.com/snap/snap.js',
        this.production = options.production || false,
        this.token = '';
        this.snap = null;
        this.init();
    }

    init() {
        if(this.production) {
            this.createElScript(this.url_prod);
            return;
        }

        this.createElScript(this.url_sandbox);
    }

    createElScript(url) {
        const script = document.createElement('script');
        script.src = url;
        script.setAttribute('data-client-key', this.client_key);
        document.head.appendChild(script);
        this.snap = window.snap;
    }

    payNow({token, onSuccess, onError, onPending, onClose}) {
        this.setToken(token);

        this.snap.pay(this.token, {
            onSuccess,
            onError,
            onPending,
            onClose
        });
    }

    setToken(token) {
        this.token = token;
    }
}