import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, toJS } from 'mobx';
import theme from '../../theme/_theme.scss';

@observer
export default class MEJobPage extends React.Component<{},{}> {

  constructor(props) {
    super(props);
    this.onClick=this.onClick.bind(this);
    this.onClick2 = this.onClick2.bind(this);
  }

  state={
    me:false,
    ca:false
  }

  onClick(){
    this.setState(Object.assign({},this.state,{me:!this.state.me}));
  }

  onClick2(){
    this.setState(Object.assign({},this.state,{ca:!this.state.ca}));
  }

  render() {
    return (
      <div>
        <img className={theme.bannerImgEvent1} src="https://www.globalsuccess-club.net/documents/20589/52387/image_digital_1860x640.jpg/b4e530bf-543e-49fc-83c7-463f04be66ee?t=1524039593148" />
        <img className={theme.bannerImgEvent2} src="https://www.globalsuccess-club.net/documents/20589/52714/image_digital_640x358.jpg/40ed94d2-8243-4ff9-b6de-db898ba81b64?t=1524039615228" />
        <div className={theme.jobDtlsHead} onClick={() =>this.onClick()}>Head of International Marketing ></div>
        {this.state.me ?
          <div>
          <div className={theme.jobDtlsDsc}>Job Description</div>
          <div className={theme.jobDtlsQ}>
            We are looking for an experienced marketing professional to join our growing team. Our ideal candidate will
            have 8+ years of experience in marketing and/or business. As the Head of International Marketing you will be
            in charge of developing and implementing strategic international marketing plans for allymatch. Candidates will
            have a strong understanding of sales and marketing in a global environment and work with all aspects of marketing
            including market research, product development, sales, and advertising. We are looking for somebody who is outgoing,
            professional, and feels confident in their leadership skills. As the key contributor to the marketing team it will
            be your duty to coordinate between our various market heads in our focus countries.
          </div>
          <div className={theme.jobDtlsDsc}>Responsibilities</div>
          <ul>
            <li className={theme.jobsDtlsA}>Analyze user data to determine the exact needs/pains of our customers</li>
            <li className={theme.jobsDtlsA}>Communicate with Users (or potential users) to learn more about their needs and reply to their inquiries</li>
            <li className={theme.jobsDtlsA}>Work collaboratively with the Communications team to increase our brand awareness</li>
            <li className={theme.jobsDtlsA}>Partner closely with other cross-functional team members to translate business needs and product requirements into new solutions for customers</li>
          </ul>
          <div className={theme.jobDtlsDsc}>Qualifications</div>
          <ul>
            <li className={theme.jobsDtlsA}>8+ years of experience in Marketing, International Business, etc. Experience in B2B and/or manufacturing industry is a plus</li>
            <li className={theme.jobsDtlsA}>Must have a Master’s degree in International Business, economics, marketing or a related field</li>
            <li className={theme.jobsDtlsA}>Strong leadership, communication, interpersonal, and analytical skills</li>
            <li className={theme.jobsDtlsA}>Must be a team player and able to motivate employees on all levels</li>
            <li className={theme.jobsDtlsA}>Ability to adapt to a wide variety of environments and cultures</li>
            <li className={theme.jobsDtlsA}>Confidence in generating leads by identifying potential global markets</li>
            <li className={theme.jobsDtlsA}>Willing to build company awareness by participating in trade shows and other events</li>
            <li className={theme.jobsDtlsA}>Experience in maximizing international market share and profits</li>
            <li className={theme.jobsDtlsA}>Prior experience in leadership role</li>
            <li className={theme.jobsDtlsA}>Wide degree of creativity and confidence in communicating with high-level executives in various countries</li>
            <li className={theme.jobsDtlsA}>Must be fluent in English and German. Additional languages are a plus!</li>
          </ul>
          </div>: ""
        }

        <div className={theme.jobDtlsHead} onClick={() =>this.onClick2()}>Communications Assistant ></div>
        {this.state.ca ?
          <div>
          <div className={theme.jobDtlsDsc}>Job Description</div>
          <div className={theme.jobDtlsQ}>
            Are you a young professional looking to gain more experience in communications?
            We are looking to expand our growing communications team. As a communication assistant you will
            support our team by helping to implement communications projects and strategies, drafting and
            editing materials, and writing communications copy. We are searching for somebody who is passionate
            about communications and has an understanding of how to identify various communications channels,
            partners, and potential media relationships. He/she will assist the team in research and execution
            of communications plan, advertising, and social media. Our ideal candidate will preferably have
            experience in corporate and media relations and is eager to expand their knowledge. Additionally,
            applicants should have a desire to work in B2B communications within the manufacturing industry.
          </div>
          <div className={theme.jobDtlsDsc}>Skills & Qualifications</div>
          <ul>
            <li className={theme.jobsDtlsA}>Bachelor’s degree in marketing, communications, business, or a related field of study</li>
            <li className={theme.jobsDtlsA}>Proven experience as a communications assistant</li>
            <li className={theme.jobsDtlsA}>Understanding of media and corporate relations, and digital media strategies</li>
            <li className={theme.jobsDtlsA}>Proficient in MS office. Content management systems are a plus</li>
            <li className={theme.jobsDtlsA}>Strong research and editing skills</li>
            <li className={theme.jobsDtlsA}>Excellent communication skills and strong attention to detail</li>
            <li className={theme.jobsDtlsA}>Social media marketing experience is a plus</li>
            <li className={theme.jobsDtlsA}>Must be fluent in English</li>
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
