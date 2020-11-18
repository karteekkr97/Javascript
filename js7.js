var n=new Array(50,90,40,30,20)

for(i=0;i<n.length;i++)
{
    for(j=i+1;j<n.length;j++)
    {
        if(n[i]>n[j])
        {
            t=n[i];
            n[i]=n[j];
            n[j]=t;
        }
    }
}
console.log(n)