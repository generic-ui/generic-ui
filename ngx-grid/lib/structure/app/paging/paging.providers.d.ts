import { PagingDispatcher } from '../../domain/paging/command/paging.dispatcher';
import { SetPagingCommandHandler } from '../../domain/paging/command/set/set-paging.command-handler';
import { NextPageCommandHandler } from '../../domain/paging/command/next-page/next-page.command-handler';
import { PrevPageCommandHandler } from '../../domain/paging/command/prev-page/prev-page.command-handler';
import { ChangePagesizeCommandHandler } from '../../domain/paging/command/change-pagesize/change-pagesize.command-handler';
import { PagingRepository } from '../../domain/paging/query/paging.repository';
import { PagingAggregateFactory } from '../../domain/paging/command/paging.aggregate-factory';
import { PagingConverter } from '../../domain/paging/paging.converter';
import { PagingCommandService } from './paging-command.service';
import { PagingQueryService } from './paging-query.service';
import { PagingEventService } from './paging-event.service';
export declare const pagingProviders: (typeof PagingRepository | typeof PagingQueryService | typeof PagingDispatcher | typeof PagingCommandService | typeof PagingAggregateFactory | typeof PagingEventService | typeof PagingConverter | {
    provide: string;
    useClass: typeof SetPagingCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof NextPageCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof PrevPageCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof ChangePagesizeCommandHandler;
    multi: boolean;
})[];
