import { CommandType, CreateAggregateCommandHandler } from '@generic-ui/hermes';
import { CreateListViewCommand } from './create-list-view.command';
import { ListViewAggregate } from '../list-view.aggregate';
import * as i0 from "@angular/core";
export declare class CreateListViewCommandHandler implements CreateAggregateCommandHandler<ListViewAggregate, CreateListViewCommand> {
    forCommand(): CommandType<CreateListViewCommand>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateListViewCommandHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateListViewCommandHandler>;
}
//# sourceMappingURL=create-list-view.command-handler.d.ts.map