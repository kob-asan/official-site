/* ==========================================
   Kob_asan
   dashboard.js
========================================== */


const KobDashboard = {


    init(){


        this.loadRecent();


        this.trackCurrentPage();


    },




    /*
        最近見たページ表示
    */

    loadRecent(){


        const area =
            document.querySelector(
                "#recent-pages"
            );


        if(!area){

            return;

        }



        let history =
            JSON.parse(
                localStorage.getItem(
                    "kob_recent"
                )
            )
            || [];



        if(history.length === 0){


            area.innerHTML =

            `
            <p>
            まだ閲覧履歴がありません
            </p>
            `;


            return;

        }




        area.innerHTML = "";



        history
        .slice(0,5)
        .forEach(
            page => {


                const item =
                document.createElement(
                    "a"
                );


                item.href =
                    page.url;


                item.textContent =
                    page.title;



                item.className =
                    "recent-link";



                area.appendChild(
                    item
                );


            }
        );


    },





    /*
        現在ページ保存
    */


    trackCurrentPage(){


        const path =
            location.pathname;



        if(
            path.includes(
                "index.html"
            )
        ){

            return;

        }




        let history =
            JSON.parse(
                localStorage.getItem(
                    "kob_recent"
                )
            )
            || [];




        const title =
            document.title
            .split("|")[0]
            .trim();




        history =
            history.filter(
                item =>
                    item.url !== path
            );




        history.unshift({

            title:title,

            url:path

        });




        history =
            history.slice(
                0,
                5
            );



        localStorage.setItem(

            "kob_recent",

            JSON.stringify(
                history
            )

        );


    }



};





document.addEventListener(

    "DOMContentLoaded",

    () => {


        KobDashboard.init();


    }

);



window.KobDashboard =
    KobDashboard;