export default class EkoMidtransSnap {
    constructor(options) {
        this.client_key = options.client_key || '';
        this.url_sandbox = options.url_sandbox || 'https://app.sandbox.midtrans.com/snap/snap.js';
        this.url_prod = options.url_prod || 'https://app.midtrans.com/snap/snap.js';
        this.production = options.production || false;
        this.token = '';
        this.snap = null;
        this.init();
    }

    init() {
        if (this.production) {
            this.createElScript(this.url_prod);
            return;
        }

        this.createElScript(this.url_sandbox);
    }

    createElScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.setAttribute('data-client-key', this.client_key);
            script.onload = () => {
                this.snap = window.snap;
                resolve();
            };
            script.onerror = () => reject(new Error('Failed to load Midtrans Snap script'));
            document.head.appendChild(script);
        });
    }

    async payNow({token, onSuccess, onError, onPending, onClose}) {
        this.setToken(token);

        if (!this.snap) {
            await this.createElScript(this.production ? this.url_prod : this.url_sandbox);
        }

        if (this.snap) {
            this.snap.pay(this.token, {
                onSuccess,
                onError,
                onPending,
                onClose
            });
        } else {
            if (onError) {
                onError(new Error('Midtrans Snap is not available on window'));
            }
        }
    }

    setToken(token) {
        this.token = token;
    }
}