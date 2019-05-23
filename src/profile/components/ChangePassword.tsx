import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input } from 'react-toolbox';
import { Button } from 'react-toolbox/lib/button';
import { Dialog } from 'react-toolbox/lib/dialog';
import PersonStore from '../PersonStore';

@inject('personStore')
@observer
export default class ChangePassword extends React.Component<{ personStore?: PersonStore,submitPass: () => void ,updateProperty:(value: any, key: any)=>void,handleToggle1: (value: any, key: any) => void ,handleToggle: (value: any, key: any) => void ,state : any} ,{}>  {

  constructor(props) {
    super(props);
  }

  render() {
    const {state, handleToggle,handleToggle1,submitPass,updateProperty} = this.props;
    const actions1 = [
      { label: "Submit", onClick: submitPass },
      { label:"Exit", onClick: handleToggle }
    ];

    const actions2 = [
      { label:"Ok", onClick: handleToggle1 }
    ];
    return (
      <div>
        <Dialog
          active={state.active}
          onEscKeyDown={handleToggle}
          onOverlayClick={handleToggle}
          title='Change Password'
          actions={actions1}>

          <form>
            <Input type='text' label='New Password' value={this.props.personStore.newPassword} name='newPassword' maxLength={100} onChange={updateProperty}/>
            <Input type='text' label='Re-Enter New Password' value={this.props.personStore.newPasswordRep} name='newPasswordRep' maxLength={100} onChange={updateProperty}/>
          </form>
        </Dialog>

        <Dialog
          active={state.active1}
          onEscKeyDown={handleToggle1}
          onOverlayClick={handleToggle1}
          actions={actions2}>
          {this.props.personStore.PassMsg}
        </Dialog>
      </div>
    )
  }
}
