import { observable, action } from 'mobx';
import { fetchClient } from '../'


export default class LoginStore {
	@observable username;
	@observable password;
	@observable profile = false;
	@observable loggedIn = false;
	@observable showMobileMSg = false;

	static fromJS(array) {
		const loginStore = new LoginStore();
		return loginStore;
	}

	@action('PERSON_DETAILS')
	getPersonDetails() {
		let url = 'api/v2/my/profile?access_token=' + localStorage.getItem("id_token");
		return fetch(url, { method: 'get' });
	}

	@action('SUBMIT_FORM')
	submitForm() {
		return fetchClient.request('/api/authenticate', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: this.username,
				password: this.password,
				rememberMe: true
			})
		})
	}

}
