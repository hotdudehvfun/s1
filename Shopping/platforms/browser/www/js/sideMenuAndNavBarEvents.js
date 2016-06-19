//<![CDATA[
        $(window).load(function() { // makes sure the whole site is loaded
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({'overflow':'visible'});
        })
    //]]>

    


function toggleSearchPopup() 
{
        var div=document.getElementById('search-popup-outer');
        var data=div.getAttribute("data-is-hidden");
        if (data=="yes") 
        {
            //show
            div.style.left="0px";
            div.setAttribute("data-is-hidden","no");
        }else
        {
            div.style.left=-(window.innerWidth)+"px";
            div.setAttribute("data-is-hidden","yes");
        }

            //close side menu if open
            var div=document.getElementById('side-menu');
            var data=document.getElementById('toggle-side-menu').getAttribute("data-menu-state");
            
            if (data=="1")
            {
                div.style.left=-(window.innerWidth*0.85)+"px";
                document.getElementById('toggle-side-menu').setAttribute("data-menu-state","0");
            }

};

function accordionEvent(argument) 
{
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++)
    {
        acc[i].onclick = function()
        {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            
        }
    }

}

function toggleSideMenu() 
{

            var div=document.getElementById('side-menu');
            var data=document.getElementById('toggle-side-menu').getAttribute("data-menu-state");
            
            if (data=="0")
            {
                //open menu
                //fa-close 
                //nav-icon
                div.style.left=0;
                div.style.width="81%";

                document.getElementById('toggle-side-menu').setAttribute("data-menu-state","1");
                document.getElementById('nav-icon').setAttribute("class","fa fa-close");


            }else
            {
                div.style.left=-(window.innerWidth*0.85)+"px";
                div.style.width="0%";

                document.getElementById('toggle-side-menu').setAttribute("data-menu-state","0");
                document.getElementById('nav-icon').setAttribute("class","fa fa-navicon");
            }

            accordionEvent();
};

$(document).ready( function() 
{
    
    console.log("doc ready");
    updateBadge();
    var target="#home-screen-content";

    //toggleSideMenu();

    //nav bar events
    $("#toggle-side-menu").on("click", function() 
    {
        toggleSideMenu();
    });
    $("#img-search-button").on("click", function() 
    {
        toggleSearchPopup();
    });
    $("#img-cart-button").on("click", function()
    {
        window.location='cart.html'
    });

    //--------------------------



    //side menu item event
    $("#side-menu-item-home").on("click", function() 
    {
        window.location='index.html';
    });


    $("#side-menu-item-account").on("click", function() {
        window.location='account.html';
    });

    $("#side-menu-item-orders").on("click", function() {
       window.location='orders.html'; 
    });




    //--------------------------
    accordionEvent();
    

    
});


function homeScreenEffect() 
{
   var homescreen=document.getElementById('home-screen-content');
        homescreen.style.transform="scale(0.8)";
        setTimeout(function() 
        {
            homescreen.style.transform="scale(1)";
        },500);
}

function browseProducts(category) 
{
    window.location="browseProducts.html";
}

function viewSingleProduct(pid) 
{
    window.location="viewSingleProduct.html";  
    localStorage.setItem('currentPid',pid); 
}

function toggleSingleProductImageView() 
{
            
            
                var data=this.getAttribute("data-hidden");
                if (data=="yes") 
                {
                    document.getElementById("single-product-image-container").style.height="auto";
                    this.setAttribute("data-hidden","no");
                    this.innerHTML="Hide Images";
                }else
                {
                    this.setAttribute("data-hidden","yes");
                    document.getElementById("single-product-image-container").style.height="600px";
                    this.innerHTML="View All Images";
                }
            
};


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

console.log("event added")
}

function toggleSortPopup() 
{

            var div=document.getElementById('sort-popup');
            var data=document.getElementById('sort-button').getAttribute("data-sort-popup-state");
            
            if (data=="0")
            {
                //open menu
                div.style.left="0px";
                document.getElementById('sort-button').setAttribute("data-sort-popup-state","1");
                document.getElementById('sort-button').setAttribute("class","filter-button active");


            }else
            {
                //hide menu
                div.style.left=-(window.innerWidth*0.50)+"px";
                document.getElementById('sort-button').setAttribute("data-sort-popup-state","0");
                document.getElementById('sort-button').setAttribute("class","filter-button");
            }
};

function toggleFilterPopup() 
{

            var div=document.getElementById('filter-popup');
            var data=document.getElementById('filter-button').getAttribute("data-filter-popup-state");
            
            if (data=="0")
            {
                //open menu
                div.style.right="0";
                document.getElementById('filter-button').setAttribute("data-filter-popup-state","1");
                document.getElementById('filter-button').setAttribute("class","filter-button active");

            }else
            {
                div.style.right=-(window.innerWidth*0.50)+"px";
                document.getElementById('filter-button').setAttribute("data-filter-popup-state","0");
                document.getElementById('filter-button').setAttribute("class","filter-button");
            }
};









 function loadHtmlPage(page,target)
{
           var xmlHttp = new XMLHttpRequest();
           xmlHttp.onreadystatechange = function() 
           {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                {
                   document.getElementById(target).innerHTML = xmlHttp.responseText;
                   
                }
            };

            xmlHttp.open("GET",page, true); // true for asynchronous
            xmlHttp.send(null);

            // 1039
}




function updateBadge() 
{
    if (localStorage.getItem("cart") === null) 
        {   
            document.getElementById('cart-badge').innerHTML='0';

        }else
        {
            var c=JSON.parse(localStorage.getItem("cart"));
            console.log(c.length);
            document.getElementById('cart-badge').innerHTML=c.length;
        }    
}