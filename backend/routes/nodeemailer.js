const nodemailer =require("nodemailer");

const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"test8@gmail.com",
        pass:"*******************************",
    },
});

module.exports.sendConfirmationEmail = (email, code, id)=>{
    transport.sendMail({
            from:"amine@gmail.com",
            to: email,
            subject:"confirmer avec email",
            html:`<h1>Email de confirmation</h1>
                <h2>bonjour</h2>
                <p>pour confirmer , veuillez cliquer sur ce lien</p>
                <a href=http://localhost:5000/api/res/confirm/${code}>Cliquer ici !</a>
                </div>`,

        }).catch((err) => console.log(err));

};
