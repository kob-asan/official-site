/* ==========================================
   Kob_asan
   modal.js
========================================== */


/**
 * Modal Component
 */

const KobModal = {


    active: null,



    /**
     * Open Modal
     */

    open(selector) {


        const modal =
            document.querySelector(
                selector
            );


        if(!modal){

            return;

        }



        modal.classList.add(
            "is-open"
        );


        document.body.classList.add(
            "modal-open"
        );


        this.active =
            modal;


    },



    /**
     * Close Modal
     */

    close() {


        if(!this.active){

            return;

        }



        this.active.classList.remove(
            "is-open"
        );


        document.body.classList.remove(
            "modal-open"
        );


        this.active =
            null;


    },



    /**
     * Initialize
     */

    init() {


        document.addEventListener(
            "click",
            event => {


                const close =
                    event.target.closest(
                        "[data-modal-close]"
                    );


                if(close){

                    this.close();

                }



                const open =
                    event.target.closest(
                        "[data-modal-open]"
                    );


                if(open){


                    const target =
                        open.dataset.modalOpen;


                    this.open(
                        target
                    );


                }


            }
        );


    }



};



/* Register */

KobLoader.register(
    () => {

        KobModal.init();

    }
);



/* Global */

window.KobModal = KobModal;