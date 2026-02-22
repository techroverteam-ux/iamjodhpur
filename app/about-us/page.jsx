'use client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <style jsx>{`
        .container.apicontent.about-mob img {
          width: 100% !important;
          max-width: 100%;
          height: auto !important;
        }
        .about-mob h2 img {
          height: 333px;
          width: 500px;
          max-width: 100%;
          max-height: 100%;
          margin: auto;
          display: block;
        }
      `}</style>

      <section style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <div className="text-center">
          <h1 style={{ color: '#1977f3' }}>About Us</h1>
        </div>
      </section>

      <section className="out_sid_pg p-0">
        <div className="container apicontent about-mob mb-3">
          <h2 style={{ textAlign: 'center' }}>
            <strong>About IIT Medical Academy (IMA)</strong>
          </h2>

          <p>
            Founded in 1999, IIT Medical Academy (IMA) has been serving Jodhpur for 26 years, building a strong legacy in competitive exam preparation. IMA was among the first coaching institutes in Jodhpur where students could receive proper guidance for entrance exams of IITs and top medical colleges through a structured and disciplined approach.
          </p>

          <p>
            We primarily focus on students from Rajasthan, especially Western Rajasthan, and aim to extend quality education to rural and semi-urban areas as well. Many students lack awareness about the right academic pathway, and IMA helps them recognize their inner stamina, talent, and potential to achieve their goals.
          </p>

          <p>
            IMA offers coaching in both Hindi medium and English medium, with a healthy study environment and experienced faculties. With regular testing, a dedicated Doubt Solving Centre, and complete student tracking with parent reporting, we ensure continuous academic improvement.
          </p>

          <p>
            We also provide career counselling and personal student counselling, supporting students not only in studies but also in overall well-being and decision-making. Over the years, our students have secured selections in prestigious institutions such as AIIMS, AFMC, ISRO, IITs, NITs, and many other reputed colleges. For students coming from outside Jodhpur, we also provide hostel facilities in a disciplined and supportive atmosphere.
          </p>

          <p>
            At IIT Medical Academy, we don&rsquo;t just teach&mdash;we mentor, motivate, and transform students into future doctors, engineers, and professionals with ambition, discipline, and purpose.
          </p>

          <h3 style={{ marginLeft: '48px', textAlign: 'center' }}>
            <strong>VISION AND MISSION</strong>
          </h3>

          <h3 style={{ marginLeft: '48px' }}>
            <strong>
              <span style={{ color: '#434343' }}>
                <span style={{ color: 'black' }}>Vision (IMA)</span>
              </span>
            </strong>
          </h3>

          <p>
            To reach every corner of Rajasthan with quality education and the right direction&mdash;guiding students towards becoming doctors and IITians through offline classroom learning, one-to-one mentorship, personal attention, and genuine care.
          </p>

          <h3 style={{ marginLeft: '48px' }}>
            <strong>
              <span style={{ color: '#434343' }}>
                <span style={{ color: 'black' }}>Mission (IMA)</span>
              </span>
            </strong>
          </h3>

          <ul>
            <li>
              To provide high-quality offline classroom education with strong concept clarity for NEET and IIT-JEE.
              <br />
              &nbsp;
            </li>
            <li>
              To ensure personal teacher-student interaction through one-to-one guidance and individual academic focus.
              <br />
              &nbsp;
            </li>
            <li>
              To reach students across Rajasthan, especially rural and underrepresented areas, and show them the right career pathway.
              <br />
              &nbsp;
            </li>
            <li>
              To support every learner with individual care, attention, and a disciplined study environment.
              <br />
              &nbsp;
            </li>
            <li>
              To strengthen performance through regular tests, analysis, and a dedicated Doubt Solving Centre.
              <br />
              &nbsp;
            </li>
            <li>
              To provide career counselling and personal counselling, helping students build confidence, mindset, and well-being.
              <br />
              &nbsp;
            </li>
            <li>
              To maintain transparency through student tracking and regular parent reporting for continuous improvement.
            </li>
          </ul>

          <hr />
          <h3 style={{ textAlign: 'center' }}>
            <strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;DIRECTOR&rsquo;S MESSAGE</strong>
          </h3>

          <p>
            <strong>Welcome to IIT Medical Academy (IMA).</strong>
            <br />
            &nbsp;For us, IMA is not just a coaching institute&mdash;it is an emotion, a responsibility, and a lifelong commitment that began in 1999 with one simple dream: to guide students with honesty, discipline, and the right direction.
          </p>

          <p>
            Every student who enters IMA carries a silent promise&mdash;to themselves and to their family. We understand the pressure, the sacrifices, and the expectations behind that dream. That is why we never treat students like numbers. We listen to them, support them, and stand by them like mentors who truly care.
          </p>

          <p>
            We strongly believe in offline classroom learning, where real teaching happens through eye contact, personal attention, and one-to-one guidance. Our purpose is not only to help students score well, but to help them become strong individuals&mdash;confident, focused, and mentally prepared to face life with courage.
          </p>

          <p>
            To every parent who has trusted us, and to every student who believes in their dream&mdash;thank you. Your faith is our strength, and your success is our motivation. We will continue to guide you with the same dedication, love, and sincerity&mdash;always.
          </p>

          <p>
            <strong>&ndash; A.R. Seervi &amp; K.R. Choudhary</strong>
            <br />
            &nbsp;<em>Founders &amp; Directors, IIT Medical Academy (IMA)</em>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
