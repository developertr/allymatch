import React, { Component, PropTypes } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'

import { Input } from 'react-toolbox';
import { Button } from 'react-toolbox';
import { FontIcon } from 'react-toolbox';
import Table from 'react-toolbox/lib/table';
import SentRequestsStore from '../SentRequestsStore';
import ViewRequests from './ViewRequests';
import theme from '../../theme/_theme.scss';
import { Dropdown } from 'react-toolbox';

@observer
@inject('sentRequestsStore')
export default class SentRequestsPage extends React.Component<{ sentRequestsStore?: SentRequestsStore }, {}> {
  state = {
    active: false,
    selected: [],
    source: [],
    simple: '',
    dropdownSource: [],
    activeDelete: false
  };

  model = {
    businessType: {type: String},
    //companyType: {type: String},
    country: {type: String},
    //employees: {type: String},
    industry: {type: String},
    Request_Sent_On: {type: String}
    //noOfSubsidaries: {type: Number},
    //prodFacilities: {type: String},
    //revenue: {type: String},
    //rndFacilities: {type: String},
    //targetMarkets: {type: String}
  };


  constructor(props) {
    super(props);
    this.clickFunction = this.clickFunction.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleToggleDelete = this.handleToggleDelete.bind(this);
  }

  componentWillMount(){
    this.props.sentRequestsStore.getMatches().then(()=>{
      this.setState({ source: this.props.sentRequestsStore.tableSource });

      let src = [];
      this.props.sentRequestsStore.tableSource.map((m) => {
        let obj = { value: m.businessType, label: m.businessType }
        if(src.indexOf(obj.label)==-1){
          src.push(obj.label);
          this.props.sentRequestsStore.searchSource.push(obj);
        }
       });
    this.setState({ dropdownSource : this.props.sentRequestsStore.searchSource})
    });
  }

  clickFunction(){
    this.props.sentRequestsStore.currentRequest=this.state.source[this.state.selected[0]];
    this.setState({ active: !this.state.active });
  }

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  }

  handleSelect = (selectedId) => {
    this.setState({ selected: selectedId });
  };

  handleSimpleChange = (value) => {
    this.setState({ simple: value });
    this.props.sentRequestsStore.getMatches().then(()=>{
      this.props.sentRequestsStore.filter(value);
      this.setState({ source: this.props.sentRequestsStore.tableSource });
    });
  };

  accept() {

  }

  reject() {

  }

  handleToggleDelete= () => {

  }


  render() {
    return (
      <div>
        <div className={theme.bannerRow}><span className={theme.titleBar}>Pending Requests</span></div>
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
            valueObj={this.props.sentRequestsStore.currentRequest}
            showOptions={false}
            accept={this.accept}
            reject={this.reject}
          />
      </div>

    )
  }
}
