import { PagingAggregateFactory } from 'structure/domain/paging/command/paging-aggregate.factory';
import { PagingDispatcher } from 'structure/domain/paging/command/paging.dispatcher';
import { SetPagingCommandHandler } from 'structure/domain/paging/command/set/set-paging.command-handler';
import { PagingCommandService } from 'structure/app/paging/paging-command.service';
import { PagingQueryService } from 'structure/app/paging/paging-query.service';
import { NextPageCommandHandler } from 'structure/domain/paging/command/next-page/next-page.command-handler';
import { PrevPageCommandHandler } from 'structure/domain/paging/command/prev-page/prev-page.command-handler';
import { ChangePagesizeCommandHandler } from 'structure/domain/paging/command/change-pagesize/change-pagesize.command-handler';
import { PagingRepository } from 'structure/domain/paging/query/paging.repository';
import { PagingConverter } from 'structure/domain/paging/paging.converter';
import { PagingEventService } from 'structure/app/paging/paging-event.service';
export declare const pagingProviders: (typeof PagingAggregateFactory | typeof PagingDispatcher | typeof PagingCommandService | typeof PagingRepository | typeof PagingQueryService | typeof PagingEventService | typeof PagingConverter | {
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
