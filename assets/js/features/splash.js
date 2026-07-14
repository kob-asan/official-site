const splash = document.querySelector("#splash");


if(splash){


    window.addEventListener(
        "load",
        ()=>{


            setTimeout(()=>{


                splash.classList.add(
                    "hide"
                );


            },5000);


        }
    );


}