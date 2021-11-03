import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { ToggleSortCommandHandler } from './toggle/toggle-sort.command-handler';
import { SetSortingCommandHandler } from './set-config/set-sorting.command-handler';
import { SetSortOrderCommandHandler } from './order/set-sort-order.command-handler';
import { structureKey } from '../../../core/api/structre.key';
import * as i0 from "@angular/core";
export class SortingDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(ToggleSortCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetSortingCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetSortOrderCommandHandler, structureKey)
        ];
    }
}
SortingDomainModule.ɵfac = function SortingDomainModule_Factory(t) { return new (t || SortingDomainModule)(); };
SortingDomainModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SortingDomainModule });
SortingDomainModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortingDomainModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                providers: [],
                declarations: [],
                exports: []
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SortingDomainModule, { imports: [CommonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGluZy5kb21haW4tbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvc29ydGluZy9jb3JlL2RvbWFpbi9zb3J0aW5nLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBVzlELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxZQUFZO0lBRXBEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTztZQUNOLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyx3QkFBd0IsRUFBRSxZQUFZLENBQUM7WUFDM0UsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHdCQUF3QixFQUFFLFlBQVksQ0FBQztZQUMzRSxZQUFZLENBQUMsc0JBQXNCLENBQUMsMEJBQTBCLEVBQUUsWUFBWSxDQUFDO1NBQzdFLENBQUM7SUFDSCxDQUFDOztzRkFaVyxtQkFBbUI7cUVBQW5CLG1CQUFtQjswRUFKcEIsRUFBRSxZQUhKO1lBQ1IsWUFBWTtTQUNaO3VGQUtXLG1CQUFtQjtjQVIvQixRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7Z0JBQ2IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1g7O3dGQUNZLG1CQUFtQixjQU45QixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVG9nZ2xlU29ydENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi90b2dnbGUvdG9nZ2xlLXNvcnQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNvcnRpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vc2V0LWNvbmZpZy9zZXQtc29ydGluZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U29ydE9yZGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL29yZGVyL3NldC1zb3J0LW9yZGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3RyZS5rZXknO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU29ydGluZ0RvbWFpbk1vZHVsZSBleHRlbmRzIERvbWFpbk1vZHVsZSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyBjb21tYW5kSGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFRvZ2dsZVNvcnRDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNvcnRpbmdDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldFNvcnRPcmRlckNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpXG5cdFx0XTtcblx0fVxuXG59XG4iXX0=