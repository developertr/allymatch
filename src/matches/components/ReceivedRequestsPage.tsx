import React, { Component, PropTypes } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'

import { Input } from 'react-toolbox';
import { Button } from 'react-toolbox';
import Table from 'react-toolbox/lib/table';
import ViewRequests from './ViewRequests';
import ReceivedRequestsStore from '../ReceivedRequestsStore';
import theme from '../../theme/_theme.scss';
import { Dropdown } from 'react-toolbox';
import { Dialog } from 'react-toolbox';

@observer
@inject('receivedRequestsStore')
export default class ReceivedRequestsPage extends React.Component<{ receivedRequestsStore?: ReceivedRequestsStore }, {}> {
  state = {
    active_Success:false,
    active: false,
    selected: [],
    source: [],
    simple: '',
    dropdownSource: [],
    activeDelete: false
  };

  model = {
    businessType: {type: String},
    country: {type: String},
    industry: {type: String},
    Request_Received_On: {type: String}
  };


  constructor(props) {
    super(props);
    this.clickFunction = this.clickFunction.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.accept = this.accept.bind(this);
    this.reject = this.reject.bind(this);
    this.getRequests = this.getRequests.bind(this);
    this.handleToggle_Success = this.handleToggle_Success.bind(this);
    this.handleToggleDelete = this.handleToggleDelete.bind(this);
  }

  componentWillMount(){
    this.getRequests();
  }

  getRequests(){
    this.props.receivedRequestsStore.getReceivedRequests().then(()=>{
      this.setState({ source: this.props.receivedRequestsStore.tableSource });
      let src = [];
      this.props.receivedRequestsStore.tableSource.map((m) => {
        let obj = { value: m.businessType, label: m.businessType }
        if(src.indexOf(obj.label)==-1){
          src.push(obj.label);
          this.props.receivedRequestsStore.searchSource.push(obj);
        }
       });
    this.setState({ dropdownSource : this.props.receivedRequestsStore.searchSource})

    });
  }

  clickFunction(){
    this.props.receivedRequestsStore.currentRequest=this.state.source[this.state.selected[0]];
    this.props.receivedRequestsStore.currentRequestId=this.state.source[this.state.selected[0]].id;
    this.props.receivedRequestsStore.crntRqtOrgName=this.state.source[this.state.selected[0]].companyName
    this.setState({ active: !this.state.active });
  }

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  }

  handleToggle_Success = () => {
    this.setState({ active_Success: !this.state.active_Success });
  }

  handleSelect = (selectedId) => {
    this.setState({ selected: selectedId });
  };

  handleSimpleChange = (value) => {
    this.setState({ simple: value });
    this.props.receivedRequestsStore.getReceivedRequests().then(()=>{
      this.props.receivedRequestsStore.filter(value);
      this.setState({ source: this.props.receivedRequestsStore.tableSource });
    });
  };

  accept() {
    this.props.receivedRequestsStore.acceptRequest().then(()=>{
      this.getRequests();
      this.props.receivedRequestsStore.successMsg="Your organization and "+this.props.receivedRequestsStore.crntRqtOrgName+" are now a match";
      this.handleToggle_Success();
    });
    this.handleToggle();
  }

  reject() {
    this.props.receivedRequestsStore.rejectRequest().then(()=>{
      this.getRequests();
    });
    this.setState({activeDelete: !this.state.activeDelete});
  }

  handleToggleDelete(){
    this.handleToggle();
    this.setState({activeDelete: !this.state.activeDelete});
  }

  render() {
    return (
      <div>
        <div className={theme.bannerRow}><span className={theme.titleBar}>Received Requests</span></div>
          <div style={{marginLeft:'25vw',width: '20vw'}}>
            <Dropdown
              onChange={this.handleSimpleChange}
              source={this.state.dropdownSource}
              label="Filter"
              value={this.state.simple}
            />
         </div>
         <div style={{marginLeft:'25vw'}}>
          <Table
            model={this.model}
            onSelect={this.handleSelect}
            selectable={true}
            multiSelectable={false}
            selected={this.state.selected}
            source={this.state.source}
            />
        </div>
        <div style={{marginLeft:'50%'}} >
          <Button raised primary onClick={this.clickFunction} label='View'/>&nbsp;
        </div>
        <ViewRequests
          state={this.state}
          handleToggle={this.handleToggle}
          handleToggleDelete={this.handleToggleDelete}
          valueObj={this.props.receivedRequestsStore.currentRequest}
          showOptions={true}
          accept={this.accept}
          reject={this.reject}
        />
        <Dialog
            active={this.state.active_Success}
            onEscKeyDown={this.handleToggle_Success}
            onOverlayClick={this.handleToggle_Success}
            className={theme.successCard}>
            <p className={theme.descHeading}>Congratulations! </p>
            <p className={theme.successTxt}>{this.props.receivedRequestsStore.successMsg} </p><br></br>
            <div className="row">
              <div className="col-sm-6">
                <img className={theme.successImgAnimate} src="https://www.globalsuccess-club.net/documents/20589/33063/logopart-1.png/a7b1c4ca-1b55-4cf2-9fda-bc281a26db37?t=1502446820570" />
              </div>
              <div className="col-sm-6">
                <img className={theme.successImgAnimate1} src="https://www.globalsuccess-club.net/documents/20589/33063/logopart-2.png/ae8ea804-72ab-4862-beb7-81e298c39d29?t=1502446821080" />
              </div>
            </div>
        </Dialog>
      </div>
    )
  }
}
