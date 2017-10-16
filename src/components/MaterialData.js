"use strict";

/*Note: fetch doesn't export the module*/
import 'whatwg-fetch';

export default class MaterialData {
	constructor() {}
    
    /*this function wrap the 'fetch' into another ES6 promise. ****/
    /*This way, you can use any other 3rd party async library e.g. axios *****
    /*without change other components*/
    getData(url) {
        const objPromise = new Promise((resolve, reject) => {
            fetch(url)
                .then(function(response) {
                    return response.json();
                }).then(function(json) {
                    resolve(json);
                }).catch(function(ex) {
                    reject(ex);
                });
        });
        
        return objPromise;
    }
    postData(url, jData) {
        const objPromise = new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jData)
                
            }).then((response) => {
                return response.json();
            }).then((json) => {
                resolve(json);
            }).catch((ex) => {
                reject(ex);
            });
        });
        
        return objPromise;
    }
        
    /*this function expects ReactJS state is passed in as obj*/
	getItems(obj) {
		fetch('./json.php?action=electrical_supplier')
			.then(function(response) {
				return response.json();
			}).then(function(json) {
				obj.setState( {
					popupLoading: false,
					popupLoaded: true,
					popupData: json
				} );
			}).catch(function(ex) {
				obj.setState( {popupData: []} );
				console.log('parsing failed', ex);
			});
	}
	
	getItemsBySupplier(supplier) {
		return this.getData('./json.php?action=electrical_supplier');
	}
	getMaterialInitData() {
		return this.getData('./json.php?action=material_init');
	}
    
    getMaterialTypes() {
        return [
            {value: '', label: ''},
            {value: '0', label: 'Edsring Stock'}, 
            {value: '1', label: 'Base Building Stock'}
        ];
    }
    getMaterialButtons() {
        return [
            {name: 'Docket From Supplier', style: 'primary', id: 'material_docket'},
            {name: 'My Stock', style: 'info', id: 'material_mystock'},
            {name: 'Edsring Store Stock', style: 'info', id: 'material_edsring_stock'},
            {name: 'Client Base Building Stock', style: 'success', id: 'material_base_building'},
            {name: 'Tenant (TSR)', style: 'success', id: 'material_tenant'},
            {name: 'Not Required', style: 'warning', id: 'no_material'}
        ];
    }
    getServiceTypes() {
        return [
            {value: '', label: 'Please select a service type'},
            {value: 'R&M Electrical', label: 'R&M Electrical'}, 
            {value: 'R&M General', label: 'R&M General'},
            {value: 'R&M Lighting', label: 'R&M Lighting'},
            {value: 'R&M Plumbing', label: 'R&M Plumbing'}
        ];
    }
    getElectricColumns() {
        return [
            {title: 'Supplier', field: 'Supplier', type: 'select', options: this.getSuppliers()}, 
            {title: 'Type', field: 'Stock_Type', type: 'text'}, 
            {title: 'Pins', field: 'Pins', type: 'text'},  
            {title: 'Watt/Size', field: 'Watts', type: 'text'},      
            {title: 'Colour', field: 'Colour', type: 'text'},    
            {title: 'Description', field: 'Description', type: 'select', options: []},   
            {title: 'Supplier product #', field: 'Item_No', type: 'select', options: []}, 
            {title: 'Price', field: 'stock_price', type: 'text', dataType: 'decimal'},   
            {title: 'Qty.', field: 'stock_qty', type: 'text', defaultValue: 1, dataType: 'int'},
            {title: 'Total', field: 'Total', type: 'text', dataType: 'decimal', readonly: true}
        ];
    }
    getSuppliers() {
        return [
            {value: '', label: 'Please select a supplier'},
            {value: 'Electrical 1', label: 'Electrical 1'}, 
            {value: 'Electrical 2', label: 'Electrical 2'},
            {value: 'Electrical 3', label: 'Electrical 3'},
            {value: 'not in the list', label: 'Not In the List'}
        ];
    }
}