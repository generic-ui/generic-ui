/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { PagingManagerFactory } from './paging.manager-factory';
import { PagingDispatcher } from './paging.dispatcher';
import { SetPagingCommandHandler } from './set/set-paging.command-handler';
import { NextPageCommandHandler } from './next-page/next-page.command-handler';
import { PrevPageCommandHandler } from './prev-page/prev-page.command-handler';
import { ChangePagesizeCommandHandler } from './change-pagesize/change-pagesize.command-handler';
export class PagingDomainModule extends DomainModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(SetPagingCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(NextPageCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(PrevPageCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(ChangePagesizeCommandHandler, 'StructureAggregate')
        ];
    }
}
PagingDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    PagingDispatcher,
                    PagingManagerFactory
                ],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
PagingDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluL3BhZ2luZy5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBY2pHLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZO0lBRW5EO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTztZQUNOLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixFQUFFLG9CQUFvQixDQUFDO1lBQ3JGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDO1lBQ3BGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixDQUFDO1lBQ3BGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLG9CQUFvQixDQUFDO1NBQzFGLENBQUM7SUFDSCxDQUFDOzs7WUF4QkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFNBQVMsRUFBRTtvQkFDVixnQkFBZ0I7b0JBQ2hCLG9CQUFvQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRG9tYWluTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4vcGFnaW5nLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBQYWdpbmdEaXNwYXRjaGVyIH0gZnJvbSAnLi9wYWdpbmcuZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTZXRQYWdpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vc2V0L3NldC1wYWdpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IE5leHRQYWdlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL25leHQtcGFnZS9uZXh0LXBhZ2UuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFByZXZQYWdlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3ByZXYtcGFnZS9wcmV2LXBhZ2UuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IENoYW5nZVBhZ2VzaXplQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NoYW5nZS1wYWdlc2l6ZS9jaGFuZ2UtcGFnZXNpemUuY29tbWFuZC1oYW5kbGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFBhZ2luZ0Rpc3BhdGNoZXIsXG5cdFx0UGFnaW5nTWFuYWdlckZhY3Rvcnlcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5nRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0UGFnaW5nQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKE5leHRQYWdlQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFByZXZQYWdlQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKENoYW5nZVBhZ2VzaXplQ29tbWFuZEhhbmRsZXIsICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnKVxuXHRcdF07XG5cdH1cblxufVxuIl19