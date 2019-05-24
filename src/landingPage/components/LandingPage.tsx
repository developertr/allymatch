import React, { Component } from 'react'
import * as ReactDOM from 'react-dom';
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import { Button } from 'react-toolbox';
import { Card, CardMedia } from 'react-toolbox';
import theme from '../../theme/_theme.scss';

declare var require: any
var Carousel = require('react-bootstrap/lib/Carousel');
var ScrollAnimation = require('react-animate-on-scroll');
var scrollTo = require('scroll-to');

@observer
export default class LandingPage extends React.Component<{}, {}> {

  constructor(props) {
    super(props);
    this.handleScrollToElement1 = this.handleScrollToElement1.bind(this);
    this.handleScrollToElement2 = this.handleScrollToElement2.bind(this);
    this.handleScrollToElement3 = this.handleScrollToElement3.bind(this);
    this.handleScrollToElement4 = this.handleScrollToElement4.bind(this);
    this.handleScrollToElement5 = this.handleScrollToElement5.bind(this);
    this.handleScrollToElement6 = this.handleScrollToElement6.bind(this);
  }

  handleScrollToElement1() {
  var testNode = ReactDOM.findDOMNode(this.refs['answer1']).getBoundingClientRect();
  if(testNode){
    this.scrollFunction(testNode);
  }
}

handleScrollToElement2() {
  var testNode = ReactDOM.findDOMNode(this.refs['answer2']).getBoundingClientRect();
  if(testNode){
    this.scrollFunction(testNode);
  }
}

handleScrollToElement3() {
  var testNode = ReactDOM.findDOMNode(this.refs['answer3']).getBoundingClientRect();
  if(testNode){
    this.scrollFunction(testNode);
  }
}

handleScrollToElement4() {
  var testNode = ReactDOM.findDOMNode(this.refs['answer4']).getBoundingClientRect();
  if(testNode){
    this.scrollFunction(testNode);
  }
}

handleScrollToElement5() {
  var testNode = ReactDOM.findDOMNode(this.refs['answer5']).getBoundingClientRect();
  if(testNode){
    this.scrollFunction(testNode);
  }
}

handleScrollToElement6() {
  var testNode = ReactDOM.findDOMNode(this.refs['answer6']).getBoundingClientRect();
  if(testNode){
    this.scrollFunction(testNode);
  }
}

scrollFunction(node) {
  scrollTo(0,node.top);
}

render() {
    return (
      <div>

      <Carousel
          interval={17000}
          controls={false}
          indicators={true}
          pauseOnHover={false}
        >
        {/* ---------------   1st Banner --------------------  */}
          <Carousel.Item>
          <div className={theme.bannerFull}>
            <img className={theme.bannerImg} src="https://www.globalsuccess-club.net/documents/20589/52387/image-6.jpg/8f2551d7-01f6-4ca8-8587-d277a6ae8999?t=1523028005597" />
            <img className={theme.bannerGrey} src="https://www.globalsuccess-club.net/documents/20589/52482/quest-1.png/1a3a1b99-b3b3-419a-af34-8dda6963e916?t=1523028038513" />
            <a href="#" onClick={this.handleScrollToElement1}><img className={theme.bannerBlue}  src="https://www.globalsuccess-club.net/documents/20589/52577/answer-1.png/79e64f48-acd8-449d-aeb4-0864a29d4bad?t=1523028069761" /></a>
          </div>
          <div  className={theme.bannerMob}>
            <img className={theme.bannerImg} src="https://www.globalsuccess-club.net/documents/20589/52714/image-6b.jpg/e84bc3c8-2b78-4289-86c4-a3d5cd41b149?t=1523028162502" />
            <img className={theme.bannerGrey1} src="https://www.globalsuccess-club.net/documents/20589/52719/question-1b.png/55cd60e8-4c17-4968-aba3-218473de4344?t=1523028188484" />
            <a href="#" onClick={this.handleScrollToElement1}><img className={theme.bannerBlue1} src="https://www.globalsuccess-club.net/documents/20589/52724/answer-1b.png/cc50986a-89e8-4225-8260-a1a33d814c97?t=1523028206371" /></a>
          </div>
          </Carousel.Item>

          {/* ---------------   2nd Banner --------------------  */}
          <Carousel.Item>
            <div className={theme.bannerFull}>
              <img className={theme.bannerImg} src="https://www.globalsuccess-club.net/documents/20589/52387/image-5.jpg/daa08871-5c02-4d60-80e6-20fcfbd2cba8?t=1523028001465" />
              <img className={theme.bannerGrey} src="https://www.globalsuccess-club.net/documents/20589/52482/quest-2.png/2359cbb6-254a-4bb7-9df0-2efe36a0f0a3?t=1523028039196" />
              <a href="#" onClick={this.handleScrollToElement2}><img className={theme.bannerBlue} src="https://www.globalsuccess-club.net/documents/20589/52577/answer-2.png/a56e33b2-7c55-42d2-b04c-8f16a4aa3c81?t=1523028071414" /></a>
            </div>
            <div  className={theme.bannerMob}>
              <img className={theme.bannerImg} src="https://www.globalsuccess-club.net/documents/20589/52714/image-5b.jpg/2286b7bb-a3f7-4edd-b16e-9135ecc65c9a?t=1523028161551" />
              <img className={theme.bannerGrey1} src="https://www.globalsuccess-club.net/documents/20589/52719/quest-2b.png/5ab3d5d6-59fc-40fe-ae26-e82abd6beeaa?t=1523028186096" />
              <a href="#" onClick={this.handleScrollToElement2}><img className={theme.bannerBlue1} src="https://www.globalsuccess-club.net/documents/20589/52724/answer-2b.png/cc458f74-a369-4b85-9349-ae95d0e28a3b?t=1523028207080" /></a>
            </div>
          </Carousel.Item>


          {/* ---------------   3rd Banner --------------------  */}
          <Carousel.Item>
            <div className={theme.bannerFull}>
              <img className={theme.bannerImg} src="https://www.globalsuccess-club.net/documents/20589/52387/image-7_1860px.jpg/61c70e89-d98a-48c6-be57-3ee016bbdbc1?t=1523951992332" />
              <img className={theme.bannerGrey} src="https://www.globalsuccess-club.net/documents/20589/52482/quest-3.png/ad1169c8-4d32-4e40-8bc9-bbb90ed83c35?t=1523028039881" />
              <a href="#" onClick={this.handleScrollToElement3}><img className={theme.bannerBlue} src="https://www.globalsuccess-club.net/documents/20589/52577/answer-3.png/3614b2a3-d7d2-44bb-b633-a2cb57ee6fde?t=1523028072733" /></a>
            </div>
            <div  className={theme.bannerMob}>
              <img className={theme.bannerImg} src="https://www.globalsuccess-club.net/documents/20589/52714/image-7_640px.jpg/0fddb675-5a1b-4906-b960-cce4e7dc8d32?t=1523952159194" />
              <img className={theme.bannerGrey1} src="https://www.globalsuccess-club.net/documents/20589/52719/quest-3b.png/11fb1d84-ec10-4243-9a5a-4497fd174e9e?t=1523028186540" />
              <a href="#" onClick={this.handleScrollToElement3}><img className={theme.bannerBlue1} src="https://www.globalsuccess-club.net/documents/20589/52724/answer_3b.png/70620dda-19b4-476b-948d-64424456a86d?t=1523028203658" /></a>
            </div>
          </Carousel.Item>


          {/* ---------------   4th Banner --------------------  */}
          <Carousel.Item>
            <div className={theme.bannerFull}>
              <img className={theme.bannerImg} src="https://www.globalsuccess-club.net/documents/20589/52387/image-2.jpg/39a1817d-3f49-43f3-a6a1-95a6ffb11edb?t=1523027991545" />
              <img className={theme.bannerGrey} src="https://www.globalsuccess-club.net/documents/20589/52482/quest-4.png/87268114-f962-4d52-a67e-888ae2080f43?t=1523028040551" />
              <a href="#" onClick={this.handleScrollToElement4}><img className={theme.bannerBlue} src="https://www.globalsuccess-club.net/documents/20589/52577/answer-4.png/6e1d1542-75a5-4ffb-9a6a-57a4a4e58273?t=1523028074101" /></a>
            </div>
            <div  className={theme.bannerMob}>
              <img className={theme.bannerImg} src="https://www.globalsuccess-club.net/documents/20589/52714/image-2b.jpg/bd2302a3-563d-440c-806e-0f8be63574b2?t=1523028158676" />
              <img className={theme.bannerGrey1} src="https://www.globalsuccess-club.net/documents/20589/52719/quest-4b.png/03de47be-9246-4af0-b21e-4d281265dbc2?t=1523028186991" />
              <a href="#" onClick={this.handleScrollToElement4}><img className={theme.bannerBlue1} src="https://www.globalsuccess-club.net/documents/20589/52724/answer_4b.png/fee2cb1d-1d66-477d-9777-696fb1258163?t=1523028204340" /></a>
            </div>
          </Carousel.Item>


          {/* ---------------   5th Banner --------------------  */}
          <Carousel.Item>
          <div className={theme.bannerFull}>
            <img className={theme.bannerImg} src="https://www.globalsuccess-club.net/documents/20589/52387/image-1.jpg/e09b7fc4-d7d1-48c1-ae75-faf5bb1d1351?t=1523027987657" />
            <img className={theme.bannerGrey} src="https://www.globalsuccess-club.net/documents/20589/52482/quest-5.png/a3d683c8-ca55-4363-a701-692b68e82947?t=1523028041214" />
            <a href="#" onClick={this.handleScrollToElement5}><img className={theme.bannerBlue} src="https://www.globalsuccess-club.net/documents/20589/52577/answer-5.png/6c8ea0f0-1c7d-47ba-8d0d-99688f2f3c33?t=1523028075273" /></a>
          </div>
          <div  className={theme.bannerMob}>
            <img className={theme.bannerImg} src="https://www.globalsuccess-club.net/documents/20589/52714/image-1b.jpg/b2a6ce5a-ca72-4f13-aa76-dc9f8d341df2?t=1523028157506" />
            <img className={theme.bannerGrey1} src="https://www.globalsuccess-club.net/documents/20589/52719/quest-5b.png/9baa368e-32c8-4445-9041-ddc7b7ab46ed?t=1523028187456" />
            <a href="#" onClick={this.handleScrollToElement5}><img className={theme.bannerBlue1} src="https://www.globalsuccess-club.net/documents/20589/52724/answer_5b.png/85926d94-7a52-41ba-8478-904e557ee3f8?t=1523028205009" /></a>
          </div>
          </Carousel.Item>


          {/* ---------------   6th Banner --------------------  */}
          <Carousel.Item>
            <div className={theme.bannerFull}>
              <img className={theme.bannerImg} src="https://www.globalsuccess-club.net/documents/20589/52387/image-3.jpg/87e28e24-5e1f-4d19-a49e-36566a365ab1?t=1523027994675" />
              <img className={theme.bannerGrey} src="https://www.globalsuccess-club.net/documents/20589/52482/quest-6.png/53b78f41-18c5-44bf-90e4-2d412d62cf27?t=1523028041924" />
              <a href="#" onClick={this.handleScrollToElement6}><img className={theme.bannerBlue} src="https://www.globalsuccess-club.net/documents/20589/52577/answer-6.png/ed811f47-1b0d-42fc-a9a4-6d7aa985447d?t=1523523695182" /></a>
            </div>
            <div  className={theme.bannerMob}>
              <img className={theme.bannerImg} src="https://www.globalsuccess-club.net/documents/20589/52714/image-3b.jpg/ffc792fb-6394-437b-b0e1-20f470dbd3ad?t=1523028159632" />
              <img className={theme.bannerGrey1} src="https://www.globalsuccess-club.net/documents/20589/52719/quest-6b.png/0c9991a1-d3e1-4c75-9936-7e4b3005b40a?t=1523028187978" />
              <a href="#" onClick={this.handleScrollToElement6}><img className={theme.bannerBlue1} src="https://www.globalsuccess-club.net/documents/20589/52724/answer_6b.png/bf62c4e3-8b24-45cb-b486-39644617f4aa?t=1523523715316" /></a>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className={theme.ourStoryText}>
        <div className="row">
          <div className={theme.pressKitMargin}>
            <div className={theme.rowImg3Txt}>Imagine watching your business grow by ...</div>
            <div className="col-xs-12 col-md-4 col-sm-12">
              <img className={theme.rowImg3_1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-hands.gif/53b6ad4b-35b3-4ca9-a4aa-e2a46778e217?t=1522138864108"/>
              <br></br><span className={theme.rowImg3_Txt}>Finding <br></br>international partnerships<br></br> easily</span>
            </div>
            <div className="col-xs-12 col-md-4 col-sm-12">
              <img className={theme.rowImg3_1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-bulb.gif/c8f16065-2219-4f66-8938-2e8bf6aaf190?t=1522138862135"/>
              <br></br><span className={theme.rowImg3_Txt}>Unfolding<br></br> your full innovation <br></br>potential</span>
            </div>
            <div className="col-xs-12 col-md-4 col-sm-12">
              <img className={theme.rowImg3_1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-focus.gif/dc29949a-86ec-439a-946c-251f27f7e533?t=1522138863426"/>
              <br></br><span className={theme.rowImg3_Txt}>Focusing<br></br> on your core <br></br>business</span>
            </div>

            <div>
              <a href="/#/register"><img className={theme.buttonL2} src="https://www.globalsuccess-club.net/documents/20589/51325/cta-1.gif/d342f864-7e8d-45d9-8708-5f71df1d6945?t=1522138860630"/></a>
            </div>
          </div>
        </div>
        </div>

        <div className={theme.videoRow}>
          <br></br><br></br>
          <div className={theme.descHeadingNew} >Find your right business partner</div>
          <div className={theme.descTextNew}>allymatch is designed to help business, EDOs and research institutes succeed by finding the right partners for their next innovation or business venture. Find out more by watching the video.</div>
          <div className={theme.videoCard}>
          <img className={theme.video} src="https://www.globalsuccess-club.net/documents/20589/33068/smartphone.png/2373f36a-ed87-4dd6-ab26-218eeb9320c3?t=1494928971528"/>
          <div className="row">
            <iframe  src="https://www.youtube.com/embed/s6o9POqpCNM" allowFullScreen={true} className={theme.videoEmbed}></iframe>
          </div>
          </div>
        </div>

        <div className={theme.rowImg3}>
        <div className="row">
          <div className="col-xs-12 col-md-12 col-sm-12" ref="answer1" >
          <hr className={theme.lineL3}></hr>
            <div className="col-xs-12 col-md-5 col-sm-12">
              <div className={theme.alignRightNew}>
                <div className={theme.rowImg3_Q}>Do you believe it requires a lot of time to find <br></br> international partnerships?</div>
                <div className={theme.rowImg3_A}>Not with quick and mobile access <br></br> on allymatch.</div>
              </div>
            </div>
            <div className="col-xs-12 col-md-2 col-sm-12">
              <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-smartphone.gif/a8ee62ad-08ae-46bc-b97e-2109e091cde1?t=1522138866124"/>
            </div>
            <div className="col-xs-12 col-md-5 col-sm-12">
              <div className={theme.alignLeft}>
                <div className={theme.rowImg3_ABig}>Compatible with a busy lifestyle</div>
                <div className={theme.rowImg3_ASmall}>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Accessible anytime, anywhere<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Familiarity of a personal device<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Connect to international partners instantly<br></br>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-12 col-sm-12" ref="answer2" >
          <hr className={theme.lineL3}></hr>
            <div className="col-xs-12 col-md-5 col-sm-12">
              <div className={theme.alignRightNew}>
                <div className={theme.rowImg3_Q}>Do you believe it's difficult to find trustworthy <br></br> business connections online?</div>
                <div className={theme.rowImg3_A}>Not with verified registered users <br></br> on allymatch.</div>
              </div>
            </div>
            <div className="col-xs-12 col-md-2 col-sm-12">
              <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-verified.gif/aa2de903-d198-4dda-9350-65d9a5f9e44d?t=1522138866786"/>
            </div>
            <div className="col-xs-12 col-md-5 col-sm-12">
              <div className={theme.alignLeft}>
                <div className={theme.rowImg3_ABig}>All the right users</div>
                <div className={theme.rowImg3_ASmall}>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>User data is not for sale<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Registration selective to decision makers<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Diverse userbase with EDOs, R&D and investors<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Accurate company descriptions<br></br>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-12 col-sm-12" ref="answer3" >
          <hr className={theme.lineL3}></hr>
            <div className="col-xs-12 col-md-5 col-sm-12">
              <div className={theme.alignRightNew}>
                <div className={theme.rowImg3_Q}>Do you believe Internet platforms sacrifice <br></br> quality for quantity?</div>
                <div className={theme.rowImg3_A}>Not with authentic and relevant <br></br> matches on allymatch.</div>
              </div>
            </div>
            <div className="col-xs-12 col-md-2 col-sm-12">
              <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-shakehands.gif/db0c1cf7-dc46-4f21-9e03-389d8cafe81f?t=1522138865788"/>
            </div>
            <div className="col-xs-12 col-md-5 col-sm-12">
              <div className={theme.alignLeft}>
                <div className={theme.rowImg3_ABig}>Quality over quantity </div>
                <div className={theme.rowImg3_ASmall}>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>User information is verified and secure <br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Only active users are on the platform <br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Platform specific to looking for partners <br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Only highly relevant matches are recommended <br></br>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-12 col-sm-12" ref="answer4" >
          <hr className={theme.lineL3}></hr>
            <div className="col-xs-12 col-md-5 col-sm-12">
              <div className={theme.alignRightNew}>
                <div className={theme.rowImg3_Q}>Do you believe confidential information is <br></br> demanded for B2B matching?</div>
                <div className={theme.rowImg3_A}>Not with the privacy provided to <br></br> you by allymatch.</div>
              </div>
            </div>
            <div className="col-xs-12 col-md-2 col-sm-12">
              <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-safe.gif/5898bf4f-4216-4d05-a742-94c2cd54e9d7?t=1522138865448"/>
            </div>
            <div className="col-xs-12 col-md-5 col-sm-12">
              <div className={theme.alignLeft}>
                <div className={theme.rowImg3_ABig}>Safeguard innovative ideas</div>
                <div className={theme.rowImg3_ASmall}>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Basic profile only shown if it meets an inquiry<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Only registered users can create inquiries<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>User & company data is seen only by accepted match<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Users decide what to share<br></br>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-md-12 col-sm-12" ref="answer5" >
          <hr className={theme.lineL3}></hr>
            <div className="col-xs-12 col-md-5 col-sm-12">
              <div className={theme.alignRightNew}>
                <div className={theme.rowImg3_Q}>Do you believe it's timely to sort through <br></br> potential partnerships online?</div>
                <div className={theme.rowImg3_A}>Not with intelligent matching <br></br> algorithms on allymatch.</div>
              </div>
            </div>
            <div className="col-xs-12 col-md-2 col-sm-12">
              <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-clock.gif/5db0bc9f-1cf8-4054-8c53-bce40bdc1447?t=1522138862741"/>
            </div>
            <div className="col-xs-12 col-md-5 col-sm-12">
              <div className={theme.alignLeft}>
                <div className={theme.rowImg3_ABig}>Save time for what matters</div>
                <div className={theme.rowImg3_ASmall}>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Algorithms automatically suggest matches<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Use 'downtime' to check your matches<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Find diverse partners in one place<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Less travel time spent finding business partners<br></br>
                </div>
              </div>
            </div>
          </div>


          <div className="col-xs-12 col-md-12 col-sm-12" ref="answer6" >
          <hr className={theme.lineL3}></hr>
            <div className="col-xs-12 col-md-5 col-sm-12">
              <div className={theme.alignRightNew}>
                <div className={theme.rowImg3_Q}>Do you believe genuine and beneficial business <br></br> matchings must be made face to face?</div>
                <div className={theme.rowImg3_A}>Not with trust increasing features <br></br> and verified matches on allymatch.</div>
              </div>
            </div>
            <div className="col-xs-12 col-md-2 col-sm-12">
              <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-man.gif/2f67edfa-5c87-4781-b16e-f27a142ae55c?t=1522138864453"/>
            </div>
            <div className="col-xs-12 col-md-5 col-sm-12">
              <div className={theme.alignLeft}>
                <div className={theme.rowImg3_ABig}>Trusted users for matches</div>
                <div className={theme.rowImg3_ASmall}>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Trust increasing features<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Restricted registration<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Users are verified upon enrollment<br></br>
                  <span style={{color:'#11a3ab'}}> &rarr; </span>Only for companies searching for partnerships<br></br>

                  <br></br><br></br><br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div className={theme.videoRow}>
          <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-blocks.gif/cb617bf9-4464-4acb-ac13-516dab0d1fe5?t=1522138861794"/>
          <div className={theme.descHeadingNew}>Commonsense design</div>
          <div className={theme.descTextNew}>
          Easy-to-create profiles and inquiries | Sleek modern design | Effective algorithms
          </div>

          <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-sofa.gif/1d792b49-c306-4daf-a9be-18e80b470a3d?t=1522138866446"/>
          <div className={theme.descHeadingNew}>Just sit back and relax</div>
          <div className={theme.descTextNew}>
          Convenient wherever you are | Make  use of down-time in a productive way | Easy to Use
          </div>

          <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-money.gif/c71fd8af-d06f-4efa-b682-aa7c56d6c988?t=1522138865105"/>
          <div className={theme.descHeadingNew}>A better way to match</div>
          <div className={theme.descTextNew}>
          With intelligent algorithms and high quality users, find your match from the
          <br></br>comfort of your own smart phone for a fraction of the time and cost of other B2B services.
          </div>

          <a href="/#/register"><img className={theme.buttonL5} src="https://www.globalsuccess-club.net/documents/20589/51325/cta-2.gif/898e1b7a-d78a-4f99-afa5-6e7c1a7044b3?t=1522138861116"/></a>
        </div>

        <div className={theme.bannerDivL6}>
          <img className={theme.bannerL6} src="https://www.globalsuccess-club.net/documents/20589/51946/image_1860px.jpg/1613f879-007a-476d-8d99-625308933f54?t=1524047971287"/>
          <img className={theme.bannerL6_2} src="https://www.globalsuccess-club.net/documents/20589/51941/handMobImg.jpg/63fb7cd2-0672-41d4-8ceb-a1445c852d16?t=1523523957974"/>

          <div className={theme.bannerTextL6}>
            <div className={theme.descHeadingNew}><b style={{color:'white'}}>Too good to be true?</b></div>
            <div className={theme.descTextL6}>
            Not with today's digital technology. Allymatch brings a
            modern approach to the search - enabling speed and privacy in
            ways never before possible.
            </div>
            <div className={theme.boldTxtL6}>See how allymatch solves an age old problem for growing businesses.</div>
            <a href="/#/register"><img  className={theme.buttonL6} src="https://www.globalsuccess-club.net/documents/20589/51325/cta-3.gif/992130da-82c9-44f9-9f48-89ee3fafb347?t=1522138861471"/></a>
          </div>
         </div>

         <div className={theme.bannerDivL6}>
           <img className={theme.bannerL7} src="https://www.globalsuccess-club.net/documents/20589/51325/worldmap_1860px.jpg/7b1dede9-9869-4e47-a9db-e0c113cf3bd1?t=1522138876165"/>
           <img className={theme.bannerL7_2} src="https://www.globalsuccess-club.net/documents/20589/51941/white.gif/d190c4ef-dad8-4a7f-af39-c57b5df9c5f3?t=1523523958303"/>
           <div className={theme.bannerTextL6}>
             <div className={theme.descHeadingL7}>Focused on Manufacturing</div>
             <div className={theme.descTextL7}>
             Created in Germany, the heart of advanced manufacturing, allymatch connects users with other
             innovative organizations from some of the world's leading manufacturing countries. allymatch was
             designed for decision makers of innovative companies worldwide who are looking for
             sophisticated partnerships.
             </div>




             <div className={theme.rowImg3}>
             <div className={theme.pressKitMargin}>
             <div className="row">
               <div className="col-xs-12 col-md-3 col-sm-6">
                 <ScrollAnimation animateIn="fadeInUp" delay={200}>
                  <img className={theme.rowImg3_1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-factory.png/27a0dfe8-c413-4e20-a70b-eadb14252075?t=1522138863078"/>
                  <br></br><span className={theme.rowImg3_Txt}>Manufacturing Companies</span>
                 </ScrollAnimation>
               </div>
               <div className="col-xs-12 col-md-3 col-sm-6">
                 <ScrollAnimation animateIn="fadeInUp" delay={200}>
                  <img className={theme.rowImg3_1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-microscope.png/de08107c-644d-48ee-b8db-5032ddbbf3a6?t=1522138864775"/>
                  <br></br><span className={theme.rowImg3_Txt}>Research institutes</span>
                 </ScrollAnimation>
               </div>
               <div className="col-xs-12 col-md-3 col-sm-6">
                 <ScrollAnimation animateIn="fadeInUp" delay={200}>
                  <img className={theme.rowImg3_1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-world.png/0b2ec9f7-0285-40a4-b0d1-09372f31c656?t=1522138867129"/>
                  <br></br><span className={theme.rowImg3_Txt}>EDOs</span>
                 </ScrollAnimation>
               </div>
               <div className="col-xs-12 col-md-3 col-sm-6">
                 <ScrollAnimation animateIn="fadeInUp" delay={200}>
                  <img className={theme.rowImg3_1} src="https://www.globalsuccess-club.net/documents/20589/51325/icon-gear.png/88100c3d-a077-4f2b-a783-c68a2612ce35?t=1522138863764"/>
                  <br></br><span className={theme.rowImg3_Txt}>Service Providers</span>
                 </ScrollAnimation>
               </div>
             </div>
           </div>
           </div>
           </div>
        </div>


        <div className={theme.videoRow}>
          <div className={theme.descHeadingL8}>Get Started!</div>
          <div className={theme.descTextNew}>
          allymatch makes innovation possible by bringing partners from all over the world
          together for collaboration. Are you ready to start the journey to a more efficient and cost effective process?
          </div>
          <br></br>
          <a href="/#/register"><img  className={theme.buttonL6} src="https://www.globalsuccess-club.net/documents/20589/51325/cta-3.gif/992130da-82c9-44f9-9f48-89ee3fafb347?t=1522138861471"/></a>
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
