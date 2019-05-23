import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import { Input, Button, Card, CardMedia, CardTitle, CardText,Dialog,FontIcon } from 'react-toolbox';
import theme from '../../theme/_theme.scss';
import MatchesStore from '../MatchesStore';

@inject('matchesStore')
@observer
export default class MatchCard extends React.Component<{matchesStore?:MatchesStore}, {}> {

  constructor(props) {
    super(props);
    this.accept = this.accept.bind(this);
    this.reject = this.reject.bind(this);
    this.handleToggleAccept = this.handleToggleAccept.bind(this);
    this.handleToggleDelete = this.handleToggleDelete.bind(this);
  }

  state = {
    activeDelete: false,
    activeAccept: false
  };

  handleToggleAccept(){
    this.setState({activeAccept: !this.state.activeAccept});
  }

  handleToggleDelete(){
    this.setState({activeDelete: !this.state.activeDelete});
  }

  accept() {
    this.props.matchesStore.acceptMatch();
    this.handleToggleAccept();
  }

  reject() {
    this.props.matchesStore.rejectMatch();
    this.handleToggleDelete();
  }

  render() {
    let actionsDelete = [
        { label: "Cancel", onClick:this.handleToggleDelete },
        { label: "Ok", onClick: this.reject }
      ];

    let actionsAccept = [
        { label: "Cancel", onClick:this.handleToggleAccept },
        { label: "Ok", onClick: this.accept }
      ];

    return (
      <div>
        <div className={theme.cardSize}>
            <div>
              <FontIcon style={{ color: '#11a3ab ',fontSize: '9vw', marginRight: '40%', marginLeft: '40%', marginTop: '2%' }} value='account_circle' />
            </div>
            <div className={theme.matchHeading}>
              Company Details
            </div>
            <div className={theme.matchDiv}>
            <div className="row">
                  <div className="col-sm-6" style={{textAlign:'right', padding: '10 0 10 10'}}>
                  Business Type :
                  </div>
                  <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                  {this.props.matchesStore.currentMatch.businesType.name}
                  </div>
            </div>
            {this.props.matchesStore.showCompanyType ?
          (  <div className="row">
                  <div className="col-sm-6" style={{textAlign:'right', padding:'10 0 10 10'}}>
                  Company Type :
                  </div>
                  <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                  {this.props.matchesStore.currentMatch.companyType.name}
                  </div>
            </div> ): ""}
            <div className="row">
                  <div className="col-sm-6" style={{textAlign:'right', padding:'10 0 10 10'}}>
                  Industry :
                  </div>
                  <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                  {this.props.matchesStore.currentMatch.industry.name}
                  </div>
            </div>
            <div className="row">
                  <div className="col-sm-6" style={{textAlign:'right', padding:'10 0 10 10'}}>
                  Country :
                  </div>
                  <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                  {this.props.matchesStore.currentMatch.country.name}
                  </div>
            </div>
            <div className="row">
                  <div className="col-sm-6" style={{textAlign:'right', padding:'10 0 10 10'}}>
                  Revenue :
                  </div>
                  <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                  {this.props.matchesStore.currentMatch.revenue.name}
                  </div>
            </div>
            <div className="row">
                  <div className="col-sm-6" style={{textAlign:'right', padding:'10 0 10 10'}}>
                  Employees :
                  </div>
                  <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                  {this.props.matchesStore.currentMatch.employees.name}
                  </div>
            </div>
            <div className="row">
                  <div className="col-sm-6" style={{textAlign:'right', padding:'10 0 10 10'}}>
                  Subsidaries :
                  </div>
                  <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                  {this.props.matchesStore.currentMatch.noOfSubsidaries}
                  </div>
            </div>
            <div className="row">
                  <div className="col-sm-6" style={{textAlign:'right', padding:'10 0 10 10'}}>
                  Production Facilities :
                  </div>
                  <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                  {this.props.matchesStore.prodFacilities}
                  </div>
            </div>
            <div className="row">
                  <div className="col-sm-6" style={{textAlign:'right', padding:'10 0 10 10'}}>
                  R&D facilities :
                  </div>
                  <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                  {this.props.matchesStore.rndFacilities}
                  </div>
            </div>
            <div className="row">
                  <div className="col-sm-6" style={{textAlign:'right', padding:'10 0 10 10'}}>
                  Target Markets :
                  </div>
                  <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                  {this.props.matchesStore.targetMarkets}
                  </div>
            </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
              <img className={theme.acceptRejectLogo} alt="reject" onClick={ this.handleToggleDelete } src="https://www.globalsuccess-club.net/documents/20589/33078/stop.png/7f190cf9-f10d-4135-bd3e-006baeae8dc2?t=1494929699428"/>
              </div>
              <div className="col-sm-6">
              <img className={theme.acceptRejectLogo} alt="accept" onClick={ this.handleToggleAccept } src="https://www.globalsuccess-club.net/documents/20589/33078/handshake.png/6d1b1270-bf93-452f-9fee-160a18faa081?t=1494929698626"/>
              </div>
            </div>
        </div>
        <Dialog
          actions={actionsAccept}
          active={this.state.activeAccept}
          onEscKeyDown={this.handleToggleAccept}
          onOverlayClick={this.handleToggleAccept}
          className={theme.msgDiv}
        >
          <p>Are you sure you want to send a connection request?</p>
        </Dialog>
        <Dialog
          actions={actionsDelete}
          active={this.state.activeDelete}
          onEscKeyDown={this.handleToggleDelete}
          onOverlayClick={this.handleToggleDelete}
          className={theme.msgDiv}
        >
          <p>Are you sure you want to reject the Match?</p>
        </Dialog>
        </div>
    )
  }
}
