var list = []
function addtocart(productname,price,btnno)
{
   
    var quantity = document.getElementsByClassName('inp')
   
   if(quantity[0].value > 10 ||  quantity[1].value > 10 || quantity[2].value > 10)
   {
    alert ("Error , invalid Quantity")
   }
   else if(quantity[0].value < 0 ||  quantity[1].value < 0 || quantity[2].value < 0)
   {
    alert ("Error , invalid Quantity")
   }
   else
   {
    if(btnno == 1)
        {
            var totalprice = price * quantity[0].value
        }
        else if(btnno == 2)
        {
            var totalprice = price * quantity[1].value
        }
        else if(btnno == 3)
        {
            var totalprice = price * quantity[2].value
        }
        else
        {
    
        }
        alert("product price is = "+totalprice)
        var obj = {
            "ProductName":productname,
            "ProductPrice":price,
            "Totalprice":totalprice
        }
        list.push(obj)
        localStorage.setItem('Details',JSON.stringify(list))


   }
}
function goto()
{
    window.location.href="wishlist.html"
}
function getrecord()
{
    var record = JSON.parse(localStorage.getItem('Details'))
    console.log(record)
}