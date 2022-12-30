import React from 'react';

export default function Timeline() {
    return (
        <div className='timeline'>
            <div className='container left'>
                <div className='content'>
                    <picture>
                        <source srcSet={require('../../assets/images/timeline/1/min-900.png')} media='(min-width: 900px)' />
                        <img src={require('../../assets/images/timeline/1/max-599.png')} alt='story-img' loading='lazy' />
                    </picture>
                    <h3>1990</h3>
                    <span>Far far away, behind the word mountains,
                        far from the countries Vokalia and Consonantia, there live the blind texts.
                        Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.</span>
                </div>
            </div>
            <div className='container right'>
                <div className='content'>
                    <picture>
                        <source srcSet={require('../../assets/images/timeline/2/min-900.png')} media='(min-width: 900px)' />
                        <img src={require('../../assets/images/timeline/2/max-599.png')} alt='story-img' loading='lazy' />
                    </picture>
                    <h3>1995</h3>
                    <span>Far far away, behind the word mountains,
                        far from the countries Vokalia and Consonantia, there live the blind texts.
                        Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.</span>
                </div>
            </div>
            <div className='container left'>
                <div className='content'>
                    <picture>
                        <source srcSet={require('../../assets/images/timeline/3/min-900.png')} media='(min-width: 900px)' />
                        <img src={require('../../assets/images/timeline/3/max-599.png')} alt='story-img' loading='lazy' />
                    </picture>
                    <h3>2005</h3>
                    <span>Far far away, behind the word mountains,
                        far from the countries Vokalia and Consonantia, there live the blind texts.
                        Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.</span>
                </div>
            </div>
            <div className='container right'>
                <div className='content'>
                    <picture>
                        <source srcSet={require('../../assets/images/timeline/4/min-900.png')} media='(min-width: 900px)' />
                        <img src={require('../../assets/images/timeline/4/max-599.png')} alt='story-img' loading='lazy' />
                    </picture>
                    <h3>2010</h3>
                    <span>Far far away, behind the word mountains,
                        far from the countries Vokalia and Consonantia, there live the blind texts.
                        Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.</span>
                </div>
            </div>
            <div className='container left'>
                <div className='content'>
                    <picture>
                        <source srcSet={require('../../assets/images/about/min-900.png')} media='(min-width: 900px)' />
                        <img src={require('../../assets/images/about/max-599.png')} alt='story-img' loading='lazy' />
                    </picture>
                    <h3>2015</h3>
                    <span>Far far away, behind the word mountains,
                        far from the countries Vokalia and Consonantia, there live the blind texts.
                        Separated they live in Bookmarksgrove right at the coast of the Semantics,
                        a large language ocean.</span>
                </div>
            </div>
        </div>
    );
}