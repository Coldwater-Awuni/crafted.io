
// import { createTransport } from "nodemailer";
// // host :mail.craftdhabitat.com
// // port :465


// const username = "info@craftdhabitat.com";
// const password="@craft'd24"


// const transporter = createTransport({
//   host: "mail.craftdhabitat.com", 
//   port: 465,
//   secure: true, // true for port 465, false for other ports
//   auth: {
//     user: username,
//     pass: password,
//   },
// });




// // const subscriber= document.getElementById
// const mailOptions={
//     from:{
//         name: "Craft'd Habitat",
//         address: username
//     },
//     to: 'danielawuni53@gmail.com',
//     subject: 'Newsletter',
//     text: " Welcome to the Craft'd Habitat Newsletter",
//     html: "<p>Welcome to the Craft'd Habitat Newsletter</p>",
// }

// const sendmail= async (transporter, mailOptions) => {
//     try {
//         await transporter.sendmail(mailOptions)
//         console.log("message sent ")
//     } catch (error) {
//         console.log('error send message'+ error)
//     }
// }





// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('mail').addEventListener('click', function () {
//         sendmail(transporter, mailOptions);
//     });
// });
