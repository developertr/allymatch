import { observable, action } from 'mobx';
import { fetchClient } from '../'


export default class PersonStore {

	@observable id;
	@observable firstname;
	@observable lastname;
	@observable name;
	@observable salutation;
	@observable title;
	@observable email;
	@observable phoneNo;
	@observable mobileNo;
	@observable picture;
	@observable pictureContentType;
	@observable birthDate;
	@observable userId;
	@observable companyId;
	@observable companyName;
	@observable businessType;
	@observable companyType;
	@observable country;
	@observable targetMarkets;
	@observable revenue;
	@observable employees;
	@observable subsidaries=null;
	@observable rndFacilities;
	@observable prodFacilities;


	@observable divisionTemp;
	@observable titleTemp;
	@observable productTemp;
	@observable subCategoryTemp;

	@observable countryList = [];
	@observable titleList = {};
	@observable salutationList = [];
	@observable businessTypeList = [];
	@observable companyTypeList = [];
	@observable industryList = [];
	@observable divisionList;
	@observable productList;
	@observable subCategoryList;
	@observable employeeList = [];
	@observable revenueList = [];

	@observable showCompanyType = false;
	@observable titlesDisabled = true;
	@observable companyDisabled = true

	@observable errorMsg;
	@observable successMsg = "Profile Successfully changed";
	@observable submitVar = false;
	@observable industryListAuto;
	@observable countryListAuto;
	displayValTrgtMrkt = [];
	displayValProdFac = [];
	displayValRnDFac = [];

	@observable newPasswordRep;
	@observable newPassword;
	@observable PassMsg;
	@observable allCompSrc=[];
	@observable existingCompSelcted=false;
	@observable displayNewCompanyName=false;
	@observable newCompanyName;
	@observable addNewCompanyName=false;


	/////////////////////////////////////////////////
	@observable industryClass = [];
	@observable industryClassTemp = [];
	@observable multipleDiag = false;
	@observable multipleDivDiag = false;
	@observable multipleProdDiag = false;
	@observable multipleSubCatDiag =false;
	@observable indSelected;
	@observable indSource;
	@observable indSourceTemp;
	@observable divSelected;
	@observable divSource;
	@observable divSourceTemp;
	@observable prodSelected;
	@observable prodSource;
	@observable prodSourceTemp;
	@observable subCatSelected;
	@observable subCatSource;
	@observable subCatSourceTemp;
	@observable industryDisp = "";
	@observable divisionDisp = "";
	@observable productDisp = "";
	@observable subCategoryDisp = "";
	@observable indFilter;
	@observable divFilter;
	@observable prodFilter;
	@observable subCatFilter;

	@observable editToggle = false;
	@observable editMultipleSource;
	@observable editSelected;
	@observable deleteArr = [];

	static fromJS(array) {
		const personStore = new PersonStore();
		return personStore;
	}

	@action('CLEAR_FORM')
	clearForm() {
		this.id = "";
		this.firstname = "";
		this.lastname = "";
		this.name = "";
		this.salutation = "";
		this.title = "";
		this.email = "";
		this.phoneNo = "";
		this.mobileNo = "";
		this.picture = "";
		this.pictureContentType = "";
		this.birthDate = "";
		this.userId = "";
		this.companyId = "";
		this.companyName = "";
		this.businessType = "";
		this.companyType = "";
		this.country = "";
		this.targetMarkets = "";
		this.revenue = "";
		this.employees = "";
		this.subsidaries = null;
		this.rndFacilities = "";
		this.prodFacilities = "";
		this.divisionList = {};
		this.productList = {};
		this.subCategoryList = {};
		this.newPasswordRep="";
		this.newPassword="";
		this.allCompSrc=[];
		this.existingCompSelcted=false;
		this.displayNewCompanyName=false;
		this.addNewCompanyName=false;
		this.newCompanyName;
		this.titleList = {};

		//new feature
		this.industryDisp = "";
		this.divisionDisp = "";
		this.productDisp = "";
		this.subCategoryDisp = "";
		this.industryClass = [];
		this.industryClassTemp = [];
		this.deleteArr = [];
	}


		@action('CLEAR_FORM')
		clearCompanyForm() {
			this.companyId = "";
			this.companyName = "";
			this.businessType = "";
			this.companyType = "";
			this.country = "";
			this.targetMarkets = "";
			this.revenue = "";
			this.employees = "";
			this.subsidaries = "";
			this.rndFacilities = "";
			this.prodFacilities = "";
			this.divisionList = {};
			this.productList = {};
			this.subCategoryList = {};
			this.showCompanyType = false;
			this.titleList = {};
			this.title = "";

			//new feature
			this.industryDisp = "";
			this.divisionDisp = "";
			this.productDisp = "";
			this.subCategoryDisp = "";
			this.industryClass = [];
			this.industryClassTemp = [];
			this.deleteArr = [];
		}
	@action('ALL COMPANIES')
	getAllCompanies() {

		let url = '/api/companies/all?access_token=' + localStorage.getItem("id_token");
		return fetchClient.request(url, { method: 'get' }).then((data) => {
			if (data) {
				this.allCompSrc = data.map((v) => { return {
					name: v.name,
				 	businesTypeId : v.businesTypeId,
 				 	companyTypeId : v.companyTypeId,
 				 	countryId : v.countryId,
 					createdById : v.createdById,
 					employeesId : v.employeesId,
 					id : v.id,
 					noOfSubsidaries : v.noOfSubsidaries,
 					prodFacilities : v.prodFacilities,
 					revenueId : v.revenueId,
 					rndFacilities: v.rndFacilities,
 					targetMarkets : v.targetMarkets,

					//new feature
					industryClassifications : v.industryClassifications
				}
				});
				return data;
			}
			else {
				console.log("error in authenticating", data);
			}
		});
	}


	changePassword(){
		let url='/api/account/change_password?access_token=' + localStorage.getItem("id_token");
		return fetch(url, {
		method: 'post' ,
		body: this.newPassword });
	}

	getDisplayPicture(object) {
		let url = 'api/my/dp/' + localStorage.getItem("id_token");
		fetchClient.request(url, { method: 'get' }).then((data) => {
			if (data) {
				console.log(data);
			}
			else {
				console.log("error in authenticating", data);
			}
		});
	}

	uploadDisplayPicture(object) {
		let formData = new FormData();
		let token = localStorage.getItem("id_token");
		formData.append('file', object);
		fetchClient.request('api/my/uploadDP', {
			method: 'POST',
			body: formData,
			headers: {
				'Authorization': 'Bearer ' + localStorage.getItem("id_token"),
			},
		}).then(function (res) {
			console.log('Status', res);
		}).catch(function (e) {
			console.log('Error', e);
		});
	}

	@action('GET_LOCATION')
	getLocation() {
		//GET location
		return fetchClient.request('api/countries/all', { method: 'get' }).then((data) => {
			if (data) {
				this.countryList = data.map((countryVal) => { return { value: countryVal.id, label: countryVal.name } });
				this.countryListAuto = data.reduce((acc, countryVal) => { acc[countryVal.id] = countryVal.name; return acc; }, {});
				return data;
			}
			else {
				console.log("error in authenticating", data);
			}
		});
	}

	@action('PERSON_DETAILS')
	getPersonDetails() {

		let url = 'api/v2/my/profile?access_token=' + localStorage.getItem("id_token");
		return fetchClient.request(url, { method: 'get' }).then((data) => {
			if (data) {
				this.id = data.id;
				if(data.firstName!=null){
					this.firstname = data.firstName;
					this.name = data.firstName + data.lastName;
				}else{
					this.firstname = "";
					this.name = data.lastName;
				}
				this.lastname = data.lastName;
				this.email = data.email;
				this.phoneNo = data.phoneNumber;
				this.mobileNo = data.mobileNumber;
				this.salutation = data.salutation.id;
				this.titleTemp = data.title.id;
				this.picture = data.picture;
				this.pictureContentType = data.pictureContentType;
				this.birthDate = data.birthDate;
				this.userId = data.userId;

				this.companyId = data.worksFor.id;

				//for new feature multiple values
				this.industryClass = data.worksFor.industryClassifications;

				if(data.worksFor.businesType!=null){
					this.businessType = data.worksFor.businesType.id;
					this.getTitles(data.worksFor.businesType.id);
				}

				this.companyName = data.worksFor.name;
				this.country = data.worksFor.country.id;
				this.targetMarkets = data.worksFor.targetMarkets;

				if(data.worksFor.revenue!=null){
				this.revenue = data.worksFor.revenue.id;
				}

				this.employees = data.worksFor.employees.id;
				this.subsidaries = data.worksFor.noOfSubsidaries;

				if(data.worksFor.rndFacilities!=null){
					this.rndFacilities = data.worksFor.rndFacilities;
				}

				this.prodFacilities = data.worksFor.prodFacilities;
				if (data.worksFor.businesType.name == "Company") {
					this.showCompanyType = true;
					if(data.worksFor.companyType!=null){
						this.companyType = data.worksFor.companyType.id;
					}
				} else {
					this.showCompanyType = false;
				}

				if (data.worksFor.createdById == data.userId) {
					//this.companyDisabled = false;
					//Disabling company edit in all cases. Edit company cannot be allowed in any case
					this.companyDisabled = true;
				} else {
					this.companyDisabled = true;
				}
				this.displayValTrgtMrkt = this.targetMarkets.map((m) => String(m.id));
				this.displayValProdFac = this.prodFacilities.map((m) => String(m.id));
				this.displayValRnDFac = this.rndFacilities.map((m) => String(m.id));

				return data;
			}
			else {
				console.log("error in authenticating", data);
			}
		});
	}


	@action('GET TITLES')
	getTitles(id) {
		let url = 'api/business-types/' + id;
		fetchClient.request(url, { method: 'get' }).then((data) => {
			if (data) {
				let titles = data.hasTitles;
				this.titleList = titles.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
				this.title = this.titleTemp;
			}
			else {
				console.log("error in authenticating", data);

			}
		});
	}

	@action('GET DIVISIONS')
	getDivision(id) {
		this.divisionList = {};
		this.productList = {};
		this.subCategoryList = {};
		let url = 'api/industries/' + id;
		fetchClient.request(url, { method: 'get' }).then((data) => {
			if (data) {
				let divisions = data.divisions;
				this.divisionList = divisions.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
				//for new feature
				this.divSource = divisions.map((div) => { return { id: div.id, name: div.name } });
				this.divSourceTemp = divisions.map((div) => { return { id: div.id, name: div.name } });
			}
			else {
				console.log("error in authenticating", data);

			}
		});
	}

	@action('GET PRODUCTS')
	getProducts(id) {
		let url = 'api/divisions/' + id;
		fetchClient.request(url, { method: 'get' }).then((data) => {
			if (data) {
				let products = data.products;
				this.productList = products.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
				//for new feature
				this.prodSource = products.map((prod) => { return { id: prod.id, name: prod.name } });
				this.prodSourceTemp = products.map((prod) => { return { id: prod.id, name: prod.name } });
			}
			else {
				console.log("error in authenticating", data);

			}
		});
	}

	@action('GET SubCategory')
	getSubCategory(id) {
		let url = 'api/products/' + id;
		fetchClient.request(url, { method: 'get' }).then((data) => {
			if (data) {
				let subCategories = data.subCategories;
				this.subCategoryList = subCategories.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
				//for new feature
				this.subCatSource = subCategories.map((subCat) => { return { id: subCat.id, name: subCat.name } });
				this.subCatSourceTemp = subCategories.map((subCat) => { return { id: subCat.id, name: subCat.name } });
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
				this.countryList = data.map((countryVal) => { return { value: countryVal.id, label: countryVal.name } });
				this.countryListAuto = data.reduce((acc, countryVal) => { acc[countryVal.id] = countryVal.name; return acc; }, {});
			}
			else {
				console.log("error in authenticating", data);

			}
		});

		//GET IndustryList
		fetchClient.request('api/industries/all', { method: 'get' }).then((data) => {
			if (data) {
				this.industryList = data.map((industryVal) => { return { value: industryVal.id, label: industryVal.name } });
				this.industryListAuto = data.reduce((acc, industryVal) => { acc[industryVal.id] = industryVal.name; return acc; }, {});
				//for new feature
				this.indSource = data.map((industryVal) => { return { id: industryVal.id, name: industryVal.name } });
				this.indSourceTemp = data.map((industryVal) => { return { id: industryVal.id, name: industryVal.name } });
			}
			else {
				console.log("error in authenticating", data);
			}
		});

		//GET CompanyType
		fetchClient.request('api/company-types/all?access_token=' + localStorage.getItem("id_token"), { method: 'get' }).then((data) => {
			if (data) {
				this.companyTypeList = data.map((compnayTypeVal) => { return { value: compnayTypeVal.id, label: compnayTypeVal.name } });
			}
			else {
				console.log("error in authenticating", data);
			}
		});

		//GET EMPLOYEES
		fetchClient.request('api/employees?access_token=' + localStorage.getItem("id_token"), { method: 'get' }).then((data) => {
			if (data) {
				this.employeeList = data.map((employeeVal) => { return { value: employeeVal.id, label: employeeVal.name } });
			}
			else {
				console.log("error in authenticating", data);
			}
		});

		//GET REVENUE
		fetchClient.request('api/revenues?access_token=' + localStorage.getItem("id_token"), { method: 'get' }).then((data) => {
			if (data) {
				this.revenueList = data.map((revenueVal) => { return { value: revenueVal.id, label: revenueVal.name } });
			}
			else {
				console.log("error in authenticating", data);
			}
		});
	}


	@action('VALIDATE')
	validate() {

		if ( //this.firstname == "" || this.firstname == undefined || this.lastname == "" || this.lastname == undefined
				 this.name == "" || this.name == undefined || this.name == null
			|| this.salutation == "" || this.salutation == undefined || this.salutation == null
			|| this.title == "" || this.title == undefined || this.title == null
			|| this.email == "" || this.email == undefined || this.email == null
			|| this.phoneNo == "" || this.phoneNo == undefined || this.phoneNo == null
			|| this.mobileNo == "" || this.mobileNo == undefined || this.mobileNo == null
			|| this.companyName == "" || this.companyName == undefined || this.companyName == null
			|| this.businessType == "" || this.businessType == undefined || this.businessType == null
			|| this.country == "" || this.country == undefined || this.country == null
			|| this.targetMarkets == null || this.targetMarkets == undefined || this.targetMarkets.length==0
			|| this.employees == "" || this.employees == undefined || this.employees == null
			|| this.subsidaries == null || this.subsidaries == undefined|| this.industryClass.length == 0) {
			this.errorMsg = "Please enter the required information into all mandatory fields"
			return false
		} /*else if (!(/^[a-zA-Z ]*$/).test(this.firstname)) {
			this.errorMsg = "Incorrect First Name. Use only letters"
			return false;
		}*/ else if (!(/^[a-zA-Z- ]*$/).test(this.name)) {
			this.errorMsg = "Incorrect Name. Use only letters"
			return false;
		} else if (!(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.email)) {
			this.errorMsg = "Incorrect Email"
			return false;
		} else if(!(/^(?=.*[0-9])[- +()0-9]+$/).test(this.phoneNo)){
			this.errorMsg = "Incorrect Phone Number"
			return false;
		}else if(!(/^(?=.*[0-9])[- +()0-9]+$/).test(this.mobileNo)){
			this.errorMsg = "Incorrect Mobile Number"
			return false;
		}else {
			return true;
		}
	}

	@action('SUBMIT_FORM')
	submitForm() {
		return fetchClient.request('api/my/companies?access_token=' + localStorage.getItem("id_token"), {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: this.companyId,
				businesTypeId: this.businessType,
				companyTypeId: this.companyType,
				countryId: this.country,
				employeesId: this.employees,
				name: this.companyName,
				noOfSubsidaries: this.subsidaries,
				prodFacilities: this.prodFacilities,
				revenueId: this.revenue,
				rndFacilities: this.rndFacilities,
				targetMarkets: this.targetMarkets,
				createdById: this.userId,
				//new feature
				//industryClassifications: this.industryClass
			})
		})
	}

	@action('SUBMIT_FORM_PROFILE')
	submitFormProfile() {
		return fetchClient.request('api/my/profile?access_token=' + localStorage.getItem("id_token"), {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: this.id,
				lastName: this.name,
				email: this.email,
				salutationId: this.salutation,
				titleId: this.title,
				phoneNumber: this.phoneNo,
				mobileNumber: this.mobileNo,
				birthDate: this.birthDate,
				userId: this.userId,
				worksForId: this.companyId
			})
		}).then((response) => {
			this.submitForm();
		})
	}

	@action('SUBMIT_FORM_PROFILE1')
	submitFormProfile1() {
		return fetchClient.request('api/my/profile?access_token=' + localStorage.getItem("id_token"), {
			method: 'put',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: this.id,
				lastName: this.name,
				email: this.email,
				salutationId: this.salutation,
				titleId: this.title,
				phoneNumber: this.phoneNo,
				mobileNumber: this.mobileNo,
				birthDate: this.birthDate,
				userId: this.userId,
				worksForId: this.companyId
			})
		})
	}

	@action('CREATE_COMPANY_EDIT')
	createCompanyEdit() {
		return fetchClient.request('api/my/companies?access_token=' + localStorage.getItem("id_token"), {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				businesTypeId: this.businessType,
				companyTypeId: this.companyType,
				countryId: this.country,
				employeesId: this.employees,
				name: this.companyName,
				noOfSubsidaries: this.subsidaries,
				prodFacilities: this.prodFacilities,
				revenueId: this.revenue,
				rndFacilities: this.rndFacilities,
				targetMarkets: this.targetMarkets,
				//new feature
				//industryClassifications: this.industryClass

			})
		}).then((data) => {
			if (data) {
				this.companyId = data.id;
				return data;
			}
			else {
				console.log("error in authenticating", data);
			}
		}).then((data) => {
			return this.submitFormProfile1();
		});

	}

	@action('CREATE_COMPANY')
	createCompany() {
		return fetchClient.request('api/my/companies?access_token=' + localStorage.getItem("id_token"), {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				businesTypeId: this.businessType,
				companyTypeId: this.companyType,
				countryId: this.country,
				employeesId: this.employees,
				name: this.companyName,
				noOfSubsidaries: this.subsidaries,
				prodFacilities: this.prodFacilities,
				revenueId: this.revenue,
				rndFacilities: this.rndFacilities,
				targetMarkets: this.targetMarkets
			})
		}).then((data) => {
			if (data) {
				this.companyId = data.id;
				return data;
			}
			else {
				console.log("error in authenticating", data);
			}
		}).then((data) => {
			return this.createProfile();
		});

	}

	@action('SAVE_INDCLASS')
	saveIndClass(){
		let _this = this;
		this.industryClass.map((m) => {
			fetchClient.request('api/my/industry-classifications?access_token=' + localStorage.getItem("id_token"), {
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					industryId: m.industry.id,
					divisionId: m.division.id,
					productId: m.product.id,
					subCategoryId: m.subCategory.id,
					companyId :  _this.companyId
				})
			})
		});
	}

	@action('SUBMIT_FORM_CREATE')
	createProfile() {
		return fetchClient.request('api/my/profile?access_token=' + localStorage.getItem("id_token"), {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				//firstName: this.firstname,
				//lastName: this.lastname,
				lastName: this.name,
				email: this.email,
				salutationId: this.salutation,
				titleId: this.title,
				phoneNumber: this.phoneNo,
				mobileNumber: this.mobileNo,
				//picture: this.picture,
				birthDate: this.birthDate,
				userId: this.userId,
				worksForId: this.companyId
			})
		})
	}

	@action('DELETE_MULTIPLE')
	deleteMultiple(id){
		let url = "api/my/industry-classifications/" + id + "?access_token=" + localStorage.getItem("id_token");
		fetchClient.request(url, { method: 'delete' });
	}

}
