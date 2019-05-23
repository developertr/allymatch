import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, toJS } from 'mobx';
import theme from '../../theme/_theme.scss';

@observer
export default class PMSJobPage extends React.Component<{},{}> {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  state={
    pm:false
  }

  onClick(){
    this.setState(Object.assign({},this.state,{pm:!this.state.pm}));
  }

  render() {
    return (
      <div>
        <img className={theme.bannerImgEvent1} src="https://www.globalsuccess-club.net/documents/20589/52387/image_digital_1860x640.jpg/b4e530bf-543e-49fc-83c7-463f04be66ee?t=1524039593148" />
        <img className={theme.bannerImgEvent2} src="https://www.globalsuccess-club.net/documents/20589/52714/image_digital_640x358.jpg/40ed94d2-8243-4ff9-b6de-db898ba81b64?t=1524039615228" />
        <div className={theme.jobDtlsHead} onClick={() =>this.onClick()}>Partnership Manager ></div>
        {this.state.pm ?
          <div>
          <div className={theme.jobDtlsDsc}>Job Description</div>
          <div className={theme.jobDtlsQ}>
            We are looking for a Business Development Manager to join our growing team. Daily tasks will include building,
            launching, and cultivating long-lasting partnerships. The ideal candidate will have prior B2B knowledge and/or
            experience in the manufacturing industry. He/she will have experience in locating and proposing potential business
            deals by contacting potential partners, and discovering and exploring opportunities. This includes screening
            potential business deals by analyzing and researching market strategies. The business development manager will
            also be in charge of developing negotiating strategies and positions, closing new business deals, and enhancing
            the reputation of allymatch.
          </div>
          <div className={theme.jobDtlsDsc}>Skills & Qualifications</div>
          <ul>
            <li className={theme.jobsDtlsA}>5+ years of experience; Experience in B2B and/or manufacturing industry is a plus</li>
            <li className={theme.jobsDtlsA}>Strong communication and interpersonal skills</li>
            <li className={theme.jobsDtlsA}>Confident in strategic planning, analyzing new markets, and researching potential business partners/deals</li>
            <li className={theme.jobsDtlsA}>Have strong market knowledge in B2B and/or Manufacturing Industry</li>
            <li className={theme.jobsDtlsA}>Professional and protects organizations values</li>
            <li className={theme.jobsDtlsA}>Must have a Masters degree in International business, economics, marketing, or a similar field of study</li>
            <li className={theme.jobsDtlsA}>Social media marketing experience is a plus</li>
            <li className={theme.jobsDtlsA}>Applicant must be fluent in English and German. Additional languages are a bonus</li>
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
