import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, toJS } from 'mobx';
import theme from '../../theme/_theme.scss';

@observer
export default class JobsPage extends React.Component<{},{}> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className={theme.bannerImgEvent1} src="https://www.globalsuccess-club.net/documents/20589/52387/image_digital_1860x640.jpg/b4e530bf-543e-49fc-83c7-463f04be66ee?t=1524039593148" />
        <img className={theme.bannerImgEvent2} src="https://www.globalsuccess-club.net/documents/20589/52714/image_digital_640x358.jpg/40ed94d2-8243-4ff9-b6de-db898ba81b64?t=1524039615228" />

        <div className={theme.rowImg3}>
          <div className="row" style={{ margin: '0px'}}>
            <div className={theme.rowImg3Txt}>A Digital Solution to an Age Old Problem</div>
            <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-smartphone.gif/a8ee62ad-08ae-46bc-b97e-2109e091cde1?t=1522138866124"/>
            <div className={theme.jobsL2Txt1}>
              allymatch is a smart B2B match making platform changing the way companies find international
              partnerships in the manufacturing industry- instantly, anywhere, anytime. Located in Germany,
              the heart of advanced manufacturing, we make innovation possible by bringing partners together
              for collaboration.
            </div>
            <div className={theme.jobsL2Txt2}>
              Creating something new which was never built before, requires a team of dedicated and passionate
               people who share all the same mission – changing the future of the B2B world.
            </div>
          </div>
        </div>

        <div className={theme.videoRow}>
          <div className={theme.descHeadingJobs}>More than Just a Place to Work</div>
          <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/51325/lightbulb-2.gif/e5a38b84-fe00-4ac5-81d6-4bcd7a65168e?t=1523960212547"/>
          <div className={theme.jobsL3Txt1}>
              At allymatch, we’re always on the search for
              highly motivated individuals that aren’t just
              looking for a job but a passion. We welcome
              team members who are eager to build
              something brand new with us and would be
              proud to join our innovation factory. We are
              ambitious, willing to learn continuously,
              supportive, comfortable in a multi-cultural
              environment, trustworthy, and passionate
              about what we do. Seniority and experience is
              not the most important qualification- but being
              a determined and dedicated individual.
          </div>
        </div>

        <div className={theme.rowImg3}>
          <div className={theme.rowImg3Txt}>System for Success</div>
          <div className="row" style={{margin: '0px'}}>
            <div className="col-xs-12 col-md-6 col-sm-12">
              <div className={theme.rowImg3_ABig}>We’re Problem Solvers and Motivators</div>
              <div className={theme.jobsL4Txt}>
                We pride ourselves on being motivated and
                supportive individuals. You can expect frequent
                brain storm sessions and team meetings in which
                all opinions will be heard and appreciated.
                Whether it be creating new and exciting features
                or problem solving – we work together and
                recognize that everyone contributes in their own
                ways.
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-12">
              <div className={theme.rowImg3_ABig}>We’re Open & Appreciate Curiosity</div>
              <div className={theme.jobsL4Txt}>
                We know that for a productive work environment
                it’s important to ask questions. At allymatch your
                curiosity for knowledge is not just tolerated but
                cherished. You can feel at ease knowing that you
                can freely communicate with coworkers or upper
                level management about ideas, job tasks, or
                concerns – giving you an excellent opportunity to
                learn and grow.
              </div>
            </div>
          </div>
          <div className="row" style={{margin: '0px'}}>
            <div className="col-xs-12 col-md-6 col-sm-12">
              <div className={theme.rowImg3_ABig}>Diversity is in Our Nature</div>
              <div className={theme.jobsL4Txt}>
                Being a company focused on international
                collaboration, we pride ourselves on having an
                international team. At allymatch, our employees
                are from all backgrounds, all over the world, and
                excel working in a multi-cultural environment.
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-12">
              <div className={theme.rowImg3_ABig}>We’re all on the Same Team</div>
              <div className={theme.jobsL4Txt}>
                We are not just ‘marketers’ and ‘developers’ but
                rather one part of a very motivated machine. We
                recognize that the best innovation requires
                different personalities and skill sets all coming
                together to form one power team.
              </div>
            </div>
          </div>
          <br></br><br></br>
        </div>

        <div className={theme.jobsRow}>
          <div className={theme.descHeadingJobs}>We are looking for innovators in...</div>
          <div className="row" style={{margin: '0px', paddingLeft: '30px', paddingRight: '30px'}}>
            <div className="col-xs-12 col-md-4 col-sm-12" style={{padding: '0px'}}>
              <a href="/#/csmJobs" target="_blank"><img className={theme.jobsL5Img} src="https://www.globalsuccess-club.net/documents/20589/53477/customer-2.jpg/e9558de3-11a9-4893-bf42-a8ce156f45d6?t=1524046192432"/></a>
              {/*<div className={theme.jobsL5Txt}>Customer Success Management</div>*/}
            </div>
            <div className="col-xs-12 col-md-4 col-sm-12" style={{padding: '0px'}}>
              <a href="/#/sdJobs" target="_blank"><img className={theme.jobsL5Img} src="https://www.globalsuccess-club.net/documents/20589/53477/software-2.jpg/7be7c8fc-ec52-44ec-bfa6-6cf29c298835?t=1524046201833"/></a>
              {/*<div className={theme.jobsL5Txt}>Software Development</div>*/}
            </div>
            <div className="col-xs-12 col-md-4 col-sm-12" style={{padding: '0px'}}>
              <a href="/#/meJobs" target="_blank"><img className={theme.jobsL5Img} src="https://www.globalsuccess-club.net/documents/20589/53477/marketing-2.jpg/0c79a314-8fee-4119-ac22-d4ccda8f07e3?t=1524046196298"/></a>
              {/*<div className={theme.jobsL5Txt}>Marketing & Events</div>*/}
            </div>
          </div>
          <div className="row" style={{margin: '0px', paddingLeft: '30px', paddingRight: '30px'}}>
            <div className="col-xs-12 col-md-4 col-sm-12" style={{padding: '0px'}}>
              <a href="/#/pmsJobs" target="_blank"><img className={theme.jobsL5Img} src="https://www.globalsuccess-club.net/documents/20589/53477/partnership-2.jpg/8c6333f7-841f-4f3a-baa8-56c2d6438916?t=1524046199883"/></a>
              {/*<div className={theme.jobsL5Txt}>Partnership Management & Sales</div>*/}
            </div>
            <div className="col-xs-12 col-md-4 col-sm-12" style={{padding: '0px'}}>
              <a href="/#/iyiJobs" target="_blank"><img className={theme.jobsL5Img} src="https://www.globalsuccess-club.net/documents/20589/53477/innovators-2.jpg/5b0411ba-476a-4dd8-8bb3-4941fd51e8b2?t=1524046194263"/></a>
              {/*<div className={theme.jobsL5Txt}>Internships for young innovators</div>*/}
            </div>
            <div className="col-xs-12 col-md-4 col-sm-12" style={{padding: '0px'}}>
              <a href="/#/otherJobs" target="_blank"><img className={theme.jobsL5Img} src="https://www.globalsuccess-club.net/documents/20589/53477/other-2.jpg/cd8dbbb0-498f-4369-9f39-e211fe9a0ed3?t=1524046198099"/></a>
              {/*<div className={theme.jobsL5Txt}>Other</div>*/}
            </div>
          </div>
        </div>

        <div className={theme.jobsRow}>
          <img className={theme.bannerL7} src="https://www.globalsuccess-club.net/documents/20589/51325/worldmap_1860px.jpg/7b1dede9-9869-4e47-a9db-e0c113cf3bd1?t=1522138876165"/>
          <img className={theme.bannerL7_2Jobs} src="https://www.globalsuccess-club.net/documents/20589/51941/white.gif/d190c4ef-dad8-4a7f-af39-c57b5df9c5f3?t=1523523958303"/>
          <div className={theme.jobsL6Txt}>
            <div className={theme.jobsL6Txt1}>How to Apply</div>
            <div className={theme.jobsL6Txt2}>Let us know why you would fit our team!</div>
            <div className={theme.jobsL6Txt3}> Interested in learning more?  <br></br><br></br>
            Send an email with your Cover Letter and CV to our Innovators
            Procurement Department for more information.</div>
            <div className={theme.jobsL6Txt4}>innovationfactory@allymatch.com</div><br></br><br></br>
          </div>
        </div>


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
