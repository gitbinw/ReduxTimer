import {DropDown, FieldGroup, Validator} from './Control';
import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import MaterialData from './MaterialData';
import s from '../../scss/material/material.scss';

function ServiceTypeMenus(props) {
	const valid = props.validation ? props.validation : {};
	return (
		<div>
			{
				props.step == 'ServiceTypeMenus' && 
				<DropDown 
					name="ServiceType" 
					label="Service Type" 
					value={props.info.ServiceType} 
					options={props.options} 
					onChange={props.onChange} 
					validState={valid.ServiceType ? valid.ServiceType.status : null}
					help={valid.ServiceType ? valid.ServiceType.message : null}
				/>
			}
		</div>
	);
}
function SupplierMenus(props) {
	const valid = props.validation ? props.validation : {};
	const options = Object.assign([], props.options);
	if (options.length > 0) options.unshift({value: '', label: 'Please select a supplier'});

	return (
		<div>
			{
				props.step == 'SupplierMenus' && 
				<DropDown 
					name="SupplierSelected" 
					label="Electrical Suppliers" 
					value={props.info.SupplierSelected} 
					options={options} 
					onChange={props.onChange} 
					validState={valid.SupplierSelected ? valid.SupplierSelected.status : null}
					help={valid.SupplierSelected ? valid.SupplierSelected.message : null}
				/>
			}
		</div>
	);
}
function SupplierItemDetails(props) {
	return (
		props.step == 'SupplierItemDetails' &&
		<div>
			<FieldGroup
				id="formControlsType"
				name="Type"
				label="Type (optional)"
				type="text"
				placeholder="Type"
				value={props.info.Type}
				onChange={props.onChange}
			/>
			<FieldGroup
				id="formControlsColour"
				name="Colour"
				label="Colour (optional)"
				type="text"
				placeholder="Colour"
				value={props.info.Colour}
				onChange={props.onChange}
			/>
			<FieldGroup
				id="formControlsPins"
				name="Pins"
				label="Pins (optional)"
				type="text"
				placeholder="Pins"
				value={props.info.Pins}
				onChange={props.onChange}
			/>
			<FieldGroup
				id="formControlsSize"
				name="Size"
				label="Size (optional)"
				type="text"
				placeholder="Size"
				value={props.info.Size}
				onChange={props.onChange}
			/>
		</div>
	);
}
function SupplierItemBasicInfo(props) {
	const valid = props.validation ? props.validation : {};
	return (
		props.step == 'SupplierItemBasicInfo' &&
		<div>
			<FieldGroup
				id="formControlsSupplier"
				name="Supplier"
				label="Supplier"
				type="text"
				placeholder="Supplier"
				validState={props.validState}
				value={props.info.Supplier}
				onChange={props.onChange}
				validState={valid.Supplier ? valid.Supplier.status : null}
				help={valid.Supplier ? valid.Supplier.message : null}
			/>
			<FieldGroup
				id="formControlsItemName"
				name="Item"
				label="Item Name"
				componentClass="textarea"
				placeholder="Item Name"
				value={props.info.Item}
				onChange={props.onChange}
				validState={valid.Item ? valid.Item.status : null}
				help={valid.Item ? valid.Item.message : null}
			/>
			<FieldGroup
				id="formControlsDescription"
				name="Description"
				label="Description"
				componentClass="textarea"
				placeholder="Description"
				value={props.info.Description}
				onChange={props.onChange}
				validState={valid.Description ? valid.Description.status : null}
				help={valid.Description ? valid.Description.message : null}
			/>
		</div>
	);
}

function MaterialQuantity(props) {
	const total = props.info.Total ? props.info.Total : "0.00";
	const valid = props.validation ? props.validation : {};
	return (
		props.step == 'MaterialQuantity' &&
		<div>
			<FieldGroup
				id="formControlsPrice"
				name="Price"
				label="Price"
				type="text"
				placeholder="0.00"
				validState={valid.Price ? valid.Price.status : null}
				help={valid.Price ? valid.Price.message : null}
				value={props.info.Price ? props.info.Price : ""}
				onChange={props.onChange}
				onFocus={props.onFocus}
			/>
			<FieldGroup
				id="formControlsQuantity"
				name="Quantity"
				label="Quantity"
				type="number"
				placeholder="Quantity"
				validState={valid.Quantity ? valid.Quantity.status : null}
				help={valid.Quantity ? valid.Quantity.message : null}
				value={props.info.Quantity ? props.info.Quantity : 0}
				onChange={props.onChange}
				onFocus={props.onFocus}
			/>
			<p>
				<b>Total:&nbsp;</b> {Number.isNaN(total) ? '0.00' : total}
			</p>
		</div>
	);
}

function MaterialLocation(props) {
	const valid = props.validation ? props.validation : {};
	const towers = Object.assign([], props.towers);
	const levels = Object.assign([], props.levels);

	if (levels.length > 0) levels.unshift({value: '', label: 'Please select a level'});
	if (towers.length > 1) towers.unshift({value: '', label: 'Please select a tower'});

	return (
		props.step == 'MaterialLocation' &&
		<div>
			<DropDown 
				id="formControlsTower"
				name="Tower" 
				label="Tower" 
				validState={valid.Tower ? valid.Tower.status : null}
				help={valid.Tower ? valid.Tower.message : null}
				value={props.info.Tower} 
				options={towers} 
				onChange={props.onChange} 
				style={towers.length <= 1 ? {display: 'none'} : null}
			/>
			<DropDown 
				id="formControlsLevel"
				name="Level" 
				label="Level" 
				validState={valid.Level ? valid.Level.status : null}
				help={valid.Level ? valid.Level.message : null}
				value={props.info.Level} 
				options={levels} 
				onChange={props.onChange} 
				style={levels.length < 1 ? {display: 'none'} : null}
			/>
			<FieldGroup
				id="formControlsLocation"
				name="Location"
				label="Location"
				type="text"
				placeholder="Location"
				validState={valid.Location ? valid.Location.status : null}
				help={valid.Location ? valid.Location.message : null}
				value={props.info.Location}
				onChange={props.onChange}
			/>
		</div>
	);
}
function MaterialStock(props) {
	const valid = props.validation ? props.validation : {};

	return (
		props.step == 'MaterialStock' &&
		<div>
			<DropDown 
				name="StockId" 
				label="Stock" 
				value={props.info.StockId} 
				options={props.options.stocks} 
				onChange={props.onChange} 
				validState={valid.StockId ? valid.StockId.status : null}
				help={valid.StockId ? valid.StockId.message : null}
			/>
			<FieldGroup
				id="formControlsStockDesc"
				name="Description"
				label="Stock Description"
				type="text"
				placeholder="Stock Description"
				value={props.info.Description}
				onChange={props.onChange}
				validState={valid.Description ? valid.Description.status : null}
				help={valid.Description ? valid.Description.message : null}
			/>
		</div>
	);
} 
function MaterialTenant(props) {
	const valid = props.validation ? props.validation : {};
	return (
		props.step == 'MaterialTenant' &&
		<div>
			<FieldGroup
				id="formControlsDescription"
				name="Description"
				label="Description"
				componentClass="textarea"
				placeholder="Description"
				value={props.info.Description}
				onChange={props.onChange}
				validState={valid.Description ? valid.Description.status : null}
				help={valid.Description ? valid.Description.message : null}
			/>
			<DropDown 
				id="formControlsMaterialType"
				name="MaterialType" 
				label="Material Type" 
				placeholder="Material Type"
				value={props.info.MaterialType} 
				options={props.options} 
				onChange={props.onChange} 
				validState={valid.MaterialType ? valid.MaterialType.status : null}
				help={valid.MaterialType ? valid.MaterialType.message : null}
			/>
			<FieldGroup
				id="formControlsTenant"
				name="Tenant"
				label="Tenant"
				type="text"
				placeholder="Tenant"
				validState={props.validState}
				value={props.info.Tenant}
				onChange={props.onChange}
				validState={valid.Tenant ? valid.Tenant.status : null}
				help={valid.Tenant ? valid.Tenant.message : null}
			/>
		</div>
	);
} 
function MaterialDocket(props) {
	const valid = props.validation ? props.validation : {};
	return (
		props.step == 'MaterialDocket' &&
		<div>
			<FieldGroup
				id="formControlsDescription"
				name="Description"
				label="Description"
				componentClass="textarea"
				placeholder="Description"
				value={props.info.Description}
				onChange={props.onChange}
				validState={valid.Description ? valid.Description.status : null}
				help={valid.Description ? valid.Description.message : null}
			/>
			<FieldGroup
				id="formControlsSupplier"
				name="Supplier"
				label="Supplier"
				type="text"
				placeholder="Supplier"
				validState={valid.Supplier ? valid.Supplier.status : null}
				help={valid.Supplier ? valid.Supplier.message : null}
				value={props.info.Supplier}
				onChange={props.onChange}
			/>
			<FieldGroup
				id="formControlsDocketNumber"
				name="DocketNumber"
				label="Docket Number (optional)"
				type="text"
				placeholder="Docket Number"
				value={props.info.DocketNumber}
				onChange={props.onChange}
			/>
			<FieldGroup
				id="formControlsTollCharges"
				name="TollCharges"
				label="Toll Charges"
				type="checkbox"
				bsStyle="inline-checkbox"
				placeholder="Toll Charges"
				checked={props.info.TollCharges}
				value="1"
				onChange={props.onChange}
			/>
		</div>
	);
} 

function MaterialBaseBuilding(props) {
	const valid = props.validation ? props.validation : {};
	return (
		props.step == 'MaterialBaseBuilding' &&
		<div>
			<FieldGroup
				id="formControlsDescription"
				name="Description"
				label="Description"
				componentClass="textarea"
				placeholder="Description"
				value={props.info.Description}
				onChange={props.onChange}
				validState={valid.Description ? valid.Description.status : null}
				help={valid.Description ? valid.Description.message : null}
			/>
		</div>
	);
}

function NoMaterial(props, children) {
	return (
		props.step == 'NoMaterial' &&
		<div>
			<p>By clicking the below button to confirm "NO MATERIAL".</p>
			<Button onClick={props.onSubmit}>No Material {children}</Button>
		</div>
	);
}


function MaterialButtons(props) {
	const jsxButtons = props.buttons.map((btn, i) => {
		return (
			<ButtonGroup key={i} vertical block>
				<Button bsStyle={btn.style} bsSize="large" onClick={() => props.onClick(btn)}>
					{btn.name}
				</Button>
			</ButtonGroup>
		);
	});
	return (
		<div>
			{
				props.step == 'MaterialButtons' && 
				<div>
					{jsxButtons}
				</div>
			}
		</div>
	);
}

class MaterialForm extends React.Component {
	render() {
		return (
			<div>
			
			</div>
		);
	}
}
class SupplierItemList extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			loading: true,
			loaded: false,
			supData: []
		};
	}
	
	componentDidUpdate(prevProps, prevState) {
		if (this.props.supplier && this.props.supplier != prevProps.supplier) {
			const md = new MaterialData();
			md.getItemsBySupplier(this.props.supplier).then((jData) => {
				this.setState({
					loading: false,
					loaded: true,
					supData: jData.data
				});
			}).catch((ex) => {
				this.setState({
					loading: false,
					loaded: true,
					supData: []
				});
			});
		}
	}
	render() {	
		const valid = this.props.validation ? this.props.validation : {};
		const selSupp = valid.SupplierItemSelected;
		const jsxError = selSupp && selSupp.status && selSupp.message ? 
							<div className="has-error">
								<label className="control-label">{selSupp.message}</label>
							</div> : '';

		return (
			this.props.step == 'SupplierItemList' && 
			<div>
				{this.state.loading && <div>Loading...</div>}
						
				{	
					this.state.loaded &&
					<ListGroup>
						{jsxError}
						{	
							this.state.supData.map((row, i) => { 
								return (<ListGroupItem key={i} onClick={() => this.props.onClick(row)}>{row.Description}</ListGroupItem>); 
							}) 
						}
					</ListGroup>
				}
			</div>
		);
	}
}

export default class Material extends React.Component {
	constructor(props) {
		super(props);

		const levelsSource = props.materialData.locations.levels;
		const towers = props.materialData.locations.towers;

		let levels = [];
		let defaultTowerValue = '';
		if (towers.length == 1 && levelsSource[towers[0]] != undefined) {
			levels = levelsSource[towers[0]];
			defaultTowerValue = towers[0];
		}

		this.supplierTriger = ['lights', 'electrical'];
		this.defaultTitle = 'Pick up one material option.';
		this.defaultFormData = { Tower: defaultTowerValue };
		this.defaultState = {
			formData: Object.assign({}, this.defaultFormData),
			validStates: {},
			modalCurrentStep: '',
			modalShow: false,
			modalBtnNext: 'Next',
			modalPrevStep: '',
			modalNextStep: 'ServiceTypeMenus',
			stepTitle: this.defaultTitle,
			stepSubTitle: '',
			stepState: 1,
			locationLevels: levels
		};
		this.state = Object.assign({}, this.defaultState);
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleItemClick = this.handleItemClick.bind(this);
		this.openModal = this.openModal.bind(this);
		this.beforeOpenModal = this.beforeOpenModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.afterCloseModal = this.afterCloseModal.bind(this);
		this.prevStep = this.prevStep.bind(this);
		this.nextStep = this.nextStep.bind(this);
	}

	openModal() {
		this.setState({
			modalShow: true
		});
	}
	beforeOpenModal() {
		if (!this.state.modalCurrentStep) {
			this.setState({
				modalCurrentStep: 'MaterialButtons'
			});
		}
	}
	closeModal() {
		this.setState({
			modalShow: false
		});
	}
	afterCloseModal() {
		//if (this.state.modalBtnNext == 'Done') {
			this.setState({
				modalCurrentStep: 'MaterialButtons'
			});
			
			this.resetState();
		//}
	}
	handleSubmit() {
		alert('submit');
	}
	handleMaterialOptionClick(btn) {
		const nextStep = btn.id == 'no_material' ? 'NoMaterial' : this.state.modalNextStep;
		this.setStep(nextStep, {
			stepTitle: btn.name,
			material_mode: btn.id
		});
	}
	handleFocus(e) {
		e.target.select();
	}
	handleChange(e) {
		const target = e.target;
		const fieldName = target.name;
		const data = { [fieldName]: target.type == 'checkbox' ? target.checked : target.value };
		
		let myFormData = Object.assign(this.state.formData, data);
		
		if (fieldName == 'Price' || fieldName == 'Quantity') {
			const price = data.Price ? data.Price : (this.state.formData.Price ? this.state.formData.Price : 0);
			const qty = data.Quantity ? data.Quantity : (this.state.formData.Quantity ? this.state.formData.Quantity : 1);
			
			myFormData =  Object.assign(this.state.formData, {Total: price * qty});

		} else if (fieldName == 'StockId') {
			const stockData = this.props.materialData.stockData;
			const stockDetails = stockData.stockDetails;
			const objStock = data.StockId && stockDetails[data.StockId] ? stockDetails[data.StockId] : null; 
			let desc = '';
			let price = '';
			if (objStock) {
				desc = objStock.item;
				price = objStock.price;
			}
			myFormData =  Object.assign(this.state.formData, {Description: desc, Price: price});
		
		} else if (fieldName == 'Tower') {
			if (target.value) {
				this.setState({locationLevels: this.props.materialData.locations.levels[target.value]});
			}
		}
		
		const validator = new Validator();
		const formError = validator.validate([fieldName], data);
		if (formError === true) {
			let myValidates = Object.assign(this.state.validStates, {[fieldName]: {status: null, message: ''}});
			if (fieldName == 'StockId') {
				myValidates =  Object.assign(this.state.validStates, {Description: {status: null, message: ''}});
			} 
			this.setState({ formData:  myFormData, validStates: myValidates });
		} else {
			this.setState({ formData:  myFormData });
		}
	}
	handleItemClick(item) {
		if (item) {
			for(let i in item) {
				this.setState({
					formData: Object.assign(this.state.formData, {
						[i]: item[i]
					})
				});
			}
		}
		
		this.setStep('SupplierItemBasicInfo');
	}
	
	resetState() {
		const formData = Object.assign({}, this.defaultFormData);
		this.setState( Object.assign({}, this.defaultState, {formData: formData}) ) ;
	}
	nextStep() {
		const serviceType = this.state.formData.ServiceType;
		
		if (this.state.modalCurrentStep == 'SupplierItemList') {
			this.setState({
				validStates: {SupplierItemSelected: {status: 'error', message:'Please select an item from the list.'}}
			});
		} else if (this.state.modalCurrentStep == 'ServiceTypeMenus') {
			if (this.state.material_mode == 'material_docket') {
				this.setStep('MaterialDocket');
			} else if (this.state.material_mode == 'material_base_building') {
				this.setStep('MaterialBaseBuilding');
			} else if (this.state.material_mode == 'material_tenant') {
				this.setStep('MaterialTenant');
			} else if (this.state.material_mode == 'material_mystock' || this.state.material_mode == 'material_edsring_stock') {
				if (serviceType && this.supplierTriger.indexOf(serviceType.toLowerCase()) !== -1) {
					this.setStep('SupplierMenus');
				} else {
					this.setStep('MaterialStock');
				} 
			}
			
		} else if (this.state.modalCurrentStep == 'SupplierMenus') {
			const selSupp = this.state.formData.SupplierSelected;
			if (selSupp && selSupp.toLowerCase() == 'not in the list') {
				this.setStep('SupplierItemBasicInfo');
			} else {
				this.setStep('SupplierItemList');
			}

		} else {
			this.setStep(this.state.modalNextStep);
		}
	}
	prevStep() {
		this.setStep(this.state.modalPrevStep);
	}
	setStep(step, objState) {
		const validator = new Validator();

		let stepState = {
			modalCurrentStep: step,
			modalBtnNext: 'Next'
		};
		let formError = true;

		if (objState) Object.assign(stepState, objState)
		
		switch(step) {
			case 'MaterialButtons' :
				stepState = Object.assign(stepState, {
					stepSubTitle: '',
					stepTitle: this.defaultTitle,
					modalPrevStep: '',
					modalNextStep: 'ServiceTypeMenus'
				});
				break;
			
			case 'ServiceTypeMenus' :
				stepState = Object.assign(stepState, {
					stepSubTitle: ' - Service Type',
					modalPrevStep: 'MaterialButtons'
				});
				break;
			
			case 'SupplierMenus' :
				formError = validator.validate( ['ServiceType'], this.state.formData );
				stepState = Object.assign(stepState, {
					stepSubTitle: ' - Pick one supplier',
					modalPrevStep: 'ServiceTypeMenus',
					modalNextStep: 'SupplierItemList'
				});
				break;
			
			case 'SupplierItemList' :
				formError = validator.validate( ['SupplierSelected'], this.state.formData );
				stepState = Object.assign(stepState, {
					stepSubTitle: ' - Pick one item',
					modalPrevStep: 'SupplierMenus',
					modalNextStep: 'SupplierItemBasicInfo'
				});
				break;
			
			case 'SupplierItemBasicInfo' :
				stepState = Object.assign(stepState, {
					stepSubTitle: ' - Item Details',
					modalPrevStep: 'SupplierItemList',
					modalNextStep: 'SupplierItemDetails'
				});
				break;
			
			case 'SupplierItemDetails' :
				formError = validator.validate( ['Supplier', 'Item', 'Description'], this.state.formData );
				stepState = Object.assign(stepState, {
					stepSubTitle: ' - Item Details',
					modalPrevStep: 'SupplierItemBasicInfo',
					modalNextStep: 'MaterialQuantity'
				});
				break;
			
			case 'MaterialQuantity' :
				let myNextStep = 'MaterialSubmitted';
				let myNextBtn = 'Done';
				let myPrevStep = this.state.modalCurrentStep;

				if (this.props.materialData.locationRequired) {
					myNextStep = 'MaterialLocation';
					myNextBtn = 'Next';	
				}
				if (this.state.modalCurrentStep == 'MaterialDocket') {
					formError = validator.validate( ['Description', 'Supplier'], this.state.formData );

				} else if (this.state.modalCurrentStep == 'MaterialBaseBuilding') {
					formError = validator.validate( ['Description'], this.state.formData );

				} else if (this.state.modalCurrentStep == 'MaterialTenant') {
					formError = validator.validate( ['Description', 'MaterialType', 'Tenant'], this.state.formData );

				} else if (this.state.modalCurrentStep ==  'MaterialStock') {
					formError = validator.validate( ['StockId', 'Description'], this.state.formData );
				}
				stepState = Object.assign(stepState, {
					stepSubTitle: ' - Enter Quantity',
					modalPrevStep: myPrevStep,
					modalNextStep: myNextStep,
					modalBtnNext: myNextBtn
				});

				break;
			
			case 'MaterialDocket' :
			case 'MaterialBaseBuilding' :
			case 'MaterialTenant' :
			case 'MaterialStock' :
				formError = validator.validate( ['ServiceType'], this.state.formData );
				stepState = Object.assign(stepState, {
					stepSubTitle: ' - Material Details',
					modalPrevStep: 'ServiceTypeMenus',
					modalNextStep: 'MaterialQuantity'
				});
				break;
			
			case 'MaterialLocation' :
				formError = validator.validate( ['Price', 'Quantity'], this.state.formData );
				stepState = Object.assign(stepState, {
					stepSubTitle: ' - Location Details',
					modalPrevStep: 'MaterialQuantity',
					modalNextStep: 'MaterialSubmitted',
					modalBtnNext: 'Done'
				});
				break;

			case 'NoMaterial' :
				stepState = Object.assign(stepState, {
					stepSubTitle: ' - Confirm',
					modalPrevStep: 'MaterialButtons',
					modalNextStep: '',
					modalBtnNext: 'Done'
				});
				break;
			
			case 'MaterialSubmitted' :
				if (this.props.materialData.locationRequired) {
					formError = validator.validate( ['Tower', 'Level', 'Location'], this.state.formData );
					
				} else {
					formError = validator.validate( ['Price', 'Quantity'], this.state.formData );
				}
				break;
		}

		if (formError === true)	{
			if (step == 'MaterialSubmitted') {
				const myFormData = Object.assign(
										this.state.formData, 
										{MaterialMode: this.state.material_mode},
										(this.props.onInit ? this.props.onInit() : {})
									);
				if (this.props.onComplete) this.props.onComplete(myFormData);
				this.closeModal();
				console.log('BBBBBBBBBBBBBBB', myFormData);
			} else {
				this.setState(stepState);
			}
			
		} else {
			this.setState({validStates: formError});
		}
	}
	componentDidUpdate(prevProps, prevState) {
		//console.log(prevProps, prevState, 'component did update...', this.state);
		//const nextStep = prevState.id == 'no_material' ? 'NoMaterial' : 'ServiceTypeMenus';
		/*if (!prevState.modalCurrentStep) {
			const objData = new MaterialData();
			objData.getMaterialInitData().then((jData) => {
				const initData = jData.data;
				console.log('dddddddddddddddddddddd', initData, jData);
				this.setState({
					electricalSuppliers: initData.electrical_suppliers,
					locationRequired: initData.location_required,
					locations: initData.locations,
					stocks: initData.stock_data.stocks,
					stockDetails: initData.stock_data.stockDetails
				});
			}).catch((ex) => {
				console.log('failed to get initial material data!', ex);
			});
		}*/

	}
	componentWillUnmount() {
	}
	/*shouldComponentUpdate(nextProps, nextState) {
		if (nextState.material_mode == 'no_material' && this.state.modalCurrentStep == 'MaterialButtons') {
			console.log('cccccccccccccccccccccc');
			this.setStep('NoMaterial');

			return false;
		} else {
			return true;
		}
	}*/
	render() {
		const objData = new MaterialData();
		const buttonsList = objData.getMaterialButtons();
		const serviceTypeList = objData.getServiceTypes();
		const materialTypeList = objData.getMaterialTypes();

		const initData = this.props.materialData;
		const supplierList = initData.electricalSuppliers;
		const stocks = initData.stockData;
		const towers = initData.locations.towers;

		return (
			<div>
				<Button bsStyle="primary" onClick={this.openModal}>Add Material</Button>
				<Modal backdrop="static" show={this.state.modalShow} onHide={this.closeModal} onEnter={this.beforeOpenModal} onExited={this.afterCloseModal}>
					<Modal.Header>
						<Modal.Title>{this.state.stepTitle + this.state.stepSubTitle}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<MaterialButtons buttons={buttonsList} step={this.state.modalCurrentStep} onClick={(btn) => this.handleMaterialOptionClick(btn)} />
						<ServiceTypeMenus step={this.state.modalCurrentStep} info={this.state.formData} options={serviceTypeList} onChange={this.handleChange} validation={this.state.validStates} />
						<SupplierMenus step={this.state.modalCurrentStep} info={this.state.formData} options={supplierList} onChange={this.handleChange} validation={this.state.validStates} />	
						<SupplierItemList step={this.state.modalCurrentStep} supplier={this.state.formData.SupplierSelected} onClick={this.handleItemClick} validation={this.state.validStates} />
						<SupplierItemBasicInfo step={this.state.modalCurrentStep} info={this.state.formData} onChange={this.handleChange} validation={this.state.validStates} />
						<SupplierItemDetails step={this.state.modalCurrentStep} info={this.state.formData} onChange={this.handleChange} validation={this.state.validStates} />
						<MaterialQuantity step={this.state.modalCurrentStep} info={this.state.formData} onChange={this.handleChange} onFocus={this.handleFocus} validation={this.state.validStates} />
						<MaterialStock step={this.state.modalCurrentStep} info={this.state.formData} options={stocks} onChange={this.handleChange} validation={this.state.validStates} />
						<MaterialBaseBuilding step={this.state.modalCurrentStep} info={this.state.formData} onChange={this.handleChange} validation={this.state.validStates} />
						<MaterialTenant step={this.state.modalCurrentStep} info={this.state.formData} options={materialTypeList} onChange={this.handleChange} validation={this.state.validStates} />
						<MaterialLocation step={this.state.modalCurrentStep} info={this.state.formData} towers={towers} levels={this.state.locationLevels} onChange={this.handleChange} validation={this.state.validStates} />
						<MaterialDocket step={this.state.modalCurrentStep} info={this.state.formData} onChange={this.handleChange} validation={this.state.validStates} />
						<NoMaterial step={this.state.modalCurrentStep} onSubmit={this.handleSubmit}>test</NoMaterial>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.closeModal}>Close</Button>
						<Button onClick={this.prevStep}>Back</Button>
						<Button onClick={this.nextStep}>{this.state.modalBtnNext}</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}