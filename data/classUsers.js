
export class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setId(value) {
        if (value) {
            this.id = value;
        }
    }
    setName(value) {
        if (value) {
            this.name = value;
        }
    }
}