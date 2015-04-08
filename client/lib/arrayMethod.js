Object.defineProperty(Array.prototype, "filterValue", {
    // Specify "enumerable" as "false" to prevent function enumeration
    enumerable: false,

    /**
    * Create new array where specified item is removed
    * @this Array
    * @param itemToRemove Item to remove from array
    * @returns {Number} Count of removed items
    */
    value: function (itemToRemove) {
        var filteredArray = this.filter(function(item){
            return item !== itemToRemove;
        });

        return filteredArray;
    }
});