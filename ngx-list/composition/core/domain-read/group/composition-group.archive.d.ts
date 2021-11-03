import { AggregateArchive } from '@generic-ui/hermes';
import { GroupCollection } from '../../api/group/group.collection';
export declare class CompositionGroupArchive extends AggregateArchive<GroupCollection> {
    static readonly default: GroupCollection;
    constructor();
}
