var arr = [3, 5, -3, 6, 143, 7, 12, -87, 54, 32, -78, 5, 43];
var max=arr[0];
var min=arr[0];
var sum=0;
var average=0;

for (i=0; i<arr.length; i++)
{
    if (arr[i]>max)
    {
        max=arr[i];
    }
    if (arr[i]<min)
    {
        min=arr[i];
    }
}

console.log(max);
console.log(min);

for(i=0; i<arr.length; i++)
{
    sum+=arr[i];
}

console.log(sum);

average=+sum/arr.length;
console.log(average);


