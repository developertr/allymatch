import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, toJS } from 'mobx';
import theme from '../../theme/_theme.scss';

@observer
export default class IYIJobPage extends React.Component<{},{}> {

  constructor(props) {
    super(props);
    this.onClick2=this.onClick2.bind(this);
    this.onClick3=this.onClick3.bind(this);
    this.onClick4=this.onClick4.bind(this);
    this.onClick5=this.onClick5.bind(this);
  }

  state={
    masterThesisAnd:false,
    masterThesisMob:false,
    onlineMark:false,
    intMark:false
  }

  onClick2(){
    this.setState(Object.assign({},this.state,{masterThesisAnd:!this.state.masterThesisAnd}));
  }

  onClick3(){
    this.setState(Object.assign({},this.state,{masterThesisMob:!this.state.masterThesisMob}));
  }

  onClick4(){
    this.setState(Object.assign({},this.state,{intMark:!this.state.intMark}));
  }

  onClick5(){
    this.setState(Object.assign({},this.state,{onlineMark:!this.state.onlineMark}));
  }

  render() {
    return (
      <div>
        <img className={theme.bannerImgEvent1} src="https://www.globalsuccess-club.net/documents/20589/52387/image_digital_1860x640.jpg/b4e530bf-543e-49fc-83c7-463f04be66ee?t=1524039593148" />
        <img className={theme.bannerImgEvent2} src="https://www.globalsuccess-club.net/documents/20589/52714/image_digital_640x358.jpg/40ed94d2-8243-4ff9-b6de-db898ba81b64?t=1524039615228" />

        <div className={theme.jobDtlsHead} onClick={() =>this.onClick2()}>Master’s Thesis Android Developer > </div>
        {this.state.masterThesisAnd ?
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

        <div className={theme.jobDtlsHead} onClick={() =>this.onClick3()}>Master’s Thesis Mobile Developer (iOS) ></div>
        {this.state.masterThesisMob ?
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


        <div className={theme.jobDtlsHead} onClick={() =>this.onClick4()}>Master Thesis in the area of International Marketing > </div>
        {this.state.intMark ?
          <div>
          <div className={theme.jobDtlsDsc}>Job Description</div>
          <div className={theme.jobDtlsQ}>
            We are looking for talented Masters students who would like to write their Master's Thesis with our company located in Frankfurt am Main. The topic of the thesis will be about effective marketing strategies for specific regions of the world and how to gain users from there for our mobile application. You will be tasked with researching, planning, and implementing innovative and proven marketing strategies, then after their implementation, you will need to analyze their effectiveness.
          </div>
          <div className={theme.jobDtlsDsc}>Responsibilities</div>
          <ul>
            <li className={theme.jobsDtlsA}>Conceive and develop efficient and intuitive marketing strategies</li>
            <li className={theme.jobsDtlsA}>Organize and oversee advertising/communication campaigns (content marketing, social media etc.), exhibitions and promotional events</li>
            <li className={theme.jobsDtlsA}>Conduct market research and analysis to evaluate trends, brand awareness and competition ventures</li>
            <li className={theme.jobsDtlsA}>Monitor progress of campaigns using various metrics and submit reports of performance</li>
          </ul>
          <div className={theme.jobDtlsDsc}>Qualifications</div>
          <ul>
            <li className={theme.jobsDtlsA}>Masters student with a degree focus on International Marketing</li>
            <li className={theme.jobsDtlsA}>Good understanding of market research techniques, data analysis and statistics methods</li>
            <li className={theme.jobsDtlsA}>Thorough knowledge of strategic planning principles and marketing best practices</li>
            <li className={theme.jobsDtlsA}>At least 2 years experience in a marketing profession is a plus</li>
            <li className={theme.jobsDtlsA}>Proficient in MS Office and using popular social media platforms (e.g. Facebook, Twitter, Google+)</li>
            <li className={theme.jobsDtlsA}>Excellent communication, time-management, and team work skills</li>
            <li className={theme.jobsDtlsA}>Proficient in the English language, any additional languages is a plus.</li>
          </ul>
          </div>: ""
        }


        <div className={theme.jobDtlsHead} onClick={() =>this.onClick5()}>Internship in Online Marketing/Social Media > </div>
        {this.state.onlineMark ?
          <div>
          <div className={theme.jobDtlsDsc}>Job Description</div>
          <div className={theme.jobDtlsQ}>
          We are growing and therefore seeking the support of young people who want to gain experience and find their vocation in a dynamic and international start-up. Depending on your experience, you will take on your own responsibilities and enjoy the freedom to implement your creative ideas. Writing your thesis may also be part of the internship. If you can identify with our values and are at ease in an international work environment, nothing will stand in the way of extending your internship to a long-term employment.
          </div>
          <div className={theme.jobDtlsDsc}>Qualifications</div>
          <ul>
            <li className={theme.jobsDtlsA}>You are a Native Speaker of English with excellent communication skills</li>
            <li className={theme.jobsDtlsA}>You are an extrovert person and at ease in a multicultural environment</li>
            <li className={theme.jobsDtlsA}>At best, you are in the advanced study period of your academic studies in Multimedia/Communications, Science of Journalism, business or economic sciences or similar studies</li>
            <li className={theme.jobsDtlsA}>You have a high affinity to new technologies and see yourself as a "digital native"</li>
            <li className={theme.jobsDtlsA}>You are reliable, open-minded, and like to work independently</li>
            <li className={theme.jobsDtlsA}>Commitment, flexibility, and goal-oriented ways of working characterize your personality</li>
            <li className={theme.jobsDtlsA}>Good level of German language skills would be a plus</li>
            <li className={theme.jobsDtlsA}>You have a passion for texts and are able to quickly identify significant contents of press releases and other specialized texts</li>
            <li className={theme.jobsDtlsA}>You are interested in international economic relations, innovation and technology trends</li>
            <li className={theme.jobsDtlsA}>You are familiar with online research, social media platforms for B2B (LinkedIn, twitter)</li>
            <li className={theme.jobsDtlsA}>Basic knowledge of dealing with Content Management Systems is of advantage</li>
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
