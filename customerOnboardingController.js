({
    doInit: function(component){
        var options = [
            { value: "base", label: "Base Product Suite" },
            { value: "standardsupport", label: "Standard Support" },
            { value: "support", label: "Premium Support" },
            { value: "platform", label: "Platform Pack" },
            { value: "bonus1", label: "Bonus Pack" },
            { value: "social", label: "Social Plugins" },            
        ];
        var values = ["base"];
        var required = ["base"];
        component.set("v.listOptions", options);
        component.set("v.defaultOptions", values);
        component.set("v.requiredOptions", required);
    },
    
    updateData: function(component) {      
        var r = component.get('v.record');
        var columnDefs = [
            {label: "Customer", fieldName : "Name", type: 'text'},
            {label: "Product", fieldName : "Product", type: 'text'},
            {label: "Term", fieldName : "Term", type: 'text'},
            {label: "Enrolled", fieldName : "Enrolled", type: 'text'},
        ];
        
        var histories = [ { "Name": r.Name, "Product": "Base Product Suite", "Term": "24 mo", "Enrolled": "Yes" },
                           { "Name": r.Name, "Product": "Platform Pack", "Term": "24 mo", "Enrolled": "Yes" },
                           { "Name": r.Name, "Product": "Standard Support", "Term": "0 mo", "Enrolled": "No" },
                           { "Name": r.Name, "Product": "Premium Support", "Term": "0 mo", "Enrolled": "No" },
                           { "Name": r.Name, "Product": "Bonus Pack", "Term": "0 mo", "Enrolled": "No" },
                           { "Name": r.Name, "Product": "Social Plugins", "Term": "0 mo", "Enrolled": "No" }];
        
        component.set("v.columnDefs", columnDefs);
        component.set("v.histories", histories);
    },
    
    handleFilesChange : function(component, event) {
        component.set('v.imageNotLoaded', 'false');
    },
    
    handleBtnClick : function(component, event) {
        var step = component.get('v.step');
        switch(step) {
            case 1:
                component.set('v.step', 2);
                component.set('v.detailStep', false);
                component.set('v.productStep', true);
                component.find('pind').set('v.currentStep','products');
                break;
            case 2:
                component.set('v.step', 3);
                component.set('v.productStep', false);
                component.set('v.confirmStep', true);
                component.find('pind').set('v.currentStep','summary');
                component.find('progressBtn').set('v.label','OnBoard!');
                break;
            case 3:
                component.set('v.confirmStep', false);
                component.set('v.incomplete', false);  
                component.set('v.complete', true);  
                component.find('progressBtn').set('v.label','Close');
                break;
            default:
                break;
        }        
    },
    
})