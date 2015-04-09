Object.defineProperty(Array.prototype, "filterValue", {
    
    enumerable: false, //this prevents iterative functions on this function
    //which could mess up how it operates. 

    
    value: function (itemToZap) {
        var filteredArray = this.filter(function(item){
            return item !== itemToZap;
        });

        return filteredArray;
    }
});