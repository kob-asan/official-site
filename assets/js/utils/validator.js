/* ==========================================
   Kob_asan
   validator.js
========================================== */


/**
 * Validator Utility
 */

const KobValidator = {


    /**
     * Required
     */

    required(
        value
    ){


        return (
            value !== null &&
            value !== undefined &&
            String(value)
            .trim()
            !== ""
        );


    },



    /**
     * Email
     */

    email(
        value
    ){


        const pattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        return pattern.test(
            value
        );


    },



    /**
     * Min Length
     */

    minLength(
        value,
        length
    ){


        return (
            String(value)
            .length >= length
        );


    },



    /**
     * Max Length
     */

    maxLength(
        value,
        length
    ){


        return (
            String(value)
            .length <= length
        );


    },



    /**
     * Number
     */

    number(
        value
    ){


        return !isNaN(
            value
        );


    }



};



/* Global */

window.KobValidator = KobValidator;