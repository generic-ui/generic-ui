/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { ToggleSortCommandHandler } from './toggle/toggle-sort.command-handler';
import { SetSortingCommandHandler } from './set-config/set-sorting.command-handler';
import { SetSortOrderCommandHandler } from './order/set-sort-order.command-handler';
export class SortingDomainModule extends DomainModule {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static commandHandlers() {
        return [
            ...HermesModule.registerCommandHandler(ToggleSortCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(SetSortingCommandHandler, 'StructureAggregate'),
            ...HermesModule.registerCommandHandler(SetSortOrderCommandHandler, 'StructureAggregate')
        ];
    }
}
SortingDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [],
                declarations: [],
                exports: []
            },] }
];
/** @nocollapse */
SortingDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5kb21haW4tbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9kb21haW4vc29ydGluZy5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBV3BGLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxZQUFZO0lBRXBEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTztZQUNOLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixFQUFFLG9CQUFvQixDQUFDO1lBQ3RGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixFQUFFLG9CQUFvQixDQUFDO1lBQ3RGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixFQUFFLG9CQUFvQixDQUFDO1NBQ3hGLENBQUM7SUFDSCxDQUFDOzs7WUFwQkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFNBQVMsRUFBRSxFQUFFO2dCQUNiLFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFRvZ2dsZVNvcnRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vdG9nZ2xlL3RvZ2dsZS1zb3J0LmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTb3J0aW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3NldC1jb25maWcvc2V0LXNvcnRpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNvcnRPcmRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9vcmRlci9zZXQtc29ydC1vcmRlci5jb21tYW5kLWhhbmRsZXInO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ0RvbWFpbk1vZHVsZSBleHRlbmRzIERvbWFpbk1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBjb21tYW5kSGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFRvZ2dsZVNvcnRDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U29ydGluZ0NvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTb3J0T3JkZXJDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=