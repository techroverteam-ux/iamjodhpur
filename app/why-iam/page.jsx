import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Why IMA? - IMA Jodhpur',
  description: 'IMA Jodhpur - Why IMA?',
}

export default function WhyIAM() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .about-mob h2 img{height:333px;width:500px;max-width:100%;max-height:100%}
        .out_sid_pg{padding-top:50px}
        .pagebreadcrumb{text-align:center;padding:10px 0}
        .pagebreadcrumb a{color:#fff;text-decoration:none}
      `}} />

      <Navbar />

      <section style={{background:'#000',paddingTop:'10px',paddingBottom:'10px'}}>
        <div className="text-center">
          <h1 className="text-white">Why IAM ?</h1>
        </div>
        <div className="pagebreadcrumb">
          <div className="row">
            <div className="col-sm-12">
              <a href="/"> Home </a>&nbsp;/&nbsp;<strong>Why IAM ?</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 out_sid_pg">
        <div className="container">
          <div className="row">
            <h2 className="text-justify"><b>Academic Environment</b></h2>
            <p>At IMA, students learn in a focused and disciplined environment where preparation becomes a daily habit. Our classrooms are designed for long study hours so students can stay comfortable and attentive during lectures. We maintain a serious academic atmosphere that encourages consistency and regular learning. A strong classroom culture automatically reduces distractions and improves concentration. Students feel motivated when they study in a competitive yet positive setting. The learning flow remains structured so students don't feel confused or lost. We ensure students stay connected with their routine and preparation goals throughout the year. A stable and calm environment helps students absorb concepts better and revise more effectively. When students feel comfortable in class, their learning becomes smoother and more continuous. This is why IMA focuses strongly on maintaining the right academic environment every day.</p>
          </div>
          <div className="row mt-2">
            <h2 className="text-justify"><b>✦ Teaching Excellence</b></h2>
            <p>IMA has a dedicated team of experienced faculty for Physics, Chemistry, Biology and Mathematics. Our teaching approach focuses on concept clarity first, and then builds question-solving ability step-by-step. Each topic is explained with proper logic, examples and exam-oriented practice. Teachers guide students on how to think in NEET/JEE pattern questions instead of learning by memorising. We focus on building accuracy because marks improve only when mistakes reduce. Along with accuracy, we also help students improve their speed through regular practice and smart methods. Teachers highlight common errors, important patterns and scoring areas during preparation. Students are encouraged to participate, ask questions and stay active during lectures. Regular revision is also included so students remain connected with previous topics. Our goal is not just syllabus completion, but real improvement in performance and marks.</p>
          </div>
          <div className="row mt-2">
            <h2 className="text-justify"><b>✦ Student Counselling </b></h2>
            <p>At IMA, management provides regular student counselling to ensure every student stays on the right track throughout the session. This counselling includes complete guidance related to marks, attendance, test performance and overall improvement. Many students work hard but still don't know what exactly to improve first, and counselling helps solve that. We guide students on weak topics, subject priorities and daily improvement planning. Attendance is monitored because consistency is a major factor in selection. Students receive support in building a practical daily routine and study schedule. We also guide them in time management so they can balance school and coaching properly. Counselling helps students handle exam pressure, stress and low confidence phases. Students learn how to face tests with confidence and improve their exam temperament. Personal guidance is always available whenever a student needs motivation or direction. The purpose is simple — to keep every student disciplined, regular and mentally strong.</p>
          </div>
          <div className="row mt-2">
            <h2 className="text-justify"><b>✦ Modules & Resources</b></h2>
            <p>Strong preparation requires strong content, and IMA provides complete study support designed for NEET and JEE patterns. We provide our own subject-wise modules for Physics, Chemistry, Biology and Maths. These modules help students build concepts step-by-step and then practice questions in the right manner. The study material is structured topic-wise so students don't waste time in random learning. Along with modules, students receive Daily Practice Problems (DPP) after classes to continue learning every day. Homework tasks are also given to build a strong revision habit and discipline. Our preparation system includes NCERT-based learning support for NEET to strengthen core concepts. We also integrate previous year questions (PYQs) so students understand real exam pattern and level. This combination of modules and daily practice helps students improve accuracy and confidence. With proper resources, students stay well-prepared, organised and consistent throughout the session.</p>
          </div>
          <div className="row mt-2">
            <h2 className="text-justify"><b>✦ Doubt Sessions</b></h2>
            <p>At IMA, doubt solving is taken seriously because even one small doubt can become a major weakness later. We conduct regular doubt sessions where students can ask questions from classroom topics, DPPs, modules, homework and test papers. Teachers ensure doubts are cleared properly and completely, not in a rushed manner. The focus is to make students understand the concept behind the question, not just the final answer. Doubt sessions help students strengthen weak areas and correct their approach. Students are encouraged to ask doubts freely without hesitation, because learning improves only when clarity improves. These sessions also act like revision support because students revisit topics again through questions. Proper doubt clearance ensures students don't carry confusion into the next chapter. With continuous doubt support, students feel confident and more independent in problem solving. Over time, students become faster, clearer and more accurate in attempting questions.</p>
          </div>
          <div className="row mt-2">
            <h2 className="text-justify"><b>✦ Sunday Tests</b></h2>
            <p>IMA believes that regular testing is an essential part of true exam preparation. We conduct a fixed test every Sunday to ensure consistency and continuous evaluation. Weekly tests help students improve time management, build exam confidence, and develop disciplined performance habits. Along with Sunday tests, we also conduct chapter tests, unit tests, and full syllabus tests during revision phases. These assessments help students understand their current level and identify areas that need improvement. Our faculty guides students in analysing mistakes and strengthening weak topics with the right strategy. Regular testing gradually reduces exam pressure, as students become familiar with time-based practice and real exam conditions. With consistent evaluation and performance tracking, students improve accuracy, stay focused throughout the year, and achieve measurable progress in a structured manner.</p>
          </div>
          <div className="row mt-2">
            <h2 className="text-justify"><b> ✦ PTM Support</b></h2>
            <p>IMA conducts regular Parent-Teacher Meetings (PTM) to keep parents connected with the student's journey. PTMs help parents understand test performance, attendance, discipline and overall progress. This keeps preparation transparent and properly monitored. Parents receive clear feedback about the student's strengths and areas where improvement is needed. Teachers also guide parents on how to support the student at home during the preparation phase. PTMs build a stronger support system for the student from both sides — institute and home. When parents stay informed, students become more regular and responsible. This creates better consistency and better long-term performance. PTM also helps in correcting issues early, before they affect results. At IMA, parent support is treated as an important part of student success.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
