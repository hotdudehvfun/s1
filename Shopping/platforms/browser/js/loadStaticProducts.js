window.onload=browseProductstart;
function browseProductstart() 
{

//set filter colors
var colorboxes = document.getElementsByClassName("filter-color-box");
var i;
for (i = 0; i < colorboxes.length; i++)
{
    colorboxes[i].onclick = function()
    {
        var selectedColor=this.getAttribute("data-color-value");
        var isSelected=this.getAttribute("data-is-selected");
        if (isSelected=="0")
        {
            //select this color
            this.setAttribute("data-is-selected","1");
            //use value of selected color
            //change border
            this.style.border="2px solid black";
        }
        else
        {
            //unselect this color
            this.setAttribute("data-is-selected","0");
            //remove value of selected color from query
            //change border
            this.style.border="none";   
        }
        
        
    }
}

//set filter brands
var brandboxes = document.getElementsByClassName("filter-brand-box");
var i;
for (i = 0; i < brandboxes.length; i++)
{
    brandboxes[i].onclick = function()
    {
        var selectedBrand=this.getAttribute("data-color-value"); //value
        var isSelected=this.getAttribute("data-is-selected");//if selected
        if (isSelected=="0")
        {
            //select this color
            this.setAttribute("data-is-selected","1");
            //use value of selected brand
            this.style.background="#20bd99";
            this.style.color="white";
        }
        else
        {
            //unselect this color
            this.setAttribute("data-is-selected","0");
            //remove value of selected brand from query
            this.style.background="white";
            this.style.color="#20bd99";
        }

        
        
    }
}

//set up sort by price
//set filter brands
var sortPrice = document.getElementsByClassName("mycheckbox");
var i;
for (i = 0; i < sortPrice.length; i++)
{
    sortPrice[i].onclick = function()
    {
        var selectedPrice=this.getAttribute("data-sort-type"); //value
        var isSelected=this.getAttribute("data-is-selected");//if selected
        var name=this.getAttribute("data-name");
        if (isSelected=="0")
        {
            //select this color
            this.setAttribute("data-is-selected","1");
            //use value of selected
            this.style.background="#20bd99";
            this.style.color="white";

                            //unselect others
                            //unselect others
                            if (selectedPrice=="high")
                            {
                                var div=document.getElementById("low");
                                div.setAttribute("data-is-selected","0");
                                div.style.background="white";
                                div.style.color="#20bd99";
                            }else
                            {
                                var div=document.getElementById("high");
                                div.setAttribute("data-is-selected","0");
                                div.style.background="white";
                                div.style.color="#20bd99";

                            }
        }

        
        
    }
}
saveObects();
loadObjects();
updateBadge();
loadHtmlPage('short-popup.html','short-popup-target');
console.log("event added")

}

function saveObects() 
{
  
  var products=new Array();
  products.push(
  {
        'img':'http://assets.myntassets.com/dpr_1/h_240,q_95,w_180/v1/assets/images/1275765/2016/3/23/11458715994163-Nayo-Navy-Kurta-3901458715993798-1_mini.jpg',
        'img1':'http://assets.myntassets.com/dpr_1/w_450,q_80/v1/assets/images/1275765/2016/3/23/11458715994090-Nayo-Navy-Kurta-3901458715993798-2.jpg',
        'img2':'http://assets.myntassets.com/dpr_1/w_450,q_80/v1/assets/&#10;&#9;&#9;&#9;images/1275765/2016/3/23/11458715994163-Nayo-Navy-Kurta-3901458715993798-1.jpg',
        'img3':'http://assets.myntassets.com/dpr_1/w_450,q_80/v1/assets/images/1275765/2016/3/23/11458715994014-Nayo-Navy-Kurta-3901458715993798-3.jpg',
        'img4':'http://assets.myntassets.com/dpr_1/w_450,q_80/v1/assets/images/1275765/2016/3/23/11458715994014-Nayo-Navy-Kurta-3901458715993798-4.jpg',       

        'pid':'1',
        'name':'Nayo',
        'brand':'Navo mod',
        'sp':999,
        'mp':2999,
        'discount':'66%',
        'sizes':'S M L XL XXL',
        'in_cart':'no',
        'in_wish':'no',
  });
  
  products.push(
  {
        'img':'http://assets.myntassets.com/h_307,q_95,w_230/v1/assets/images/1210064/2016/2/16/11455605354579-Alom-Pink-Kurta-6721455605353683-1_mini.jpg',
        'img1':'http://assets.myntassets.com/w_450,q_80/v1/assets/images/1210064/2016/2/16/11455605354579-Alom-Pink-Kurta-6721455605353683-1.jpg',
        'img2':'http://assets.myntassets.com/w_450,q_80/v1/assets/images/1210064/2016/2/16/11455605354441-Alom-Pink-Kurta-6721455605353683-2.jpg',
        'img3':'http://assets.myntassets.com/w_450,q_80/v1/assets/images/1210064/2016/2/16/11455605354172-Alom-Pink-Kurta-6721455605353683-4.jpg',
        'img4':'http://assets.myntassets.com/w_450,q_80/v1/assets/images/1210064/2016/2/16/11455605353984-Alom-Pink-Kurta-6721455605353683-5.jpg',    


        'pid':'2',

        'name':'Alom',
        'brand':'pink kurta',
        'sp':1999,
        'mp':3999,
        'discount':'66%',
        'sizes':'S M L XL XXL',
        'in_cart':'no',
        'in_wish':'no',
  });

  products.push(
  {
        'img':'http://assets.myntassets.com/h_307,q_95,w_230/v1/assets/images/1220100/2016/2/16/11455601805448-La-Firangi-Green-Printed-Layered-A-Line-Kurta-3811455601805122-1_mini.jpg',
        'img1':'http://assets.myntassets.com/w_450,q_80/v1/assets/images/1220100/2016/2/16/11455601805448-La-Firangi-Green-Printed-Layered-A-Line-Kurta-3811455601805122-1.jpg',
        'img2':'http://assets.myntassets.com/w_450,q_80/v1/assets/images/1220100/2016/2/16/11455601805378-La-Firangi-Green-Printed-Layered-A-Line-Kurta-3811455601805122-2.jpg',
        'img3':'http://assets.myntassets.com/w_450,q_80/v1/assets/images/1220100/2016/2/16/11455601805328-La-Firangi-Green-Printed-Layered-A-Line-Kurta-3811455601805122-3.jpg',
        'img4':'http://assets.myntassets.com/w_450,q_80/v1/assets/images/1220100/2016/2/16/11455601805270-La-Firangi-Green-Printed-Layered-A-Line-Kurta-3811455601805122-4.jpg',    


        'pid':'3',

        'name':'La Firangi',
        'brand':'A-Line',
        'sp':1299,
        'mp':2999,
        'discount':'66%',
        'sizes':'S M L XL XXL',
        'in_cart':'no',
        'in_wish':'no',
  });

  if (localStorage.getItem("products") === null) 
    localStorage.setItem('products', JSON.stringify(products));

}


function loadObjects() 
{

    var htm="";
    var rObject =JSON.parse(localStorage.getItem('products'));


    for (var i = 0; i < rObject.length; i++) 
    {

        //&quot; &quot;
        htm="";
        htm+="<div class=product-container>";
        htm+=" <div onclick=viewSingleProduct(" +rObject[i].pid+ ");>";
        htm+="<img style='height:240px;width:180px; ' src=" +rObject[i].img +">";
        htm+=" <div class=product-name>"+rObject[i].name+"</div>";
        htm+=" <div class=product-name>"+rObject[i].brand+"</div>";
        
        htm+=" <div class=product-sp>Rs."+rObject[i].sp+"/- </div>";
        htm+=" <div class=product-mp>Rs."+rObject[i].mp+"/-</div>";
        htm+=" <div class=product-discount>&nbsp;&nbsp;&nbsp;"+rObject[i].discount+"</div>";
        htm+="</div><hr>";



        if (rObject[i].in_cart=='yes') 
        {
            htm+="<i onclick=addProductCart("+rObject[i].pid+") class='fa fa-cart-plus' style='font-size: 30px; color: #009688;'></i>";            
        }else
        htm+="<i onclick=addProductCart("+rObject[i].pid+") class='fa fa-cart-plus' style='font-size: 30px; color: #737373;'></i>";
        

        //fa-heart
         if (rObject[i].in_wish=='yes') 
            htm+="<i onclick=addProductWish("+rObject[i].pid+") class='fa fa-heart' style='font-size:30px; float: right; color: #737373;'></i> ";
        else
            htm+="<i onclick=addProductWish("+rObject[i].pid+") class='fa fa-heart-o' style='font-size:30px; float: right; color: #737373;'></i> ";

        htm+="</div>";


       document.getElementById('product-list').innerHTML+=htm;

    }

/*
    <div data-product-id="1"  class="product-container" >
                    <div onclick="viewSingleProduct('productid')" >
                        <img src="http://assets.myntassets.com/dpr_1/h_240,q_95,w_180/v1/assets/images/1275765/2016/3/23/11458715994163-Nayo-Navy-Kurta-3901458715993798-1_mini.jpg">
                        <div class="product-name">Nayo</div>
                        <div class="product-name">Navo mod</div>

                        <div class="product-sp">Rs.999/-</div>
                        <div class="product-mp">Rs.2999/-</div>
                        <div class="product-discount">75%</div>
                    </div>
                    <hr>

            <i onclick="toggleDialogPopup('open','add item to cart')"  class="fa fa-cart-plus" style="font-size: 30px; color: #737373;"></i>
            <i onclick="toggleDialogPopup('open','add item to wish list')"  class="fa fa-heart-o" style="font-size: 30px;     float: right; color: #737373;"></i>
                
    </div>
    */
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
            var 
            c=JSON.parse(localStorage.getItem("cart"));
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