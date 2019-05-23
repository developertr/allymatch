import { observable, action, computed } from 'mobx';
import { fetchClient } from '../'

export default class MatchesStore {
  @observable matches = [];
  @observable selectedMatchIndex: number = 0;
  @observable myInquiriesList = [];
  @observable companyDetails;
  @observable inquiryId;
  @observable showMatches = false;
  @observable showCompanyType = false;
  @observable currentMatch;
  @observable currentMatchId;

  @observable prodFacilities;
  @observable targetMarkets;
  @observable rndFacilities;

  static fromJS(array) {
    const matchesStore = new MatchesStore();
    return matchesStore;
  }



  @action nextMatch() {
    this.currentMatchId = "";
    this.selectedMatchIndex++;
    if (this.selectedMatchIndex < this.matches.length) {
      this.currentMatch = this.matches[this.selectedMatchIndex].toCompany;
      this.currentMatchId = this.matches[this.selectedMatchIndex].id;

      if(this.currentMatch.revenue==undefined || this.currentMatch.revenue==null){
        this.currentMatch.revenue="";
      }

      if(this.currentMatch.businesType==undefined || this.currentMatch.businesType==null){
        this.currentMatch.businesType="";
      }

      if(this.currentMatch.companyType==undefined || this.currentMatch.companyType==null){
        this.currentMatch.companyType="";
      }

      if(this.currentMatch.industry==undefined || this.currentMatch.industry==null){
        this.currentMatch.industry="";
      }

      if(this.currentMatch.country==undefined || this.currentMatch.country==null){
        this.currentMatch.country="";
      }

      if(this.currentMatch.employees==undefined || this.currentMatch.employees==null){
        this.currentMatch.employees="";
      }


      if(this.currentMatch.noOfSubsidaries==undefined || this.currentMatch.noOfSubsidaries==null){
        this.currentMatch.noOfSubsidaries="";
      }

      if (this.currentMatch.companyType != null || this.currentMatch.companyType != undefined || this.currentMatch.companyType != "") {
        this.showCompanyType = true;
      } else {
        this.showCompanyType = false;
      }

      this.showMatches = true;
    } else {
      this.showMatches = false;
    }
  }

  @action('ACCEPT MATCHES')
  acceptMatch() {
    let url = '/api/my/matches/' + this.currentMatchId + '/sendRequest?access_token=' + localStorage.getItem("id_token");
    fetchClient.request(url, { method: 'put' }).then((response) => {
      this.nextMatch();
    });
  }

  @action('REJECT MATCHES')
  rejectMatch() {
    let url = '/api/my/matches/' + this.currentMatchId + '/ignoreRequest?access_token=' + localStorage.getItem("id_token");
    fetchClient.request(url, { method: 'put' }).then((response) => {
      this.nextMatch();
    });
  }

  @action('GET MATCHES')
  getMatches() {
    let url = '/api/v2/my/' + this.inquiryId + '/matches?access_token=' + localStorage.getItem("id_token");
    fetchClient.request(url, { method: 'get' }).then((data) => {
      if (data.length > 0) {
        this.matches = data;
        this.currentMatch = this.matches[this.selectedMatchIndex].toCompany;
        if(this.currentMatch.revenue==undefined || this.currentMatch.revenue==null){
          this.currentMatch.revenue="";
        }

        if(this.currentMatch.businesType==undefined || this.currentMatch.businesType==null){
          this.currentMatch.businesType="";
        }

        if(this.currentMatch.companyType==undefined || this.currentMatch.companyType==null){
          this.currentMatch.companyType="";
        }

        if(this.currentMatch.industry==undefined || this.currentMatch.industry==null){
          this.currentMatch.industry="";
        }

        if(this.currentMatch.country==undefined || this.currentMatch.country==null){
          this.currentMatch.country="";
        }

        if(this.currentMatch.employees==undefined || this.currentMatch.employees==null){
          this.currentMatch.employees="";
        }


        if(this.currentMatch.noOfSubsidaries==undefined || this.currentMatch.noOfSubsidaries==null){
          this.currentMatch.noOfSubsidaries="";
        }

        this.currentMatchId = this.matches[this.selectedMatchIndex].id;
        this.rndFacilities = this.currentMatch.rndFacilities.map((m) => m.name).join(",");
        this.targetMarkets = this.currentMatch.targetMarkets.map((m) => m.name).join(",");
        this.prodFacilities = this.currentMatch.prodFacilities.map((m) => m.name).join(",");
        if (data.length != 0) {
          this.showMatches = true;
        } else {
          this.showMatches = false;
        }

      let companyTypeVal = this.currentMatch.companyType;
        if (companyTypeVal != null && companyTypeVal != undefined && companyTypeVal != "") {
          this.showCompanyType = true;
        } else {
          this.showCompanyType = false;
        }

      }
    });
  }

  @action('GET_INQUIRIES')
  getInquiries() {
    return fetchClient.request('api/v2/my/inquiries?access_token=' + localStorage.getItem("id_token"), { method: 'get' }).then((data) => {
      if (data) {
        this.myInquiriesList = data.map((inqType) => { return { value: inqType.id, label: inqType.name } });
      }
      else {
        console.log("error in authenticating", data);
      }
    });
  }
}
