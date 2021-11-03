import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { SetColumnsCommandHandler } from './column/set-columns/set-columns.command-handler';
import { compositionKey } from './composition.key';
import { SetCompositionWidthCommandHandler } from './width/set-width/set-composition-width.command-handler';
import { SetCompositionResizeWidthCommandHandler } from './width/resize-width/set-composition-resize-width.command-handler';
import { SetCompositionContainerWidthCommandHandler } from './width/set-container-width/set-composition-container-width.command-handler';
import { CompositionSetColumnEnabledCommandHandler } from './column/set-enabled/composition.set-column-enabled.command-handler';
import { CompositionChangeSortStatusCommandHandler } from './column/sort/composition-change-sort-status.command-handler';
import { CompositionMoveLeftColumnCommandHandler } from './column/move/left/composition.move-left-column.command-handler';
import { CompositionMoveRightColumnCommandHandler } from './column/move/right/composition.move-right-column.command-handler';
import { CompositionChangeSortStatusEventHandler } from './column/sort/composition-change-sort-status.event-handler';
import { inMemoryCompositionCommandProviders } from '../infrastructure/in-memory/in-memory.composition.providers';
import { CompositionDispatcher } from './composition.dispatcher';
import { ColumnEntityFactory } from './column/column-entity.factory';
import { ColumnPresentationConverter } from './column/presentation/column.presentation.converter';
import { CompositionEventConverter } from './composition.event-converter';
import { ColumnFieldFactory } from './column/field/colum-field.factory';
import { CompositionGroupFactory } from './group/composition.group.factory';
import { SetGroupsCommandHandler } from './group/set-groups/set-groups.command-handler';
import { ColumnHighlightArchive } from './highlight/column-highlight.archive';
import * as i0 from "@angular/core";
export class CompositionDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(SetColumnsCommandHandler, compositionKey),
            HermesModule.registerCommandHandler(SetCompositionWidthCommandHandler, compositionKey),
            HermesModule.registerCommandHandler(SetCompositionResizeWidthCommandHandler, compositionKey),
            HermesModule.registerCommandHandler(SetCompositionContainerWidthCommandHandler, compositionKey),
            HermesModule.registerCommandHandler(CompositionSetColumnEnabledCommandHandler, compositionKey),
            HermesModule.registerCommandHandler(CompositionChangeSortStatusCommandHandler, compositionKey),
            HermesModule.registerCommandHandler(CompositionMoveLeftColumnCommandHandler, compositionKey),
            HermesModule.registerCommandHandler(CompositionMoveRightColumnCommandHandler, compositionKey),
            HermesModule.registerCommandHandler(SetGroupsCommandHandler, compositionKey)
        ];
    }
    static domainEventHandlers() {
        return [
            HermesModule.registerMultiDomainEventHandler(CompositionChangeSortStatusEventHandler)
        ];
    }
}
CompositionDomainModule.ɵfac = function CompositionDomainModule_Factory(t) { return new (t || CompositionDomainModule)(); };
CompositionDomainModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CompositionDomainModule });
CompositionDomainModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        inMemoryCompositionCommandProviders,
        CompositionDispatcher,
        ColumnEntityFactory,
        ColumnPresentationConverter,
        CompositionEventConverter,
        ColumnFieldFactory,
        CompositionGroupFactory,
        ColumnHighlightArchive
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompositionDomainModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    inMemoryCompositionCommandProviders,
                    CompositionDispatcher,
                    ColumnEntityFactory,
                    ColumnPresentationConverter,
                    CompositionEventConverter,
                    ColumnFieldFactory,
                    CompositionGroupFactory,
                    ColumnHighlightArchive
                ],
                declarations: [],
                exports: []
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CompositionDomainModule, { imports: [CommonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZG9tYWluLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tcG9zaXRpb24vY29yZS9kb21haW4vY29tcG9zaXRpb24uZG9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUM1RyxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUN6SSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUNoSSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN6SCxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMxSCxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM3SCxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUNySCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsSCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN4RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFtQjlFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxZQUFZO0lBRXhEO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTztZQUNOLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyx3QkFBd0IsRUFBRSxjQUFjLENBQUM7WUFDN0UsWUFBWSxDQUFDLHNCQUFzQixDQUFDLGlDQUFpQyxFQUFFLGNBQWMsQ0FBQztZQUN0RixZQUFZLENBQUMsc0JBQXNCLENBQUMsdUNBQXVDLEVBQUUsY0FBYyxDQUFDO1lBQzVGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywwQ0FBMEMsRUFBRSxjQUFjLENBQUM7WUFDL0YsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHlDQUF5QyxFQUFFLGNBQWMsQ0FBQztZQUM5RixZQUFZLENBQUMsc0JBQXNCLENBQUMseUNBQXlDLEVBQUUsY0FBYyxDQUFDO1lBQzlGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyx1Q0FBdUMsRUFBRSxjQUFjLENBQUM7WUFDNUYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHdDQUF3QyxFQUFFLGNBQWMsQ0FBQztZQUM3RixZQUFZLENBQUMsc0JBQXNCLENBQUMsdUJBQXVCLEVBQUUsY0FBYyxDQUFDO1NBQzVFLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQjtRQUN6QixPQUFPO1lBQ04sWUFBWSxDQUFDLCtCQUErQixDQUFDLHVDQUF1QyxDQUFDO1NBQ3JGLENBQUM7SUFDSCxDQUFDOzs4RkF4QlcsdUJBQXVCO3lFQUF2Qix1QkFBdUI7OEVBYnhCO1FBQ1YsbUNBQW1DO1FBQ25DLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtLQUN0QixZQVpRO1lBQ1IsWUFBWTtTQUNaO3VGQWNXLHVCQUF1QjtjQWpCbkMsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFNBQVMsRUFBRTtvQkFDVixtQ0FBbUM7b0JBQ25DLHFCQUFxQjtvQkFDckIsbUJBQW1CO29CQUNuQiwyQkFBMkI7b0JBQzNCLHlCQUF5QjtvQkFDekIsa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtpQkFDdEI7Z0JBQ0QsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2FBQ1g7O3dGQUNZLHVCQUF1QixjQWZsQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5Nb2R1bGUsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldENvbHVtbnNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL3NldC1jb2x1bW5zLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBjb21wb3NpdGlvbktleSB9IGZyb20gJy4vY29tcG9zaXRpb24ua2V5JztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vd2lkdGgvc2V0LXdpZHRoL3NldC1jb21wb3NpdGlvbi13aWR0aC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi93aWR0aC9yZXNpemUtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25Db250YWluZXJXaWR0aENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL3NldC1jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGguY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uU2V0Q29sdW1uRW5hYmxlZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NvbHVtbi9tb3ZlL2xlZnQvY29tcG9zaXRpb24ubW92ZS1sZWZ0LWNvbHVtbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24ubW92ZS1yaWdodC1jb2x1bW4uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50SGFuZGxlciB9IGZyb20gJy4vY29sdW1uL3NvcnQvY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgaW5NZW1vcnlDb21wb3NpdGlvbkNvbW1hbmRQcm92aWRlcnMgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuL2NvbXBvc2l0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5RmFjdG9yeSB9IGZyb20gJy4vY29sdW1uL2NvbHVtbi1lbnRpdHkuZmFjdG9yeSc7XG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuL2NvbHVtbi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbi5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudENvbnZlcnRlciB9IGZyb20gJy4vY29tcG9zaXRpb24uZXZlbnQtY29udmVydGVyJztcbmltcG9ydCB7IENvbHVtbkZpZWxkRmFjdG9yeSB9IGZyb20gJy4vY29sdW1uL2ZpZWxkL2NvbHVtLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Hcm91cEZhY3RvcnkgfSBmcm9tICcuL2dyb3VwL2NvbXBvc2l0aW9uLmdyb3VwLmZhY3RvcnknO1xuaW1wb3J0IHsgU2V0R3JvdXBzQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2dyb3VwL3NldC1ncm91cHMvc2V0LWdyb3Vwcy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQ29sdW1uSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4vaGlnaGxpZ2h0L2NvbHVtbi1oaWdobGlnaHQuYXJjaGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0aW5NZW1vcnlDb21wb3NpdGlvbkNvbW1hbmRQcm92aWRlcnMsXG5cdFx0Q29tcG9zaXRpb25EaXNwYXRjaGVyLFxuXHRcdENvbHVtbkVudGl0eUZhY3RvcnksXG5cdFx0Q29sdW1uUHJlc2VudGF0aW9uQ29udmVydGVyLFxuXHRcdENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIsXG5cdFx0Q29sdW1uRmllbGRGYWN0b3J5LFxuXHRcdENvbXBvc2l0aW9uR3JvdXBGYWN0b3J5LFxuXHRcdENvbHVtbkhpZ2hsaWdodEFyY2hpdmVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25Eb21haW5Nb2R1bGUgZXh0ZW5kcyBEb21haW5Nb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldENvbHVtbnNDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKENvbXBvc2l0aW9uTW92ZVJpZ2h0Q29sdW1uQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldEdyb3Vwc0NvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSlcblx0XHRdO1xuXHR9XG5cblx0c3RhdGljIGRvbWFpbkV2ZW50SGFuZGxlcnMoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyTXVsdGlEb21haW5FdmVudEhhbmRsZXIoQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRIYW5kbGVyKVxuXHRcdF07XG5cdH1cblxufVxuIl19