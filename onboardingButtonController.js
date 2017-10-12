({
    launchOnboardingWizard : function(component, event, helper) {
        $A.createComponents([
            ["c:customerOnboarding", {
                recordId : component.get("v.recordId"),             
            }],
        ],
        function(components, status) {
            if (status === "SUCCESS") {
                component.find('overlayLib').showCustomModal({
                    header: "OnBoarding Wizard",
                    body: components,
                    showCloseButton: true,
                    cssClass: "slds-modal_large"
                })
            }    
        }
      )
    }
})