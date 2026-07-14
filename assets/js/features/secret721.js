/* ==========================================
   Kob_asan
   Secret 721
========================================== */


(() => {


    const target =
        ["7", "2", "1"];


    let input = [];



    document.addEventListener(
        "keydown",
        (event) => {


            input.push(
                event.key
            );



            if(input.length > target.length){

                input.shift();

            }




            if(
                input.join("")
                ===
                target.join("")
            ){


                location.href =
                    "721.html";


            }


        }
    );


})();