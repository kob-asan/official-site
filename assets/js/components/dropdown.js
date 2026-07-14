/* ==========================================
   Kob_asan
   dropdown.js
========================================== */


/**
 * Dropdown Component
 */

const KobDropdown = {


    /**
     * Initialize
     */

    init() {


        const dropdowns =
            document.querySelectorAll(
                ".c-dropdown"
            );


        dropdowns.forEach(
            dropdown => {


                this.setup(
                    dropdown
                );


            }
        );


    },



    /**
     * Setup
     */

    setup(dropdown) {


        const button =
            dropdown.querySelector(
                "[data-dropdown-button]"
            );


        if(!button){

            return;

        }



        button.addEventListener(
            "click",
            event => {


                event.stopPropagation();


                this.toggle(
                    dropdown
                );


            }
        );


    },



    /**
     * Toggle
     */

    toggle(dropdown) {


        dropdown.classList.toggle(
            "is-open"
        );


    },



    /**
     * Close All
     */

    closeAll() {


        document
            .querySelectorAll(
                ".c-dropdown.is-open"
            )
            .forEach(
                dropdown => {


                    dropdown.classList.remove(
                        "is-open"
                    );


                }
            );


    }



};



/**
 * Outside Click
 */

document.addEventListener(
    "click",
    () => {


        KobDropdown.closeAll();


    }
);



/* Register */

KobLoader.register(
    () => {

        KobDropdown.init();

    }
);



/* Global */

window.KobDropdown = KobDropdown;