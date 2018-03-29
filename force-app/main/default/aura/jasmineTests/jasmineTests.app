<aura:application >

    <c:lts_jasmineRunner testFiles="{!join(',', 
        $Resource.jasmineExampleTests        
    )}" />

</aura:application>