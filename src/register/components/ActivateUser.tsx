import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import theme from '../../theme/_theme.scss';
import { Card } from 'react-toolbox';
import RegistrationStore from '../RegistrationStore';


@inject('registrationStore')
@observer
export default class ActivateUser extends React.Component<{registrationStore: RegistrationStore, location: any}, {activated: boolean, loading: boolean}> {

  constructor(props) {
    super(props)
    this.state = {activated: false, loading: true}
  }

  componentWillMount() {
    let key = this.props.location.query.key
    this.props.registrationStore.activateUser(key).then(() => this.setState({activated: true, loading: false}))
    .catch((err) => {
      console.log(err)
      this.setState({activated:false, loading:false})
    })
  }

  render() {
    return (
      <div>
        <img className={theme.banner} src="https://www.globalsuccess-club.net/documents/20589/33068/banner+image+landing.jpg/9f2a7a4d-302f-4fc9-a88c-247bf4d889a3?t=1494928966400" />
        <img className={theme.banner1} src="https://www.globalsuccess-club.net/documents/20589/33063/RBI.jpg/8f88711d-7661-4381-892b-06f4bfc9027c?t=1511450769183"/>
        <div className={theme.bannerRow}><span className={theme.defaultMargin}>Activate User</span></div>
        <div className={theme.tncCard}>
          {!this.state.loading ? (
            <div>
              {this.state.activated ? 
                (<div>
                  <strong>Your user has been activated. You will recieve an email with further details.</strong>
                </div>)
                :
                (<div>
                    <strong>Your user could not be activated.</strong> Please use the registration form to sign up.
                </div>)
              }
            </div>
          ): ""}
        </div>
      </div>
    )
  }
}
