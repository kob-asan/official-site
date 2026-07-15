/* ==========================================
   Time Table
   Kob_asan Works #003
========================================== */



// ==========================================
// Elements
// ==========================================


const cells =
    document.querySelectorAll(
        ".p-table__grid td"
    );


const saveButton =
    document.getElementById(
        "saveButton"
    );


const clearButton =
    document.getElementById(
        "clearButton"
    );



const STORAGE_KEY =
    "kobasan-time-table";




// ==========================================
// Load
// ==========================================


function loadTable(){


    const data =
        localStorage.getItem(
            STORAGE_KEY
        );



    if(!data){

        return;

    }



    const tableData =
        JSON.parse(
            data
        );



    cells.forEach(

        (cell,index)=>{


            const item =
                tableData[index];



            if(
                typeof item === "object"
                &&
                item !== null
            ){

                cell.textContent =
                    item.text || "";

            }
            else{

                // 古い形式対応
                cell.textContent =
                    item || "";

            }


        }

    );


}




// ==========================================
// Save
// ==========================================


/* ==========================================
   Advanced Save
========================================== */


function saveTable(){


    const data =

        Array.from(
            cells
        ).map(

            cell=>{


                return {

                    text:
                        cell.textContent.trim()

                };


            }

        );



    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(
            data
        )

    );


}




// ==========================================
// Auto Save
// ==========================================


cells.forEach(
    cell=>{


        cell.addEventListener(

            "input",

            ()=>{


                saveTable();


            }

        );


    }

);




// ==========================================
// Button
// ==========================================


saveButton.addEventListener(

    "click",

    ()=>{


        saveTable();



        saveButton.textContent =
            "Saved ✓";



        setTimeout(()=>{


            saveButton.textContent =
                "Save";


        },1500);


    }

);




clearButton.addEventListener(

    "click",

    ()=>{


        const result =
            confirm(
                "時間割を削除しますか？"
            );



        if(!result){

            return;

        }



        cells.forEach(

            cell=>{

                cell.textContent =
    tableData[index]?.text || "";

            }

        );



        localStorage.removeItem(

            STORAGE_KEY

        );


    }

);




// ==========================================
// Start
// ==========================================


loadTable();

/* ==========================================
   Subject Color
========================================== */


const subjectColors = {

    "数学":
        "rgba(80,160,255,.25)",

    "英語":
        "rgba(80,255,160,.25)",

    "国語":
        "rgba(255,120,160,.25)",

    "理科":
        "rgba(120,220,255,.25)",

    "社会":
        "rgba(255,200,80,.25)",

    "化学":
        "rgba(120,255,220,.25)",

    "物理":
        "rgba(180,120,255,.25)",

    "生物":
        "rgba(80,255,140,.25)"

};





function applySubjectColor(){


    cells.forEach(

        cell=>{


            const text =
                cell.textContent.trim();



            cell.style.background =
                "";



            if(
                subjectColors[text]
            ){

                cell.style.background =
                    subjectColors[text];

            }


        }

    );


}





// 編集後カラー更新

cells.forEach(

    cell=>{


        cell.addEventListener(

            "input",

            ()=>{


                applySubjectColor();


            }

        );


    }

);






// ==========================================
// Today Highlight
// ==========================================


function highlightToday(){


    const today =
        new Date().getDay();



    /*
    
    JS:
    
    0 = 日
    1 = 月
    2 = 火
    3 = 水
    4 = 木
    5 = 金
    6 = 土
    
    */


    const column =
        today;



    if(
        column === 0
        ||
        column === 6
    ){

        return;

    }



    const headers =
        document.querySelectorAll(

            ".p-table__grid th"

        );



    headers[column].style.background =
        "rgba(80,220,255,.18)";



    cells.forEach(

        cell=>{


            const index =
                Array.from(
                    cell.parentElement.children
                )
                .indexOf(cell);



            if(
                index + 1 === column
            ){

                cell.style.boxShadow =
                    "inset 0 0 20px rgba(80,220,255,.12)";

            }


        }

    );


}






// ==========================================
// Start Extension
// ==========================================


applySubjectColor();

highlightToday();

applySubjectColor();