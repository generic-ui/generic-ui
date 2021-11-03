import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { structureKey } from '../../../core/api/structre.key';
import { StructureSetSummariesEnabledCommandHandler } from './set/structure.set-summaries-enabled.command-handler';
import { StructureSummariesEnabledSetEventHandler } from './enabled/structure.summaries-enabled-set.event-handler';
import { provideSummariesCalculator } from './summaries.providers';
import { BooleanSummariesCalculator } from './calculation/boolean/boolean-summaries.calculator';
import { DateSummariesCalculator } from './calculation/date/date-summaries.calculator';
import { NumberSummariesCalculator } from './calculation/number/number-summaries.calculator';
import { StringSummariesCalculator } from './calculation/string/string-summaries.calculator';
import { UnknownSummariesCalculator } from './calculation/unknown/unknown-summaries.calculator';
import { SummariesManagerFactory } from './summaries.manager.factory';
import * as i0 from "@angular/core";
export class SummariesDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return HermesModule.registerCommandHandler(StructureSetSummariesEnabledCommandHandler, structureKey);
    }
    static domainEventHandlers() {
        return HermesModule.registerDomainEventHandler(StructureSummariesEnabledSetEventHandler);
    }
}
SummariesDomainModule.ɵfac = function SummariesDomainModule_Factory(t) { return new (t || SummariesDomainModule)(); };
SummariesDomainModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SummariesDomainModule });
SummariesDomainModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        provideSummariesCalculator(BooleanSummariesCalculator),
        provideSummariesCalculator(DateSummariesCalculator),
        provideSummariesCalculator(NumberSummariesCalculator),
        provideSummariesCalculator(StringSummariesCalculator),
        provideSummariesCalculator(UnknownSummariesCalculator),
        SummariesManagerFactory
    ], imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummariesDomainModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    provideSummariesCalculator(BooleanSummariesCalculator),
                    provideSummariesCalculator(DateSummariesCalculator),
                    provideSummariesCalculator(NumberSummariesCalculator),
                    provideSummariesCalculator(StringSummariesCalculator),
                    provideSummariesCalculator(UnknownSummariesCalculator),
                    SummariesManagerFactory
                ],
                declarations: [],
                exports: []
            }]
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SummariesDomainModule, { imports: [CommonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkgsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbkgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDaEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDaEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBbUJ0RSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsWUFBWTtJQUV0RDtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlO1FBQ3JCLE9BQU8sWUFBWSxDQUFDLHNCQUFzQixDQUFDLDBDQUEwQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRCxNQUFNLENBQUMsbUJBQW1CO1FBQ3pCLE9BQU8sWUFBWSxDQUFDLDBCQUEwQixDQUFDLHdDQUF3QyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7MEZBWlcscUJBQXFCO3VFQUFyQixxQkFBcUI7NEVBWnRCO1FBQ1YsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7UUFDdEQsMEJBQTBCLENBQUMsdUJBQXVCLENBQUM7UUFDbkQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7UUFDckQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7UUFDckQsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7UUFFdEQsdUJBQXVCO0tBQ3ZCLFlBWFE7WUFDUixZQUFZO1NBQ1o7dUZBYVcscUJBQXFCO2NBaEJqQyxRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLDBCQUEwQixDQUFDLDBCQUEwQixDQUFDO29CQUN0RCwwQkFBMEIsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDbkQsMEJBQTBCLENBQUMseUJBQXlCLENBQUM7b0JBQ3JELDBCQUEwQixDQUFDLHlCQUF5QixDQUFDO29CQUNyRCwwQkFBMEIsQ0FBQywwQkFBMEIsQ0FBQztvQkFFdEQsdUJBQXVCO2lCQUN2QjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWDs7d0ZBQ1kscUJBQXFCLGNBZGhDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRG9tYWluTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3RyZS5rZXknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9zZXQvc3RydWN0dXJlLnNldC1zdW1tYXJpZXMtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzRW5hYmxlZFNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4vZW5hYmxlZC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWVuYWJsZWQtc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgcHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL3N1bW1hcmllcy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgQm9vbGVhblN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL2NhbGN1bGF0aW9uL2Jvb2xlYW4vYm9vbGVhbi1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBEYXRlU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vZGF0ZS9kYXRlLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IE51bWJlclN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgU3RyaW5nU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vc3RyaW5nL3N0cmluZy1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBVbmtub3duU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vdW5rbm93bi91bmtub3duLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFN1bW1hcmllc01hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9zdW1tYXJpZXMubWFuYWdlci5mYWN0b3J5JztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKEJvb2xlYW5TdW1tYXJpZXNDYWxjdWxhdG9yKSxcblx0XHRwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihEYXRlU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cdFx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoTnVtYmVyU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cdFx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoU3RyaW5nU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cdFx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoVW5rbm93blN1bW1hcmllc0NhbGN1bGF0b3IpLFxuXG5cdFx0U3VtbWFyaWVzTWFuYWdlckZhY3Rvcnlcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpO1xuXHR9XG5cblx0c3RhdGljIGRvbWFpbkV2ZW50SGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIEhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnRIYW5kbGVyKTtcblx0fVxuXG59XG4iXX0=