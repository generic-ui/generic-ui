import { GroupId } from './group.id';
export declare class Group {
    readonly id: GroupId;
    readonly header: string;
    readonly width: number;
    constructor(id: GroupId, header: string, width: number);
}
