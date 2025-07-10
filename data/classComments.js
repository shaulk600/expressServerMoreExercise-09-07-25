class Comment{
    constructor(id,text){
        this.id = id;
        this.text = text;
    }
    getId() {
        return this.id;
    }
    getText() {
        return this.text;
    }
    setId(value="") {
        if (value!=="") {
            this.id = value;
        }
    }
    setText(value="") {
        if (value!=="") {
            this.text = value;
        }
    }
}