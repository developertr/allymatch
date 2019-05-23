import { observable, action } from 'mobx'
import React, { Component, PropTypes } from 'react'
import { FontIcon } from 'react-toolbox/lib/font_icon';
import { fetchClient } from '../'

export default class BaseStore {
  @observable drawerActive: boolean;
  @observable active = false;
  @observable allymatches;
  @observable profile;

  @observable name;
  @observable salutation;
  @observable title;
  @observable email;
  @observable phoneNo;
  @observable mobileNo;

  @observable companyName;
  @observable businessType;
  @observable companyType;
  @observable industry;
  @observable division;
  @observable country;
  @observable product;
  @observable subCategory;
  @observable targetMarkets;
  @observable revenue;
  @observable employees;
  @observable subsidaries;
  @observable rndFacilities;
  @observable prodFacilities;

  @observable showCompanyType =false;

  @observable showMobileMSg =false;

  @action('CLEAR_FORM')
  clearForm(){
    this.name = "";
    this.salutation = "";
    this.title = "";
    this.email = "";
    this.phoneNo = "";
    this.mobileNo = "";

    this.companyName = "";
    this.businessType = "";
    this.companyType = "";
    this.industry = "";
    this.division = "";
    this.country = "";
    this.product = "";
    this.subCategory="";
    this.targetMarkets = "";
    this.revenue = "";
    this.employees = "";
    this.subsidaries = "";
    this.rndFacilities = "";
    this.prodFacilities = "";

    this.showCompanyType =false;
    this.showMobileMSg =false;
  }

  @action('SET_DETAILS')
  setDetails(details){

    this.companyName = details.name;
    if(details.businesType!=null && details.businesType!=undefined){
      this.businessType = details.businesType.name;
    }

    if(details.companyType!=null && details.companyType!=undefined){
      this.companyType = details.companyType.name;
    }

    if(details.industry!=null && details.industry!=undefined){
      this.industry = details.industry.name;
    }

    if(details.division!=null && details.division!=undefined){
      this.division = details.division.name;
    }

    if(details.country!=null && details.country!=undefined){
      this.country = details.country.name;
    }

    if(details.product!=null && details.product!=undefined){
      this.product = details.product.name;
    }

    if(details.subCategory!=null && details.subCategory!=undefined){
      this.subCategory = details.subCategory.name;
    }

    if(details.revenue!=null && details.revenue!=undefined){
      this.revenue = details.revenue.name;
    }

    if(details.employees!=null && details.employees!=undefined){
      this.employees = details.employees.name;
    }

    if(details.noOfSubsidaries!=null && details.noOfSubsidaries!=undefined){
      this.subsidaries = details.noOfSubsidaries;
    }

    this.targetMarkets = details.targetMarkets.map((m) => String(m.name)).join(",");
    this.prodFacilities = details.prodFacilities.map((m) => String(m.name)).join(",");
    this.rndFacilities = details.rndFacilities.map((m) => String(m.name)).join(",");

    let url = '/api/v2/profiles/ofCompany/'+details.id+'?access_token=' + localStorage.getItem("id_token");
    return fetchClient.request(url, { method: 'get' }).then((data) => {
      if (data && data.length > 0) {
        if(data[0].firstName!=null && data[0].firstName!=undefined){
          this.name = data[0].firstName+" "+data[0].lastName;;
        }else{
          this.name = data[0].lastName;
        }

        if(data[0].salutation!=null && data[0].salutation!=undefined){
          this.salutation = data[0].salutation.name;
        }

        if(data[0].title!=null && data[0].title!=undefined){
          this.title = data[0].title.name;
        }
        this.email = data[0].email;
        this.phoneNo = data[0].phoneNumber;
        this.mobileNo = data[0].mobileNumber;
        return data;
      }
      else {
        console.log("error in authenticating", data);
      }
    });
  }

  constructor(drawerActive = false) {
    this.drawerActive = drawerActive
  }

  @action('toggles the drawerActive')
  toggle() {
    this.drawerActive = !this.drawerActive
  }

  static fromJS(drawerActive = false) {
    const store = new BaseStore(drawerActive);
    return store;
  }

  @action('PERSON_DETAILS')
  getPersonDetails() {
    let url = 'api/v2/my/profile?access_token=' + localStorage.getItem("id_token");
    return fetchClient.request(url, { method: 'get' }).then((data) => {
      if (data) {
        this.profile = data;
        return data;
      }
      else {
        console.log("error in authenticating", data);
      }
    });
  }

  @action('GET Allymatches')
  getAllymatches() {
    let url = '/api/v3/my/allyMatches?access_token=' + localStorage.getItem("id_token");
    fetchClient.request(url, { method: 'get' }).then((data) => {
      if (data) {

        let matches = data.map((val) => {
          if(this.profile.worksFor.id == val.toCompany.id){
            return val.fromCompany ;
          }else{
            return val.toCompany;
          }
        });
        this.allymatches = matches.map((v) => { return { name: v.name, id:v.id, details:v, icon: <FontIcon style={{ color: '#11a3ab ' }} value='account_circle' /> } })
      }
      else {
        console.log("error in authenticating", data);

      }
    });
  }

}
