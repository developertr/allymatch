import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx'
import { Input } from 'react-toolbox';
import { Button } from 'react-toolbox';
import { Dropdown } from 'react-toolbox';
import { Card, CardMedia, CardTitle, CardText } from 'react-toolbox';
import style from '../../theme/style.scss';
import theme from '../../theme/_theme.scss';
import MatchesStore from '../MatchesStore';
import MatchCard from './MatchCard';

@inject('matchesStore')
@observer
export default class MatchesPage extends React.Component<{matchesStore?:MatchesStore}, {}> {

  constructor(props) {
    super(props);
    this.updateProperty = this.updateProperty.bind(this);
    this.props.matchesStore.showMatches = false;
    this.props.matchesStore.inquiryId = "";
  }

  componentWillMount(){
    this.props.matchesStore.getInquiries();
  }

  updateProperty(value, key) {
    this.props.matchesStore.showMatches = false;
    this.props.matchesStore[key.target.name] = value;
    this.props.matchesStore.getMatches();
  }

  render() {
    return (
      <div style={{overflowX: 'hidden' }}>
       <div className={theme.matchBar}>
        <div className="row">
            <div className="col-sm-6">
                <span className={theme.titleBar}>My Matches</span>
            </div>
            <div className="col-sm-3" style={{paddingTop:'0.5vw'}}>
              <span className={theme.matchQueryFont}>Choose an inquiry:</span>
            </div>
            <div className="col-sm-3" style={{paddingTop:'0.5vw'}}>
              <Dropdown
                  auto={true}
                  source={this.props.matchesStore.myInquiriesList}
                  name="inquiryId"
                  onChange={this.updateProperty}
                  value={this.props.matchesStore.inquiryId}
                  theme={style}
                  />
            </div>
        </div>
      </div>
          {this.props.matchesStore.showMatches ?
                    (
                      <MatchCard/>
                    ) : <div className={theme.matchesMsg}> We're sorry, but your inquiry has produced no matches. Please edit your search parameters,
                              or wait until we can find a suitable match for you</div>}
      </div>
    )
  }
}
