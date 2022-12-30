import React, { Component } from 'react';

//handling offers-section slider
let offersNavBtns; //slider navigation buttons
let slideContainer;

export default class Offers extends Component {

    componentDidMount() {
        offersNavBtns = document.querySelectorAll('.offers-nav button');
        slideContainer = document.querySelector('.slides');
    }

    slidePos(btn) {
        offersNavBtns.forEach((item, index) => {
            //check if user clicked on a button that's not currently selected
            if (item !== btn && item.className === 'checked') {
                item.classList.remove('checked');
            }
            else if (item === btn) {
                item.classList.add('checked');
                this.changeSlides(index); //move the slider container to view the target slide
            }
        });
    }

    changeSlides(slidePos) {
        //move the container based on the target slide's position
        slideContainer.style['-webkit-transform'] = `translateX(-${slidePos * 100}%)`;
        slideContainer.style['transform'] = `translateX(-${slidePos * 100}%)`;
    }

    render() {
        return (
            <div>
                <div className="content">
                    <div>
                        <p>OUR OFFERS</p>
                        <h2>Our Offers This Week</h2>
                        <p className='sub-heading'>Green from Created moved i lights us isn&#39;t tree midst herb, herb void
                            dominion
                            likeness a won&#39;t,
                            deep.</p>
                    </div>

                    <div id="offers">
                        <div className='slides'>
                            <div className='offer-group'>
                                <div className='offer-container'>
                                    <div>
                                        <picture>
                                            <source srcSet={require('../../assets/images/offers/1/min-900.png')} media='(min-width: 900px)' />
                                            <source srcSet={require('../../assets/images/offers/1/min-600.png')} media='(min-width: 600px)' />
                                            <img src={require('../../assets/images/offers/1/max-599.png')} alt='steak' loading='lazy' />
                                        </picture>
                                    </div>

                                    <div>
                                        <p className='orange-txt'>$15.99</p>
                                        <h4>Steak</h4>
                                        <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                            likeness
                                            a won&#39;t,
                                            deep.</p>
                                        <button className='order-now-btn'>Order Now</button>
                                    </div>
                                </div>

                                <div className="offer-container">
                                    <div>
                                        <picture>
                                            <source srcSet={require('../../assets/images/offers/2/min-900.png')} media='(min-width: 900px)' />
                                            <source srcSet={require('../../assets/images/offers/2/min-600.png')} media='(min-width: 600px)' />
                                            <img src={require('../../assets/images/offers/2/max-599.png')} alt='burger' loading='lazy' />
                                        </picture>
                                    </div>

                                    <div>
                                        <p className='orange-txt'>$19.25</p>
                                        <h4>Burger & Fries</h4>
                                        <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                            likeness
                                            a won&#39;t,
                                            deep.</p>
                                        <button className='order-now-btn'>Order Now</button>
                                    </div>
                                </div>

                                <div className="offer-container">
                                    <div>
                                        <picture>
                                            <source srcSet={require('../../assets/images/offers/3/min-900.png')} media='(min-width: 900px)' />
                                            <source srcSet={require('../../assets/images/offers/3/min-600.png')} media='(min-width: 600px)' />
                                            <img src={require('../../assets/images/offers/3/max-599.png')} alt='starters' loading='lazy' />
                                        </picture>
                                    </div>

                                    <div>
                                        <p className='orange-txt'>$9.99</p>
                                        <h4>Starters</h4>
                                        <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                            likeness
                                            a won&#39;t,
                                            deep.</p>
                                        <button className='order-now-btn'>Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className='offer-group'>
                                <div className='offer-container'>
                                    <div>
                                        <picture>
                                            <source srcSet={require('../../assets/images/offers/1/min-900.png')} media='(min-width: 900px)' />
                                            <source srcSet={require('../../assets/images/offers/1/min-600.png')} media='(min-width: 600px)' />
                                            <img src={require('../../assets/images/offers/1/max-599.png')} alt='steak' loading='lazy' />
                                        </picture>
                                    </div>

                                    <div>
                                        <p className='orange-txt'>$15.99</p>
                                        <h4>Steak</h4>
                                        <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                            likeness
                                            a won&#39;t,
                                            deep.</p>
                                        <button className='order-now-btn'>Order Now</button>
                                    </div>
                                </div>

                                <div className="offer-container">
                                    <div>
                                        <picture>
                                            <source srcSet={require('../../assets/images/offers/2/min-900.png')} media='(min-width: 900px)' />
                                            <source srcSet={require('../../assets/images/offers/2/min-600.png')} media='(min-width: 600px)' />
                                            <img src={require('../../assets/images/offers/2/max-599.png')} alt='burger' loading='lazy' />
                                        </picture>
                                    </div>

                                    <div>
                                        <p className='orange-txt'>$19.25</p>
                                        <h4>Burger & Fries</h4>
                                        <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                            likeness
                                            a won&#39;t,
                                            deep.</p>
                                        <button className='order-now-btn'>Order Now</button>
                                    </div>
                                </div>

                                <div className="offer-container">
                                    <div>
                                        <picture>
                                            <source srcSet={require('../../assets/images/offers/3/min-900.png')} media='(min-width: 900px)' />
                                            <source srcSet={require('../../assets/images/offers/3/min-600.png')} media='(min-width: 600px)' />
                                            <img src={require('../../assets/images/offers/3/max-599.png')} alt='starters' loading='lazy' />
                                        </picture>
                                    </div>

                                    <div>
                                        <p className='orange-txt'>$9.99</p>
                                        <h4>Starters</h4>
                                        <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                            likeness
                                            a won&#39;t,
                                            deep.</p>
                                        <button className='order-now-btn'>Order Now</button>
                                    </div>
                                </div>
                            </div>

                            <div className='offer-group'>
                                <div className='offer-container'>
                                    <div>
                                        <picture>
                                            <source srcSet={require('../../assets/images/offers/1/min-900.png')} media='(min-width: 900px)' />
                                            <source srcSet={require('../../assets/images/offers/1/min-600.png')} media='(min-width: 600px)' />
                                            <img src={require('../../assets/images/offers/1/max-599.png')} alt='steak' loading='lazy' />
                                        </picture>
                                    </div>

                                    <div>
                                        <p className='orange-txt'>$15.99</p>
                                        <h4>Steak</h4>
                                        <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                            likeness
                                            a won&#39;t,
                                            deep.</p>
                                        <button className='order-now-btn'>Order Now</button>
                                    </div>
                                </div>

                                <div className="offer-container">
                                    <div>
                                        <picture>
                                            <source srcSet={require('../../assets/images/offers/2/min-900.png')} media='(min-width: 900px)' />
                                            <source srcSet={require('../../assets/images/offers/2/min-600.png')} media='(min-width: 600px)' />
                                            <img src={require('../../assets/images/offers/2/max-599.png')} alt='burger' loading='lazy' />
                                        </picture>
                                    </div>

                                    <div>
                                        <p className='orange-txt'>$19.25</p>
                                        <h4>Burger & Fries</h4>
                                        <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                            likeness
                                            a won&#39;t,
                                            deep.</p>
                                        <button className='order-now-btn'>Order Now</button>
                                    </div>
                                </div>

                                <div className="offer-container">
                                    <div>
                                        <picture>
                                            <source srcSet={require('../../assets/images/offers/3/min-900.png')} media='(min-width: 900px)' />
                                            <source srcSet={require('../../assets/images/offers/3/min-600.png')} media='(min-width: 600px)' />
                                            <img src={require('../../assets/images/offers/3/max-599.png')} alt='starters' loading='lazy' />
                                        </picture>
                                    </div>

                                    <div>
                                        <p className='orange-txt'>$9.99</p>
                                        <h4>Starters</h4>
                                        <p>Green from Created moved i lights us isn&#39;t tree midst herb, herb void dominion
                                            likeness
                                            a won&#39;t,
                                            deep.</p>
                                        <button className='order-now-btn'>Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='offers-nav'>
                    <button className='checked' onClick={(e) => this.slidePos(e.target)}></button>
                    <button onClick={(e) => this.slidePos(e.target)}></button>
                    <button onClick={(e) => this.slidePos(e.target)}></button>
                </div>
            </div>
        );
    }
}