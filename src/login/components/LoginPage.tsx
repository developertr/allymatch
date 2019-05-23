import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import LoginStore from '../LoginStore';
import BaseStore from '../../base/store';
import { Input } from 'react-toolbox';
import { Button } from 'react-toolbox';
import { Dialog } from 'react-toolbox';
import theme from '../../theme/_theme.scss';

interface IRouterContext {
  router: any;
}

@inject('loginStore')
@inject('baseStore')
@observer
export default class LoginPage extends React.Component<
{ loginStore?: LoginStore ,baseStore?: BaseStore,active1:boolean}, { showMessage: boolean,active: boolean }> {

  context: IRouterContext;

  static contextTypes: React.ValidationMap<any> = {
    router: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleToggle1 = this.handleToggle1.bind(this);
    this.state = { showMessage: false, active: false };
  }

  submitForm(event) {
    let {loginStore,baseStore} = this.props
    let that = this;
    if (localStorage.getItem("id_token")!=undefined && localStorage.getItem("id_token")!="") {
      that.context.router.push("/my_matches");
    }else{
      loginStore.submitForm()
          .then((response) => {
            if (response.id_token!="" && response.id_token!=undefined) {
              if (typeof(Storage) !== "undefined") {
                  localStorage.setItem("id_token", response.id_token);
              }
      				//that.context.router.push("/my_profile");
              loginStore.username="";
              loginStore.password="";
              baseStore.active= false;
              loginStore.loggedIn=true;
      			}else{
              that.setState(Object.assign({},this.state,{showMessage:true}));
              that.handleToggle();
            }
          }).then(()=>{
            if(loginStore.loggedIn){
            loginStore.getPersonDetails().then((response) => {
                if (response.status >= 200 && response.status < 300) {
                   that.context.router.push("/my_matches");
                   return response;
                 } else if(response.status == 404){
                   that.context.router.push("/create_profile");
                 } else {
                   let error = new Error(response.statusText);
                   throw error;
                 }
            }).then((response) => response.json()).catch((e)=>{
              console.log(e)
            });
          }

          if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            if (localStorage.getItem("id_token")!=undefined && localStorage.getItem("id_token")!="") {
              this.props.baseStore.showMobileMSg =true;
            }
          }else{
            this.props.baseStore.showMobileMSg =false;
          }

          })
          .catch((err) => {
            that.setState(Object.assign({},this.state,{showMessage:true}));
            that.handleToggle();
          });
    }
  }

  handleToggle () {
    this.setState(Object.assign({},this.state,{active:!this.state.active}));
  }

  handleToggle1 () {

    this.props.baseStore.active=false;
  }

  updateProperty(value, key) {
    this.props.loginStore[key.target.name] = value;
  }

  render() {

    let actions = [
      { label: "OK", onClick: this.handleToggle }
    ];
    let {loginStore} = this.props;
    const{active1} = this.props;

    return (
      <div>
      <Dialog
        actions={actions}
        active={this.state.active}
        onEscKeyDown={this.handleToggle}
        onOverlayClick={this.handleToggle}
        className={theme.loginDiv}
      >
        {this.state.showMessage ? (<div className="row"><legend> Incorrect User Name or Password! </legend> </div>) : ""}
      </Dialog>
      <Dialog
        active={active1}
        onEscKeyDown={this.handleToggle1}
        onOverlayClick={this.handleToggle1}
        className={theme.loginDiv}
      >
      <form onSubmit={this.submitForm}>
        <div>

          <a href="/">  <img className={theme.loginLogo} src="https://www.globalsuccess-club.net/documents/20589/33078/allymatch+logo+non+transparent.gif/d70fa7ba-b479-44cd-8ec8-868938f5d054?t=1494929697991" /> </a>

          <Input type='text' label='User Name' name='username' value={loginStore.username} onChange={this.updateProperty} maxLength={50} />
          <Input type='password' label='Password' name='password' value={loginStore.password} onChange={this.updateProperty} maxLength={16} />
          <Button className={theme.loginBtn} label='Login' onClick={this.submitForm} raised primary />
          <span className={theme.generalFont}>Not a member? &nbsp;<a href="/#/register" className={theme.generalColor}>Click here to sign up</a></span>
        </div>
      </form>
      </Dialog>

      <Dialog
          actions={actions}
          active={this.props.baseStore.showMobileMSg}
          className={theme.mobileMsg}>
          <div>Thank you for using allymatch! We also have a mobile version available. For a better user experience please download the mobile app.</div>
          <div> &nbsp;</div>
          <div>
            <a href="https://itunes.apple.com/us/app/allymatch/id1207530239?mt=8" target="blank"><img  className={theme.imageLink2} src="https://www.globalsuccess-club.net/documents/20589/33068/appstore.png/96059f7b-a834-4b48-b003-66758916f705?t=1494928963019"/></a>
            <a href="https://play.google.com/store/apps/details?id=com.allymatch.smartapp" target="blank"><img  className={theme.imageLink2} src="https://www.globalsuccess-club.net/documents/20589/33068/IMG_1831.PNG.png/f3d31392-46ca-4df6-83df-0cdf1614f379?t=1494928970156"/></a>
          </div>
      </Dialog>
      
      </div>
    )
  }
}
