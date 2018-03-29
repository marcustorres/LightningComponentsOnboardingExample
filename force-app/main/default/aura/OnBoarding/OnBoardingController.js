({
    doInit: function(component){
        var options = [
            { value: "sales", label: "Sales Cloud" },
            { value: "service", label: "Service Cloud" },
            { value: "marketing", label: "Marketing Cloud" },
            { value: "platform", label: "Lightning Platform" },
            { value: "integration", label: "Integration/Data Architect" },
            { value: "lightning", label: "Lightning" },            
        ];
        var values = ["sales", "platform"];
        var required = ["sales"];
        component.set("v.listOptions", options);
        component.set("v.defaultOptions", values);
        component.set("v.requiredOptions", required);
    },
    
    loaded: function (component, event) {
        // This will contain an array of the "value" attribute of the selected options        
        component.set("v.recordLoaded", true);
    },
    
    handleProductSelection: function (component, event) {
        // This will contain an array of the "value" attribute of the selected options
        var selectedOptionValue = event.getParam("value");
        component.set("v.defaultOptions", selectedOptionValue);
    },    
    
    handleSuccess : function(component, event, helper) {
        var createRecordFields = event.getParams();
        component.set('v.recordId', createRecordFields.id);
        component.set('v.createRecord', createRecordFields);
        component.set('v.recordCreated', true);
        helper.nextStep(component);
        helper.updateData(component);
    },
    
    handleFilesChange : function(component, event) {
        var document = event.getParam('files');
        component.set('v.fileNotLoaded', 'false');
        component.set('v.fileCardId', document[0].documentId);
    },

	handleBtnClick : function(component, event, helper) {
        helper.nextStep(component);
    },
})