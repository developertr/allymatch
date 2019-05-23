import { observable, action } from 'mobx';
import { fetchClient } from '../'


export default class CriteriaStore {
	@observable id;
	@observable name;
	@observable businessType;
	@observable industry;
	@observable division;
	@observable product;
	@observable divisionTemp;
	@observable productTemp;
	@observable subCategory;
	@observable location;
	@observable title;
	@observable profileId;
	@observable profileEmail;
	@observable heading;
	@observable showCompanyType;
	@observable companyType;

	@observable businessTypeList = [];
	@observable industryList;
	@observable divisionList;
	@observable productList;
	@observable subCategoryList;
	@observable countryList;
	@observable titleList;
	@observable myInquiriesList = [];
	@observable submitType;
	@observable dataList = [];
	@observable companyTypeList = [];

	static fromJS(array) {
		const criteriaStore = new CriteriaStore();
		return criteriaStore;
	}

	@action('CLEAR FORM')
	clearForm() {
		this.id = "";
		this.name = "";
		this.businessType = "";
		this.industry = "";
		this.division = "";
		this.product = "";
		this.subCategory = "";
		this.location = "";
		this.title = "";
		this.companyType = "";
		this.divisionList = {};
		this.productList = {};
		this.subCategoryList = {};
		this.divisionTemp= "";
		this.productTemp ="";
	}

	//GET CompanyType
	@action('GET Cpmpany Type')
	getCompanyType() {
	fetchClient.request('api/company-types/all?access_token=' + localStorage.getItem("id_token"), { method: 'get' }).then((data) => {
		if (data) {
			this.companyTypeList = data.map((compnayTypeVal) => { return { value: compnayTypeVal.id, label: compnayTypeVal.name } });
		}
		else {
			console.log("error in authenticating", data);
		}
	});
}

	@action('GET VALS')
	getVals() {
		fetchClient.get('api/business-types').then((data) => {
			if (data) {
				this.businessTypeList = data.map((bType) => { return { value: bType.id, label: bType.name } });
			}
			else {
				console.log("error in authenticating", data);

			}
		});

		//GET location
		fetchClient.get('api/countries/all').then((data) => {
			if (data) {
				this.countryList = data.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
			}
			else {
				console.log("error in authenticating", data);

			}
		});

		//GET IndustryList
		fetchClient.get('api/industries/all').then((data) => {
			if (data) {
				this.industryList = data.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
			}
			else {
				console.log("error in authenticating", data);
			}
		});

		//GET PROFILE DETAILS
		let url = 'api/my/profile?access_token=' + localStorage.getItem("id_token");
		fetchClient.get(url).then((data) => {
			if (data) {
				this.profileId = data.id;
				this.profileEmail = data.email;
			}
			else {
				console.log("error in authenticating", data);
			}
		})
	}

	@action('GET TITLES')
	getTitles(id) {
		let url = 'api/business-types/' + id;
		fetchClient.get(url).then((data) => {
			if (data) {
				let titles = data.hasTitles;
				this.titleList = titles.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
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
		this.division = "";
		this.product = "";
		let url = 'api/industries/' + id;
		fetchClient.get(url).then((data) => {
			if (data) {
				let divisions = data.divisions;
				this.divisionList = divisions.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
				this.division = this.divisionTemp;
			}
			else {
				console.log("error in authenticating", data);

			}
		});
	}

	@action('GET PRODUCTS')
	getProducts(id) {
		let url = 'api/divisions/' + id;
		fetchClient.get(url).then((data) => {
			if (data) {
				let products = data.products;
				this.productList = products.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
				this.product = this.productTemp;
			}
			else {
				console.log("error in authenticating", data);

			}
		});
	}

	@action('GET SUBCATEGORIES')
	getSubCategory(id) {
		let url = 'api/products/' + id;
		fetchClient.get(url).then((data) => {
			if (data) {
				let subCategories = data.subCategories;
				this.subCategoryList = subCategories.reduce((acc, val) => { acc[val.id] = val.name; return acc; }, {});
			}
			else {
				console.log("error in authenticating", data);

			}
		});
	}

	@action('GET_INQUIRIES')
	getInquiries() {
		this.myInquiriesList = [];
		return fetchClient.get('api/v2/my/inquiries?access_token=' + localStorage.getItem("id_token")).then((data) => {
			if (data) {
				this.dataList = data;
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
		this.dataList.map((val) => {
			let name = val.name;
			let id = val.id;
			let businessType = null, businessTypeId = null;
			if (val.businesType != undefined && val.businesType != null) {
				businessType = val.businesType.name;
				businessTypeId = val.businesType.id;
			}

			let companyType = null, companyTypeId = null;
			if (val.companyType != undefined && val.companyType != null) {
				companyType = val.companyType.name;
				companyTypeId = val.companyType.id;
			}

			let country = null, countryId = null;
			if (val.country != undefined && val.country != null) {
				country = val.country.name;
				countryId = val.country.id;
			}

			let industry = null, industryId = null;
			if (val.industry != undefined) {
				industry = val.industry.name;
				industryId = val.industry.id;
			}

			let division = null, divisionId = null;
			if (val.division != undefined && val.division != null) {
				division = val.division.name;
				divisionId = val.division.id;
			}

			let product = null, productId = null;
			if (val.product != undefined && val.product != null) {
				product = val.product.name;
				productId = val.product.id;
			}

			let subCategory = null, subCategoryId = null;
			if (val.subCategory!=null && val.subCategory!=undefined) {
				subCategory = val.subCategory.name;
				subCategoryId = val.subCategory.id;
			}

			let title = null, titleId = null;
			if (val.title != undefined && val.title != null) {
				title = val.title.name;
				titleId = val.title.id;
			}

			let createdDate = null;
			if (val.createdDate.length != 0) { createdDate = val.createdDate.split("T")[0] }

			let value = {
				id: id,
				name: name,
				businessType: businessType,
				businessTypeId: businessTypeId,
				companyType: companyType,
				companyTypeId: companyTypeId,
				country: country,
				countryId: countryId,
				industry: industry,
				industryId: industryId,
				division: division,
				divisionId: divisionId,
				product: product,
				productId: productId,
				subCategory: subCategory,
				subCategoryId: subCategoryId,
				title: title,
				titleId: titleId,
				createdDate: createdDate
			}

			this.myInquiriesList.push(value);
		});
		return this.myInquiriesList;
	}

	@action('ADD_INQUIRY')
	addInquiry() {
		return fetchClient.post('api/my/inquiries?access_token=' + localStorage.getItem("id_token"), {
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: this.name,
				businesTypeId: this.businessType,
				industryId: this.industry,
				divisionId: this.division,
				productId: this.product,
				subCategoryId: this.subCategory,
				countryId: this.location,
				titleId: this.title,
				profileEmail: this.profileEmail,
				profileId: this.profileId,
				companyTypeId: this.companyType
			})
		})
	}

	@action('EDIT_INQUIRY')
	editInquiry() {
		return fetchClient.put('api/my/inquiries?access_token=' + localStorage.getItem("id_token"), {
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: this.id,
				name: this.name,
				businesTypeId: this.businessType,
				industryId: this.industry,
				divisionId: this.division,
				productId: this.product,
				subCategoryId: this.subCategory,
				countryId: this.location,
				titleId: this.title,
				profileEmail: this.profileEmail,
				profileId: this.profileId,
				companyTypeId: this.companyType
			})
		})
	}

	@action('DELETE_INQUIRY')
	deleteInquiry() {
		let url = "api/my/inquiries/" + this.id + "?access_token=" + localStorage.getItem("id_token");
		this.myInquiriesList = [];
		return fetchClient.request(url, { method: 'delete' });
	}
}
