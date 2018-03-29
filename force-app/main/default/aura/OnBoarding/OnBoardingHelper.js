({
	nextStep : function(component, event) {
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
                component.set('v.contractStep', true);
                component.find('pind').set('v.currentStep','contract');
                break;
            case 3:
                component.set('v.step', 4);
                component.set('v.contractStep', false);
                component.set('v.confirmStep', true);
                component.find('pind').set('v.currentStep','summary');                
                component.find('progressBtn').set('v.label','Confirm');
                break;
            case 4:
                debugger;
                var homeEvent = $A.get("e.force:navigateToObjectHome");
			    homeEvent.setParams({
                    "scope": "Contractor__c"
                });
                homeEvent.fire();
                break;
            default:
                break;
        }        
    },
    
    updateData: function(component) {        
        var r = component.get('v.createRecord');
        var columnDefs = [
            {label: "Contractor", fieldName : "Name", type: 'text'},
            {label: "Expertise", fieldName : "Expertise", type: 'text'},
            {label: "Term", fieldName : "Term", type: 'text'},
            {label: "Certified", fieldName : "Certified", type: 'text'},
        ];
        
        var histories = [ { "id":1, "Name": r.fields.Name.value, "Expertise": "Sales Cloud", "Term": r.fields.Term__c.value, "Certified": "Yes" },
                          { "id":2, "Name": r.fields.Name.value, "Expertise": "Service Cloud", "Term": r.fields.Term__c.value, "Certified": "Yes" },
                          { "id":3, "Name": r.fields.Name.value, "Expertise": "Marketing Cloud", "Term": "0 mo", "Certified": "No" },
                          { "id":4, "Name": r.fields.Name.value, "Expertise": "Lightning Platform", "Term": r.fields.Term__c.value, "Certified": "Yes" },
                          { "id":5, "Name": r.fields.Name.value, "Expertise": "Integration", "Term": "0 mo", "Certified": "No" },
                          { "id":6, "Name": r.fields.Name.value, "Expertise": "Lightning", "Term": r.fields.Term__c.value, "Certified": "Yes" }];
        
        component.set("v.columnDefs", columnDefs);
        component.set("v.histories", histories);
    },
    
})