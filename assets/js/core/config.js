/* ==========================================
   Kob_asan
   config.js
========================================== */


const KobConfig = {


    /* ======================================
       Site
    ====================================== */


    site: {

        name: "Kob_asan",

        description:
            "Kob_asanのまとめサイト",

        version:
            "1.0.0",

        author:
            "Kob_asan"

    },


    /* ======================================
       Paths
    ====================================== */


    paths: {

        assets:
            "assets/",

        pages:
            "pages/",

        data:
            "data/"

    },


    /* ======================================
       Theme
    ====================================== */


    theme: {

        default:
            "dark",

        available: [

            "dark"

        ]

    },


    /* ======================================
       Search
    ====================================== */


    search: {

        enabled:
            true,

        maxResults:
            10

    },


    /* ======================================
       Development
    ====================================== */


    development: {

        mode:
            false

    }


};


/* Global */

window.KobConfig = KobConfig;