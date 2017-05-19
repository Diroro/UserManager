export class ExtendedUser {
    _id: String;
    first_name: string;
    last_name: string;
    birthday: string;
    position: string;
    team: string; // ID or Name?
    project: string; // ProjectID or Name?
    teamlead: string; //later - user;  getNameBy ? on CLient or Server Side?
    role: string;
    notes: string;
    photo: {};
    __v: number;
}
