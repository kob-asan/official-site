/* ==========================================
   Kob_asan
   dom.js
========================================== */


/**
 * DOM Utility
 */

const KobDOM = {


    /**
     * Select One
     */

    select(selector) {


        return document.querySelector(
            selector
        );


    },



    /**
     * Select All
     */

    selectAll(selector) {


        return [
            ...document.querySelectorAll(
                selector
            )
        ];


    },



    /**
     * Create Element
     */

    create(tag, className = "") {


        const element =
            document.createElement(
                tag
            );


        if(className){


            element.className =
                className;


        }


        return element;


    },



    /**
     * Add Class
     */

    addClass(
        element,
        className
    ){


        if(element){


            element.classList.add(
                className
            );


        }


    },



    /**
     * Remove Class
     */

    removeClass(
        element,
        className
    ){


        if(element){


            element.classList.remove(
                className
            );


        }


    },



    /**
     * Toggle Class
     */

    toggleClass(
        element,
        className
    ){


        if(element){


            element.classList.toggle(
                className
            );


        }


    }



};



/* Global */

window.KobDOM = KobDOM;