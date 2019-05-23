import React from 'react'
import { observer, inject } from 'mobx-react'
import { Input, Dropdown, Button, Dialog, Autocomplete, IconButton } from 'react-toolbox';
import Table from 'react-toolbox/lib/table';
import PersonStore from '../PersonStore';
import theme from '../../theme/_theme.scss';

@inject('personStore')
@observer
export default class ComapanyDetails extends React.Component<{ personStore?: PersonStore, updateProperty: (value: any, key: any) => void ,handleMultipleChange: (value: any) => void,
  handleMultipleChangeRND: (value: any) => void , handleMultipleChangeProd: (value: any) => void,state:any,srchCmpnyhandleToggleMsg: (value: any)=>void,setCompany:(value,any)=>void,
  handleSelect: (value: any)=>void,handleToggleAddCmpny:(value: any)=>void}, {}>  {

  private handleChange = (value, key) => { this.props.updateProperty(value, key) }

  constructor(props) {
    super(props);
    this.addMultiple = this.addMultiple.bind(this);
    this.displayDiv = this.displayDiv.bind(this);
    this.displayProd = this.displayProd.bind(this);
    this.displaySubCat = this.displaySubCat.bind(this);
    this.cancelMultiple = this.cancelMultiple.bind(this);
    this.submitMultiple = this.submitMultiple.bind(this);
    this.handleSelectInd = this.handleSelectInd.bind(this);
    this.handleSelectDiv = this.handleSelectDiv.bind(this);
    this.handleSelectProd = this.handleSelectProd.bind(this);
    this.handleSelectSubCat = this.handleSelectSubCat.bind(this);
    this.handleChangeFilterInd = this.handleChangeFilterInd.bind(this);
    this.handleChangeFilterDiv = this.handleChangeFilterDiv.bind(this);
    this.handleChangeFilterProd = this.handleChangeFilterProd.bind(this);
    this.handleChangeFilterSubCat = this.handleChangeFilterSubCat.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.editMultiple = this.editMultiple.bind(this);
    this.handleSelectEdit = this.handleSelectEdit.bind(this);
  }

  model = {
    name: {type: String}
  };

  modelEdit = {
    id: {type: String},
    industry: {type: String},
    division: {type: String},
    product: {type: String},
    subCategory: {type: String}
  };

  handleChangeCountry = (value) => {
    this.props.personStore.country = value;
  };

  addMultiple(){
    this.props.personStore.multipleDiag = true;
  }

  displayDiv(){
    var temp = this.props.personStore.indSource[this.props.personStore.indSelected[0]];
    this.props.personStore.getDivision(temp.id);
    this.props.personStore.multipleDiag = false;
    this.props.personStore.multipleDivDiag = true;
  }

  displayProd(){
    var temp = this.props.personStore.divSource[this.props.personStore.divSelected[0]];
    this.props.personStore.getProducts(temp.id);
    this.props.personStore.multipleDivDiag = false;
    this.props.personStore.multipleProdDiag = true;
  }

  displaySubCat(){
    var temp = this.props.personStore.prodSource[this.props.personStore.prodSelected[0]];
    this.props.personStore.getSubCategory(temp.id);
    this.props.personStore.multipleProdDiag = false;
    this.props.personStore.multipleSubCatDiag = true;
  }

  cancelMultiple(){
    this.props.personStore.multipleDiag = false;
    this.props.personStore.multipleDivDiag = false;
    this.props.personStore.multipleProdDiag = false;
    this.props.personStore.multipleSubCatDiag = false;
    this.props.personStore.indSelected = [];
    this.props.personStore.divSelected = [];
    this.props.personStore.prodSelected = [];
    this.props.personStore.subCatSelected = [];
    this.props.personStore.indFilter = "";
    this.props.personStore.divFilter = "";
    this.props.personStore.prodFilter = "";
    this.props.personStore.subCatFilter = "";
    this.props.personStore.indSource = this.props.personStore.indSourceTemp;
    this.props.personStore.divSource = this.props.personStore.divSourceTemp;
    this.props.personStore.prodSource = this.props.personStore.prodSourceTemp;
    this.props.personStore.subCatSource = this.props.personStore.subCatSourceTemp;
  }

  submitMultiple(){
    var subCatValue = {};
    if(this.props.personStore.subCatSource.length!=0){
      subCatValue = this.props.personStore.subCatSource[this.props.personStore.subCatSelected[0]];
    }
    var object ={
      industry : this.props.personStore.indSource[this.props.personStore.indSelected[0]],
      division : this.props.personStore.divSource[this.props.personStore.divSelected[0]],
      product : this.props.personStore.prodSource[this.props.personStore.prodSelected[0]],
      subCategory : subCatValue
    }
    this.props.personStore.industryClassTemp.push(object);
    this.props.personStore.industryClass.push(object);

    //Display multiple values for new feature
  //  this.props.personStore.industryDisp = this.props.personStore.industryClass.map((m) => m.industry).map((m) => m.name).join(",");
  //  this.props.personStore.divisionDisp = this.props.personStore.industryClass.map((m) => m.division).map((m) => m.name).join(",");
  //  this.props.personStore.productDisp = this.props.personStore.industryClass.map((m) => m.product).map((m) => m.name).join(",");
  //  this.props.personStore.subCategoryDisp = this.props.personStore.industryClass.map((m) => m.subCategory).map((m) => m.name).join(",");

    let indList = this.props.personStore.industryClass.map((m) => m.industry).map((m) => m.name);
    this.props.personStore.industryDisp = indList.filter((v, i) => indList.indexOf(v) === i).join(",");

    let divList = this.props.personStore.industryClass.map((m) => m.division).map((m) => m.name);
    this.props.personStore.divisionDisp = divList.filter((v, i) => divList.indexOf(v) === i).join(",");

    let prodList = this.props.personStore.industryClass.map((m) => m.product).map((m) => m.name);
    this.props.personStore.productDisp = prodList.filter((v, i) => prodList.indexOf(v) === i).join(",");

    let subCatList = this.props.personStore.industryClass.map((m) => m.subCategory).filter((m)=>m!=null).map((m) => m.name);
    this.props.personStore.subCategoryDisp = subCatList.filter((v, i) => subCatList.indexOf(v) === i).join(",");

    this.cancelMultiple();
  }

  handleSelectInd(selected){
    this.props.personStore.indSelected = selected;
  }

  handleSelectDiv(selected){
    this.props.personStore.divSelected = selected;
  }

  handleSelectProd(selected){
    this.props.personStore.prodSelected = selected;
  }

  handleSelectSubCat(selected){
    this.props.personStore.subCatSelected = selected;
  }

  handleChangeFilterInd(value, key){
    this.props.personStore.indFilter = value;
    this.props.personStore.indSource = this.props.personStore.indSourceTemp.filter((v) =>  v.name.toLowerCase().match(value.toLowerCase()) );
  }

  handleChangeFilterDiv(value, key){
    this.props.personStore.divFilter = value;
    this.props.personStore.divSource = this.props.personStore.divSourceTemp.filter((v) =>  v.name.toLowerCase().match(value.toLowerCase()) );
  }

  handleChangeFilterProd(value, key){
    this.props.personStore.prodFilter = value;
    this.props.personStore.prodSource = this.props.personStore.prodSourceTemp.filter((v) =>  v.name.toLowerCase().match(value.toLowerCase()) );
  }

  handleChangeFilterSubCat(value, key){
    this.props.personStore.subCatFilter = value;
    this.props.personStore.subCatSource = this.props.personStore.subCatSourceTemp.filter((v) =>  v.name.toLowerCase().match(value.toLowerCase()) );
  }

  cancelEdit(){
    this.props.personStore.editToggle = false;
    this.props.personStore.editSelected = [];
  }

  submitEdit(){
    this.props.personStore.deleteArr = [];
    this.props.personStore.editSelected.map((m)=>this.props.personStore.deleteArr.push(this.props.personStore.editMultipleSource[m]));
    this.props.personStore.editToggle = false;

    let that = this;
    console.log(that.props.personStore.industryClass);
    this.props.personStore.deleteArr.forEach(function (v){ that.props.personStore.industryClass = that.props.personStore.industryClass.filter((m)=> m.id!=v.id)});
    console.log(that.props.personStore.industryClass);

    let indList = this.props.personStore.industryClass.map((m) => m.industry).map((m) => m.name);
    this.props.personStore.industryDisp = indList.filter((v, i) => indList.indexOf(v) === i).join(",");

    let divList = this.props.personStore.industryClass.map((m) => m.division).map((m) => m.name);
    this.props.personStore.divisionDisp = divList.filter((v, i) => divList.indexOf(v) === i).join(",");

    let prodList = this.props.personStore.industryClass.map((m) => m.product).map((m) => m.name);
    this.props.personStore.productDisp = prodList.filter((v, i) => prodList.indexOf(v) === i).join(",");

    let subCatList = this.props.personStore.industryClass.map((m) => m.subCategory).filter((m)=>m!=null).map((m) => m.name);
    this.props.personStore.subCategoryDisp = subCatList.filter((v, i) => subCatList.indexOf(v) === i).join(",");
  }

  editMultiple(){
    let valList = this.props.personStore.industryClass.filter((v) => v.userId == this.props.personStore.userId);
    this.props.personStore.editMultipleSource = valList.map((v) =>{
    if(v.subCategory!=undefined && v.subCategory!=null){
      return { id: v.id, industry: v.industry.name, division: v.division.name, product: v.product.name, subCategory: v.subCategory.name }
    }
    else{
      return { id: v.id, industry: v.industry.name, division: v.division.name, product: v.product.name, subCategory: ''}
    }
  }
  );
    this.props.personStore.editToggle = true;
  }

  handleSelectEdit(selected){
    this.props.personStore.editSelected = selected;
  }

  render() {
    let {personStore,handleMultipleChange,handleMultipleChangeProd,handleMultipleChangeRND,state,srchCmpnyhandleToggleMsg,handleSelect,setCompany,handleToggleAddCmpny} = this.props
    let srchCmpnyActions = [
      { label: "OK", onClick: setCompany},
      {label: "Cancel", onClick:srchCmpnyhandleToggleMsg}
    ];

    let multipleDiagIndActions = [
      { label: "Next", onClick: this.displayDiv}
    ];

    let multipleDiagDivActions = [
      { label: "Next", onClick: this.displayProd}
    ];

    let multipleDiagProdActions = [
      { label: "Next", onClick: this.displaySubCat}
    ];

    let multipleDiagSubCatActions = [
      { label: "Done", onClick: this.submitMultiple},
      { label: "Cancel", onClick: this.cancelMultiple}
    ];

    let editActions =[
      { label: "Submit", onClick: this.submitEdit},
      { label: "Cancel", onClick: this.cancelEdit}
    ]
    return (
      <div>
        <div>
              <Button label="Search" raised primary disabled={personStore.companyDisabled} onClick={srchCmpnyhandleToggleMsg} className={theme.companySrchBtn}/>
              <Input type='text' label='Company Name * ' disabled={personStore.companyDisabled} value={personStore.companyName} name="companyName" maxLength={100} onChange={this.handleChange}/>
              <Dropdown
              auto={false}
              source={personStore.businessTypeList}
              label='Business Type * '
              name="businessType"
              onChange={this.handleChange}
              value={personStore.businessType}
              disabled={personStore.companyDisabled}
              />
            {personStore.showCompanyType ?
            (
              <Dropdown
                auto={false}
                source={personStore.companyTypeList}
                label='Company Type'
                name="companyType"
                onChange={this.handleChange}
                value={personStore.companyType}
                className={theme.extraFields}
                disabled={personStore.companyDisabled}
                />
            ) : ""}
            <div className="row">
              <div className="col-sm-10">
                <Input type='text' label='Industry * ' multiline disabled={true} value={personStore.industryDisp} name="companyName"/>
              </div>
              <div className="col-sm-1" style={{padding: '0px'}}>
                <IconButton icon='add' onClick={this.addMultiple} style={{ color: '#11a3ab !important', marginTop: '40%', marginLeft: '10px'}}/>
              </div>
              <div className="col-sm-1" style={{padding: '0px'}}>
                <IconButton icon='edit' onClick={this.editMultiple} style={{ color: '#11a3ab !important', marginTop: '40%'}}/>
              </div>
            </div>
            <Input type='text' label='Division * ' multiline className={theme.extraFields} disabled={true} value={personStore.divisionDisp} name="companyName"/>
            <Input type='text' label='Product * ' multiline className={theme.extraFields} disabled={true} value={personStore.productDisp} name="companyName"/>
            <Input type='text' label='SubCategory ' multiline className={theme.extraFields} disabled={true} value={personStore.subCategoryDisp} name="companyName"/>

          <Autocomplete
            direction="down"
            source={personStore.countryListAuto}
            label='Country * '
            multiple={false}
            onChange={this.handleChangeCountry}
            value={personStore.country}
            disabled={personStore.companyDisabled}
            onQueryChange={(val) => {
                  personStore.country = val;
                }}
          />
          <Autocomplete
            direction="down"
            selectedPosition="above"
            label="Target Markets (Industries) * "
            onChange={handleMultipleChange}
            source={personStore.industryListAuto}
            value={state.multiple}
            disabled={personStore.companyDisabled}
          />
          <Autocomplete
            direction="down"
            selectedPosition="above"
            label="Production Facilities"
            onChange={handleMultipleChangeProd}
            source={personStore.countryListAuto}
            value={state.multipleProd}
            disabled={personStore.companyDisabled}
          />
          <Autocomplete
            direction="down"
            selectedPosition="above"
            label="R&D Facilities"
            onChange={handleMultipleChangeRND}
            source={personStore.countryListAuto}
            value={state.multipleRnD}
            disabled={personStore.companyDisabled}
          />
          <Dropdown
            auto={false}
            source={personStore.revenueList}
            label='Revenue'
            name="revenue"
            onChange={this.handleChange}
            value={personStore.revenue}
            disabled={personStore.companyDisabled}
          />
          <Dropdown
            auto={true}
            source={personStore.employeeList}
            label='Employees * '
            name="employees"
            onChange={this.handleChange}
            value={personStore.employees}
            disabled={personStore.companyDisabled}
          />

          <Input type='number' label='No of Subsidaries * ' disabled={personStore.companyDisabled}
          value={personStore.subsidaries} name="subsidaries" maxLength={5} onChange={this.handleChange}/>

        </div>
        <div>
          <Dialog
              actions={srchCmpnyActions}
              active={state.srchCmpnyActiveMsg}
              onEscKeyDown={srchCmpnyhandleToggleMsg}
              onOverlayClick={srchCmpnyhandleToggleMsg}
              className={theme.countryListTab}
            >
            <IconButton icon='add' onClick={handleToggleAddCmpny}/>
            {personStore.displayNewCompanyName ?
            <Input type='text' label='New Company Name'
            value={personStore.newCompanyName} name="newCompanyName" onChange={this.handleChange}/> :
            <Table
              model={this.model}
              onSelect={handleSelect}
              selectable
              multiSelectable={false}
              selected={state.selected}
              source={state.source}
            />}
          </Dialog>


          <Dialog
              actions={multipleDiagIndActions}
              active={personStore.multipleDiag}
              onEscKeyDown={this.cancelMultiple}
              onOverlayClick={this.cancelMultiple}
              className={theme.countryListTab}
            >
            <div style={{backgroundColor: '#11a3ab', fontSize: '2vw'}}><span style={{marginLeft: '42%',color: '#ffffff'}}>Industry</span></div>
            <div style={{fontSize: '1vw', paddingTop: '11px', paddingLeft: '11px'}}> <span style={{color:'red'}}>*</span> You can select only one industry value </div>
            <Input type='text' label='Filter ' value={personStore.indFilter} name="indFilter" maxLength={100} onChange={this.handleChangeFilterInd}/>

            <Table
              model={this.model}
              onSelect={this.handleSelectInd}
              selectable
              multiSelectable={false}
              selected={personStore.indSelected}
              source={personStore.indSource}
            />
          </Dialog>

          <Dialog
              actions={multipleDiagDivActions}
              active={personStore.multipleDivDiag}
              onEscKeyDown={this.cancelMultiple}
              onOverlayClick={this.cancelMultiple}
              className={theme.countryListTab}
            >
            <div style={{backgroundColor: '#11a3ab', fontSize: '2vw'}}><span style={{marginLeft: '42%',color: '#ffffff'}}>Division</span></div>
            <div style={{fontSize: '1vw', paddingTop: '11px', paddingLeft: '11px'}}> <span style={{color:'red'}}>*</span> You can select only one division value </div>
            <Input type='text' label='Filter ' value={personStore.divFilter} name="divFilter" maxLength={100} onChange={this.handleChangeFilterDiv}/>

            <Table
              model={this.model}
              onSelect={this.handleSelectDiv}
              selectable
              multiSelectable={false}
              selected={personStore.divSelected}
              source={personStore.divSource}
            />
          </Dialog>

          <Dialog
              actions={multipleDiagProdActions}
              active={personStore.multipleProdDiag}
              onEscKeyDown={this.cancelMultiple}
              onOverlayClick={this.cancelMultiple}
              className={theme.countryListTab}
            >
            <div style={{backgroundColor: '#11a3ab', fontSize: '2vw'}}><span style={{marginLeft: '42%',color: '#ffffff'}}>Product</span></div>
            <div style={{fontSize: '1vw', paddingTop: '11px', paddingLeft: '11px'}}> <span style={{color:'red'}}>*</span> You can select only one product value </div>
            <Input type='text' label='Filter ' value={personStore.prodFilter} name="prodFilter" maxLength={100} onChange={this.handleChangeFilterProd}/>

            <Table
              model={this.model}
              onSelect={this.handleSelectProd}
              selectable
              multiSelectable={false}
              selected={personStore.prodSelected}
              source={personStore.prodSource}
            />
          </Dialog>

          <Dialog
              actions={multipleDiagSubCatActions}
              active={personStore.multipleSubCatDiag}
              onEscKeyDown={this.cancelMultiple}
              onOverlayClick={this.cancelMultiple}
              className={theme.countryListTab}
            >
            <div style={{backgroundColor: '#11a3ab', fontSize: '2vw'}}><span style={{marginLeft: '42%',color: '#ffffff'}}>SubCategory</span></div>
            <div style={{fontSize: '1vw', paddingTop: '11px', paddingLeft: '11px'}}> <span style={{color:'red'}}>*</span> You can select only one sub-category value </div>
            <Input type='text' label='Filter ' value={personStore.subCatFilter} name="subCatFilter" maxLength={100} onChange={this.handleChangeFilterSubCat}/>

            <Table
              model={this.model}
              onSelect={this.handleSelectSubCat}
              selectable
              multiSelectable={false}
              selected={personStore.subCatSelected}
              source={personStore.subCatSource}
            />
          </Dialog>

          <Dialog
              actions={editActions}
              active={personStore.editToggle}
              onEscKeyDown={this.cancelEdit}
              onOverlayClick={this.cancelEdit}
              className={theme.editMultiple}
            >
            <div style={{backgroundColor: '#11a3ab', fontSize: '2vw'}}><span style={{marginLeft: '42%',color: '#ffffff'}}>Edit</span></div>
            <Table
              model={this.modelEdit}
              onSelect={this.handleSelectEdit}
              selectable
              multiSelectable={true}
              selected={personStore.editSelected}
              source={personStore.editMultipleSource}
            />
          </Dialog>

          <Dialog
              actions={editActions}
              active={personStore.editToggle}
              onEscKeyDown={this.cancelEdit}
              onOverlayClick={this.cancelEdit}
              className={theme.editMultiple}
            >
            <div style={{backgroundColor: '#11a3ab', fontSize: '2vw'}}><span style={{marginLeft: '42%',color: '#ffffff'}}>Edit</span></div>
            <Table
              model={this.modelEdit}
              onSelect={this.handleSelectEdit}
              selectable
              multiSelectable={true}
              selected={personStore.editSelected}
              source={personStore.editMultipleSource}
            />
          </Dialog>
        </div>
      </div>
    )
  }
}
