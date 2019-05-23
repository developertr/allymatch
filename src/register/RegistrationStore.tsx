import { FetchClient, Interceptor} from 'intercept-fetch';
import { observable, action } from 'mobx';
import { fetchClient } from '../'

export default class RegistrationStore {

	@observable firstName;
	@observable lastName;
	@observable salutation;
	@observable title="";
	@observable email;
	@observable companyName;
	@observable businessType;
	@observable industry="";
	@observable companyLocation="";
	@observable companyWebsite;
	@observable motivationReason = [];
	@observable betaTest;
	@observable international = 'Yes';
	@observable agreePolicy;

	@observable businessTypeList = [];
	@observable companyLocList = [];
	@observable industryList = [];
	@observable titleList = [];
	@observable salutationList = [];
	@observable motivationList = [
		{ "name": "Finding a new business partner", "value": false },
		{ "name": "Finding a new innovation partner", "value": false },
		{ "name": "Finding an investment partner", "value": false },
		{ "name": "Attract new business into the country", "value": false },
		{ "name": "Find new clients", "value": false }
	];
	@observable betaList = [
		"Personal invitation through email",
		"Personal invitation through phone call",
		"Personal recommendation",
		"Recommendation from an EDO",
		"Through Social Media",
		"Through a Search Engine",
		"Other"
	];
	@observable eventList = [
		"Trade Show ",
		"Personal invitation through email",
		"Personal invitation through phone call",
		"Personal recommendation",
		"Recommendation from an EDO",
		"Through Social Media",
		"Through a Search Engine",
		"Other"
	]

	@observable errorMsg;
	@observable successMsg = "Thank you for your interest in allymatch.We will process your information for verification. We shall get back to you shortly with additional information if you have been accepted.";
	@observable successMsg2 = "Thank you for your interest in allymatch4Events.We will process your information for verification. We shall get back to you shortly with additional information if you have been accepted.";
	@observable showOtherTitle = false;
	@observable otherTitle;
	@observable submitVar = false;


	@observable companyId;
	@observable userCompany="";
	@observable companyList =[];
	@observable eventPIDisable = true;

	fetchClient2 = new FetchClient();

	static fromJS(array) {
		const registrationStore = new RegistrationStore();
		return registrationStore;
	}

	@action('VALIDATE')
	validate() {
		let motivations = this.motivationList.filter((m) => m.value).map((m) => m.name).join(",");
		if (this.firstName == "" || this.firstName == undefined || this.lastName == "" || this.lastName == undefined
			|| this.salutation == "" || this.salutation == undefined || this.title == "" || this.title == undefined
			|| this.email == "" || this.email == undefined || this.companyName == "" || this.companyName == undefined
			|| this.businessType == "" || this.businessType == undefined || this.industry == "" || this.industry == undefined
			|| this.companyLocation == "" || this.companyLocation == undefined || this.companyWebsite == "" || this.companyWebsite == undefined
			|| this.betaTest == "" || this.betaTest == undefined || this.international == "" || this.international == undefined
			|| this.agreePolicy == "" || this.agreePolicy == undefined || motivations.length == 0) {
			this.errorMsg = "Please enter the required information into all of the fields."
			return false
		} else if (!(/^[a-zA-Z- ]*$/).test(this.firstName)) {
			this.errorMsg = "Incorrect First Name. Use only letters"
			return false;
		} else if (!(/^[a-zA-Z- ]*$/).test(this.lastName)) {
			this.errorMsg = "Incorrect Last Name. Use only letters"
			return false;
		} else if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.email)) {
			this.errorMsg = "Incorrect Email"
			return false;
		} else if (!(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|Www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/).test(this.companyWebsite)) {
			this.errorMsg = "Incorrect Company website"
			return false;
		} else {
			return true;
		}

	}

	@action('GET TITLES')
	getTitles(id) {
		let url = 'api/business-types/' + id;
		fetchClient.request(url, { method: 'get' }).then((data) => {
			if (data) {
				let titles = data.hasTitles;
				this.titleList = titles.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
			}
			else {
				console.log("error in authenticating", data);

			}
		});
	}

	@action('GET VALS')
	getVals() {
		fetchClient.request('api/business-types', { method: 'get' }).then((data) => {
			if (data) {
				this.businessTypeList = data.map((bType) => { return { value: bType.id, label: bType.name } });
			}
			else {
				console.log("error in authenticating", data);

			}
		});

		//GET Salutation
		fetchClient.request('api/salutations', { method: 'get' }).then((data) => {
			if (data) {
				this.salutationList = data.map((sal) => { return { value: sal.id, label: sal.name } });
			}
			else {
				console.log("error in authenticating", data);

			}
		});


		//GET location
		fetchClient.request('api/countries/all', { method: 'get' }).then((data) => {
			if (data) {
				this.companyLocList = data.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
			}
			else {
				console.log("error in authenticating", data);

			}
		});

		//GET IndustryList
		fetchClient.request('api/industries/all', { method: 'get' }).then((data) => {
			if (data) {
				this.industryList = data.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
			}
			else {
				console.log("error in authenticating", data);
			}
		});
	}

	@action('CLEAR_FORM')
	clearForm() {
		this.firstName = "";
		this.lastName = "";
		this.salutation = "";
		this.title = "";
		this.email = "";
		this.companyName = "";
		this.businessType = "";
		this.industry = "";
		this.companyLocation = "";
		this.companyWebsite = "";
		this.motivationList.forEach((m) => m.value = false)
		this.betaTest = "";
		this.international = "";
		this.agreePolicy = "";
		this.showOtherTitle = false;
		this.otherTitle = "";

		this.companyId = "";
		this.userCompany = "";
		this.companyList = [];
		this.eventPIDisable = true;
	}

	@action('ADD_TITLE')
	addTitle() {
		return fetchClient.request('/api/titles', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.otherTitle
			})
		}).then((data) => {
			if (data) {
				this.title = data.id;
				return this.submitForm();
			}
			else {
				console.log("error in authenticating", data);
			}
		});
	}

	@action('SUBMIT_FORM')
	submitForm() {
		let motivations = this.motivationList.filter((m) => m.value).map((m) => m.name).join(",");
		return fetchClient.request('/api/reg-users', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				companyName: this.companyName,
				companyWebsite: this.companyWebsite,
				salutationId: this.salutation,
				titleId: this.title,
				businessTypeId: this.businessType,
				countryId: this.companyLocation,
				industryId: this.industry,
				operatingInternational: this.international == "Yes",
				motivations: motivations,
				betaTest: this.betaTest
			})
		})
	}



	///Events Functions

	@action('VALIDATE USER')
	validateUser(){
		let motivations = this.motivationList.filter((m) => m.value).map((m) => m.name).join(",");
		if (this.firstName == "" || this.firstName == undefined || this.lastName == "" || this.lastName == undefined
			|| this.salutation == "" || this.salutation == undefined || this.title == "" || this.title == undefined
			|| this.email == "" || this.email == undefined
			|| this.betaTest == "" || this.betaTest == undefined || this.international == "" || this.international == undefined
			|| this.agreePolicy == "" || this.agreePolicy == undefined || motivations.length == 0 || this.userCompany=='' || this.userCompany==undefined) {
			this.errorMsg = "Please enter the required information into all of the fields."
			return false
		} else if (!(/^[a-zA-Z- ]*$/).test(this.firstName)) {
			this.errorMsg = "Incorrect First Name. Use only letters"
			return false;
		} else if (!(/^[a-zA-Z- ]*$/).test(this.lastName)) {
			this.errorMsg = "Incorrect Last Name. Use only letters"
			return false;
		} else if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.email)) {
			this.errorMsg = "Incorrect Email"
			return false;
		} else {
			return true;
		}
	}

	private eventUrl:string = 'http://54.70.168.143'
	//private eventUrl:string = 'http://localhost:8000'

	@action('GET VALS USER')
	getValsUser() {

		//GET Salutation
		this.fetchClient2.request(this.eventUrl + '/api/salutations', { method: 'get' }).then((data) => {
			if (data) {
				this.salutationList = data.map((sal) => { return { value: sal.id, label: sal.name } });
			}
			else {
				console.log("error in authenticating", data);
			}
		});

		//Get all companies
		/*this.fetchClient2.request(this.eventUrl + '/api/companies/all', { method: 'get' }).then((data) => {
			if (data) {
				this.companyList = data.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
			}
			else {
				console.log("error in authenticating", data);

			}
		});*/

		//Get all titles
		let url = this.eventUrl + '/api/titles/all';
		this.fetchClient2.request(url, { method: 'get' }).then((data) => {
			if (data) {
				let titles = data;
				this.titleList = titles.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
			}
			else {
				console.log("error in authenticating", data);

			}
		});
	}

	@action('GET VALS EVENTS')
	getValsEvent() {
		this.fetchClient2.request(this.eventUrl + '/api/business-types', { method: 'get' }).then((data) => {
			if (data) {
				this.businessTypeList = data.map((bType) => { return { value: bType.id, label: bType.name } });
			}
			else {
				console.log("error in authenticating", data);

			}
		});

		//GET Salutation
		this.fetchClient2.request(this.eventUrl + '/api/salutations', { method: 'get' }).then((data) => {
			if (data) {
				this.salutationList = data.map((sal) => { return { value: sal.id, label: sal.name } });
			}
			else {
				console.log("error in authenticating", data);

			}
		});


		//GET location
		this.fetchClient2.request(this.eventUrl + '/api/countries/all', { method: 'get' }).then((data) => {
			if (data) {
				this.companyLocList = data.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
			}
			else {
				console.log("error in authenticating", data);

			}
		});

		//GET IndustryList
		this.fetchClient2.request(this.eventUrl + '/api/industries/all', { method: 'get' }).then((data) => {
			if (data) {
				this.industryList = data.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
			}
			else {
				console.log("error in authenticating", data);
			}
		});
	}

	@action('SUBMIT_FORM_EVENT')
	submitFormEvent() {
		let motivations = this.motivationList.filter((m) => m.value).map((m) => m.name).join(",");
		return this.fetchClient2.request(this.eventUrl + '/api/reg-users', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				companyName: this.companyName,
				companyWebsite: this.companyWebsite,
				salutationId: this.salutation,
				titleId: this.title,
				businessTypeId: this.businessType,
				countryId: this.companyLocation,
				industryId: this.industry,
				motivations: motivations,
				betaTest: this.betaTest
			})
		})
	}

	@action('GET TITLES EVENT')
	getTitlesEvent(id) {
		let url = this.eventUrl + '/api/business-types/' + id;
		this.fetchClient2.request(url, { method: 'get' }).then((data) => {
			if (data) {
				let titles = data.hasTitles;
				this.titleList = titles.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
			}
			else {
				console.log("error in authenticating", data);

			}
		});
	}

	@action('SUBMIT_FORM_USER')
	submitFormUser() {
		let motivations = this.motivationList.filter((m) => m.value).map((m) => m.name).join(",");
		return this.fetchClient2.request(this.eventUrl + '/api/registerForEvent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				companyId: this.userCompany,
				salutationId: this.salutation,
				titleId: this.title,
				operatingInternational: this.international == "Yes",
				motivations: motivations,
				betaTest: this.betaTest
			})
		})
	}

	@action('ACTIVATE_USER')
	activateUser(key) {
		return this.fetchClient2.request(this.eventUrl + '/api/activateEventUser?key='+key, {method: 'get'});
	}

	@action('GET_COMPANIES')
	fetchCompanies(query:string) {
		this.fetchClient2.request(this.eventUrl + '/api/v2/companies/all?q='+query, { method: 'get' }).then((data) => {
			if (data) {
				this.companyList = data.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
			}
			else {
				console.log("error in authenticating", data);

			}
		});
	}
}
