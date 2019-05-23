import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import theme from '../../theme/_theme.scss';
import { Card } from 'react-toolbox';

@observer
export default class ContactImprint extends React.Component<{}, {}> {

  render() {
    return (
      <div>
      <img className={theme.banner} src="https://www.globalsuccess-club.net/documents/20589/33068/banner+image+landing.jpg/9f2a7a4d-302f-4fc9-a88c-247bf4d889a3?t=1494928966400" />
      <img className={theme.banner1} src="https://www.globalsuccess-club.net/documents/20589/33063/RBI.jpg/8f88711d-7661-4381-892b-06f4bfc9027c?t=1511450769183"/>
      <div className={theme.bannerRow}><span className={theme.defaultMargin}>Contact and Imprint</span></div>
      <div className={theme.tncCard}>
              <div className={theme.generalHeading}>Contact</div>
              <div className={theme.contactDiv}>General questions: contact@allymatch.com</div>
              <div className={theme.contactDiv}>Registration questions: register@allymatch.com</div>
              <div className={theme.contactDiv}>Support questions: support@allymatch.com</div>
              <div className={theme.contactDiv}>Media inquiries: media@allymatch.com</div>
              <p>&nbsp;</p>
              <div className={theme.generalHeading}>Imprint</div>

                <b>Allymatch</b><br/>
          Mombacher Str. 48 55122 Mainz<br/>
          Tel.: 06131 / 58 45 755<br/>
           Fax: 06131 / 58 45 740 <br/>
          E-Mail: contact@allymatch.com<br/>
           Web: www.allymatch.com<br/><br/>

          Headquarter: Mainz<br/>
          CEO: Isinay Kemmler<br/>
          AG Mainz: HRB 48672<br/>
          Sales tax identification number: DE322743667<br/><br/>

          <b>Worms Location:</b><br/>
          Horchheimer Straße 74-78<br/>
          67547 Worms<br/>
          Tel: 6241/ 93 52 13<br/><br/>

          Allymatch GmbH is a spin off of the Global Success GmbH.<br/><br/>

          <b>Global Success GmbH</b><br/>
          Mombacher Str. 48<br/>
          55122 Mainz<br/>
          Tel.: 06131 / 32 94 818<br/>
          Fax: 06131 / 32 94 817<br/>
          E-Mail: contact@globalsuccess.de<br/>
          Web: www.globalsuccess-club.net, www.globalsuccess-days.net<br/><br/>

          Headquarter: Mainz<br/>
          AG Mainz: HRB 48697<br/>
          CEO: Isinay Kemmler<br/>
          Sales tax identification number: DE283494248<br/><br/><br/><br/><br/>
      </div>
      </div>
    )
  }
}
