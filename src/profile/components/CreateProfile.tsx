import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import PersonInfo from './PersonInfo'
import CompanyDetails from './CompanyDetails'
import ChangePassword from './ChangePassword'
import { Button } from 'react-toolbox';
import { Card } from 'react-toolbox';
import { Dialog } from 'react-toolbox';
import PersonStore from '../PersonStore';
import theme from '../../theme/_theme.scss';

@inject('personStore')
@observer
export default class CreateProfile extends React.Component<{ personStore?: PersonStore }, {}> {

  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.handleToggleMsg=this.handleToggleMsg.bind(this);
  }

  submitForm(event) {
    this.props.personStore.targetMarkets = this.state.multiple.map((val) => { return { id : val } });
    this.props.personStore.prodFacilities = this.state.multipleProd.map((val) => { return { id : val } });
    this.props.personStore.rndFacilities = this.state.multipleRnD.map((val) => { return { id : val } });
    if(!this.props.personStore.validate()){
      this.setState(Object.assign({},this.state,{showErrMessage:true}));
      this.setState(Object.assign({},this.state,{showMessage:false}));
      this.handleToggleMsg();
    }else{
      this.props.personStore.industryClass = this.props.personStore.industryClassTemp;
      if(this.props.personStore.existingCompSelcted){
        this.props.personStore.createProfile().then(() => {
          this.setState(Object.assign({},this.state,{showMessage:true}));
          this.setState(Object.assign({},this.state,{showErrMessage:false}));
          this.handleToggleMsg();
          this.setState(Object.assign({},this.state,{titles:true}));
          this.props.personStore.submitVar=false;
          //new feature - save the multiple industryClassifications value
          this.props.personStore.saveIndClass();
        });
      }else{
        this.props.personStore.createCompany().then(() => {
          this.setState(Object.assign({},this.state,{showMessage:true}));
          this.setState(Object.assign({},this.state,{showErrMessage:false}));
          this.handleToggleMsg();
          this.setState(Object.assign({},this.state,{titles:true}));
          this.props.personStore.submitVar=false;
          //new feature - save the multiple industryClassifications value
          this.props.personStore.saveIndClass();
        });
      }
    }
  }

  componentWillMount() {
   this.props.personStore.clearForm();
   this.props.personStore.getVals();
   this.props.personStore.showCompanyType = false;
   this.props.personStore.companyDisabled = false;
   this.props.personStore.displayNewCompanyName = false;
   this.props.personStore.getAllCompanies().then(()=>{
    this.setState(Object.assign({},this.state,{source:this.props.personStore.allCompSrc}));
  });
 }

  updateProperty(value, key) {
    if(key.target.name=="businessType"){
      this.props.personStore.title="";
      this.props.personStore.titleTemp="";
      this.props.personStore.getTitles(value);
      this.props.personStore.titlesDisabled=false;
      if(key.target.textContent=="Company"){
        this.props.personStore.companyType = "";
        this.props.personStore.showCompanyType = true;
      }else{
        this.props.personStore.companyType = "";
        this.props.personStore.showCompanyType = false;
      }
    }
    this.props.personStore[key.target.name] = value;
  }

  handleMultipleChange = (value) => {
    this.setState(Object.assign({},this.state,{multiple:value}));
  };

  handleMultipleChangeProd = (value) => {
    this.setState(Object.assign({},this.state,{multipleProd:value}));
  };

  handleMultipleChangeRND = (value) => {
    this.setState(Object.assign({},this.state,{multipleRnD:value}));
  };

  state = {
    active: false,showMessage: false,showErrMessage: true, activeMsg: false, titles:true,multiple:[],
    multipleProd:[],multipleRnD:[],srchCmpnyActiveMsg: false, selected: [], source: []
  }

   handleToggleMsg = () => {
     this.setState(Object.assign({},this.state,{activeMsg:!this.state.activeMsg}));
   }

   uploadFile= e =>{
     this.props.personStore.uploadDisplayPicture(e.target.files[0]);
     console.log(e.target.files[0]);
   }

   handleSelect = (selected) => {
     this.setState({selected});
   };

   srchCmpnyhandleToggleMsg = () => {
     this.setState(Object.assign({},this.state,{srchCmpnyActiveMsg:!this.state.srchCmpnyActiveMsg}));
   }

   setCompany = () =>{
     if (this.state.source[this.state.selected[0]].createdById == this.props.personStore.userId) {
       this.props.personStore.companyDisabled = false;
     } else {
       this.props.personStore.companyDisabled = true;
     }
     this.props.personStore.existingCompSelcted=true;
     this.props.personStore.companyName = this.state.source[this.state.selected[0]].name;
     this.props.personStore.companyId = this.state.source[this.state.selected[0]].id;
     if(this.state.source[this.state.selected[0]].businesTypeId!=null){
       this.props.personStore.titleTemp="";
       this.props.personStore.title="";
       this.props.personStore.businessType = this.state.source[this.state.selected[0]].businesTypeId;
       this.props.personStore.getTitles(this.state.source[this.state.selected[0]].businesTypeId);
       this.props.personStore.titlesDisabled=false;
     }else{
       this.props.personStore.businessType ="";
       this.props.personStore.titlesDisabled=true;
     }

     if(this.state.source[this.state.selected[0]].countryId!=null){
       this.props.personStore.country = this.state.source[this.state.selected[0]].countryId;
     }else{
       this.props.personStore.country ="";
     }

     if(this.state.source[this.state.selected[0]].revenueId!=null){
       this.props.personStore.revenue = this.state.source[this.state.selected[0]].revenueId;
     }else{
       this.props.personStore.revenue ="";
     }

     if(this.state.source[this.state.selected[0]].employeesId!=null){
       this.props.personStore.employees = this.state.source[this.state.selected[0]].employeesId;
     }else{
       this.props.personStore.employees ="";
     }

     if (this.state.source[this.state.selected[0]].companyTypeId!=null) {
       this.props.personStore.showCompanyType = true;
       this.props.personStore.companyType = this.state.source[this.state.selected[0]].companyTypeId;
     }else{
       this.props.personStore.showCompanyType = false;
       this.props.personStore.companyType ="";
     }

     if(this.state.source[this.state.selected[0]].targetMarkets!=null){
       this.props.personStore.targetMarkets = this.state.source[this.state.selected[0]].targetMarkets;
       this.props.personStore.displayValTrgtMrkt = this.props.personStore.targetMarkets.map((m) => String(m.id));
       this.state.multiple = this.props.personStore.displayValTrgtMrkt;
     }else{
       this.props.personStore.targetMarkets ="";
     }

     if(this.state.source[this.state.selected[0]].rndFacilities!=null){
       this.props.personStore.rndFacilities = this.state.source[this.state.selected[0]].rndFacilities;
       this.props.personStore.displayValRnDFac = this.props.personStore.rndFacilities.map((m) => String(m.id));
       this.state.multipleRnD = this.props.personStore.displayValRnDFac;
     }else{
       this.props.personStore.rndFacilities ="";
     }

     if(this.state.source[this.state.selected[0]].prodFacilities!=null){
       this.props.personStore.prodFacilities = this.state.source[this.state.selected[0]].prodFacilities;
       this.props.personStore.displayValProdFac = this.props.personStore.prodFacilities.map((m) => String(m.id));
       this.state.multipleProd = this.props.personStore.displayValProdFac;
     }else{
       this.props.personStore.prodFacilities ="";
     }
     if(this.state.source[this.state.selected[0]].noOfSubsidaries!=null){
       this.props.personStore.subsidaries = this.state.source[this.state.selected[0]].noOfSubsidaries;
     }else{
       this.props.personStore.subsidaries ="";
     }

     //new feature
     if(this.state.source[this.state.selected[0]].industryClassifications.length!=0){
       //this.props.personStore.industryDisp = this.state.source[this.state.selected[0]].industryClassifications.map((m) => m.industry).map((m) => m.name).join(",");
       //this.props.personStore.divisionDisp = this.state.source[this.state.selected[0]].industryClassifications.map((m) => m.division).map((m) => m.name).join(",");
       //this.props.personStore.productDisp = this.state.source[this.state.selected[0]].industryClassifications.map((m) => m.product).map((m) => m.name).join(",");
       //this.props.personStore.subCategoryDisp = this.state.source[this.state.selected[0]].industryClassifications.map((m) => m.subCategory).map((m) => m.name).join(",");
       this.props.personStore.industryClass = this.state.source[this.state.selected[0]].industryClassifications;

       //Display multiple values for new feature
       let indList = this.state.source[this.state.selected[0]].industryClassifications.map((m) => m.industry).map((m) => m.name);
       this.props.personStore.industryDisp = indList.filter((v, i) => indList.indexOf(v) === i).join(",");

       let divList = this.state.source[this.state.selected[0]].industryClassifications.map((m) => m.division).map((m) => m.name);
       this.props.personStore.divisionDisp = divList.filter((v, i) => divList.indexOf(v) === i).join(",");

       let prodList = this.state.source[this.state.selected[0]].industryClassifications.map((m) => m.product).map((m) => m.name);
       this.props.personStore.productDisp = prodList.filter((v, i) => prodList.indexOf(v) === i).join(",");

       let subCatList = this.state.source[this.state.selected[0]].industryClassifications.map((m) => m.subCategory).map((m) => m.name);
       this.props.personStore.subCategoryDisp = subCatList.filter((v, i) => subCatList.indexOf(v) === i).join(",");
     }else{
       this.props.personStore.industryDisp = "";
       this.props.personStore.divisionDisp = "";
       this.props.personStore.productDisp = "";
       this.props.personStore.subCategoryDisp = "";
       this.props.personStore.industryClass = [];
      }

     this.srchCmpnyhandleToggleMsg();
   }

   handleToggleAddCmpny(){
   }

  render() {
    const actions = [
      { label: "OK", onClick: this.handleToggleMsg }
    ];
    return (
      <div>
        <Dialog
            actions={actions}
            active={this.state.activeMsg}
            onEscKeyDown={this.handleToggleMsg}
            onOverlayClick={this.handleToggleMsg}
            className={theme.msgDiv}
          >
          {this.state.showMessage ? (<div className="row"><legend> {this.props.personStore.successMsg} </legend></div>) : ""}
          {this.state.showErrMessage ? (<div className="row"><legend> {this.props.personStore.errorMsg}</legend></div>) : ""}
        </Dialog>
          <div className={theme.bannerRow}><span className={theme.titleBar}>Create Profile</span></div>
        <Card className={theme.profileDiv}>
          <form>
          <div className="row">
              <div className="col-sm-6">
                  <legend><span className={theme.generalColor}>Company Information</span></legend>
                <CompanyDetails updateProperty={this.updateProperty} state={this.state}
                handleMultipleChange={this.handleMultipleChange} handleMultipleChangeRND={this.handleMultipleChangeRND}
                handleMultipleChangeProd={this.handleMultipleChangeProd} srchCmpnyhandleToggleMsg={this.srchCmpnyhandleToggleMsg}
                handleSelect={this.handleSelect} setCompany={this.setCompany} handleToggleAddCmpny={this.handleToggleAddCmpny}/>
              </div>

              <div className="col-sm-6">
                <legend><span className={theme.generalColor}>Personal Information</span></legend>
                <PersonInfo updateProperty={this.updateProperty} />
              </div>
            </div>
            <br></br>
            <Button label='Submit' onClick={this.submitForm} raised primary />
          </form>
        </Card>
      </div>
    )
  }
}
