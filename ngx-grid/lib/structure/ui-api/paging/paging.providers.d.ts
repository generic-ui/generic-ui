import { PagingDispatcher } from '../../domain/paging/command/paging.dispatcher';
import { PagingRepository } from '../../domain/paging/read/paging.repository';
import { PagingAggregateFactory } from '../../domain/paging/command/paging.aggregate-factory';
import { PagingConverter } from '../../domain/paging/paging.converter';
import { PagingCommandService } from './paging-command.service';
import { PagingReadModelService } from './paging-read-model.service';
import { PagingEventService } from './paging-event.service';
export declare const pagingCommandHandlers: import("@angular/core").Provider[];
export declare const pagingProviders: (typeof PagingRepository | typeof PagingReadModelService | typeof PagingDispatcher | typeof PagingCommandService | typeof PagingAggregateFactory | typeof PagingConverter | typeof PagingEventService)[];
