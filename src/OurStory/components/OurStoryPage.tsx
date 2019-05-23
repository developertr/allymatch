import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, toJS } from 'mobx';
import theme from '../../theme/_theme.scss';

@observer
export default class OurStoryPage extends React.Component<{},{}> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <img className={theme.bannerImgEvent1} src="https://www.globalsuccess-club.net/documents/20589/52387/image_our-story_1860px.jpg/b65813c1-7775-4b16-a4e1-6e8962321f4f?t=1524041756044" />
          <img className={theme.bannerImgEvent2} src="https://www.globalsuccess-club.net/documents/20589/52714/image_our-story_640px.jpg/99c44ade-cc0d-4e17-b720-7fde6d757c37?t=1524041722478" />
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className={theme.rowImg3Txt}>This simple question led to the sparking idea of allymatch.</div>
                </div>
                <div className="col-md-3">
                    <div className={theme.ourStoryLeftBox}>
                        Innovation potential which lies dormant in universities, research institutes and companies could be unlocked with an easier way to find collaboration partners globally.
                    </div>
                </div>
                <div className="col-md-9">
                    <div className={theme.ourStoryRightBox}>
                        <p>Innovative companies are always looking for new international partners to grow
                            their businesses beyond borders or for their next innovation idea. Searching for
                            the right international partners is traditionally done through personal and business
                            networks or at market places like trade shows. What if startups and SME’s lack networks
                            who can efficiently help them? They must spend a lot of time and money scouring the world
                            for their needs while many of them don’t even have the resources (time and money) to do so.
                            Potential for new growth and jobs through innovation would be higher if new entrants and
                            SMEs could have a better (unbiased), quicker and easier access to the global markets.
                            Also, established businesses can unfold their innovation potential and focus on their core
                            business if they could find international partners more efficiently.</p>
                        <br/>
                        <p>
                            Understanding the need for easily finding the right international partners in a fast-paced
                            technological environment, gave allymatch founder & CEO Işınay Kemmler the inspiration to
                            create a brand new digital matchmaking platform which could make innovation possible by
                            bringing the innovators together for collaboration – without the hassle and without the
                            expense.
                        </p>
                    </div>
                </div>
            </div>
        </div>
          <div className="clearfix">&nbsp;</div>
        <div className={theme.videoRow}>
          <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-money.gif/c71fd8af-d06f-4efa-b682-aa7c56d6c988?t=1522138865105"/>
          <div className={theme.descHeadingNew}>Interested in learning more?</div>
        <div className={theme.themeButtonArea}>
            <a target="_blank" href="https://donar.messe.de/exhibitor/hannovermesse/2018/T261200/allymatch-company-brochure-eng-552256.pdf" className={theme.themeWhiteButton}>
                Read our digital brochure
            </a>
        </div>
          <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/51325/lightbulb-2.gif/e5a38b84-fe00-4ac5-81d6-4bcd7a65168e?t=1523960212547"/>
          <div className={theme.descHeadingNew}>Think you'd make a good fit to join our innovation factory?</div>
            <div className={theme.themeButtonArea}>
                <a href="/#/jobs" className={theme.themeWhiteButton}>Take a look at our Career Page</a>
            </div>
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
