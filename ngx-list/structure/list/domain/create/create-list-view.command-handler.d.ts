import { Type } from '@angular/core';
import { CreateAggregateCommandHandler } from '@generic-ui/hermes';
import { CreateListViewCommand } from './create-list-view.command';
import { ListViewAggregate } from '../list-view.aggregate';
export declare class CreateListViewCommandHandler implements CreateAggregateCommandHandler<ListViewAggregate, CreateListViewCommand> {
    forCommand(): Type<CreateListViewCommand>;
}
