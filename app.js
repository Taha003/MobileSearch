let mobiles={
    iphone:{
        14:{
            ram:'6gb',
            camera:'128px',
            storage:"520gb"
        },

        13:{
            ram:'4gb',
            camera:'88px',
            storage:"320gb"
        },

        12:{
            ram:'4gb',
            camera:'64px',
            storage:"128gb"
        }
    },

    samsung:{
        s6:{
            ram:'8gb',
            camera:'110px',
            storage:"240gb"
        },

        s7:{
            ram:'4gb',
            camera:'48px',
            storage:"220gb"
        },

        s8:{
            ram:'2gb',
            camera:'50px',
            storage:"160gb"

        }

    },

    xiaomi:{
        redminote10:{
            ram:"6/4gb",
            camera:"48px",
            storage:"128gb"
        },
        pocoM3:{
            ram:"8gb",
            camera:"64px",
            storage:"128gb"        
        }
    }
    


}

let mob=document.getElementById("mobName");
let model=document.getElementById("mod");

function fillMainKeys(){
    let keys=Object.keys(mobiles);
    console.log(keys)
    mob.innerHTML="";
    for(var i=0;i<keys.length;i++){
        mob.innerHTML+=`<option>${keys[i]}</option>`
    }    
}

fillMainKeys();

function dropdown(){
    model.disabled=false;
    let nestedKeys=Object.keys(mobiles[mob.value])
    model.innerHTML=""
    for(var i=0;i<nestedKeys.length;i++){
        model.innerHTML+=`<option>${nestedKeys[i]}</option>`
    }
}

function srch(){
    let res=mobiles[mob.value][model.value];
    res1=JSON.stringify(res);
    document.write(res1+"</br>")

    
}



