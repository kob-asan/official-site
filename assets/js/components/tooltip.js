/* ==========================================
   Kob_asan
   tooltip.js
========================================== */


/**
 * Tooltip Component
 */

const KobTooltip = {


    /**
     * Initialize
     */

    init() {


        const elements =
            document.querySelectorAll(
                "[data-tooltip]"
            );


        elements.forEach(
            element => {


                this.setup(
                    element
                );


            }
        );


    },



    /**
     * Setup
     */

    setup(element) {


        const text =
            element.dataset.tooltip;



        if(!text){

            return;

        }



        element.addEventListener(
            "mouseenter",
            () => {


                this.show(
                    element,
                    text
                );


            }
        );



        element.addEventListener(
            "mouseleave",
            () => {


                this.hide();


            }
        );


    },



    /**
     * Show
     */

    show(
        element,
        text
    ){


        const tooltip =
            document.createElement(
                "div"
            );


        tooltip.className =
            "c-tooltip";


        tooltip.textContent =
            text;


        document.body.appendChild(
            tooltip
        );



        const rect =
            element.getBoundingClientRect();



        tooltip.style.left =
            `${rect.left}px`;



        tooltip.style.top =
            `${rect.top - tooltip.offsetHeight - 8}px`;



        this.active =
            tooltip;


    },



    /**
     * Hide
     */

    hide() {


        if(this.active){


            this.active.remove();


            this.active =
                null;


        }


    }



};



/* Register */

KobLoader.register(
    () => {

        KobTooltip.init();

    }
);



/* Global */

window.KobTooltip = KobTooltip;