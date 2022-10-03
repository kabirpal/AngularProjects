export class User {
    constructor(public email: string, public id: string,
        private _token: string, public expireDate: Date, public isAdmin:boolean=false) { }

    get token() {
        if (!this.expireDate || new Date > this.expireDate) {
            return null;
        }
        return this._token
    }
}