import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, toJS } from 'mobx';
import { Input } from 'react-toolbox';
import { DatePicker } from 'react-toolbox';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox';
import PersonStore from '../PersonStore';
import theme from '../../theme/_theme.scss';
import { Button } from 'react-toolbox';
import { Link } from 'react-toolbox';
import { Dropdown } from 'react-toolbox';
import { Autocomplete } from 'react-toolbox';

@inject('personStore')
@observer
export default class ViewProfile extends React.Component<{ personStore?: PersonStore }, {}> {

  constructor(props) {
    super(props);
    this.updateProperty = this.updateProperty.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  componentWillMount() {
    this.props.personStore.clearForm();
    this.props.personStore.getVals();
    this.props.personStore.getLocation().then(() =>{
      this.props.personStore.getPersonDetails().then(()=>{
      this.state.multiple=this.props.personStore.displayValTrgtMrkt;
      this.state.multipleProd=this.props.personStore.displayValProdFac;
      this.state.multipleRnD=this.props.personStore.displayValRnDFac;

      //Display multiple values for new feature
      //this.props.personStore.industryDisp = this.props.personStore.industryClass.map((m) => m.industry).map((m) => m.name).join(",");
      //this.props.personStore.divisionDisp = this.props.personStore.industryClass.map((m) => m.division).map((m) => m.name).join(",");
      //this.props.personStore.productDisp = this.props.personStore.industryClass.map((m) => m.product).map((m) => m.name).join(",");
      //this.props.personStore.subCategoryDisp = this.props.personStore.industryClass.map((m) => m.subCategory).map((m) => m.name).join(",");

      let indList = this.props.personStore.industryClass.map((m) => m.industry).map((m) => m.name);
      this.props.personStore.industryDisp = indList.filter((v, i) => indList.indexOf(v) === i).join(",");

      let divList = this.props.personStore.industryClass.map((m) => m.division).map((m) => m.name);
      this.props.personStore.divisionDisp = divList.filter((v, i) => divList.indexOf(v) === i).join(",");

      let prodList = this.props.personStore.industryClass.map((m) => m.product).map((m) => m.name);
      this.props.personStore.productDisp = prodList.filter((v, i) => prodList.indexOf(v) === i).join(",");

      let subCatList = this.props.personStore.industryClass.map((m) => m.subCategory).filter((m)=>m!=null).map((m) => m.name);
      this.props.personStore.subCategoryDisp = subCatList.filter((v, i) => subCatList.indexOf(v) === i).join(",");
      });
    });
  }

  state = {
    multiple:[],multipleProd:[],multipleRnD:[]
  }

  updateProperty(value, key) {
      this.props.personStore[key.target.name] = value;
  }

  uploadFile= e =>{
    this.props.personStore.uploadDisplayPicture(e.target.files[0]);
    console.log(e.target.files[0]);
  }
  upload = () => {
    alert();
  };

  render() {

    let {personStore} = this.props

    return (
      <div>
      <div className={theme.bannerRow}><span className={theme.titleBar}>My Profile</span></div>
        <Card className={theme.profileDiv}>
          <p>&nbsp;</p>
          <div className="row">
            <div className="col-sm-6">
              <legend><span className={theme.generalColor}>Company Information</span></legend>
              <Input type='text' label='Company Name' value={personStore.companyName} disabled={true} />
              <Dropdown
                auto={false}
                source={personStore.businessTypeList}
                label='Business Type'
                name="businessType"
                onChange={this.updateProperty}
                value={personStore.businessType}
                disabled={true}
                />
                {personStore.showCompanyType ?
                (
                  <Dropdown
                    auto={false}
                    source={personStore.companyTypeList}
                    label='Company Type'
                    name="companyType"
                    onChange={this.updateProperty}
                    value={personStore.companyType}
                    disabled={true}
                    className={theme.extraFields}
                    />
                ) : ""}

                <Input type='text' label='Industry * ' multiline disabled={true} value={personStore.industryDisp} name="companyName"/>
                <Input type='text' label='Division * ' multiline className={theme.extraFields} disabled={true} value={personStore.divisionDisp} name="companyName"/>
                <Input type='text' label='Product * ' multiline className={theme.extraFields} disabled={true} value={personStore.productDisp} name="companyName"/>
                <Input type='text' label='SubCategory ' multiline className={theme.extraFields} disabled={true} value={personStore.subCategoryDisp} name="companyName"/>
                <Autocomplete
                  direction="down"
                  source={personStore.countryListAuto}
                  label='Country * '
                  multiple={false}
                  value={personStore.country}
                  disabled={true}
                />
              <Autocomplete
                direction="down"
                selectedPosition="above"
                label="Target Markets (Industries) *"
                source={personStore.industryListAuto}
                value={this.state.multiple}
                disabled={true}
              />
              <Autocomplete
                direction="down"
                selectedPosition="above"
                label="Production Facilities"
                source={personStore.countryListAuto}
                value={this.state.multipleProd}
                disabled={true}
              />
              <Autocomplete
                direction="down"
                selectedPosition="above"
                label="R&D Facilities"
                source={personStore.countryListAuto}
                value={this.state.multipleRnD}
                disabled={true}
              />
              <Dropdown
                auto={false}
                source={personStore.revenueList}
                label='Revenue'
                name="revenue"
                onChange={this.updateProperty}
                value={personStore.revenue}
                disabled={true}
              />
              <Dropdown
                auto={false}
                source={personStore.employeeList}
                label='Employees *'
                name="employees"
                onChange={this.updateProperty}
                value={personStore.employees}
                disabled={true}
              />

              <Input type='text' label='No of Subsidaries *' disabled={true}
              value={personStore.subsidaries} name="subsidaries" maxLength={5} onChange={this.updateProperty}/>

            </div>

            <div className="col-sm-6">
            <legend><span className={theme.generalColor}>Personal Information</span></legend>
              <Input type='text' label='Name' value={personStore.name} disabled={true} />

              <Dropdown
                auto={false}
                source={personStore.salutationList}
                label='Salutation'
                name="salutation"
                onChange={this.updateProperty}
                value={personStore.salutation}
                disabled={true}
                />
                <Autocomplete
                  direction="down"
                  source={personStore.titleList}
                  label='Title * '
                  multiple={false}
                  value={personStore.title}
                  disabled={true}
                  />

              <Input type='text' label='Email' icon='email' value={personStore.email} disabled={true} />
              <Input type='text' label='Phone Number' icon='phone' value={personStore.phoneNo} disabled={true} />
              <Input type='text' label='Mobile Number' icon='phone' value={personStore.mobileNo} disabled={true} />
            </div>
          </div>
          <br></br>
          <Button label="Edit Profile" href="/#/edit_profile" raised primary/>
        </Card>
      </div>
    )
  }
}
