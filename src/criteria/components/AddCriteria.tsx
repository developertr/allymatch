import React, { Component, PropTypes } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import { Input, Button, Dialog, Dropdown, Autocomplete } from 'react-toolbox';
import CriteriaStore from '../CriteriaStore';
import theme from '../../theme/_theme.scss';

@inject('criteriaStore')
@observer
export default class AddCriteria extends React.Component<{
    criteriaStore?: CriteriaStore, handleToggle: (value: any, key: any) => void,clickButton: () => void, submitForm: () => void,
    state: any,actions:any
}, {}>  {

    constructor(props) {
        super(props);
        this.updateProperty = this.updateProperty.bind(this);
    }

    updateProperty(value, key) {
    if(key.target.name=="businessType"){
        this.props.criteriaStore.getTitles(value);
        if(key.target.textContent=="Company"){
          this.props.criteriaStore.companyType = "";
          this.props.criteriaStore.showCompanyType = true;
          this.props.criteriaStore.getCompanyType();
        }else{
          this.props.criteriaStore.companyType = "";
          this.props.criteriaStore.showCompanyType = false;
        }
      }
        this.props.criteriaStore[key.target.name] = value;
    }

    handleChangeIndustry = (value) => {
      this.props.criteriaStore.industry = value;
      this.props.criteriaStore.getDivision(value);
    };

    handleChangeDivision = (value) => {
      this.props.criteriaStore.division = value;
      this.props.criteriaStore.divisionTemp = "";
      this.props.criteriaStore.getProducts(value);
    };

    handleChangeProduct = (value) => {
      this.props.criteriaStore.product = value;
      this.props.criteriaStore.productTemp = "";
      this.props.criteriaStore.getSubCategory(value);
    };

    handleChangeSubCategory = (value) => {
      this.props.criteriaStore.subCategory = value;
    };

    handleChangeLocation = (value) => {
      this.props.criteriaStore.location = value;
    };

    handleChangeTitle = (value) => {
      this.props.criteriaStore.title = value;
    };

    render() {
        let {criteriaStore} = this.props;
        const {state, handleToggle,clickButton,submitForm,actions} = this.props;

        return (
            <div>
                <Dialog
                    active={state.active}
                    onEscKeyDown={handleToggle}
                    onOverlayClick={handleToggle}
                    className={theme.newInquiryScroll}
                    actions={actions}>

                    <form>
                    <div className={theme.bannerRow}><span className={theme.titleBarNewInquiry}>{criteriaStore.heading}</span></div>
                    <div className="row">
                       <div className="col-sm-2" >
                       </div>
                      <div className="col-sm-8" >
                        <Input type='text' label='Name' disabled={state.disabled} value={criteriaStore.name} onChange={this.updateProperty} name='name' maxLength={50}/>
                        <span className={theme.generalFont}>I'm seeking a match with a</span>
                        <Dropdown
                            auto={false}
                            source={criteriaStore.businessTypeList}
                            label='Select Business Type'
                            name="businessType"
                            onChange={this.updateProperty}
                            value={criteriaStore.businessType}
                            disabled={state.disabled}
                            />
                            {criteriaStore.showCompanyType ?
                            (
                              <Dropdown
                                auto={false}
                                source={criteriaStore.companyTypeList}
                                label='Select Company Type'
                                name="companyType"
                                onChange={this.updateProperty}
                                value={criteriaStore.companyType}
                                disabled={state.disabled}
                                className={theme.extraFields}
                                />
                            ) : ""}
                        <span className={theme.generalFont}>in the</span>
                        <Autocomplete
                          direction="down"
                          label='Industry'
                          multiple={false}
                          onChange={this.handleChangeIndustry}
                          value={criteriaStore.industry}
                          source={criteriaStore.industryList}
                          onQueryChange={(val) => {
                              	criteriaStore.industry = val;
                                criteriaStore.division = "";
                                criteriaStore.product = "";
                                criteriaStore.subCategory = "";
                        			}}
                          />
                        <Autocomplete
                          direction="down"
                          source={criteriaStore.divisionList}
                          label='Division'
                          multiple={false}
                          onChange={this.handleChangeDivision}
                          value={criteriaStore.division}
                          disabled={state.disabled}
                          onQueryChange={(val) => {
                                criteriaStore.division = val;
                                criteriaStore.product = "";
                                criteriaStore.subCategory = "";
                              }}
                            />
                        <Autocomplete
                          direction="down"
                          source={criteriaStore.productList}
                          label='Group'
                          multiple={false}
                          onChange={this.handleChangeProduct}
                          value={criteriaStore.product}
                          disabled={state.disabled}
                          onQueryChange={(val) => {
                                criteriaStore.product = val;
                                criteriaStore.subCategory = "";
                              }}
                        />
                        <Autocomplete
                          direction="down"
                          source={criteriaStore.subCategoryList}
                          label='Sub-Category'
                          multiple={false}
                          onChange={this.handleChangeSubCategory}
                          value={criteriaStore.subCategory}
                          disabled={state.disabled}
                          onQueryChange={(val) => {
                                criteriaStore.subCategory = val;
                              }}
                        />
                        <span className={theme.generalFont}>industry, located in</span>
                        <Autocomplete
                          direction="down"
                          source={criteriaStore.countryList}
                          label='Select Location'
                          multiple={false}
                          onChange={this.handleChangeLocation}
                          value={criteriaStore.location}
                          disabled={state.disabled}
                          onQueryChange={(val) => {
                                criteriaStore.location = val;
                              }}
                        />
                            {!state.collapse ? (<div>
                              <Autocomplete
                                direction="down"
                                source={criteriaStore.titleList}
                                label='Title'
                                multiple={false}
                                onChange={this.handleChangeTitle}
                                value={criteriaStore.title}
                                disabled={state.disabled}
                                onQueryChange={(val) => {
                                      criteriaStore.title = val;
                                    }}
                                />
                            </div>) : (<div></div>)}
                      </div>
                    </div>

                    </form>
                </Dialog>
            </div>
        )
    }
}
