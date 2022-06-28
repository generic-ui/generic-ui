import { CreateAggregateCommand } from '@generic-ui/hermes';
import { ListViewId } from '../list-view.id';
export declare class CreateListViewCommand extends CreateAggregateCommand {
    constructor(listViewId: ListViewId);
}
