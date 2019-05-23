import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, toJS } from 'mobx';
import theme from '../../theme/_theme.scss';

@observer
export default class EventsPage extends React.Component<{},{}> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className={theme.bannerImgEvent1} src="https://www.globalsuccess-club.net/documents/20589/52387/image_hannover_1860x640.jpg/00b8627f-b371-4b2b-84b3-9173f729aa00?t=1523953311659" />
        <img className={theme.bannerImgEvent2} src="https://www.globalsuccess-club.net/documents/20589/52714/image_hannover_640x358.jpg/c41dbf90-f91b-4ebd-98c5-95c810a58232?t=1523953328410" />
        <div className={theme.jobDtlsHead}>Hannover Messe 2018</div>
        <div className={theme.eventTxt}>
          <div className={theme.jobsL6Txt4}>Location: <span className={theme.eventTxt2}>Hannover, Germany</span></div><br></br><br></br>
          <div className={theme.jobsL6Txt4}>Dates: <span className={theme.eventTxt2}>April 23 - 27, 2018</span></div><br></br><br></br>
          <div className={theme.jobsL6Txt4}>Booth: <span className={theme.eventTxt2}>Hall 2 B40 </span></div><br></br><br></br>
          <div className={theme.jobsL6Txt4}>About: <span className={theme.eventTxt2}>We are excited to be attending Hannover Messe to launch allymatch. We will be there in partner with Research & Innovation Rhineland-Palatinate in the hall of Research and Technology.</span></div><br></br><br></br>
          <div className={theme.jobsL6Txt4}>Special Offer: <span className={theme.eventTxt2}>Do you belong to the 58% of trade show participants searching for partnerships? We have a special offer for Hannover Messe Exhibitors and Attendees to celebrate our launch at the tradeshow. Download allymatch4events on April 23, free of charge, to find your partners among over 5,000 exhibitors and verified attendees. Exhibitors have been pre-verified, just register with your company email address and you will receive your login credentials automatically! Visitors will be verified upon registration, please allow us a few hours. Go To Registration Page <a href="/#/registerUserEvent" style={{color:'#11a3ab'}}>here</a></span></div><br></br><br></br>
          <div className={theme.jobsL6Txt4}>Learn More: <span className={theme.eventTxt2}>Visit The Hannover Messe Website <a href="http://www.hannovermesse.de/exhibitor/allymatch/T261200"><span className={theme.jobsL6Txt4} target='_blank'>here</span></a></span></div><br></br><br></br>
        </div>

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
