import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import RegistrationStore from '../RegistrationStore';
import { Input,Autocomplete,Button,Card,Dropdown,RadioGroup, RadioButton,Checkbox,Dialog,Tooltip,FontIcon } from 'react-toolbox';
import theme from '../../theme/_theme.scss';
import regScreen from '../../theme/regScreen.scss';
import {debounce} from '../../base/debounce';

const TooltipIcon = Tooltip(FontIcon);

@inject('registrationStore')
@observer
export default class RegistrationPageEvent extends React.Component<{ registrationStore: RegistrationStore },{showMessage:boolean, showErrMessage:boolean, active:boolean, showCompanyMessage:boolean}> {

  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.clearForm = this.clearForm.bind(this)
    this.submitForm = this.submitForm.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
    this.updateRadio = this.updateRadio.bind(this);
    this.state = { showMessage: false,showErrMessage: true, active: false, showCompanyMessage:true };
    this.onQueryChange = debounce(this.onQueryChange.bind(this), 500);
  }

  handleToggle () {
    this.setState(Object.assign({},this.state,{active:!this.state.active}));
  }

  clearForm() {
    this.props.registrationStore.clearForm();
  }

  componentWillMount() {
    this.props.registrationStore.getValsUser();
  }

  handleChangeIndustry = (value) => {
    this.props.registrationStore.industry = value;
  };

  handleChangeTitle = (value) => {
    this.props.registrationStore.title = value;
  };

  handleChangeCompanyLocation = (value) => {
    this.props.registrationStore.companyLocation = value;
  };

  handleChangeCompany= (value) =>{
    this.props.registrationStore.userCompany = value;
    var list = this.props.registrationStore.companyList;
    this.setState(Object.assign({},this.state,{showCompanyMessage:true}));
    if(list[value]!=undefined){
      this.props.registrationStore.eventPIDisable = false;
      //this.setState(Object.assign({},this.state,{showCompanyMessage:false}));
    }else{
      this.props.registrationStore.eventPIDisable = true;
      this.setState(Object.assign({},this.state,{showCompanyMessage:true}));
    }
  };

  submitForm(event) {
    if(!this.props.registrationStore.validateUser()){
      this.setState(Object.assign({},this.state,{showErrMessage:true}));
      this.setState(Object.assign({},this.state,{showMessage:false}));
      this.handleToggle();
    }else{
      this.props.registrationStore.submitFormUser().then(() => {
        this.setState(Object.assign({},this.state,{showMessage:true}));
        this.setState(Object.assign({},this.state,{showErrMessage:false}));
        this.handleToggle();
        this.clearForm();
        this.props.registrationStore.submitVar=false;
      });
    }
  }

  updateProperty(value, key) {
    this.props.registrationStore[key.target.name] = value;
  }

  updateCheck(value, key) {
    this.props.registrationStore.motivationList[key.target.name].value = value
  }
  updateRadio(value, key) {
    this.props.registrationStore.international = value
  }

  onQueryChange(val) {
    this.props.registrationStore.userCompany = val;
    if(val && val.length > 1) {
      this.props.registrationStore.fetchCompanies(val);
    }
  }

  render() {
    let {registrationStore} = this.props
    const actions = [
      { label: "OK", onClick: this.handleToggle }
    ];
    return (
      <div>
        <img className={theme.banner} src="https://www.globalsuccess-club.net/documents/20589/33068/banner+image+landing.jpg/9f2a7a4d-302f-4fc9-a88c-247bf4d889a3?t=1494928966400" />
        <img className={theme.banner1} src="https://www.globalsuccess-club.net/documents/20589/33063/RBI.jpg/8f88711d-7661-4381-892b-06f4bfc9027c?t=1511450769183"/>
        <div className={theme.bannerRow}><span className={theme.defaultMargin}>Registration for allymatch4events</span></div>
        <Card className={theme.generalFont}>
          <form className={theme.regSpacing}>
            <div className="row">
              <div className="col-md-8 col-sm-12 col-xs-12">
                <div className={theme.regCard}>
                <Dialog
                  actions={actions}
                  active={this.state.active}
                  onEscKeyDown={this.handleToggle}
                  onOverlayClick={this.handleToggle}
                >
                {this.state.showMessage ? (<div className="row"><legend> {registrationStore.successMsg2} </legend></div>) : ""}
                {this.state.showErrMessage ? (<div className="row"><legend> {registrationStore.errorMsg}</legend></div>) : ""}
                </Dialog>

                  <div className={theme.legendDiv}>Company Information</div>
                  <div className="row">
                    <div className="col-md-10 col-sm-10 col-xs-10">
                    <Autocomplete
                      direction="down"
                      label='Type your company name *'
                      multiple={false}
                      onChange={this.handleChangeCompany}
                      source={registrationStore.companyList}
                      value={registrationStore.userCompany}
                      onQueryChange={this.onQueryChange}
                      theme={regScreen}
                      />
                    </div>
                    <div className="col-md-2 col-sm-2 col-xs-2" style={{padding: '0px'}}>
                      <TooltipIcon style={{paddingTop: '1.6vw', color: '#11a3ab'}} value="info" tooltip="Please select your company from the list. If your company does not exist please move forward with the regular registration." tooltipPosition='right'/>
                    </div>
                  </div>

                  {this.state.showCompanyMessage ? (<div style={{fontFamily:'Ubuntu', fontSize:'15px',marginBottom: '20px'}}><div className="row"><span style={{color:'red'}}>*</span> <span style={{color:'#3b3b3b'}}> If your company is not available in the list, please proceed with regular registration </span> <a href='/#/registerEvent' target="_blank"><span style={{color:'#11a3ab'}}> here </span> </a> </div></div>) : ""}

                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className={theme.legendDiv}>Personal Information</div>
                        <Input  type='text' label='First Name *' name='firstName' theme={regScreen} maxLength={50} value={registrationStore.firstName} onChange={this.updateProperty} disabled={registrationStore.eventPIDisable}/>
                        <Input  type='text' label= 'Last Name *' name='lastName' theme={regScreen} maxLength={50} value={registrationStore.lastName} onChange={this.updateProperty} disabled={registrationStore.eventPIDisable}/>
                        <Dropdown
                          required
                          auto={false}
                          source={registrationStore.salutationList}
                          label='Salutation'
                          name="salutation"
                          onChange={this.updateProperty}
                          value={registrationStore.salutation}
                          theme={regScreen}
                          disabled={registrationStore.eventPIDisable}
                          />
                        <Autocomplete
                          direction="down"
                          source={registrationStore.titleList}
                          label='Title *'
                          multiple={false}
                          onChange={this.handleChangeTitle}
                          value={registrationStore.title}
                          onQueryChange={(val) => {
                                registrationStore.title = val;
                              }}
                          theme={regScreen}
                          disabled={registrationStore.eventPIDisable}
                          />
                          {registrationStore.showOtherTitle?
                            (
                            <Input  type='text' label='Other Title *' name='otherTitle' className={theme.extraFields} maxLength={50} value={registrationStore.otherTitle} onChange={this.updateProperty} />
                          ):""}
                        <Input  type='text' label= 'Email *'  name='email' theme={regScreen} maxLength={50} value={registrationStore.email} onChange={this.updateProperty} disabled={registrationStore.eventPIDisable}/>
                      </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className={theme.regCard}>
                  <div className={theme.legendDiv}>Additional Information</div>
                  Are you currently or will you in the near future be operating international? <span className={theme.requiredClr}> * </span><p></p>
                  <RadioGroup name='international' onChange={this.updateRadio} value={registrationStore.international}>
                    <RadioButton name='international' label={<span className={theme.regFont}>Yes</span>} value='Yes' checked disabled={registrationStore.eventPIDisable}/>
                    <RadioButton name='international' label={<span className={theme.regFont}>No</span>} value='No' disabled={registrationStore.eventPIDisable}/>
                  </RadioGroup>

                  <p>&nbsp; </p> Select your motivation for registering<span className={theme.requiredClr}> * </span><p></p>
                  {
                    registrationStore.motivationList.map((reg, idx) => (
                      <Checkbox
                        checked={reg.value}
                        label={<span className={theme.regFont}>{reg.name}</span>}
                        name={`${idx}`}
                        onChange={this.updateCheck}
                        key={idx}
                        disabled={registrationStore.eventPIDisable}
                        />
                    ))
                  }

                  <p>&nbsp; </p> How did you hear about the allymatch4events (single selection)<span className={theme.requiredClr}> * </span><p></p>
                  <RadioGroup name="betaTest" onChange={(val) => registrationStore.betaTest = val} value={registrationStore.betaTest}>
                    {
                      registrationStore.eventList.map((beta, idx) => (
                        <RadioButton name='betaTest' label={<span className={theme.regFont}>{beta}</span>} value={`${beta}`} key={idx} disabled={registrationStore.eventPIDisable}/>
                      ))
                    }
                  </RadioGroup>
                </div>
              </div>
              <p>&nbsp;</p>
              <Checkbox
                checked={registrationStore.agreePolicy}
                name="agreePolicy"
                onChange={this.updateProperty}
                label={<span className={theme.regFont}>I have read and agree with the <a href="/#/tncEvent" target="_blank" className={theme.generalColor}>terms and conditions</a></span>}
                disabled={registrationStore.eventPIDisable}/>
              <div className="row">
                <div className="col-md-4 col-sm-6 col-xs-6">
                  <Button theme={regScreen} onClick={this.clearForm} label='Clear All' disabled={registrationStore.eventPIDisable}/>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-6">
                  <Button theme={regScreen} onClick={this.submitForm} label='Submit' disabled={registrationStore.eventPIDisable}/>
                </div>
              </div>
            </div>
          </form>
        </Card>
        <div className={theme.footerDiv}>
        <div className="row">
        <div className="col-md-4 col-sm-12 col-xs-12">
            <a href="/#/tncEvent" target="_blank" className={theme.link}><span className={theme.generalFont}>Terms of Use and Privacy Policy</span></a> <span> | </span>
            <a href="/#/contactImprint" target="_blank" className={theme.link}><span className={theme.generalFont}>Contact</span></a>
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
            Copyright © 2018 Allymatch. All Rights Reserved.
        </div>
        <div className="col-md-4 col-sm-12 col-xs-12">
          <div className={theme.footerDivRight}>

            <a href="https://www.facebook.com/GSCFrankfurt" target="_blank"><img src="https://www.globalsuccess-club.net/documents/20589/33068/facebook.gif/4309a993-4c35-4bfa-8a51-029aa2c2416f?t=1494928968112" width="30" height="30" className={theme.logosD}/></a>
            &nbsp;
            <a href="https://www.linkedin.com/company/global-success-gmbh" target="_blank"><img src="https://www.globalsuccess-club.net/documents/20589/33068/linkedin.gif/04afd470-12fd-4ebb-9da6-6297c72187f0?t=1494928970846" width="30" height="30" className={theme.logosD}/></a>
            &nbsp;
            <a href="https://twitter.com/GSCFrankfurt" target="_blank"><img src="https://www.globalsuccess-club.net/documents/20589/33068/twitter.gif/fe82670f-d2ce-4c74-a32d-7cbb4b360fb4?t=1494928971818" width="30" height="30" className={theme.logosD}/></a>
            &nbsp;
            <a href="https://www.youtube.com/user/globalsuccessonline" target="_blank"><img src="https://www.globalsuccess-club.net/documents/20589/33068/youtube.gif/d938fbce-e623-4349-8cbf-a93552c58d39?t=1494928972218" width="30" height="30" className={theme.logosD}/></a>
            &nbsp;
            <a href="https://plus.google.com/+GlobalSuccessClubNet/posts" target="_blank"><img src="https://www.globalsuccess-club.net/documents/20589/33068/google%2B.gif/2f18f8d8-327f-48bb-aa9f-13d865925ac8?t=1494928968403" width="30" height="30" className={theme.logosD}/></a>
          </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
