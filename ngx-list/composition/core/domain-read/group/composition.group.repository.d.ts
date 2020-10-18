import { AggregateArchive } from '@generic-ui/hermes';
import { GroupCollection } from '../../api/group/group.collection';
export declare class CompositionGroupRepository extends AggregateArchive<GroupCollection> {
    static readonly default: GroupCollection;
    constructor();
}
