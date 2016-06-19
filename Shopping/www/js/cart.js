window.onload=cartStart;
function cartStart() 
{
    loadObjectsInCart();
    loadHtmlPage('short-popup.html','short-popup-target');
}




function loadObjectsInCart() 
{

    
    var htm="";

    document.getElementById('product-list').innerHTML="";
    var rObject =JSON.parse(localStorage.getItem('cart'));
    updateBadge();
    var subtotal=0;
    if (rObject.length>0) 
    {
        document.getElementById('empty-bag').style.display="none";

    }
    for (var i = 0; i < rObject.length; i++) 
    {

        //&quot; &quot;
        htm="";
        htm+="<div class=product-container style='height: auto;width: 100%;'>";
        htm+=" <div>";
        htm+=" <img onclick=viewSingleProduct(" +rObject[i].pid+ ");"+" style='height:240px;width:180px;position: relative;left: 30%; ' src=" +rObject[i].img +">";
        htm+=" <div class=product-name>"+rObject[i].name+"</div>";
        htm+=" <div class=product-name>"+rObject[i].brand+"</div>";        
        htm+=" <div class=product-sp>Rs."+rObject[i].sp+"/- </div>";

        htm+="</div> <div onclick=removeProductFromCart("+rObject[i].pid+") class=mybutton style='font-size: 20px;color: white;width: 33%;position: relative;left: 34%;'>";

        htm+="Remove</div> </div>";
        document.getElementById('product-list').innerHTML+=htm;
        subtotal+=rObject[i].sp;
    }

    document.getElementById('cart-item-count').innerHTML=rObject.length;
    document.getElementById('cart-value-count').innerHTML="Rs."+subtotal;

/*
    <div class="product-container" style="height: auto;width: 100%;"> 
        <div onclick="viewSingleProduct(1);">
            <img style="height:240px;width:180px;position: relative;left: 30%;" src=""> 
             <div class="product-name">Nayo</div> 
             <div class="product-name">Navo mod</div> 
             <div class="product-sp">Rs.999/- </div>  
             </div>
        <div onclick="removeProductFromCart()" class="mybutton" style="font-size: 20px;color: white;width: 33%;position: relative;left: 34%;">
        Remove</div>
    </div>



    */
}

function removeProductFromCart(pid) 
{
    pid+="";
    var c=JSON.parse(localStorage.getItem("cart"));

    //update cart
    for (var i = 0; i < c.length; i++) 
    {
        if(c[i].pid===pid)
        {
            c.splice(i,1);
            localStorage.setItem("cart",JSON.stringify(c));
            shortDialogPopup('Product removed!');
            loadObjectsInCart();
            break;

        }
    }

    //update products
    c=JSON.parse(localStorage.getItem("products"));    
    for (var i = 0; i < c.length; i++) 
    {
        if(c[i].pid===pid)
        {
           
            c[i].in_cart='no';
            localStorage.setItem("products",JSON.stringify(c));
            break;

        }
    }


}

function shortDialogPopup(msg) 
{
        var div=document.getElementById('short-dialog-popup');

                        //show
                        div.style.display='block';
                        document.getElementById('short-dialog-popup-msg').innerHTML=msg;
                        div.style.opacity=1;

                        //hide
                        
                        setTimeout(function() 
                        {
                            div.style.opacity=0;
                        },600);
                        setTimeout(function() 
                        {
                            div.style.display='none';                            
                        },900);

        
}


function addProductCart(pid) 
{
    //read
    var rObject =JSON.parse(localStorage.getItem('products'));
     var c=new Array();

     //update state
    
    if (rObject[parseInt(pid)-1].in_cart==='yes') 
    {
        rObject[parseInt(pid)-1].in_cart='no';  
        event.target.style.color='#737373';
        shortDialogPopup("Removed from cart");


        //remove
        if (localStorage.getItem("cart")!=null) 
        {        
            c=JSON.parse(localStorage.getItem("cart"));
            c.splice(rObject[parseInt(pid)-1],1);
            localStorage.setItem("cart",JSON.stringify(c));            
        }




    }
    else
    {
        rObject[parseInt(pid)-1].in_cart='yes';  
        event.target.style.color='#009688';
        shortDialogPopup("Added to cart");

        //add
        if (localStorage.getItem("cart") === null) 
        {        
            c.push(rObject[parseInt(pid)-1]);
            localStorage.setItem("cart",JSON.stringify(c));
        }else
        {
            c=JSON.parse(localStorage.getItem("cart"));
            c.push(rObject[parseInt(pid)-1]);
            localStorage.setItem("cart",JSON.stringify(c));
        }
        



    }


    localStorage.setItem("products",JSON.stringify(rObject));
    document.getElementById('cart-badge').innerHTML=c.length;
    //console.log(c.length);
    shakeEffect('img-cart-button');
    

}


function updateBadge() 
{
    if (localStorage.getItem("cart") === null) 
        {   
            document.getElementById('cart-badge').innerHTML='0';

        }else
        {
            var c=JSON.parse(localStorage.getItem("cart"));
            document.getElementById('cart-badge').innerHTML=c.length;
        }    
}




function shakeEffect(id) 
{
   var l = 10;  
   for( var i = 0; i < 10; i++ )   
     $( "#"+id ).animate( { 
         'margin-left': "+=" + ( l = -l ) + 'px',
         'margin-right': "-=" + l + 'px'
      }, 140);  

     }