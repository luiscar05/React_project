import express from "express";
import bodyParser from 'body-parser';
import { Resend } from "resend";

import cors from 'cors';

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const resend = new Resend("re_4HjjiWhz_K7CTc3uimZW64AM443f6ExEe");

app.post("/", async (req , res) => {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["penaabellaluiscarlos@gmail.com"],
      subject: "Informacion",
      html: `<strong>${req.body.Texto}  Mi Correo es ${req.body.email}</strong>`,
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000");
});
