import React, { Component, PropTypes } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import { Input } from 'react-toolbox';
import { Button } from 'react-toolbox';
import { Dialog } from 'react-toolbox';
import theme from '../../theme/_theme.scss';

@observer
export default class ViewRequests extends React.Component<{handleToggle: (value: any, key: any) => void,
  handleToggleDelete: () => void,
  state: any, valueObj: any,showOptions:boolean, accept: () => void,reject: () => void}, {}>  {

    constructor(props) {
        super(props);
    }

    render() {
        let {valueObj} = this.props;
        const {state, handleToggle,handleToggleDelete,accept,reject,showOptions} = this.props

        let actionsDelete = [
            { label: "Cancel", onClick:handleToggleDelete },
            { label: "Ok", onClick: reject }
          ];

        return (
            <div className={theme.cardSize}>
                <Dialog
                    active={state.active}
                    onEscKeyDown={handleToggle}
                    onOverlayClick={handleToggle}
                    className={theme.newInquiryScroll}>
                    <div className={theme.matchHeading}>Company Details</div>
                    <div className={theme.matchDiv}>
                    <div className="row">
                          <div className="col-sm-6" style={{textAlign:'right', padding: '10 0 10 10'}}>
                          Business Type :
                          </div>
                          <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                          {valueObj.businessType}
                          </div>
                    </div>
                    {valueObj.companyType!=undefined ?
                  (  <div className="row">
                          <div className="col-sm-6" style={{textAlign:'right', padding: '10 0 10 10'}}>
                          Company Type :
                          </div>
                          <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                          {valueObj.companyType}
                          </div>
                    </div> ): ""}
                    <div className="row">
                          <div className="col-sm-6" style={{textAlign:'right', padding: '10 0 10 10'}}>
                          Industry :
                          </div>
                          <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                          {valueObj.industry}
                          </div>
                    </div>
                    <div className="row">
                          <div className="col-sm-6" style={{textAlign:'right', padding: '10 0 10 10'}}>
                          Country :
                          </div>
                          <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                          {valueObj.country}
                          </div>
                    </div>
                    <div className="row">
                          <div className="col-sm-6" style={{textAlign:'right', padding: '10 0 10 10'}}>
                          Revenue :
                          </div>
                          <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                          {valueObj.revenue}
                          </div>
                    </div>
                    <div className="row">
                          <div className="col-sm-6" style={{textAlign:'right', padding: '10 0 10 10'}}>
                          Employees :
                          </div>
                          <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                          {valueObj.employees}
                          </div>
                    </div>
                    <div className="row">
                          <div className="col-sm-6" style={{textAlign:'right', padding: '10 0 10 10'}}>
                          Subsidaries :
                          </div>
                          <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                          {valueObj.noOfSubsidaries}
                          </div>
                    </div>
                    <div className="row">
                          <div className="col-sm-6" style={{textAlign:'right', padding: '10 0 10 10'}}>
                          Production Facilities :
                          </div>
                          <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                          {valueObj.prodFacilities}
                          </div>
                    </div>
                    <div className="row">
                          <div className="col-sm-6" style={{textAlign:'right', padding: '10 0 10 10'}}>
                          R&D facilities :
                          </div>
                          <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                          {valueObj.rndFacilities}
                          </div>
                    </div>
                    <div className="row">
                          <div className="col-sm-6" style={{textAlign:'right', padding: '10 0 10 10'}}>
                          Target Markets :
                          </div>
                          <div className="col-sm-6" style={{padding:'10 10 0 10'}}>
                          {valueObj.targetMarkets}
                          </div>
                    </div>
                    </div>

                    {showOptions ?
                    (
                    <div className="row">
                      <div className="col-sm-6">
                      <img className={theme.acceptRejectLogo} onClick={handleToggleDelete} alt="reject" src="https://www.globalsuccess-club.net/documents/20589/33078/stop.png/7f190cf9-f10d-4135-bd3e-006baeae8dc2?t=1494929699428"/>
                      </div>
                      <div className="col-sm-6">
                      <img className={theme.acceptRejectLogo} onClick={accept} alt="accept" src="https://www.globalsuccess-club.net/documents/20589/33078/handshake.png/6d1b1270-bf93-452f-9fee-160a18faa081?t=1494929698626"/>
                      </div>
                    </div>
                  ):""}
                </Dialog>


                <Dialog
                  actions={actionsDelete}
                  active={state.activeDelete}
                  onEscKeyDown={handleToggleDelete}
                  onOverlayClick={handleToggleDelete}
                  className={theme.msgDiv}
                >
                  <p>Are you sure you want to reject the Match?</p>
                </Dialog>
            </div>
        )
    }
}
