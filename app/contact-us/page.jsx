import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Contact Us - IMA Jodhpur',
  description: 'Contact IMA Jodhpur for any queries',
};

export default function ContactUs() {
  return (
    <>
      <Navbar />
      
      <div dangerouslySetInnerHTML={{__html: `
        <style>
          .apicontent {
            font-size: 16px;
            line-height: 1.8;
            color: #333;
          }
          .apicontent p {
            margin-bottom: 15px;
          }
          .apicontent strong {
            font-weight: 600;
          }
          .py-5 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .container {
            max-width: 1140px;
            margin: 0 auto;
            padding: 0 15px;
          }
          .text-center {
            text-align: center;
          }
        </style>
      `}} />
      
      <section style={{paddingTop: '10px', paddingBottom: '10px'}}>
        <div className="text-center">
          <h2 style={{color: '#1977f3'}}><b>Contact Us</b></h2>
        </div>
      </section>

      <section className="py-5">
        <div className="container apicontent">
          <p>If you have any questions, concerns, or need assistance regarding our courses, content, or technical issues, we are here to help. At <strong>IMA Jodhpur</strong>, we value your feedback and strive to provide prompt and helpful support to all our users. Whether you're a current student or considering joining our platform, don't hesitate to reach out.</p>

          <p>You can contact our support team through the following channels:</p>

          <p><br />
          <strong>Support Email:</strong> ceo.iitacademy@gmail.com<br />
          <strong>Support Number:</strong> 9571037333</p>

          <p><br />
          We aim to respond to all queries within 24 to 48 hours during business days. For faster assistance, please include your registered email ID, phone number, and a brief description of the issue in your message. We look forward to helping you achieve your goals and making your learning experience with <strong>IMA Jodhpur</strong> as productive and enjoyable as possible.<br />
          <br />
          <strong>Address:<br />
          <br />
          Near Barktullah Khan Stadium,<br />
          Main Pal Road,Jodhpur,<br />
          Pin Code- 342003</strong><br />
          &nbsp;</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
