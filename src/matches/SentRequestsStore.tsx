import { observable, action, computed } from 'mobx';
import { fetchClient } from '../'

export default class SentRequestsStore {
  @observable matches = [];
  @observable tableSource = [];
  @observable searchSource = [];
  @observable currentRequest = {
    businessType: '',
    companyType: '',
    country: '',
    employees: '',
    industry: '',
    noOfSubsidaries: '',
    prodFacilities: '',
    revenue: '',
    rndFacilities: '',
    targetMarkets: '',
    createdDate: ''
  };

  static fromJS(array) {
    const sentRequestsStore = new SentRequestsStore();
    return sentRequestsStore;
  }

  @action('FILTER')
  filter(value) {
    let source = this.tableSource.filter(
      (m) => {
        return m.businessType == value;
      }
    );
    this.tableSource = source;
  }

  @action('GET MATCHES')
  getMatches() {
    this.tableSource = [];
    this.searchSource = [];
    let url = '/api/v2/my/sentRequests?access_token=' + localStorage.getItem("id_token");
    return fetchClient.request(url, { method: 'get' }).then((data) => {
      if (data) {
        this.matches = data;
        return data;
      }
      else {
        console.log("error in authenticating", data);
      }
    }).then(() => {
      return this.getDetails();
    });
  }

  @action('GET DETAILS')
  getDetails() {
    this.matches.map((val) => {
      let businessType = null;
      if (val.toCompany.businesType != undefined) { businessType = val.toCompany.businesType.name }

      let companyType = null;
      if (val.toCompany.companyType != undefined) { companyType = val.toCompany.companyType.name }

      let country = null;
      if (val.toCompany.country != undefined) { country = val.toCompany.country.name }

      let employees = null;
      if (val.toCompany.employees != undefined) { employees = val.toCompany.employees.name }

      let industry = null;
      if (val.toCompany.industry != undefined) { industry = val.toCompany.industry.name }

      let noOfSubsidaries = null;
      if (val.toCompany.noOfSubsidaries != undefined) { noOfSubsidaries = val.toCompany.noOfSubsidaries }

      let prodFacilities = null;
      if (val.toCompany.prodFacilities.length != 0) { prodFacilities = val.toCompany.prodFacilities.map((m) => m.name).join(","); }

      let revenue = null;
      if (val.toCompany.revenue != undefined) { revenue = val.toCompany.revenue.name }

      let rndFacilities = null;
      if (val.toCompany.rndFacilities.length != 0) { rndFacilities = val.toCompany.rndFacilities.map((m) => m.name).join(","); }

      let targetMarkets = null;
      if (val.toCompany.targetMarkets.length != 0) { targetMarkets = val.toCompany.targetMarkets.map((m) => m.name).join(","); }

      let createdDate = null;
      if (val.createdDate.length != 0) { createdDate = val.createdDate.split("T")[0] }

      let value = {
        businessType: businessType,
        companyType: companyType,
        country: country,
        employees: employees,
        industry: industry,
        noOfSubsidaries: noOfSubsidaries,
        prodFacilities: prodFacilities,
        revenue: revenue,
        rndFacilities: rndFacilities,
        targetMarkets: targetMarkets,
        Request_Sent_On: createdDate
      }

      this.tableSource.push(value);
    });
    return this.tableSource;
  }
}
