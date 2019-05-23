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

              Allymatch<br></br>
              Horchheimer Straße 74-78<br></br>
              67547 Worms<br></br>
              E-Mail: contact@allymatch.com<br></br>
              Web: www.allymatch.de<br></br>
              <br></br><br></br><br></br>
              The mobile application "allymatch" is a spin off of the Global Success GmbH.<p></p>
              Global Success GmbH<br></br>
              Goethestraße 2<br></br>
              60313 Frankfurt am Main<br></br>
              Tel.: 069 / 45 00 44 30<br></br>
              Fax: 069 / 45 00 44 29<br></br>
              E-Mail: contact@globalsuccess.de<br></br>
              Web: www.globalsuccess-club.net, www.globalsuccess-days.net <br></br>
              <p>&nbsp;</p>
              Headquarter: Frankfurt am Main<br></br>
              AG Frankfurt am Main: HRB 93915<br></br>
              CEO: Isinay Kemmler<br></br>
              Sales tax identification number: DE283494248<br></br>
              <br></br>
        </div>
      </div>
    )
  }
}
