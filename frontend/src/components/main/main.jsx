import React from 'react';
import { withRouter } from 'react-router-dom';

import NavbarContainer from '../nav/navbar_container';
import Apron from '../stylesheets/assets/apron.png';
import Background1 from '../stylesheets/assets/background1.jpg';
import Background2 from '../stylesheets/assets/food_background2.jpg';
import ChooseMeal from '../stylesheets/assets/choose_meal.gif';
import PieChart from '../stylesheets/assets/pie_chart.gif';
import LineChart from '../stylesheets/assets/line_chart.gif';
import GroceryGif from '../stylesheets/assets/grocery.gif';
import CookingPic from '../stylesheets/assets/cooking.jpg';
import MealPlan from '../stylesheets/assets/meal_plan.jpg';


class MainPage extends React.Component {
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="codrops-top">
                        <NavbarContainer />
                        <div className="clr"></div>
                    </div>
        
                    <div className="st-container">

                        <input type="radio" name="radio-set" defaultChecked={false} id="st-control-1" />
                        <a href="#st-panel-1" className="splash-footer-tab">délicieux?</a>
                        <input type="radio" name="radio-set" id="st-control-2" />
                        <a href="#st-panel-2" className="splash-footer-tab">The experience</a>
                        <input type="radio" name="radio-set" id="st-control-3" />
                        <a href="#st-panel-3" className="splash-footer-tab">How it works</a>
                        <input type="radio" name="radio-set" id="st-control-4" />
                        <a href="#st-panel-4" className="splash-footer-tab">Positivity</a>
                        <input type="radio" name="radio-set" id="st-control-5" />
                        <a href="#st-panel-5" className="splash-footer-tab">Passion</a>

                        <div className="st-scroll">

                            <section className="st-panel st-color" id="st-panel-1">
                                <div className="img-container">
                                    <img src={Background1} alt=""
                                    className="splash-img"/>
                                </div>
                                <div className="st-deco" >
                                    <img className="apron" src={Apron} alt="" />;
                                </div>

                                <div className="splash-loading-container">

                                <h2 className="splash-main-title"
                                    onClick={()=>this.props.history.push('/login')}>
                                    délicieux
                                </h2>
                                <div className="very-top">
                                    <div className="top-top">
                                        <div className="meter">
                                            <span id="span-first" ><span className="progress"></span></span>
                                        </div>
                                    </div>
                                </div>

                                </div>
                            
                                
                            </section>

                            <section className="st-panel st-color" id="st-panel-2">
                                <div className="img-container">
                                    <img src={Background2} alt=""
                                    className="splash-img"/>
                                </div>
                                <div className="st-deco">
                                </div>
                                <div className="splash-middle-container">
                                    <h2 className="the-experience">Meal planning made easy</h2>
                                    <div className="the-experience-middle-container">
                                        <div className="the-experience-left">
                                            <div className="the-experience-sub-head">
                                                délicieux is your smart cooking sidekick
                                            </div>
                                            <div className="the-experience-body">
                                                Find the perfect recipe to make from the ingredients available in your fridge.
                                            </div>
                                            <div className="the-experience-body">
                                                Reach your diet goals faster with detailed nutritional information and progress visualization.
                                            </div>
                                        </div>
                                        <div className="the-experience-right">
                                            <img src={MealPlan} alt="" className="the-experience-img"/>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="st-panel st-color" id="st-panel-3">
                                <div className="img-container">
                                    <img src={Background2} alt=""
                                    className="splash-img"/>
                                </div>
                                <div className="st-deco">
                                </div>
                                <div className="splash-middle-container">
                                    <h2 className="how-it-works">How it works</h2>
                                    <div className="splash-gif-container">
                                        <div className="splash-gif-item">
                                            <img src={GroceryGif} alt="" className="splash-gif-2"/>
                                            <div className="splash-gif-label">
                                                TRACK YOUR INGREDIENTS
                                            </div>
                                            <div className="splash-gif-body">
                                                Never let your groceries go to waste by keeping a dynamic digital inventory.
                                            </div>
                                        </div>
                                        
                                        <div className="splash-gif-item">
                                            <img src={ChooseMeal} alt="" className="splash-gif"/>
                                            <div className="splash-gif-label">
                                                CHOOSE YOUR MEALS
                                            </div>
                                            <div className="splash-gif-body">
                                                Get recipe suggestions based on the ingredients you have and your fitness goals.
                                            </div>
                                        </div>
                                        <div className="splash-gif-item">
                                            <img src={PieChart} alt="" className="splash-gif"/>
                                            <div className="splash-gif-label">
                                                MACROS MADE EASY
                                            </div>
                                            <div className="splash-gif-body">
                                                Stay informed with detailed nutritional information on all recipes.
                                            </div>
                                        </div>
                                        <div className="splash-gif-item">
                                            <img src={LineChart} alt="" className="splash-gif"/>
                                            <div className="splash-gif-label">
                                                MONITOR YOUR PROGRESS
                                            </div>
                                            <div className="splash-gif-body">
                                                Reach your goals easier by visualizing your improvement.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="st-panel st-color" id="st-panel-4">
                                <div className="st-deco">

                                </div>
                                <h2>Positivity</h2>
                                <p>Mixtape fap leggings art party, butcher authentic farm-to-table you probably haven't heard of them do labore cosby sweater.</p>
                            </section>

                            <section className="st-panel" id="st-panel-5">
                                <div className="st-deco">

                                </div>
                                <h2>Passion</h2>
                                <p>Fixie ad odd future polaroid dreamcatcher, nesciunt carles bicycle rights accusamus mcsweeney's mumblecore nulla irony.</p>
                            </section>

                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
    
export default MainPage;