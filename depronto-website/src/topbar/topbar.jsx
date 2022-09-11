import React from 'react';
import "./Topbar.css";
export default function Topbar() {
  return (
    <>
    <div className="topbar">
    <div className="topLeft">apartment therapy</div>
    <div className="topCenter"></div>
    <div className="topRight">NEWSLETTERS
    <i className="fa-regular fa-circle-user"></i>
    <i className="fa-solid fa-hashtag"></i>
    <i className="fa-solid fa-magnifying-glass"></i></div>
</div>

<div className='navbar'>
    <ul className='navbar-items'>
        <li>
            HOUSE TOURS
            <div className="navbar-contents">
            <div className="navbar-contents-column">
                    <h2>By Home Type</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Apartments</a></li>
                        <li><a href="#">Houses</a></li>
                        <li><a href="#">Studio Apartments</a></li>
                        <li><a href="#">Tiny Homes</a></li>
                        <li><a href="#">More</a></li>
                    </ul>
                </div>
                <div className="navbar-contents-column">
                    <h2>By Location</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">New York</a></li>
                        <li><a href="#">Los Angeles</a></li>
                        <li><a href="#">Chicago</a></li>
                        <li><a href="#">London</a></li>
                        <li><a href="#">San Francisco</a></li>
                        <li><a href="#">More</a></li>
                    </ul>
                </div>
                <div className="navbar-contents-column">
                    <h2>Special Feature</h2>
                </div>
            </div>
            
        </li>
        <li>
            STYLE
            <div className="navbar-contents">
            <div className="navbar-contents-column">
                    <h2>Browse Photos</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Living Rooms</a></li>
                        <li><a href="#">Bedrooms</a></li>
                        <li><a href="#">Kitchens</a></li>
                        <li><a href="#">Bathrooms</a></li>
                        <li><a href="#">Patios</a></li>
                        <li><a href="#">More</a></li>
                    </ul>
                </div>
                <div className="navbar-contents-column">
                    <h2>Style and Design</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Decorating Ideas</a></li>
                        <li><a href="#">Design Trends</a></li>
                        <li><a href="#">Color</a></li>
                        <li><a href="#">More</a></li>
                    </ul>
                </div>
                <div className="navbar-contents-column">
                    <h2>Before and After</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Kitchens</a></li>
                        <li><a href="#">Bathrooms</a></li>
                        <li><a href="#">Living Rooms</a></li>
                        <li><a href="#">Bedrooms</a></li>
                        <li><a href="#">Entryways</a></li>
                        <li><a href="#">All Befores and Afters</a></li>
                    </ul>
                </div>
            </div>
            
        </li>
        <li>
            HOW TO
            <div className="navbar-contents">
            <div className="navbar-contents-column">
                    <h2>How To's</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Hacks</a></li>
                        <li><a href="#">Paint</a></li>
                        <li><a href="#">Cleaning</a></li>
                        <li><a href="#">Easy DIYs</a></li>
                    </ul>
                </div>
                <div className="navbar-contents-column">
                    <h2>Home Repair and Maintenance</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Weekend Projects</a></li>
                        <li><a href="#">Pest Control</a></li>
                        <li><a href="#">Home Security</a></li>
                        <li><a href="#">Heating and Cooling</a></li>
                    </ul>
                </div>
                <div className="navbar-contents-column">
                    <h2>Plants and Gardening</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">How to Style Houseplants</a></li>
                        <li><a href="#">Houseplant Encyclopedia</a></li>
                        <li><a href="#">Easiest Houseplants to Grow</a></li>
                        <li><a href="#">Best Indoor Trees</a></li>
                        <li><a href="#">How to Grow an Avocado Plant</a></li>
                        <li><a href="#">How to Grow a Money Tree</a></li>
                        <li><a href="#">Indoor Garden Ideas</a></li>
                        <li><a href="#">Growing Hydroponic Plants in Water</a></li>
                    </ul>
                </div>
            </div>
            
        </li>
        <li>
            ORGANISE AND CLEAN
            <div className="navbar-contents">
            <div className="navbar-contents-column">
                    <h2>Topics</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Disinfecting</a></li>
                        <li><a href="#">Decluttering</a></li>
                        <li><a href="#">Organizing & Storage</a></li>
                        <li><a href="#">Cleaning Tips</a></li>
                        <li><a href="#">Laundry Tips</a></li>
                    </ul>
                </div>
                <div className="navbar-contents-column">
                    <h2>Natural Cleaning</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Natural Cleaner Recipes</a></li>
                        <li><a href="#">White Vinegar Uses</a></li>
                        <li><a href="#">Lemon Uses</a></li>
                        <li><a href="#">Apple Cider Vinegar Uses</a></li>
                        <li><a href="#">Tea Tree Oil Uses</a></li>
                    </ul>
                </div>
                <div className="navbar-contents-column">
                    <h2>Pest Control</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Mosquitoes</a></li>
                        <li><a href="#">Drain Flies</a></li>
                        <li><a href="#">Roaches</a></li>
                        <li><a href="#">Ants</a></li>
                        <li><a href="#">Mice</a></li>
                    </ul>
                </div>
            </div>
           
        </li>
        <li>
            LIVING
            <div className="navbar-contents">
            <div className="navbar-contents-column">
                    <h2>Real Estate</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Moving</a></li>
                        <li><a href="#">Home Financing</a></li>
                        <li><a href="#">Resources for Renters</a></li>
                        <li><a href="#">First-Time Home Buyers</a></li>
                        <li><a href="#">Property Crush</a></li>
                    </ul>
                </div>
                <div className="navbar-contents-column">
                    <h2>Money</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Budgeting Hacks</a></li>
                        <li><a href="#">Saving & Investing</a></li>
                        <li><a href="#">Budget Living</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>
                <div className="navbar-contents-column">
                    <h2>Life</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Home for the Holidays</a></li>
                        <li><a href="#">Intentional Living</a></li>
                        <li><a href="#">Family</a></li>
                        <li><a href="#">Pets</a></li>
                        <li><a href="#">Wellness</a></li>
                        <li><a href="#">Green Living</a></li>
                        <li><a href="#">Entertaining</a></li>
                    </ul>
                </div>
            </div>
            
        </li>
        <li>
            SHOP
            <div className="navbar-contents">
            <div className="navbar-contents-column">
                    <h2>Shop by Room</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Storage</a></li>
                        <li><a href="#">Kitchen</a></li>
                        <li><a href="#">Bathroom</a></li>
                        <li><a href="#">Living Room</a></li>
                        <li><a href="#">Bedroom</a></li>
                    </ul>
                </div>
                <div className="navbar-contents-column">
                    <h2>Shop Vintage @ Bazaar</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Rugs</a></li>
                        <li><a href="#">Tabletop</a></li>
                        <li><a href="#">Lighting</a></li>
                        <li><a href="#">Furniture</a></li>
                        <li><a href="#">Storage</a></li>
                        <li><a href="#">Sofas</a></li>
                        <li><a href="#">Tables</a></li>
                        <li><a href="#">Storage</a></li>
                        <li><a href="#">Chairs</a></li>
                    </ul>
                </div>
                <div className="navbar-contents-column">
                    <h2>Shop Vintage by Style</h2>
                    <ul className='navbar-contents-links'>
                        <li><a href="#">Mid-century Modern</a></li>
                        <li><a href="#">Modern</a></li>
                        <li><a href="#">Rustic</a></li>
                        <li><a href="#">Industrial</a></li>
                        <li><a href="#">Scandinavian</a></li>
                    </ul>
                </div>
            </div>
            
        </li>
        <li>
            MORE
            <div className="navbar-contents">
                Follow us:
                <ul className='navbar-contents-column'>
                    <li><i class="fa-brands fa-square-facebook"></i></li>
                    <li><i class="fa-brands fa-square-instagram"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-square-pinterest"></i></li>
                </ul>
            </div>
        </li>
    </ul>
</div>

<div className="info">Conquer your clutter in 14 days with our (free!) decluttering cure program — sign up now!</div>
</>
    
  )
}
