/* ==========================================
   Kob_asan
   search.js
========================================== */


const KobSearch = {


    data: [],



    async init(){


        const response =
            await fetch(
                "data/search-index.json"
            );


        this.data =
            await response.json();


        this.bind();


    },



    bind(){


        const form =
            document.querySelector(
                ".p-search-form"
            );


        if(!form){

            return;

        }


        form.addEventListener(
            "submit",
            e => {


                e.preventDefault();



                const keyword =
                    form.querySelector(
                        "input"
                    ).value;



                this.search(keyword);


            }
        );


    },



    search(keyword){


        const result =
            this.data.filter(
                item => {


                    const text =
                        (
                            item.title +
                            item.description +
                            item.keywords.join("")
                        )
                        .toLowerCase();



                    return text.includes(
                        keyword.toLowerCase()
                    );


                }
            );



        this.render(result);


    },



    render(results){


        const area =
            document.querySelector(
                ".p-search-result"
            );



        if(!area){

            return;

        }



        area.innerHTML = "";



        if(results.length === 0){


            area.innerHTML =

            `
            <p>
            該当するページがありません。
            </p>
            `;


            return;

        }



        results.forEach(
            item => {


                area.innerHTML +=

                `
                <article class="c-card">

                    <h3>
                    ${item.title}
                    </h3>

                    <p>
                    ${item.description}
                    </p>

                    <a href="${item.url}">
                    開く
                    </a>

                </article>
                `;


            }
        );


    }


};



document.addEventListener(
    "DOMContentLoaded",
    () => {

        KobSearch.init();

    }
);


window.KobSearch =
    KobSearch;