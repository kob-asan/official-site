/* ==========================================
   Kob_asan
   helper.js
========================================== */


/**
 * Helper Utility
 */

const KobHelper = {


    /**
     * Sleep
     */

    sleep(ms) {


        return new Promise(
            resolve => {

                setTimeout(
                    resolve,
                    ms
                );

            }
        );


    },



    /**
     * Check Empty
     */

    isEmpty(value) {


        return (
            value === null ||
            value === undefined ||
            value === ""
        );


    },



    /**
     * Clamp Number
     */

    clamp(
        number,
        min,
        max
    ){


        return Math.min(
            Math.max(
                number,
                min
            ),
            max
        );


    },



    /**
     * Capitalize
     */

    capitalize(text) {


        if(!text){

            return "";

        }


        return (
            text.charAt(0)
            .toUpperCase()
            +
            text.slice(1)
        );


    },



    /**
     * Random ID
     */

    randomId(length = 8) {


        const chars =
            "abcdefghijklmnopqrstuvwxyz0123456789";


        let result =
            "";


        for(
            let i = 0;
            i < length;
            i++
        ){

            result +=
                chars[
                    Math.floor(
                        Math.random()
                        *
                        chars.length
                    )
                ];

        }


        return result;


    }



};



/* Global */

window.KobHelper = KobHelper;