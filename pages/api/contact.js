export default async function (req, res) {
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
    text: req.body.message + " | Sent from: " + req.body.mail,
    html: `<p>Email: ${req.body.mail}</p><br><p>Telefon: ${
      req.body.phone
    }</p><br><div>Objednávka: ${
      req.body.order ? req.body.order : "Ne"
    }</div><br><div>Zpráva: ${req.body.message}</div>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200).json({ status: "OK" });

  // console.log(req.body);
  res.send("success");
}
