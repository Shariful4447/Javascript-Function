
function evenify_All(nums){
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(num%2==0){
            console.log(num,"even Number");
        
           }
           else{
            
            //double all odd number
               console.log(num*2,"odd number")
           }
        
        
    }
}

nums=[4, 6, 3, 8, 9];
evenify_All(nums);


//double friends age which are odd




friendsAge=[16, 17, 18, 22, 23]
evenify_All(friendsAge);