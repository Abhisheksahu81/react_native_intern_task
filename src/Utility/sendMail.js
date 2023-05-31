import axios from 'axios';
import { ToastAndroid } from 'react-native';

export const sendMail = async (name , number, email, message)=> {
    const sendGridAPIKey = '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';
    const sendGridEndpoint = 'https://api.sendgrid.com/v3/mail/send';

    const data = `Name : ${name} \nNumber : ${number} \nEmail : ${email} \nMessage : ${message}\n`


    const emailData = {
      personalizations: [
        {
          to: [{ email: 'info@redpositive.in' }],
          subject: 'React Native Intern Task',
        },
      ],
      from: { email: 'abhisheksahu812046@gmail.com' },
      content: [{ type: 'text/plain', value: data }],
    };

    axios.post(sendGridEndpoint, emailData, {
      headers: {
        Authorization: `Bearer ${sendGridAPIKey}`,
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        ToastAndroid.show("Email Sent Successfully", ToastAndroid.LONG)
        console.log('Email sent successfully');
      })
      .catch((error) => {
        console.error(error);
      });

}
