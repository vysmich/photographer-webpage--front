export default function (req, res) {
console.log("req", req.body.message);
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.seznam.cz",
    auth: {
      user: "kontaktnyformular@barboravyskocilova.com",
      pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "kontaktnyformular@barboravyskocilova.com",
    to: "info@barboravyskocilova.com",
    subject: `Zpráva z kontaktního formuláře od ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<p>Email: ${req.body.email}</p><br><p>Telefon: ${req.body.phone}</p><br><div>Zpráva: ${req.body.message}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send("success");
}
