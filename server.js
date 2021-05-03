const express = require('express');

const path = require('path');

const app = express();


const axios_1 = require("axios")
app.set('view engine', 'ejs')

//init middleware
app.use(express.json({ extended: false }));

//Define Routes

app.set('view engine', 'ejs')

var data1
app.post(
    '/api/payment',
    async (req, res) => {
        const { amount,
            phone } =
            req.body


        const username = 'merchant.EGPTEST1'
        const password = '61422445f6c0f954e24c7bd8216ceedf'
        const data = {
            apiOperation: "CREATE_CHECKOUT_SESSION",
            interaction: {
                operation: "PURCHASE",
                returnUrl: "https://www.google.com.eg",
                cancelUrl: "https://www.facebook.com"
            },
            order: {
                currency: "EGP",
                id: phone,
                amount: amount
            }
        }

        const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
        var url = 'https://test-nbe.gateway.mastercard.com/api/rest/version/59/merchant/EGPTEST1/session';


        //    
        const options = {
            method: 'post',
            url: url,
            data: data,
            headers: {
                'Authorization': `Basic ${token}`
            },
        };


        try {
            var response = await axios_1(options).then(async (res) => {
                await res.data.session.id;
                console.log(res.data.session.id);
                data1 = res.data.session.id;
                return res.data.session.id;
            }).catch((error) => {
                console.error(error)
                return false;
            });
            return response;
        } catch (err) {
            console.error(err)
            return false;
        }
    });
var opn = require('opn');
app.get("/api/payment", (req, res) => {
    res.render("NBESample", { data1: data1 });
    setTimeout(() => {
        opn(`https://test-nbe.gateway.mastercard.com/checkout/pay/${data1}`)
    }, 2000);
    console.log("done");
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        req.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server start in ${PORT}`);
});
