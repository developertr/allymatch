import React from 'react'
import { observer, inject } from 'mobx-react'
import PersonStore from '../PersonStore';
import { Input, Card, CardMedia, CardTitle, CardText, CardActions, Button, Autocomplete, Dropdown } from 'react-toolbox';
import theme from '../../theme/_theme.scss';

@inject('personStore')
@observer
export default class PersonInfo extends React.Component<{ personStore?: PersonStore, updateProperty: (value: any, key: any) => void }, {}>  {

  handleChangeTitle = (value) => {
    this.props.personStore.title = value;
  };

  private handleChange = (value, key) => { this.props.updateProperty(value, key) }

  render() {
    let {personStore} = this.props
    return (
      <div>
          {/*<Input type='text' label='First Name * ' value={personStore.firstname} onChange={this.handleChange} name='firstname' maxLength={50}/>
          <Input type='text' label='Last Name * ' value={personStore.lastname} onChange={this.handleChange} name='lastname' maxLength={50}/>*/}
          <Input type='text' label='Name * ' value={personStore.name} onChange={this.handleChange} name='name' maxLength={50}/>
          <Dropdown
            auto={false}
            source={personStore.salutationList}
            label='Salutation * '
            name="salutation"
            onChange={this.handleChange}
            value={personStore.salutation}
            />
          <Autocomplete
            direction="down"
            source={personStore.titleList}
            label='Title * '
            multiple={false}
            onChange={this.handleChangeTitle}
            value={personStore.title}
            disabled={personStore.titlesDisabled}
            onQueryChange={(val) => {
                  personStore.title = val;
                }}
            />
          <Input type='text' label='Email * ' value={personStore.email} icon='email' name='email' maxLength={50} onChange={this.handleChange}/>
          <Input type='text' label='Phone Number * ' value={personStore.phoneNo} icon='phone' name='phoneNo' maxLength={20} onChange={this.handleChange}/>
          <Input type='text' label='Mobile Number * ' value={personStore.mobileNo} icon='phone' name='mobileNo' maxLength={20} onChange={this.handleChange}/>
      </div>
    )
  }
}
