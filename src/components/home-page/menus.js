import React, { Component } from 'react';

//meal types IDs
const menuTypes = ['#breakfast-menu-container', '#lunch-menu-container', '#dinner-menu-container'];

export default class Menus extends Component {

    //handling displaying different menus on the menus section
    showMenu(menuId) {
        menuTypes.forEach((item, index) => {
            if (`#${menuId}` !== item) {
                document.querySelector(item).style['transform'] = 'translateY(10%)';
                document.querySelector(item).style['opacity'] = '0';
            }
        });

        document.querySelector(`#${menuId}`).style['transform'] = 'translateY(0)';
        document.querySelector(`#${menuId}`).style['opacity'] = '1';
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Our Menu</h1>
                    <p className='sub-heading'>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                        likeness
                        a won&#39;t,
                        deep.</p>
                </div>
                <div className='menu-content'>
                    <div className='menu-nav-container'>
                        <input type='radio' id='breakfast-radio-btn' name='meal-type' defaultChecked='checked' />
                        <label htmlFor='breakfast-radio-btn' id='breakfast-button' className='menu-nav-label'
                            onClick={() => this.showMenu('breakfast-menu-container')}>
                            Breakfast
                        </label>

                        <input type='radio' id='lunch-radio-btn' name='meal-type' />
                        <label id='lunch-button' className='menu-nav-label' htmlFor='lunch-radio-btn'
                            onClick={() => this.showMenu('lunch-menu-container')}>
                            Lunch
                        </label>

                        <input type='radio' id='dinner-radio-btn' name='meal-type' />
                        <label htmlFor='dinner-radio-btn' id='dinner-button' className='menu-nav-label'
                            onClick={() => this.showMenu('dinner-menu-container')}>
                            Dinner
                        </label>
                    </div>
                    <div className='menus-container'>
                        <div id='breakfast-menu-container' className='meal-type-container'>
                            <div className='menu-item'>
                                <div className='circular-img-div'>
                                    <picture>
                                        <source srcSet={require('../../assets/images/menu/1/min-900.png')} media='(min-width: 900px)' />
                                        <source srcSet={require('../../assets/images/menu/1/min-600.png')} media='(min-width: 600px)' />
                                        <img src={require('../../assets/images/menu/1/max-599.png')} alt='egg sandwitch' loading='lazy' />
                                    </picture>
                                </div>
                                <div>
                                    <h4>Fried eggs</h4>
                                    <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                        likeness
                                        a won&#39;t,
                                        deep.</p>
                                    <p className='orange-txt'>$15.25</p>
                                </div>
                            </div>
                            <div className='menu-item'>
                                <div className='circular-img-div'>
                                    <picture>
                                        <source srcSet={require('../../assets/images/menu/2/min-900.png')} media='(min-width: 900px)' />
                                        <source srcSet={require('../../assets/images/menu/2/min-600.png')} media='(min-width: 600px)' />
                                        <img src={require('../../assets/images/menu/2/max-599.png')} alt='pancakes' loading='lazy' />
                                    </picture>
                                </div>
                                <div>
                                    <h4>Pancakes</h4>
                                    <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                        likeness
                                        a won&#39;t,
                                        deep.</p>
                                    <p className='orange-txt'>$29.99</p>
                                </div>
                            </div>
                            <div className='menu-item'>
                                <div className='circular-img-div'>
                                    <picture>
                                        <source srcSet={require('../../assets/images/menu/3/min-900.png')} media='(min-width: 900px)' />
                                        <source srcSet={require('../../assets/images/menu/3/min-600.png')} media='(min-width: 600px)' />
                                        <img src={require('../../assets/images/menu/3/max-599.png')} alt='waffles' loading='lazy' />
                                    </picture>
                                </div>
                                <div>
                                    <h4>Waffles</h4>
                                    <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                        likeness
                                        a won&#39;t,
                                        deep.</p>
                                    <p className='orange-txt'>$22.75</p>
                                </div>
                            </div>
                            <div className='menu-item'>
                                <div className='circular-img-div'>
                                    <picture>
                                        <source srcSet={require('../../assets/images/menu/4/min-900.png')} media='(min-width: 900px)' />
                                        <source srcSet={require('../../assets/images/menu/4/min-600.png')} media='(min-width: 600px)' />
                                        <img src={require('../../assets/images/menu/4/max-599.png')} alt='oatmeal' loading='lazy' />
                                    </picture>
                                </div>
                                <div>
                                    <h4>Oatmeal</h4>
                                    <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                        likeness
                                        a won&#39;t,
                                        deep.</p>
                                    <p className='orange-txt'>$15.30</p>
                                </div>
                            </div>
                        </div>

                        <div id='lunch-menu-container' className='meal-type-container'>
                            <div className='menu-item'>
                                <div className='circular-img-div'>
                                    <picture>
                                        <source srcSet={require('../../assets/images/menu/5/min-900.png')} media='(min-width: 900px)' />
                                        <source srcSet={require('../../assets/images/menu/5/min-600.png')} media='(min-width: 600px)' />
                                        <img src={require('../../assets/images/menu/5/max-599.png')} alt='mediterranean chicken' loading='lazy' />
                                    </picture>
                                </div>
                                <div>
                                    <h4>Mediterranean Chicken</h4>
                                    <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                        likeness
                                        a won&#39;t,
                                        deep.</p>
                                    <p className='orange-txt'>$30.75</p>
                                </div>
                            </div>
                            <div className='menu-item'>
                                <div className='circular-img-div'>
                                    <picture>
                                        <source srcSet={require('../../assets/images/menu/6/min-900.png')} media='(min-width: 900px)' />
                                        <source srcSet={require('../../assets/images/menu/6/min-600.png')} media='(min-width: 600px)' />
                                        <img src={require('../../assets/images/menu/6/max-599.png')} alt='burritos' loading='lazy' />
                                    </picture>
                                </div>
                                <div>
                                    <h4>Burritos</h4>
                                    <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                        likeness
                                        a won&#39;t,
                                        deep.</p>
                                    <p className='orange-txt'>$20.15</p>
                                </div>
                            </div>
                            <div className='menu-item'>
                                <div className='circular-img-div'>
                                    <picture>
                                        <source srcSet={require('../../assets/images/menu/7/min-900.png')} media='(min-width: 900px)' />
                                        <source srcSet={require('../../assets/images/menu/7/min-600.png')} media='(min-width: 600px)' />
                                        <img src={require('../../assets/images/menu/7/max-599.png')} alt='spaghetti' loading='lazy' />
                                    </picture>
                                </div>
                                <div>
                                    <h4>Spaghetti</h4>
                                    <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                        likeness
                                        a won&#39;t,
                                        deep.</p>
                                    <p className='orange-txt'>$24.25</p>
                                </div>
                            </div>
                            <div className='menu-item'>
                                <div className='circular-img-div'>
                                    <picture>
                                        <source srcSet={require('../../assets/images/menu/8/min-900.png')} media='(min-width: 900px)' />
                                        <source srcSet={require('../../assets/images/menu/8/min-600.png')} media='(min-width: 600px)' />
                                        <img src={require('../../assets/images/menu/8/max-599.png')} alt='steak' loading='lazy' />
                                    </picture>
                                </div>
                                <div>
                                    <h4>Steak</h4>
                                    <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                        likeness
                                        a won&#39;t,
                                        deep.</p>
                                    <p className='orange-txt'>$35.25</p>
                                </div>
                            </div>
                        </div>

                        <div id='dinner-menu-container' className='meal-type-container'>
                            <div className='menu-item'>
                                <div className='circular-img-div'>
                                    <picture>
                                        <source srcSet={require('../../assets/images/menu/9/min-900.png')} media='(min-width: 900px)' />
                                        <source srcSet={require('../../assets/images/menu/9/min-600.png')} media='(min-width: 600px)' />
                                        <img src={require('../../assets/images/menu/9/max-599.png')} alt='cheeseburger' loading='lazy' />
                                    </picture>
                                </div>
                                <div>
                                    <h4>Cheeseburger Combo</h4>
                                    <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                        likeness
                                        a won&#39;t,
                                        deep.</p>
                                    <p className='orange-txt'>$27.30</p>
                                </div>
                            </div>
                            <div className='menu-item'>
                                <div className='circular-img-div'>
                                    <picture>
                                        <source srcSet={require('../../assets/images/menu/10/min-900.png')} media='(min-width: 900px)' />
                                        <source srcSet={require('../../assets/images/menu/10/min-600.png')} media='(min-width: 600px)' />
                                        <img src={require('../../assets/images/menu/10/max-599.png')} alt='shrimp sandwitch' loading='lazy' />
                                    </picture>
                                </div>
                                <div>
                                    <h4>Shrimp Sandwich</h4>
                                    <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                        likeness
                                        a won&#39;t,
                                        deep.</p>
                                    <p className='orange-txt'>$30.15</p>
                                </div>
                            </div>
                            <div className='menu-item'>
                                <div className='circular-img-div'>
                                    <picture>
                                        <source srcSet={require('../../assets/images/menu/7/min-900.png')} media='(min-width: 900px)' />
                                        <source srcSet={require('../../assets/images/menu/7/min-600.png')} media='(min-width: 600px)' />
                                        <img src={require('../../assets/images/menu/7/max-599.png')} alt='spaghetti' loading='lazy' />
                                    </picture>
                                </div>
                                <div>
                                    <h4>Spaghetti</h4>
                                    <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                        likeness
                                        a won&#39;t,
                                        deep.</p>
                                    <p className='orange-txt'>$24.25</p>
                                </div>
                            </div>
                            <div className='menu-item'>
                                <div className='circular-img-div'>
                                    <picture>
                                        <source srcSet={require('../../assets/images/menu/8/min-900.png')} media='(min-width: 900px)' />
                                        <source srcSet={require('../../assets/images/menu/8/min-600.png')} media='(min-width: 600px)' />
                                        <img src={require('../../assets/images/menu/8/max-599.png')} alt='steak' loading='lazy' />
                                    </picture>
                                </div>
                                <div>
                                    <h4>Steak</h4>
                                    <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                        likeness
                                        a won&#39;t,
                                        deep.</p>
                                    <p className='orange-txt'>$35.25</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}