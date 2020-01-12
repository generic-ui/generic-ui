/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { COMMAND_HANDLERS } from '@generic-ui/hermes';
import { PagingDispatcher } from '../../domain/paging/command/paging.dispatcher';
import { SetPagingCommandHandler } from '../../domain/paging/command/set/set-paging.command-handler';
import { NextPageCommandHandler } from '../../domain/paging/command/next-page/next-page.command-handler';
import { PrevPageCommandHandler } from '../../domain/paging/command/prev-page/prev-page.command-handler';
import { ChangePagesizeCommandHandler } from '../../domain/paging/command/change-pagesize/change-pagesize.command-handler';
import { PagingRepository } from '../../domain/paging/read/paging.repository';
import { PagingAggregateFactory } from '../../domain/paging/command/paging.aggregate-factory';
import { PagingConverter } from '../../domain/paging/paging.converter';
import { PagingCommandService } from './paging-command.service';
import { PagingReadModelService } from './paging-read-model.service';
import { PagingEventService } from './paging-event.service';
/** @type {?} */
var commandProviders = [
    PagingDispatcher,
    {
        provide: COMMAND_HANDLERS,
        useClass: SetPagingCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: NextPageCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: PrevPageCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: ChangePagesizeCommandHandler,
        multi: true
    }
];
/** @type {?} */
var readProviders = [
    PagingRepository
];
/** @type {?} */
export var pagingProviders = tslib_1.__spread(commandProviders, readProviders, [
    PagingAggregateFactory,
    PagingConverter,
    PagingCommandService,
    PagingReadModelService,
    PagingEventService
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvcGFnaW5nL3BhZ2luZy5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNqRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0lBR3RELGdCQUFnQixHQUFHO0lBQ3hCLGdCQUFnQjtJQUNoQjtRQUNDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxLQUFLLEVBQUUsSUFBSTtLQUNYO0lBQ0Q7UUFDQyxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsS0FBSyxFQUFFLElBQUk7S0FDWDtJQUNEO1FBQ0MsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLEtBQUssRUFBRSxJQUFJO0tBQ1g7SUFDRDtRQUNDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLDRCQUE0QjtRQUN0QyxLQUFLLEVBQUUsSUFBSTtLQUNYO0NBQ0Q7O0lBRUssYUFBYSxHQUFHO0lBQ3JCLGdCQUFnQjtDQUNoQjs7QUFFRCxNQUFNLEtBQU8sZUFBZSxvQkFDeEIsZ0JBQWdCLEVBQ2hCLGFBQWE7SUFFaEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFFZixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTU1BTkRfSEFORExFUlMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL3BhZ2luZy5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNldFBhZ2luZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL3NldC9zZXQtcGFnaW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBOZXh0UGFnZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9jb21tYW5kL25leHQtcGFnZS9uZXh0LXBhZ2UuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFByZXZQYWdlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL2NvbW1hbmQvcHJldi1wYWdlL3ByZXYtcGFnZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ2hhbmdlUGFnZXNpemVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9jaGFuZ2UtcGFnZXNpemUvY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBQYWdpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9yZWFkL3BhZ2luZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFBhZ2luZ0FnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL2NvbW1hbmQvcGFnaW5nLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFBhZ2luZ0NvbnZlcnRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kU2VydmljZSB9IGZyb20gJy4vcGFnaW5nLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdpbmdSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi9wYWdpbmctcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50U2VydmljZSB9IGZyb20gJy4vcGFnaW5nLWV2ZW50LnNlcnZpY2UnO1xuXG5cbmNvbnN0IGNvbW1hbmRQcm92aWRlcnMgPSBbXG5cdFBhZ2luZ0Rpc3BhdGNoZXIsXG5cdHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTZXRQYWdpbmdDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LFxuXHR7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogTmV4dFBhZ2VDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LFxuXHR7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogUHJldlBhZ2VDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LFxuXHR7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogQ2hhbmdlUGFnZXNpemVDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9XG5dO1xuXG5jb25zdCByZWFkUHJvdmlkZXJzID0gW1xuXHRQYWdpbmdSZXBvc2l0b3J5XG5dO1xuXG5leHBvcnQgY29uc3QgcGFnaW5nUHJvdmlkZXJzID0gW1xuXHQuLi5jb21tYW5kUHJvdmlkZXJzLFxuXHQuLi5yZWFkUHJvdmlkZXJzLFxuXG5cdFBhZ2luZ0FnZ3JlZ2F0ZUZhY3RvcnksXG5cdFBhZ2luZ0NvbnZlcnRlcixcblxuXHRQYWdpbmdDb21tYW5kU2VydmljZSxcblx0UGFnaW5nUmVhZE1vZGVsU2VydmljZSxcblx0UGFnaW5nRXZlbnRTZXJ2aWNlXG5dO1xuIl19