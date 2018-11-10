(function(){
    var characters = [
        { 'name': 'barney', 'age': 36 },
        { 'name': 'fred', 'age': 40 }
        ];
    
    var pluck = function(arr, key) {
        var values = [];
        
        for(var i=0; i<arr.length; i++) {
            values.push(arr[i][key])
        }
        
        return values;
    };
    
    console.log(pluck(characters, 'name'));
    console.log(pluck(characters, 'age')); 
}())
