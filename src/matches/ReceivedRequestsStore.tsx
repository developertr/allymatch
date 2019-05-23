import { observable, action, computed } from 'mobx';
import { fetchClient } from '../'

export default class ReceivedRequestsStore {
  @observable matches = [];
  @observable tableSource = [];
  @observable searchSource = [];
  @observable currentRequestId;
  @observable crntRqtOrgName;
  @observable successMsg;
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
    const receivedRequestsStore = new ReceivedRequestsStore();
    return receivedRequestsStore;
  }

  @action('ACCEPT REQUEST')
  acceptRequest() {
    let url = '/api/my/receivedRequests/' + this.currentRequestId + '/accept?access_token=' + localStorage.getItem("id_token");
    return fetchClient.request(url, { method: 'put' });
  }

  @action('REJECT REQUEST')
  rejectRequest() {
    let url = '/api/my/receivedRequests/' + this.currentRequestId + '/reject?access_token=' + localStorage.getItem("id_token");
    return fetchClient.request(url, { method: 'put' });
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

  @action('GET RECEIVED REQUESTS')
  getReceivedRequests() {
    this.tableSource = [];
    this.searchSource = [];
    let url = '/api/v3/my/receivedRequests?access_token=' + localStorage.getItem("id_token");
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
      let id = val.id;
      let businessType = null;
      let companyName = val.fromCompany.name;
      if (val.fromCompany.businesType != undefined) { businessType = val.fromCompany.businesType.name }

      let companyType = null;
      if (val.fromCompany.companyType != undefined) { companyType = val.fromCompany.companyType.name }

      let country = null;
      if (val.fromCompany.country != undefined) { country = val.fromCompany.country.name }

      let employees = null;
      if (val.fromCompany.employees != undefined) { employees = val.fromCompany.employees.name }

      let industry = null;
      if (val.fromCompany.industry != undefined) { industry = val.fromCompany.industry.name }

      let noOfSubsidaries = null;
      if (val.fromCompany.noOfSubsidaries != undefined) { noOfSubsidaries = val.fromCompany.noOfSubsidaries }

      let prodFacilities = null;
      if (val.fromCompany.prodFacilities.length != 0) { prodFacilities = val.fromCompany.prodFacilities.map((m) => m.name).join(","); }

      let revenue = null;
      if (val.fromCompany.revenue != undefined) { revenue = val.fromCompany.revenue.name }

      let rndFacilities = null;
      if (val.fromCompany.rndFacilities.length != 0) { rndFacilities = val.fromCompany.rndFacilities.map((m) => m.name).join(","); }

      let targetMarkets = null;
      if (val.fromCompany.targetMarkets.length != 0) { targetMarkets = val.fromCompany.targetMarkets.map((m) => m.name).join(","); }

      let createdDate = null;
      if (val.createdDate.length != 0) { createdDate = val.createdDate.split("T")[0] }

      let value = {
        id: id,
        companyName: companyName,
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
        Request_Received_On: createdDate
      }

      this.tableSource.push(value);
    });

    return this.tableSource;
  }
}
