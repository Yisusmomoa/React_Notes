export default class Note{
    id="";
    title=""
    constructor(_title){
        this.title=_title;
        this.id=crypto.randomUUID()
    }
}