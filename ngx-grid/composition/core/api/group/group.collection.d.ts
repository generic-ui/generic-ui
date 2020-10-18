import { Group } from './group';
export declare class GroupCollection {
    private readonly groups;
    private readonly showGroups;
    constructor(groups: Array<Group>, showGroups: boolean);
    getGroups(): Array<Group>;
    isVisible(): boolean;
}
