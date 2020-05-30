/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { ToggleSortCommandHandler } from './toggle/toggle-sort.command-handler';
import { SetSortingCommandHandler } from './set-config/set-sorting.command-handler';
import { SetSortOrderCommandHandler } from './order/set-sort-order.command-handler';
var SortingDomainModule = /** @class */ (function (_super) {
    tslib_1.__extends(SortingDomainModule, _super);
    function SortingDomainModule() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    SortingDomainModule.commandHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerCommandHandler(ToggleSortCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetSortingCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetSortOrderCommandHandler, 'StructureAggregate'));
    };
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
    SortingDomainModule.ctorParameters = function () { return []; };
    return SortingDomainModule;
}(DomainModule));
export { SortingDomainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5kb21haW4tbW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc29ydGluZy9kb21haW4vc29ydGluZy5kb21haW4tbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUdwRjtJQVF5QywrQ0FBWTtJQUVwRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQUVNLG1DQUFlOzs7SUFBdEI7UUFDQyx3QkFDSSxZQUFZLENBQUMsc0JBQXNCLENBQUMsd0JBQXdCLEVBQUUsb0JBQW9CLENBQUMsRUFDbkYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixFQUFFLG9CQUFvQixDQUFDLEVBQ25GLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsRUFBRSxvQkFBb0IsQ0FBQyxFQUN2RjtJQUNILENBQUM7O2dCQXBCRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2lCQUNYOzs7O0lBZUQsMEJBQUM7Q0FBQSxBQXRCRCxDQVF5QyxZQUFZLEdBY3BEO1NBZFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFRvZ2dsZVNvcnRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vdG9nZ2xlL3RvZ2dsZS1zb3J0LmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTb3J0aW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3NldC1jb25maWcvc2V0LXNvcnRpbmcuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNvcnRPcmRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9vcmRlci9zZXQtc29ydC1vcmRlci5jb21tYW5kLWhhbmRsZXInO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ0RvbWFpbk1vZHVsZSBleHRlbmRzIERvbWFpbk1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBjb21tYW5kSGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFRvZ2dsZVNvcnRDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U29ydGluZ0NvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTb3J0T3JkZXJDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=