import React, { Component, PropTypes } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'

import { Input } from 'react-toolbox';
import { Button } from 'react-toolbox';
import { FontIcon } from 'react-toolbox';
import Table from 'react-toolbox/lib/table';
import CriteriaStore from '../CriteriaStore';
import AddCriteria from './AddCriteria';
import ViewCriteria from './ViewCriteria';
import theme from '../../theme/_theme.scss';

@observer
@inject('criteriaStore')
export default class CriteriaPage extends React.Component<{ criteriaStore?: CriteriaStore }, {}> {
  state = {
    active: false,
    selected: [],
    disabled: false,
    operation: '',
    source: [],
    collapse:true,
    active1:false
  };

  model = {
    name:'',
    //businessType: '',
    //country:'',
    //industry:'',
    //title:''
    createdDate: {type: String}
  };

  submitSuccess = false;

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.viewFunct = this.viewFunct.bind(this);
    this.addCriteriaFunct = this.addCriteriaFunct.bind(this);
    this.deleteFunct = this.deleteFunct.bind(this);
    this.editFunct = this.editFunct.bind(this);
  }

  componentWillMount(){
    this.props.criteriaStore.getVals();
    this.getInquiries();
  }

  getInquiries(){
    this.props.criteriaStore.getInquiries().then(() => {
      this.setState({ source: this.props.criteriaStore.myInquiriesList });
    });
  }

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  }

  handleToggle1 = () => {
    this.setState({ active1: !this.state.active1 });
  }

  handleSelect = (selectedId) => {
    this.setState({ selected: selectedId });
  };

  viewFunct() {
    this.props.criteriaStore.heading = "View Inquiry";
    this.props.criteriaStore.clearForm();
    if (this.state.selected.length != 0) {
       if(this.state.source[this.state.selected[0]].businessTypeId !=undefined){
              if(this.state.source[this.state.selected[0]].businessType =="Company" && this.state.source[this.state.selected[0]].companyTypeId!=undefined){
                this.props.criteriaStore.getCompanyType();
                this.props.criteriaStore.companyType = "";
                this.props.criteriaStore.showCompanyType = true;
                this.props.criteriaStore.companyType = this.state.source[this.state.selected[0]].companyTypeId;
              }else{
                this.props.criteriaStore.companyType = "";
                this.props.criteriaStore.showCompanyType = false;
              }
          }

      if(this.state.source[this.state.selected[0]].titleId!=undefined && this.state.source[this.state.selected[0]].titleId!=null){
        this.props.criteriaStore.getTitles(this.state.source[this.state.selected[0]].businessTypeId);
        this.setState(Object.assign({},this.state,{collapse:false}));
      }else{
        this.setState(Object.assign({},this.state,{collapse:true}));
      };

      if(this.state.source[this.state.selected[0]].industryId!=undefined && this.state.source[this.state.selected[0]].industryId!=null){
        this.props.criteriaStore.getDivision(this.state.source[this.state.selected[0]].industryId);
      }
      if(this.state.source[this.state.selected[0]].divisionId!=undefined && this.state.source[this.state.selected[0]].divisionId!=null){
        this.props.criteriaStore.divisionTemp = this.state.source[this.state.selected[0]].divisionId;
        this.props.criteriaStore.getProducts(this.state.source[this.state.selected[0]].divisionId);
      }
      if(this.state.source[this.state.selected[0]].productId!=undefined && this.state.source[this.state.selected[0]].productId!=null){
        this.props.criteriaStore.productTemp = this.state.source[this.state.selected[0]].productId;
        this.props.criteriaStore.getSubCategory(this.state.source[this.state.selected[0]].productId);
      }
      this.props.criteriaStore.name = this.state.source[this.state.selected[0]].name;
      this.props.criteriaStore.businessType = this.state.source[this.state.selected[0]].businessTypeId;
      this.props.criteriaStore.industry = this.state.source[this.state.selected[0]].industryId;
      this.props.criteriaStore.subCategory = this.state.source[this.state.selected[0]].subCategoryId;
      this.props.criteriaStore.location = this.state.source[this.state.selected[0]].countryId;
      this.props.criteriaStore.title = this.state.source[this.state.selected[0]].titleId;
      this.handleToggle1();
    }
  }

  deleteFunct() {
    if (this.state.selected.length != 0) {
      this.props.criteriaStore.id = this.state.source[this.state.selected[0]].id;
      this.props.criteriaStore.deleteInquiry().then(() => {
          this.getInquiries();
     });
    }
  }

  editFunct() {
    this.props.criteriaStore.heading = "Edit Inquiry";
    this.props.criteriaStore.clearForm();
    if (this.state.selected.length != 0) {
      if(this.state.source[this.state.selected[0]].businessTypeId !=undefined){
           this.props.criteriaStore.getTitles(this.state.source[this.state.selected[0]].businessTypeId);
           if(this.state.source[this.state.selected[0]].businessType =="Company"){
             this.props.criteriaStore.getCompanyType();
             this.props.criteriaStore.companyType = "";
             this.props.criteriaStore.showCompanyType = true;
             this.props.criteriaStore.companyType = this.state.source[this.state.selected[0]].companyTypeId;
           }else{
             this.props.criteriaStore.companyType = "";
             this.props.criteriaStore.showCompanyType = false;
           }
           this.props.criteriaStore.businessType = this.state.source[this.state.selected[0]].businessTypeId;
         }
      if(this.state.source[this.state.selected[0]].titleId !=undefined){
        this.setState(Object.assign({},this.state,{collapse:false}));
        this.props.criteriaStore.title = this.state.source[this.state.selected[0]].titleId;
      }
      if(this.state.source[this.state.selected[0]].industryId!=undefined && this.state.source[this.state.selected[0]].industryId!=null){
        this.props.criteriaStore.industry = this.state.source[this.state.selected[0]].industryId;
        this.props.criteriaStore.getDivision(this.state.source[this.state.selected[0]].industryId);
      }
      if(this.state.source[this.state.selected[0]].divisionId!=undefined && this.state.source[this.state.selected[0]].divisionId!=null){
        this.props.criteriaStore.divisionTemp = this.state.source[this.state.selected[0]].divisionId;
        this.props.criteriaStore.getProducts(this.state.source[this.state.selected[0]].divisionId);
      }
      if(this.state.source[this.state.selected[0]].productId!=undefined && this.state.source[this.state.selected[0]].productId!=null){
        this.props.criteriaStore.productTemp = this.state.source[this.state.selected[0]].productId;
        this.props.criteriaStore.getSubCategory(this.state.source[this.state.selected[0]].productId);
      }

      if(this.state.source[this.state.selected[0]].subCategoryId!=undefined && this.state.source[this.state.selected[0]].subCategoryId!=null){
        this.props.criteriaStore.subCategory = this.state.source[this.state.selected[0]].subCategoryId;
      }

      if(this.state.source[this.state.selected[0]].name!=undefined && this.state.source[this.state.selected[0]].name!=null){
        this.props.criteriaStore.name = this.state.source[this.state.selected[0]].name;
      }

      if(this.state.source[this.state.selected[0]].countryId!=undefined && this.state.source[this.state.selected[0]].countryId!=null){
        this.props.criteriaStore.location = this.state.source[this.state.selected[0]].countryId;
      }
     this.setState({ disabled: false });
     this.handleToggle();
      this.props.criteriaStore.id = this.state.source[this.state.selected[0]].id;
      this.props.criteriaStore.submitType="Edit";
    }
  }

  addCriteriaFunct() {
    this.setState(Object.assign({},this.state,{collapse:true}));
    this.props.criteriaStore.clearForm();
    this.props.criteriaStore.showCompanyType = false;
    this.setState({ disabled: false });
    this.handleToggle();
    this.props.criteriaStore.heading = "New Inquiry";
    this.props.criteriaStore.submitType="Add";
  }

  clickButton = () =>{
    this.props.criteriaStore.title="";
    this.setState(Object.assign({},this.state,{collapse:!this.state.collapse}));
  }

  submitForm() {
    if(this.props.criteriaStore.submitType=="Add"){
      this.props.criteriaStore.addInquiry().then(() => {
          this.getInquiries();
      });
    }else{
      this.props.criteriaStore.editInquiry().then(() => {
          this.getInquiries();
      });
    }
    this.handleToggle();
    this.props.criteriaStore.submitType=="";
  }

  render() {
    let actions = [
        { label: "Advanvced Options", onClick: this.clickButton , disabled:this.state.disabled },
        { label: "Submit", onClick: this.submitForm, disabled:this.state.disabled }
    ];
    return (
      <div>
        <div className={theme.bannerRow}><span className={theme.titleBar}>My Inquiries</span></div>
          <div style={{marginLeft:'61vw'}}>
           <Button raised primary onClick={this.addCriteriaFunct} label='New Inquiry' />&nbsp;
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

            <div style={{textAlign: 'center'}}>
                <Button raised primary onClick={this.viewFunct} label='View'/>&nbsp;
                <Button raised primary onClick={this.editFunct} label='Edit'/>&nbsp;
                <Button raised primary onClick={this.deleteFunct} label='Delete'/>&nbsp;
            </div>
          </div>

          <AddCriteria
            state={this.state}
            handleToggle={this.handleToggle}
            clickButton={this.clickButton}
            submitForm={this.submitForm}
            actions={actions}
            />

         <ViewCriteria
            state={this.state}
            handleToggle1={this.handleToggle1}
            />
        </div>

    )
  }
}
