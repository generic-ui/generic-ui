import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { structureKey } from '../../../core/api/structre.key';
import { StructureSetSummariesEnabledCommandHandler } from './set/structure.set-summaries-enabled.command-handler';
import { StructureSummariesEnabledSetEventHandler } from '../domain-read/enabled/structure.summaries-enabled-set.event-handler';
import { provideSummariesCalculator } from './summaries.providers';
import { BooleanSummariesCalculator } from './calculation/boolean/boolean-summaries.calculator';
import { DateSummariesCalculator } from './calculation/date/date-summaries.calculator';
import { NumberSummariesCalculator } from './calculation/number/number-summaries.calculator';
import { StringSummariesCalculator } from './calculation/string/string-summaries.calculator';
import { UnknownSummariesCalculator } from './calculation/unknown/unknown-summaries.calculator';
import { SummariesManagerFactory } from './summaries.manager.factory';
import { SummariesDispatcher } from './summaries.dispatcher';
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
SummariesDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    provideSummariesCalculator(BooleanSummariesCalculator),
                    provideSummariesCalculator(DateSummariesCalculator),
                    provideSummariesCalculator(NumberSummariesCalculator),
                    provideSummariesCalculator(StringSummariesCalculator),
                    provideSummariesCalculator(UnknownSummariesCalculator),
                    SummariesManagerFactory,
                    SummariesDispatcher
                ],
                declarations: [],
                exports: []
            },] }
];
SummariesDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLDBDQUEwQyxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbkgsT0FBTyxFQUFFLHdDQUF3QyxFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDaEksT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDaEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDaEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFvQjdELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxZQUFZO0lBRXREO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQWU7UUFDckIsT0FBTyxZQUFZLENBQUMsc0JBQXNCLENBQUMsMENBQTBDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVELE1BQU0sQ0FBQyxtQkFBbUI7UUFDekIsT0FBTyxZQUFZLENBQUMsMEJBQTBCLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUMxRixDQUFDOzs7WUE3QkQsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFNBQVMsRUFBRTtvQkFDViwwQkFBMEIsQ0FBQywwQkFBMEIsQ0FBQztvQkFDdEQsMEJBQTBCLENBQUMsdUJBQXVCLENBQUM7b0JBQ25ELDBCQUEwQixDQUFDLHlCQUF5QixDQUFDO29CQUNyRCwwQkFBMEIsQ0FBQyx5QkFBeUIsQ0FBQztvQkFDckQsMEJBQTBCLENBQUMsMEJBQTBCLENBQUM7b0JBRXRELHVCQUF1QjtvQkFDdkIsbUJBQW1CO2lCQUNuQjtnQkFDRCxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7YUFDWCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEb21haW5Nb2R1bGUsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IHN0cnVjdHVyZUtleSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHJlLmtleSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRTdW1tYXJpZXNFbmFibGVkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3NldC9zdHJ1Y3R1cmUuc2V0LXN1bW1hcmllcy1lbmFibGVkLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZW5hYmxlZC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWVuYWJsZWQtc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgcHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL3N1bW1hcmllcy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgQm9vbGVhblN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL2NhbGN1bGF0aW9uL2Jvb2xlYW4vYm9vbGVhbi1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBEYXRlU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vZGF0ZS9kYXRlLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IE51bWJlclN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuL2NhbGN1bGF0aW9uL251bWJlci9udW1iZXItc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgU3RyaW5nU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vc3RyaW5nL3N0cmluZy1zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBVbmtub3duU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vdW5rbm93bi91bmtub3duLXN1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFN1bW1hcmllc01hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9zdW1tYXJpZXMubWFuYWdlci5mYWN0b3J5JztcbmltcG9ydCB7IFN1bW1hcmllc0Rpc3BhdGNoZXIgfSBmcm9tICcuL3N1bW1hcmllcy5kaXNwYXRjaGVyJztcblxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdHByb3ZpZGVTdW1tYXJpZXNDYWxjdWxhdG9yKEJvb2xlYW5TdW1tYXJpZXNDYWxjdWxhdG9yKSxcblx0XHRwcm92aWRlU3VtbWFyaWVzQ2FsY3VsYXRvcihEYXRlU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cdFx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoTnVtYmVyU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cdFx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoU3RyaW5nU3VtbWFyaWVzQ2FsY3VsYXRvciksXG5cdFx0cHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoVW5rbm93blN1bW1hcmllc0NhbGN1bGF0b3IpLFxuXG5cdFx0U3VtbWFyaWVzTWFuYWdlckZhY3RvcnksXG5cdFx0U3VtbWFyaWVzRGlzcGF0Y2hlclxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNEb21haW5Nb2R1bGUgZXh0ZW5kcyBEb21haW5Nb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVTZXRTdW1tYXJpZXNFbmFibGVkQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSk7XG5cdH1cblxuXHRzdGF0aWMgZG9tYWluRXZlbnRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudEhhbmRsZXIpO1xuXHR9XG5cbn1cbiJdfQ==