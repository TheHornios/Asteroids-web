class Sonido {
    constructor() {
        this.soundMiusic = new buzz.sound ( "../song/miusic" , {
            formats: [ "ogg" ],
            preload: true,
            volume:(80*volumen__slider)/100,   
        });

        this.soundBootom = new buzz.sound ( "../song/click" , {
            formats: [ "mp3" ],
            preload: true,
        });
        this.soundDisparo1 = "../song/sfx_shieldDown__";
        this.soundDisparo2 = "../song/sfx_shieldUp__" ;
        this.soundImpat = "../song/impat" ;
    }
    getSoundMiusic(){
        return this.soundMiusic;
    }
    getSoundDisparo1(){
        return new buzz.sound ( this.soundDisparo1 , {
            formats: [ "ogg" ],
            volume:(40*volumen__slider)/100,
            preload: true,
        });;
    }
    getSoundDisparo2(){
        return new buzz.sound ( this.soundDisparo2 , {
            formats: [ "ogg" ],
            preload: true,
        });;
    }
    getSoundImpat(){
        return new buzz.sound ( this.soundImpat , {
            formats: [ "ogg" ],
            volume:(80*volumen__slider)/100,
            preload: true,
        });
    }

}