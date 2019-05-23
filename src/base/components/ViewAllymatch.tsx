import React from 'react';
import { observer, inject } from 'mobx-react';
import { observable, toJS } from 'mobx';
import { Input } from 'react-toolbox';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox';
import BaseStore from '../store';
import theme from '../../theme/_theme.scss';
import { Link } from 'react-toolbox';

@inject('baseStore')
@observer
export default class ViewProfile extends React.Component<{ baseStore: BaseStore, children: any }, {}> {

  constructor(props) {
    super(props);
  }

  render() {

    let {baseStore} = this.props

    return (
      <div>
      <div className={theme.bannerRow}><span className={theme.titleBar}>Allymatch Profile</span></div>
        <Card className={theme.profileDiv}>
          <p>&nbsp;</p>
          <div className="row">
            <div className="col-sm-6">
              <legend><span className={theme.generalColor}>Company Information</span></legend>
              <Input type='text' label='Company Name' value={baseStore.companyName} disabled={true} />
              <Input type='text' label='Business Type' value={baseStore.businessType} disabled={true} />
                {baseStore.showCompanyType ?
                (
                  <Input type='text' label='Company Type' value={baseStore.companyType} disabled={true} />
                ) : ""}
              <Input type='text' label='Industry' value={baseStore.industry} disabled={true} />
              <Input type='text' label='Division' value={baseStore.division} disabled={true} />
              <Input type='text' label='Group' value={baseStore.product} disabled={true} />
              <Input type='text' label='Sub-Category' value={baseStore.subCategory} disabled={true} />
              <Input type='text' label='Country' value={baseStore.country} disabled={true} />
              <Input type='text' label='Target Markets' value={baseStore.targetMarkets} disabled={true} />
              <Input type='text' label='Production Facilities' value={baseStore.prodFacilities} disabled={true} />
              <Input type='text' label='R&D Facilities' value={baseStore.rndFacilities} disabled={true} />
              <Input type='text' label='Revenue' value={baseStore.revenue} disabled={true} />
              <Input type='text' label='Employees' value={baseStore.employees} disabled={true} />
              <Input type='text' label='No of Subsidaries' disabled={true} value={baseStore.subsidaries}/>
            </div>
            <div className="col-sm-6">
            <legend><span className={theme.generalColor}>Personal Information</span></legend>
              <Input type='text' label='Name' value={baseStore.name} disabled={true} />
              <Input type='text' label='Salutation' value={baseStore.salutation} disabled={true} />
              <Input type='text' label='Title' value={baseStore.title} disabled={true} />
              <Input type='text' label='Email' icon='email' value={baseStore.email} disabled={true} />
              <Input type='text' label='Phone Number' icon='phone' value={baseStore.phoneNo} disabled={true} />
              <Input type='text' label='Mobile Number' icon='phone' value={baseStore.mobileNo} disabled={true} />
            </div>
          </div>
        </Card>
      </div>
    )
  }
}
