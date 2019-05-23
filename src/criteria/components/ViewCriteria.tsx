import React, { Component, PropTypes } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import { Input, Button, Dialog, Dropdown, Autocomplete } from 'react-toolbox';
import CriteriaStore from '../CriteriaStore';
import theme from '../../theme/_theme.scss';

@inject('criteriaStore')
@observer
export default class AddCriteria extends React.Component<{
    criteriaStore?: CriteriaStore, handleToggle1: (value: any, key: any) => void,state: any
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

    render() {
        let {criteriaStore} = this.props;
        const {state, handleToggle1} = this.props;

        return (
            <div>
                <Dialog
                    active={state.active1}
                    onEscKeyDown={handleToggle1}
                    onOverlayClick={handleToggle1}
                    className={theme.newInquiryScroll}>

                    <form>
                    <div className={theme.bannerRow}><span className={theme.titleBarNewInquiry}>{criteriaStore.heading}</span></div>
                    <div className="row">
                       <div className="col-sm-2" >
                       </div>
                      <div className="col-sm-8" >
                        <Input type='text' label='Name' disabled={true} value={criteriaStore.name} onChange={this.updateProperty} name='name' maxLength={16}/>
                        <span className={theme.generalFont}>I'm seeking a match with a</span>
                        <Dropdown
                            auto={false}
                            source={criteriaStore.businessTypeList}
                            label='Select Business Type'
                            name="businessType"
                            onChange={this.updateProperty}
                            value={criteriaStore.businessType}
                            disabled={true}
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
                                disabled={true}
                                className={theme.extraFields}
                                />
                            ) : ""}
                        <span className={theme.generalFont}>in the</span>
                        <Autocomplete
                          direction="down"
                          label='Industry'
                          multiple={false}
                          value={criteriaStore.industry}
                          source={criteriaStore.industryList}
                          disabled={true}
                          />
                        <Autocomplete
                          direction="down"
                          source={criteriaStore.divisionList}
                          label='Division'
                          multiple={false}
                          value={criteriaStore.division}
                          disabled={true}
                            />
                        <Autocomplete
                          direction="down"
                          source={criteriaStore.productList}
                          label='Group'
                          multiple={false}
                          value={criteriaStore.product}
                          disabled={true}
                        />
                        <Autocomplete
                          direction="down"
                          source={criteriaStore.subCategoryList}
                          label='Sub-Category'
                          multiple={false}
                          value={criteriaStore.subCategory}
                          disabled={true}
                        />
                        <span className={theme.generalFont}>industry, located in</span>
                        <Autocomplete
                          direction="down"
                          source={criteriaStore.countryList}
                          label='Select Location'
                          multiple={false}
                          value={criteriaStore.location}
                          disabled={true}
                        />
                            {!state.collapse ? (<div>
                              <Autocomplete
                                direction="down"
                                source={criteriaStore.titleList}
                                label='Title'
                                multiple={false}
                                value={criteriaStore.title}
                                disabled={true}
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
