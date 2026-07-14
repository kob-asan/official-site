/* ==========================================
   Kob_asan
   theme.js
========================================== */


/**
 * Theme Manager
 */

const KobTheme = {


    /**
     * Apply Theme
     */

    apply(theme) {


        document.documentElement
            .setAttribute(
                "data-theme",
                theme
            );


        KobStorage.set(
            "theme",
            theme
        );


    },



    /**
     * Get Saved Theme
     */

    get() {


        const saved =
            KobStorage.get(
                "theme"
            );


        if(saved){

            return saved;

        }


        return KobConfig.theme.default;


    },



    /**
     * Initialize
     */

    init() {


        const theme =
            this.get();


        this.apply(
            theme
        );


    }



};



/* Start */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        KobTheme.init();

    }
);



/* Global */

window.KobTheme = KobTheme;