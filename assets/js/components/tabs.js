/* ==========================================
   Kob_asan
   tabs.js
========================================== */


/**
 * Tabs Component
 */

const KobTabs = {


    /**
     * Initialize
     */

    init() {


        const groups =
            document.querySelectorAll(
                ".c-tabs"
            );


        groups.forEach(
            group => {

                this.setup(
                    group
                );

            }
        );


    },



    /**
     * Setup Tab Group
     */

    setup(group) {


        const buttons =
            group.querySelectorAll(
                "[data-tab]"
            );


        const contents =
            group.querySelectorAll(
                "[data-tab-content]"
            );



        buttons.forEach(
            button => {


                button.addEventListener(
                    "click",
                    () => {


                        const target =
                            button.dataset.tab;



                        buttons.forEach(
                            item => {

                                item.classList.remove(
                                    "is-active"
                                );

                            }
                        );



                        contents.forEach(
                            content => {

                                content.classList.remove(
                                    "is-active"
                                );

                            }
                        );



                        button.classList.add(
                            "is-active"
                        );



                        const panel =
                            group.querySelector(
                                `[data-tab-content="${target}"]`
                            );



                        if(panel){

                            panel.classList.add(
                                "is-active"
                            );

                        }


                    }
                );


            }
        );


    }



};



/* Register */

KobLoader.register(
    () => {

        KobTabs.init();

    }
);



/* Global */

window.KobTabs = KobTabs;