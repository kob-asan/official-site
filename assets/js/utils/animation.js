/* ==========================================
   Kob_asan
   animation.js
========================================== */


/**
 * Animation Utility
 */

const KobAnimation = {


    /**
     * Fade In
     */

    fadeIn(element) {


        if(!element){

            return;

        }


        element.classList.add(
            "is-visible"
        );


    },



    /**
     * Fade Out
     */

    fadeOut(element) {


        if(!element){

            return;

        }


        element.classList.remove(
            "is-visible"
        );


    },



    /**
     * Observe Scroll
     */

    observe(
        selector
    ){


        const elements =
            document.querySelectorAll(
                selector
            );



        if(
            elements.length === 0
        ){

            return;

        }



        const observer =
            new IntersectionObserver(
                entries => {


                    entries.forEach(
                        entry => {


                            if(
                                entry.isIntersecting
                            ){


                                this.fadeIn(
                                    entry.target
                                );


                                observer.unobserve(
                                    entry.target
                                );


                            }


                        }
                    );


                }
            );



        elements.forEach(
            element => {


                observer.observe(
                    element
                );


            }
        );


    }



};



/* Global */

window.KobAnimation = KobAnimation;