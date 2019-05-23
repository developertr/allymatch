import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, toJS } from 'mobx';
import theme from '../../theme/_theme.scss';

@observer
export default class SDJobPage extends React.Component<{},{}> {

  constructor(props) {
    super(props);
    this.onClick1=this.onClick1.bind(this);
    this.onClick4=this.onClick4.bind(this);
    this.onClick5=this.onClick5.bind(this);
    this.onClick6=this.onClick6.bind(this);
  }

  state={
    masterThesisAndM:false,
    masterThesisMobM:false,
    seniorSD:false,
    cto:false
  }

  onClick1(){
    this.setState(Object.assign({},this.state,{cto:!this.state.cto}));
  }

  onClick4(){
    this.setState(Object.assign({},this.state,{masterThesisAndM:!this.state.masterThesisAndM}));
  }

  onClick5(){
    this.setState(Object.assign({},this.state,{masterThesisMobM:!this.state.masterThesisMobM}));
  }

  onClick6(){
    this.setState(Object.assign({},this.state,{seniorSD:!this.state.seniorSD}));
  }

  render() {
    return (
      <div>
        <img className={theme.bannerImgEvent1} src="https://www.globalsuccess-club.net/documents/20589/52387/image_digital_1860x640.jpg/b4e530bf-543e-49fc-83c7-463f04be66ee?t=1524039593148" />
        <img className={theme.bannerImgEvent2} src="https://www.globalsuccess-club.net/documents/20589/52714/image_digital_640x358.jpg/40ed94d2-8243-4ff9-b6de-db898ba81b64?t=1524039615228" />
        <div className={theme.jobDtlsHead} onClick={() => this.onClick1()}>CTO ></div>
        {this.state.cto ?
          <div>
          <div className={theme.jobDtlsDsc}>Job Description</div>
          <div className={theme.jobDtlsQ}>
            Are you an innovative and passionate techy with start-up experience?
            We’re looking for a CTO who will drive technology innovation, transformation
            and lead the teams implementing those technologies. As the CTO you will be in
            charge of managing the IT team, hiring new people, and communicating the company’s
            technology strategy to partners, investors and employees; requiring strong leadership
            and communication skills in addition to a deep knowledge of technology and modern development
            practices. Our ideal CTO candidate will establish a technological vision and lead the company’s
            technological development. He/she will also lead and support our tech team by sharing knowledge
            and promoting achievement of the company’s goals.
          </div>
          <div className={theme.jobDtlsDsc}>Qualifications</div>
          <ul>
            <li className={theme.jobsDtlsA}>Deep understanding of the following programs: Java, Swagger API, CURL,
            Postgres SQL & MongoDB, SpringData & Boot, AngularJS, QueryDSL, JHipster, React & React-Toolbox, and
            AWS –(EC2, RDS, S3)</li>
            <li className={theme.jobsDtlsA}>8+ years of experience</li>
            <li className={theme.jobsDtlsA}>Prior experience working with a start-up is preferred</li>
            <li className={theme.jobsDtlsA}>Excellent communication skills</li>
            <li className={theme.jobsDtlsA}>Strong leadership skills</li>
            <li className={theme.jobsDtlsA}>Experience solving difficult business problems in a new market</li>
            <li className={theme.jobsDtlsA}>Previous experience in B2B and/or manufacturing is appreciated</li>
            <li className={theme.jobsDtlsA}>Ability to support, share knowledge, and mentor tech team</li>
            <li className={theme.jobsDtlsA}>Comfortable with doing business on an international level</li>
            <li className={theme.jobsDtlsA}>Strong English and German skills, additional languages are a bonus</li>
          </ul>
          </div>: ""
        }

        <div className={theme.jobDtlsHead} onClick={() =>this.onClick4()}>Mobile App Developer (Android) ></div>
        {this.state.masterThesisAndM ?
          <div>
          <div className={theme.jobDtlsDsc}>Job Description</div>
          <div className={theme.jobDtlsQ}>
            Are you a Masters Student and experienced mobile application developer with knowledge of Java and experience
            with Java-based mobile applications? Are you looking for a suitable place to do a Masters Thesis? At allymatch,
            you can be part of a dynamic start-up offering you the chance to work independently and further your knowledge.
            We are looking for an eager individual who is looking to do their Master Thesis with a company, where you could
            help us to implement advanced features on a currently existing mobile application, and we can offer you a great
            place to grow and learn. If you like working in friendly multicultural environments and aren't afraid to make
            contributions, please don't hesitate to send us your application!
          </div>
          <div className={theme.jobDtlsDsc}>Responsibilities</div>
          <ul>
            <li className={theme.jobsDtlsA}>Front end development of new features for our mobile application</li>
            <li className={theme.jobsDtlsA}>Design, build, and maintain efficient, reusable, and reliable Java code</li>
            <li className={theme.jobsDtlsA}>Ensure the best possible performance, quality, and responsiveness of the applications</li>
            <li className={theme.jobsDtlsA}>Creation of ideas and conception of new features</li>
            <li className={theme.jobsDtlsA}>Assure that all user input is validated before submitting to back-end</li>
            <li className={theme.jobsDtlsA}>Application deployment</li>
            <li className={theme.jobsDtlsA}>Debugging and problem analysis</li>
          </ul>
          <div className={theme.jobDtlsDsc}>Qualifications</div>
          <ul>
            <li className={theme.jobsDtlsA}>Bachelor degree in the field of Computer Science and several years of relevant experience</li>
            <li className={theme.jobsDtlsA}>Masters student currently with a mandatory Masters Thesis</li>
            <li className={theme.jobsDtlsA}>Deep understanding of modern Android development</li>
            <li className={theme.jobsDtlsA}>Experience with Android development tools and good understanding of Android UX/UI guidelines and best practices (experience with iOS too would be a plus).</li>
            <li className={theme.jobsDtlsA}>You are able to write readable, maintainable, performant object-oriented Java</li>
            <li className={theme.jobsDtlsA}>Skill in the use of REST services and JSON objects</li>
            <li className={theme.jobsDtlsA}>Well acquainted with Git</li>
            <li className={theme.jobsDtlsA}>You care about quality and you know what it means to ship high quality code</li>
            <li className={theme.jobsDtlsA}>High level of motivation, commitment, and the ability to work under pressure</li>
            <li className={theme.jobsDtlsA}>Ability to work independently and well as part of a team</li>
            <li className={theme.jobsDtlsA}>Ability to solve problems as they come</li>
          </ul>
          </div>: ""
        }

        <div className={theme.jobDtlsHead} onClick={() =>this.onClick5()}>Mobile App Developer (iOS) ></div>
        {this.state.masterThesisMobM ?
          <div>
          <div className={theme.jobDtlsDsc}>Job Description</div>
          <div className={theme.jobDtlsQ}>
            Are you a Masters Student and experienced mobile application developer with knowledge of Swift 3 based mobile
            applications? Are you looking for a suitable place to do a Masters Thesis? At allymatch you can be part of a
            dynamic start-up offering you the chance to work independently and further your knowledge. We are looking for
            an eager individual who is looking to do their Master Thesis with a company, where you could help us to implement
            advanced features on a currently existing mobile application, and we can offer you a great place to grow and learn.
            If you like working in friendly multicultural environments and aren't afraid to make contributions, please don't
            hesitate to send us your application!
          </div>
          <div className={theme.jobDtlsDsc}>Responsibilities</div>
          <ul>
            <li className={theme.jobsDtlsA}>Front end development of new features for our mobile application</li>
            <li className={theme.jobsDtlsA}>Design, build, and maintain efficient, reusable, and reliable Swift 3 code</li>
            <li className={theme.jobsDtlsA}>Ensure the best possible performance, quality, and responsiveness of the applications</li>
            <li className={theme.jobsDtlsA}>Creation of ideas and conception of new features</li>
            <li className={theme.jobsDtlsA}>Assure that all user input is validated before submitting to back-end</li>
            <li className={theme.jobsDtlsA}>Application deployment</li>
            <li className={theme.jobsDtlsA}>Debugging and problem analysis</li>
          </ul>
          <div className={theme.jobDtlsDsc}>Qualifications</div>
          <ul>
            <li className={theme.jobsDtlsA}>Bachelor degree in the field of Computer Science and several years of relevant experience</li>
            <li className={theme.jobsDtlsA}>Masters student currently with a mandatory Masters Thesis</li>
            <li className={theme.jobsDtlsA}>Deep understanding of modern iOS development</li>
            <li className={theme.jobsDtlsA}>Experience with iOS development tools and good understanding of iOS UX/UI guidelines and best practices (experience with Android too would be a plus).</li>
            <li className={theme.jobsDtlsA}>You are able to write readable, maintainable, performant object-oriented Java</li>
            <li className={theme.jobsDtlsA}>Skill in the use of REST services and JSON objects</li>
            <li className={theme.jobsDtlsA}>Well acquainted with Git</li>
            <li className={theme.jobsDtlsA}>You care about quality and you know what it means to ship high quality code</li>
            <li className={theme.jobsDtlsA}>High level of motivation, commitment, and the ability to work under pressure</li>
            <li className={theme.jobsDtlsA}>Ability to work independently and well as part of a team</li>
            <li className={theme.jobsDtlsA}>Ability to solve problems as they come</li>
          </ul>
          </div>: ""
        }

        <div className={theme.jobDtlsHead} onClick={() =>this.onClick6()}>Senior Software (Java) Developer ></div>
        {this.state.seniorSD ?
          <div>
          <div className={theme.jobDtlsDsc}>Job Description</div>
          <div className={theme.jobDtlsQ}>
            Are you an experienced software developer with knowledge of Java and experience with Java-based mobile
            applications? Are you lacking the adequate environment to utilize your skills to their full potential?
            At Allymatch, you can be part of a dynamic start-up offering you the chance to work independently and
            further your knowledge. We are looking for an eager individual who is determined and willing to work hard
            to see the success of the company, as well as themselves. If you like working in friendly multicultural
            environments and aren’t afraid to make contributions, please don’t hesitate to send us your application!
          </div>
          <div className={theme.jobDtlsDsc}>Responsibilities</div>
          <ul>
            <li className={theme.jobsDtlsA}>Execution of software development life-cycle including coding, integration tests and deployment</li>
            <li className={theme.jobsDtlsA}>Responsible for developing and improving backend and/or frontend of our system</li>
          </ul>
          <div className={theme.jobDtlsDsc}>Qualifications</div>
          <ul>
            <li className={theme.jobsDtlsA}>Minimum 5 years of experience in a relevant field of Java programming</li>
            <li className={theme.jobsDtlsA}>Deep knowledge in Software Development Life-cycle Management as well as significant knowledge in Linux-based systems and system administration</li>
            <li className={theme.jobsDtlsA}>Deep knowledge in Spring, Hibernate and Database technologies (MySQL/postgres/NoSQL)</li>
            <li className={theme.jobsDtlsA}>Experienced in Spring framework or equivalent technologies</li>
            <li className={theme.jobsDtlsA}>Good understanding of iOS and Android apps</li>
            <li className={theme.jobsDtlsA}>Experience with interfacing REST-ful APIs</li>
            <li className={theme.jobsDtlsA}>Used to working with Mobile / Responsive Design using HTML/CSS3</li>
            <li className={theme.jobsDtlsA}>Comfortable with modern JavaScript development practices</li>
            <li className={theme.jobsDtlsA}>Familiarity with GIT and/or similar versioning systems</li>
            <li className={theme.jobsDtlsA}>These would be a plus: Experience of microservices and/or containerization, AngularJS, security/cryptography methodologies</li>
          </ul>
          </div>: ""
        }

        <div className={theme.footerDiv}>
        <div className="row">
        <div className="col-md-4 col-sm-12 col-xs-12">
            <a href="/#/termsConditions" target="_blank" className={theme.link}><span className={theme.generalFont}>Terms of Use and Privacy Policy</span></a> <span> | </span>
            <a href="/#/contactImprint" target="_blank" className={theme.link}><span className={theme.generalFont}>Contact</span></a>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
            Copyright © 2018 Allymatch. All Rights Reserved.
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
          <div className={theme.footerDivRight}>

          <a href="https://www.facebook.com/allymatchint/" target="_blank"><img src="https://www.globalsuccess-club.net/documents/20589/33068/facebook.gif/4309a993-4c35-4bfa-8a51-029aa2c2416f?t=1494928968112" width="30" height="30" className={theme.logosD}/></a>
          &nbsp;
          <a href="https://www.linkedin.com/company/allymatch/" target="_blank"><img src="https://www.globalsuccess-club.net/documents/20589/33068/linkedin.gif/04afd470-12fd-4ebb-9da6-6297c72187f0?t=1494928970846" width="30" height="30" className={theme.logosD}/></a>
          &nbsp;
          <a href="https://twitter.com/allymatch_int" target="_blank"><img src="https://www.globalsuccess-club.net/documents/20589/33068/twitter.gif/fe82670f-d2ce-4c74-a32d-7cbb4b360fb4?t=1494928971818" width="30" height="30" className={theme.logosD}/></a>
          &nbsp;
          <a href="https://www.youtube.com/channel/UCz3rwTFs2fmiwr3ttRQhe4w" target="_blank"><img src="https://www.globalsuccess-club.net/documents/20589/33068/youtube.gif/d938fbce-e623-4349-8cbf-a93552c58d39?t=1494928972218" width="30" height="30" className={theme.logosD}/></a>
          &nbsp;
          <a href="https://plus.google.com/u/0/105386510046056717814" target="_blank"><img src="https://www.globalsuccess-club.net/documents/20589/33068/google%2B.gif/2f18f8d8-327f-48bb-aa9f-13d865925ac8?t=1494928968403" width="30" height="30" className={theme.logosD}/></a>
        </div>
          </div>
        </div>
        </div>

      </div>
    )
  }
}
