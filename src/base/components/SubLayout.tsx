import React, { Component, PropTypes } from 'react'
import { observer, inject } from 'mobx-react'
import { observable, toJS } from 'mobx';
import Table from 'react-toolbox/lib/table';
import style from '../../theme/style.scss';
import theme from '../../theme/_theme.scss';
import BaseStore from '../store';
import {FontIcon} from 'react-toolbox/lib/font_icon';

const matchModel = {
  icon: {type: FontIcon},
  name: {type: String}

};

interface IRouterContext {
  router: any;
}

@inject('baseStore')
@observer
export default class SubLayout extends React.Component<{ baseStore: BaseStore, children: any }, {}> {

    constructor(props) {
        super(props);
        this.handleSelect = this.handleSelect.bind(this);
    }

    context: IRouterContext;

    static contextTypes: React.ValidationMap<any> = {
      router: React.PropTypes.object.isRequired,
    };

    componentWillMount(){
        this.props.baseStore.getPersonDetails().then(()=>{
        this.props.baseStore.getAllymatches();
      });
    }

    state = { selected: [] };

    handleSelect = (selected) => {
      this.props.baseStore.clearForm();
      //this.setState(Object.assign({},this.state,{selected:selected}));
      let details=this.props.baseStore.allymatches[selected[0]].details;
      this.props.baseStore.setDetails(details).then(()=>{
          this.context.router.push("/allymatchDetails");
    });
    };

    render() {
        return (
          <div style={{overflowX: 'hidden' }}>
            <div className="row">
                  <div className="col-sm-10" style={{padding: '0px'}}>
                    <div style={{ flex: 1, overflowY: 'auto' }}>
                      {this.props.children}
                    </div>
                  </div>
                  <div className="col-sm-2" style={{borderLeft: '3px solid #11a3ab',padding: '0px',height: '100%'}}>
                    <div className={theme.bannerRow}>
                      <span className={theme.matchQueryFont} style={{marginLeft: '4.5vw'}}>allymatches</span>
                    </div>
                    <Table
                      heading={false}
                      model={matchModel}
                      selectable
                      multiSelectable={false}
                      onSelect={this.handleSelect}
                      selected={this.state.selected}
                      theme={style}
                      source={this.props.baseStore.allymatches}
                    />
                  </div>
            </div>
          </div>
        );
    }
}
