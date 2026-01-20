//----------------------------------------------Class Számítások-----------------------------------
class Edeny{
    /**@param {"Tányér" | "Pohár"} nev  */
    constructor(nev){
        /**@type {string} */
        this.nev=nev
        /**@type {string} */
        this.anyag="üveg"
    }
    /**@param {"üveg" | "porcelán" | "papír" | "agyag" | "fa"} metarial  */
    changeMetarial(metarial){
        //console.log("metamorphozis")
        this.anyag=metarial
    }
}

//pohár
class Pohar extends Edeny{
    /**@param {"Vörös-boros" | "fehér-boros" | "pezsgős" | "sörös-korsó"} nev  */
    constructor(nev){
        super(nev)
        /**@type {number} */
        this.magassag=5 //cm
        /**@type {number} */
        this.atmero=2 //cm
    }
    /**@param {number} mertek  */
    magasabbPohar(mertek){
        this.magassag+=mertek
    }
    /**@param {number} mertek  */
    szelesebbPohar(mertek){
        this.atmero+=mertek
    }
}

//tányér
class Tanyer extends Edeny{
    /**
     * 
     * @param {"lapos-tanyer"|"mély-tanyer"|"leveses-tanyer"} nev 
     * @param {string} szin 
     */
    constructor(nev,szin){
        super(nev)
        /**@type {string} */
        this.szin=szin
    }
}

//kistányér
class KisTanyer extends Tanyer{
    /**
     * 
     * @param {string} nev 
     * @param {string} szin 
     */
    constructor(nev,szin){
        super(nev,szin)
        /**@type {number} */
        this.atmero=10 //cm
        /**@type {number} */
        this.sugar=this.atmero/2
    }
    /**@param {number} mertek  */
    szelesebbTanyer(mertek){
        this.atmero+=mertek
        this.sugar=this.atmero/2
    }
}

//nagytányér
class NagyTanyer extends Tanyer{
    /**
     * 
     * @param {"lapos"|"mély"} nev 
     * @param {string} szin 
     */
    constructor(nev,szin){
        super(nev,szin)
        /**@type {number} */
        this.atmero=30 //cm
        /**@type {number} */
        this.sugar=this.atmero/2
        this.melyseg=0 //cm
    }
    /**@param {number} mertek  */
    szelesebbTanyer(mertek){
        this.atmero+=mertek
        this.sugar=this.atmero/2
    }
    static MelyVagyLapos(){
        if(this.nev=="lapos"){
            this.melyseg=1 //cm
        }else{//mély
            this.melyseg=10 //cm
        }
    }
    /**@param {number} mertek  */
    SpeckoMelyseg(mertek){
        this.melyseg+=mertek
    }
}

//-----------------------------------------------Kiiratások-------------------------------------------
//---------------------------------------Edeny példányok
console.log("Edeny osztály:")
//pohár példány
const ePohar = new Edeny("Pohár") //ePohar --> Edény ami Pohár
console.log(ePohar)

ePohar.changeMetarial("papír")//methodus meghívása
console.log(ePohar)

//tanyér példány:
const eTanyer = new Edeny("Tányér")
console.log(eTanyer)

eTanyer.changeMetarial("porcelán")//methodus meghívása
console.log(eTanyer)

//---------------------------------------Pohár példányok
console.log("Pohár osztály:")

//pohár: 1 db példány
const pPohar = new Pohar("Vörös-boros")
console.log(pPohar)

//methodusok amiket elér
pPohar.magasabbPohar(10)
pPohar.szelesebbPohar(2)
pPohar.changeMetarial("fa")
console.log(pPohar)

//---------------------------------------Tanyér példányok
console.log("Tányér osztály:")

//1.tanyer peldány
const tTanyer = new Tanyer("lapos-tanyer","piros")
console.log(tTanyer)

//methodusok amiket elér
tTanyer.changeMetarial("agyag")
console.log(tTanyer)

//---------------------------------------Kicsi Tanyér példányok
console.log("Kistányér osztály:")

//1.tanyer peldány
const kTanyer = new KisTanyer("csontos-tél","kék")
console.log(kTanyer)

//methodusok amiket elér
kTanyer.changeMetarial("papír")
kTanyer.szelesebbTanyer(5)
console.log(kTanyer)

//---------------------------------------Nagy Tanyér példányok
console.log("Nagytányér osztály:")

//1.tanyer peldány
const nTanyer = new NagyTanyer("lapos","lila")
console.log(nTanyer)

//methodusok amiket elér
nTanyer.changeMetarial("porcelán")
nTanyer.szelesebbTanyer(10)
nTanyer.SpeckoMelyseg(5)
console.log(nTanyer)
