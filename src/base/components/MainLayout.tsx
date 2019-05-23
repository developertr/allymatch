import * as React from 'react';
import { Drawer, AppBar, Checkbox, IconButton, Link, Navigation, FontIcon } from 'react-toolbox';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import BaseStore from '../store';
import { IconMenu, MenuItem, MenuDivider } from 'react-toolbox';
import theme from '../../theme/_theme.scss';
import IRouterContext from '../IRouterContext'
import LoginPage from '../../login/components/LoginPage';
import { Dialog } from 'react-toolbox';

declare var require: any
var Navbar = require('react-bootstrap/lib/Navbar');
var Bootstrap = require('react-bootstrap');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');

interface NavLink {
    name: string;
    path: string;
}

@inject('baseStore')
@observer
export default class MainLayout extends React.Component<{ baseStore: BaseStore, children: any }, { sidebarPinned?: boolean }> {

    context: IRouterContext;

    static contextTypes: React.ValidationMap<any> = {
        router: React.PropTypes.object.isRequired
    }

    handleToggle = () => {
        this.props.baseStore.toggle();
    }

    constructor(props) {
        super(props);
        this.state = { sidebarPinned: false};
        this.logout = this.logout.bind(this);
        this.login = this.login.bind(this);
        this.mobileMsgAction = this.mobileMsgAction.bind(this);
    }

    logout(){
      localStorage.setItem("id_token", "");
      this.context.router.push("/");
      //this.login();
    }

    login(){
      this.props.baseStore.active = true;
    }

    componentDidMount(){
      if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        if (localStorage.getItem("id_token")!=undefined && localStorage.getItem("id_token")!="") {
          this.props.baseStore.showMobileMSg =true;
        }
      }else{
        this.props.baseStore.showMobileMSg =false;
      }
      // if(/login/.test(this.props.location.pathname)) {
      //   this.login();
      // }
    }

    headerLinks(): Array<any> {
        let isActive = (path): boolean => this.context.router.isActive(path);
        let goto = (path: String): void => this.context.router.push(path);
        return [{ name: 'Home', path: '' },
      //  { name: 'Create Profile', path: 'create_profile'},
        { name: 'My Matches', path: '/my_matches' },
        { name: 'My Inquiries', path: '/my_inquiries' },
        { name: 'Pending requests', path: '/sent_requests' },
        { name: 'Requests for you', path: '/received_requests' },
        ].map((obj: NavLink) => (<Link active={isActive(obj.path)} key={obj.name} onClick={() => this.context.router.push(obj.path)}>{obj.name}</Link>))
    }

    mobileMsgAction(){
      this.props.baseStore.showMobileMSg =false;
    }

    render() {
        let actions = [
          { label: "Ok", onClick: this.mobileMsgAction }
        ];
        let handleToggle = this.handleToggle.bind(this)
        let onClick = (link: string) => this.context.router.push(link)
        return (
            <div className={theme.layout}>
            {(localStorage.getItem("id_token")!="" && localStorage.getItem("id_token")!=undefined) ?(
              <Drawer active={this.props.baseStore.drawerActive} onOverlayClick={ handleToggle }>
                <Navigation type='vertical'>
                    {this.headerLinks()}
                </Navigation>
              </Drawer>
            ):(<Drawer>
                <Navigation type='vertical'>
                </Navigation>
              </Drawer>)}

                <Panel>
                    <div className={theme.header1}>
                    </div>
                    <div className={theme.landingPageD}>
                      <AppBar theme={theme}>
                          {<IconButton icon='menu' onClick={handleToggle} className={theme.toggle}/>}
                          <h1 style={{
                              WebkitBoxFlex: '1',
                              MsFlexPositive: '1',
                              flexGrow: 1
                          }}>
                            <a href="/#"><img className={theme.logoLanding} src="https://www.globalsuccess-club.net/documents/20589/51325/top-logo.jpg/83a3d1bd-706c-4214-968f-37ac4335481a?t=1522138872818"/></a>

                            </h1>


                            <div className={theme.navigationLinks}>
                              <Navigation type="horizontal">
                                <Link href="/#">Home</Link>
                                <Link href="/#/ourStory">Our Story</Link>
                                <Link href="/#/jobs">Join Our Innovation Factory</Link>
                                <Link href="/#/events">Events</Link>
                                <Link href="/#/press">Press</Link>
                                <Link href="/#/register">Register</Link>
                              </Navigation>
                            </div>

                          {/*(localStorage.getItem("id_token")!="" && localStorage.getItem("id_token")!=undefined) ?(
                            <Navigation type="horizontal">
                              <IconMenu icon='account_circle' position='topRight' menuRipple>
                                <MenuItem onClick={() => onClick("/my_profile")} caption="My Profile"></MenuItem>
                                <MenuItem onClick={this.logout} caption="Logout"></MenuItem>
                              </IconMenu>
                            </Navigation>
                            ):(
                              <Navigation type="horizontal">
                                <IconMenu icon='more_vert' position='topRight' menuRipple>
                                  <MenuItem onClick={this.login} caption="Login"></MenuItem>
                                </IconMenu>
                              </Navigation>
                            )*/}

                      </AppBar>
                    </div>
                    <div className={theme.landingPageM}>
                      <AppBar theme={theme}>
                          {<IconButton onClick={handleToggle} className={theme.toggle}>
                          <FontIcon style={{fontSize:"40px"}} value="menu" /> </IconButton>}
                          <h1 style={{
                              WebkitBoxFlex: '1',
                              MsFlexPositive: '1',
                              flexGrow: 1
                          }}>
                            <a href="/#"><img className={theme.logoLanding} src="https://www.globalsuccess-club.net/documents/20589/51325/top-logo.jpg/83a3d1bd-706c-4214-968f-37ac4335481a?t=1522138872818"/></a>

                            </h1>

                          {(localStorage.getItem("id_token")!="" && localStorage.getItem("id_token")!=undefined) ?(
                            <Navigation type="horizontal">
                              <IconMenu icon='account_circle' position='topRight' menuRipple>
                                <MenuItem onClick={() => onClick("/")} caption="Home"></MenuItem>
                                <MenuItem onClick={() => onClick("/ourStory")} caption="Our Story"></MenuItem>
                                <MenuItem onClick={() => onClick("/jobs")} caption="Join Our Innovation Factory"></MenuItem>
                                <MenuItem onClick={() => onClick("/events")} caption="Events"></MenuItem>
                                <MenuItem onClick={() => onClick("/press")} caption="Press"></MenuItem>
                                <MenuItem onClick={() => onClick("/register")} caption="Register"></MenuItem>
                                <MenuItem onClick={() => onClick("/my_profile")} caption="My Profile"></MenuItem>
                                <MenuItem onClick={this.logout} caption="Logout"></MenuItem>
                              </IconMenu>
                            </Navigation>
                            ):(
                              <Navigation type="horizontal">
                                <IconMenu icon='more_vert' position='topRight' menuRipple>
                                  <MenuItem onClick={() => onClick("/")} caption="Home"></MenuItem>
                                  <MenuItem onClick={() => onClick("/ourStory")} caption="Our Story"></MenuItem>
                                  <MenuItem onClick={() => onClick("/jobs")} caption="Join Our Innovation Factory"></MenuItem>
                                  <MenuItem onClick={() => onClick("/events")} caption="Events"></MenuItem>
                                  <MenuItem onClick={() => onClick("/press")} caption="Press"></MenuItem>
                                  <MenuItem onClick={() => onClick("/register")} caption="Register"></MenuItem>
                                  <MenuItem onClick={this.login} caption="Login"></MenuItem>
                                </IconMenu>
                              </Navigation>
                            )}

                      </AppBar>
                    </div>
                    <LoginPage
                      active1={this.props.baseStore.active}
                      />
                    <div style={{ flex: 1, overflowY: 'auto' }}>
                      {this.props.children}
                    </div>
                </Panel>

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
        );
    }
}
