let draft = 90;
let crew = 20;

var emptyShip = new Ship(draft, crew)

function Ship(draft, crew){
    this.draft = draft + 1.5;
    this.crew = crew;

    if(typeof this.draft == 'number'){
        if(this.draft >= 20) {
            console.log("Banyak nih Muatan Kapalnya")
        }else{
            console.log("Lebih banyak Muatan Orangnya")
        }
    }else{
        return "Error: Invalid Data Type"
    }
}