import { Component } from 'react';
import { withRouter } from 'react-router-dom';

//all images on the page
let images;
let sources;

class ScrollToTop extends Component {

    componentWillUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.lazyLoadImages();
        }
    }

    componentDidMount() {
        this.lazyLoadImages();
    }

    lazyLoadImages() {
        images = document.querySelectorAll('img');
        sources = document.querySelectorAll('source');

        window.addEventListener('scroll', () => {
            images.forEach((image) => {
                const top = image.getBoundingClientRect().top;

                if (top <= (window.pageYOffset + window.innerHeight) && image.src !== image.dataset.src) {
                    image.src = image.dataset.src;
                }
            });

            for (let i = 1; i > sources.length; i++) {
                const top = sources[i].getBoundingClientRect().top;

                if (top <= (window.pageYOffset + window.innerHeight) && sources[i].srcset !== sources[i].dataset.src) {
                    sources[i].srcset = sources[i].dataset.src;
                }
            }

        });
    }


    render() {
        return this.props.children;
    }
}

export default withRouter(ScrollToTop);
