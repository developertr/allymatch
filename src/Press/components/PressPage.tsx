import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, toJS } from 'mobx';
import theme from '../../theme/_theme.scss';

@observer
export default class PressPage extends React.Component<{},{}> {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className={theme.bannerImgEvent1} src="https://www.globalsuccess-club.net/documents/20589/52387/image_newsroom_1860x640.jpg/fccd1087-5b55-4867-ba62-052ea2fca801?t=1523953698853" />
        <img className={theme.bannerImgEvent2} src="https://www.globalsuccess-club.net/documents/20589/52714/image_newsroom_640y358.jpg/ce671654-6a0b-4c29-bce1-56f649c252ee?t=1523953717926" />

        <div className={theme.pressDesc}>About allymatch:</div>
        <div className={theme.pressDesc2}>
          allymatch is the smart B2B matching platform for innovative companies to find
          R&D and investment partners, suppliers, buyers, and service providers globally.
          allymatch is designed for decision makers of innovative companies and
          organizations specializing in the manufacturing industries. allymatch brings a
          modern and digital approach to the search enabling speed and privacy in ways
          never before possible. allymatch users are innovative manufacturing companies,
          research institutes, economic development organizations, having an opportunity
          to find one another from the familiar comfort of their executives’ own
          smartphones for a fraction of the time and cost of other B2B services.
          <br></br>
          <span style={{color:'#273348'}}>allymatch makes innovation possible by bringing partners together for collaboration.</span>
        </div>
        <div className={theme.pressDesc3}>
          If you have any questions please don’t hesitate to contact us: <span style={{color:'#11a3ab'}}>media@allymatch.com</span>
        </div>

        <br></br><br></br>
        <div className={theme.pressKitMargin}>
        <div className="row" style={{textAlign:'center'}}>
            <div className="col-xs-12 col-md-6 col-sm-12">
              <div className={theme.pressKit2}>
                <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/53755/media-kit.png/3c46b0f7-6076-4795-8552-22571d0a2623?t=1524240078564"/>
                <div className={theme.pressKitTitle}>Media Kit</div>
                <br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/Company+Information.pdf/51107e71-9684-4398-a543-747f0a601357" target="_blank"><span className={theme.pressKit3}>Company Information (PDF, 113.0 KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/Executive+Profile.pdf/53052a57-896e-4730-8d3c-fa86468ef0a4" target="_blank"><span className={theme.pressKit3}>Executive Profile (PDF, 142.0 KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/I_Kemmler+1.jpg/1b90e485-5e2e-438b-8740-59098143557f?t=1524239344063" target="_blank"><span className={theme.pressKit3}>I.Kemmler (JPEG, 1.5 MB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/am-logo_horizontal-claim_cmyk_uncoated.eps/e31b31a4-7a2e-434c-a9f7-c8846d43c9e6" target="_blank"><span className={theme.pressKit3}>allymatch logo - horizontal with claim (EPS, 3.1 MB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/am-logo_horizontal_claim_RGB.png/49025b0a-4294-4da1-91f1-6651204b4b0c?t=1524472103407" target="_blank"><span className={theme.pressKit3}>allymatch logo - horizontal with claim (PNG, 5 KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/am-logo_horizontal_cmyk_uncoated.eps/d7d92ac0-d4cd-4fdc-9faf-07fa31cf8827"  target="_blank"><span className={theme.pressKit3}>allymatch logo - horizontal (EPS, 3 MB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/am-logo_horizontal_RGB.png/c673a6cc-3921-492a-9172-abde25be81b8?t=1524472113751"  target="_blank"><span className={theme.pressKit3}>allymatch logo - horizontal (PNG, 3 KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/am-logo_vertical_claim_RGB.png/42f1b003-5237-46a7-8863-48e534ed460f?t=1524472114149"  target="_blank"><span className={theme.pressKit3}>allymatch logo - vertical with claim (PNG, 5 KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/am-logo_vertical_cmyk_uncoated.eps/25f3eb21-f85f-4054-bf0b-6267f5d32ab6"  target="_blank"><span className={theme.pressKit3}>allymatch logo - vertical (EPS, 3 MB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/am-logo_vertical_RGB.png/85a86bf4-60fa-4d79-bb3d-7c1b6eaf17ba?t=1524472124711"  target="_blank"><span className={theme.pressKit3}>allymatch logo - vertical (PNG, 4 KB)</span></a><br></br><br></br>
                {/*
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/allymatch4events_256px.png/754cd6c6-40f5-44f0-8f7a-6dd02238fc39?t=1524239292431" target="_blank"><span className={theme.pressKit3}>allymatch4events logo (PNG, 256 px, 16KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/allymatch4events_512px.png/4d511300-d046-4de4-a481-ea4c2508b76d?t=1524239292966" target="_blank"><span className={theme.pressKit3}>allymatch4events logo (PNG, 512 px, 21KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/allymatch4events_80px_2.png/d7fd9edf-047a-4422-996c-fbc83153d00a?t=1524239291382" target="_blank"><span className={theme.pressKit3}>allymatch4events logo (PNG, 80 px, 6KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/allymatch4events_app-icon2.png/a1c16774-db21-428e-b917-5cace5d24dff?t=1524239294261" target="_blank"><span className={theme.pressKit3}>allymatch4events app icon (PNG, 39KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/allymatch+logo_claim.JPG/2f2ccff3-9c98-4c7d-a252-fb168008d064?t=1524239294821" target="_blank"><span className={theme.pressKit3}>allymatch logo with claim (JPEG, 19KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/allymatch+logo_neu.JPG/4ca895c2-6c5b-4480-9c3b-ac841be646d9?t=1524239295307" target="_blank"><span className={theme.pressKit3}>allymatch logo (JPEG, 15KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/allymatch+logo_vertikal_claim.JPG/fe176848-1de8-4e7a-8b15-a89e6c9529dc?t=1524239296614" target="_blank"><span className={theme.pressKit3}>allymatch logo- vertical with claim(JPEG, 20KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/allymatch+logo_vertikal.JPG/5420abb0-e52e-4777-b7e7-1859b8f67cc9?t=1524239295877" target="_blank"><span className={theme.pressKit3}>allymatch logo- vertical(JPEG, 15KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/DYB_alotoftime.JPG/aec9e6b1-ba5d-40ef-8395-09e3ea4f27d4?t=1524239300069" target="_blank"><span className={theme.pressKit3}>Do you believe-a lot of time(Question Image)(JPEG, 84KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/DYB_facetoface.JPG/6a3c1d1a-3bf5-449c-bf6a-2cb5422998f0?t=1524239302348" target="_blank"><span className={theme.pressKit3}>Do you believe- face to face(Question Image)(JPEG, 69KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/DYB_findingonline.JPG/6858d3eb-e155-4f76-95d4-ab81e5f4896e?t=1524239304345" target="_blank"><span className={theme.pressKit3}>Do you believe- finding partners online(Question Image)(JPEG, 83KB)</span></a><br></br><br></br>
              <a href="https://www.globalsuccess-club.net/documents/20589/53755/google%2B_1080x608.jpg/cdf61d78-e0cb-4cfb-8a30-e0228d4593b1?t=1524239312347" target="_blank"><span className={theme.pressKit3}>Google plus Image(JPEG, 190KB)</span></a><br></br><br></br>*/}
              </div>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-12">
              <div className={theme.pressKit2}>
                <img className={theme.rowImg1} src="https://www.globalsuccess-club.net/documents/20589/53755/press-release.png/398e0d2b-f16c-4c48-8b95-d888660f04f2?t=1524244315020"/>
                <div className={theme.pressKitTitle}>Press Release</div>
                <br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/Press+Release_HannoverMesse+_English.pdf/f63aada3-0afd-49c0-9efd-005eaecccc7e" target="_blank"><span className={theme.pressKit3}>Press release April 23rd 2018 (English) (PDF, 155.0 KB)</span></a><br></br><br></br>
                <a href="https://www.globalsuccess-club.net/documents/20589/53755/HannoverMesse_PressRelease_German.pdf/4ca30b9c-82b2-45d9-b252-0657770e64fc" target="_blank"><span className={theme.pressKit3}>Press release April 23rd 2018 (German) (PDF, 176.0 KB)</span></a><br></br><br></br>
                  <a href="https://www.globalsuccess-club.net/documents/20589/53755/Hannover+Messe+2019+Press+Release+English/ef506e9d-b786-424e-91c7-de45d2a1a258" target="_blank"><span className={theme.pressKit3}>Press Release April 1, 2019 (English) (PDF, 183.0 KB)</span></a><br></br><br></br>
                  <a href="https://www.globalsuccess-club.net/documents/20589/53755/Hannover+Messe+2019+Press+Release+German/5e9b9322-464d-41b5-ae9f-1576d0664556" target="_blank"><span className={theme.pressKit3}>Press Release April 1, 2019 (German) (PDF, 310.0 KB)</span></a><br></br><br></br>
              </div>
            </div>
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
