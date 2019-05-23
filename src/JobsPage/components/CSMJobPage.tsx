import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, toJS } from 'mobx';
import theme from '../../theme/_theme.scss';

@observer
export default class CSMJobPage extends React.Component<{},{}> {

  constructor(props) {
    super(props);
    this.onClick=this.onClick.bind(this);
  }

  state={
    csm:false
  }

  onClick(){
    this.setState(Object.assign({},this.state,{csm:!this.state.csm}));
  }

  render() {
    return (
      <div>
        <img className={theme.bannerImgEvent1} src="https://www.globalsuccess-club.net/documents/20589/52387/image_digital_1860x640.jpg/b4e530bf-543e-49fc-83c7-463f04be66ee?t=1524039593148" />
        <img className={theme.bannerImgEvent2} src="https://www.globalsuccess-club.net/documents/20589/52714/image_digital_640x358.jpg/40ed94d2-8243-4ff9-b6de-db898ba81b64?t=1524039615228" />
        <div className={theme.jobDtlsHead} onClick={() =>this.onClick()}>Customer Success Manager ></div>
        {this.state.csm ?
          <div>
          <div className={theme.jobDtlsDsc}>Job Description</div>
          <div className={theme.jobDtlsQ}>
            Are you an energetic person with a desire to interact and foster customer relationships? Do you enjoy analyzing
            data and implementing it in an efficient and effective way? At allymatch, you can be part of a growing start up
            environment that will give you a chance to utilize your skills to their full potential. We are looking for a
            charismatic CSM who will assist in the development and nurturing of user relationships. The Customer Success
            Manager will play a key role in helping to increase our user base. If you like working in friendly multicultural
            environments and would like to grow with us, we look forward receiving your application!
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
            <li className={theme.jobsDtlsA}>Bachelors or Master’s Degree in business, communications, international relations, or relevant fields</li>
            <li className={theme.jobsDtlsA}>Detail-oriented with strong communication and collaboration skills, including the ability to effectively communicate and influence at the C-level</li>
            <li className={theme.jobsDtlsA}>Proficient in Microsoft Office Suite, specifically Excel and PowerPoint</li>
            <li className={theme.jobsDtlsA}>Knowledge of customer service practices</li>
            <li className={theme.jobsDtlsA}>Technical aptitude and ability to learn software programs</li>
            <li className={theme.jobsDtlsA}>Ability to work in a fast-paced, start-up, results-oriented environment</li>
            <li className={theme.jobsDtlsA}>Excellent interpersonal skills</li>
            <li className={theme.jobsDtlsA}>Creative thinker with the ability to troubleshoot issues quickly and effectively</li>
            <li className={theme.jobsDtlsA}>Proficient in Data Analyzing</li>
            <li className={theme.jobsDtlsA}>Excellent customer service skills</li>
            <li className={theme.jobsDtlsA}>Strong English and German Skills, other languages are a bonus</li>
          </ul>
          </div>: ""
        }

        <div className={theme.footerDiv}>
        <div className="row">
        <div className="col-md-4 col-sm-12 col-xs-12">
            <a href="/#/termsConditions" target="_blank" className={theme.link}><span className={theme.generalFont}>Terms & Conditions</span></a> <span> | </span>
            <a href="/#/privacyPolicy" target="_blank" className={theme.link}><span className={theme.generalFont}>Privacy Policy</span></a> <span> | </span>
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
        </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
