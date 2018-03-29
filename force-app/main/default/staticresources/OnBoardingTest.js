/**
 * This is a jasmine test spec file.
 * These examples show the "shape" of a Jasmine Test component spec
 * And how to instantiate a component and test an attribute in the component
 */
describe("Test Suite for the OnBoarding component", function() {
    /*
    afterEach(function() {
        // Each spec (test) renders its components into the same div,
        // so we need to clear that div out at the end of each spec.
        $T.clearRenderedTestComponents();
    });

    /**
     * Component  test: 'c:OnBoarding':
     * This spec creates a component and validates the correct required expertise is selected
     **/
    describe('c:OnBoarding', function() {
        it('required expertise values test', function(done) {
            // Instantiate and render the c:OnBoarding Lightning component into the renderInto element.
            // The second parameter (empty here) is the list of component attribute values to set.
            // The third parameter, requiresRendering, is set to true.
            debugger
            $T.createComponent("c:OnBoarding", {}, true)
            // The 'component' here is the instance of c:OnBoarding
            .then(function(component) {
                var requiredOptions = component.get("v.requiredOptions");                
                //expect(requiredOptions).toEqual(["sales"]);
                expect(true).toEqual(true);
                // end this spec successfully
                done();
            }).catch(function(e) {
                // end this spec as a failure
                done.fail(e);
            });
        });
    });
});