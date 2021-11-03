import { __decorate } from "tslib";
import { Directive } from '@angular/core';
import { PagingGate } from '../../../../paging/feature/gate/paging.gate';
import { Override } from '../../../../../common/cdk/decorators';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/api/structure.id";
import * as i2 from "../../../../../composition/core/api/composition.id";
import * as i3 from "../../../../paging/core/api/paging.command-invoker";
import * as i4 from "../../../../paging/core/api/paging.event-repository";
import * as i5 from "../../../../paging/feature/mode/paging-display-mode.archive";
export class StructurePagingGate extends PagingGate {
    constructor(structureId, compositionId, structurePagingCommandDispatcher, pagingEventRepository, pagingDisplayModeArchive) {
        super(structureId, compositionId, structurePagingCommandDispatcher, pagingEventRepository);
        this.pagingDisplayModeArchive = pagingDisplayModeArchive;
    }
    ngOnChanges(changes) {
        if (this.isDefined('paging', changes)) {
            let pagingConfig;
            if (typeof this.paging === 'boolean') {
                pagingConfig = {
                    enabled: this.paging
                };
            }
            else {
                pagingConfig = this.paging;
                if (this.paging.displayMode !== undefined) {
                    this.pagingDisplayModeArchive.next(this.paging.displayMode);
                }
            }
            this.pagingCommandInvoker.setPaging(pagingConfig, this.structureId);
        }
    }
}
StructurePagingGate.ɵfac = function StructurePagingGate_Factory(t) { return new (t || StructurePagingGate)(i0.ɵɵdirectiveInject(i1.StructureId), i0.ɵɵdirectiveInject(i2.CompositionId), i0.ɵɵdirectiveInject(i3.PagingCommandInvoker), i0.ɵɵdirectiveInject(i4.PagingEventRepository), i0.ɵɵdirectiveInject(i5.PagingDisplayModeArchive)); };
StructurePagingGate.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StructurePagingGate, selectors: [["gui-structure", "paging", ""]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature] });
__decorate([
    Override
], StructurePagingGate.prototype, "ngOnChanges", null);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StructurePagingGate, [{
        type: Directive,
        args: [{
                selector: 'gui-structure[paging]'
            }]
    }], function () { return [{ type: i1.StructureId }, { type: i2.CompositionId }, { type: i3.PagingCommandInvoker }, { type: i4.PagingEventRepository }, { type: i5.PagingDisplayModeArchive }]; }, { ngOnChanges: [] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXBhZ2luZy5nYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUsxQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFekUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7O0FBU2hFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxVQUFVO0lBRWxELFlBQVksV0FBd0IsRUFDakMsYUFBNEIsRUFDNUIsZ0NBQXNELEVBQ3RELHFCQUE0QyxFQUMzQix3QkFBa0Q7UUFDckUsS0FBSyxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsZ0NBQWdDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUR4RSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBRXRFLENBQUM7SUFHRCxXQUFXLENBQUMsT0FBdUM7UUFFbEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUV0QyxJQUFJLFlBQTBCLENBQUM7WUFFL0IsSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO2dCQUNyQyxZQUFZLEdBQUc7b0JBQ2QsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO2lCQUNwQixDQUFDO2FBQ0Y7aUJBQU07Z0JBQ04sWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBRTNCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO29CQUMxQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQzVEO2FBQ0Q7WUFFRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEU7SUFDRixDQUFDOztzRkEvQlcsbUJBQW1CO3NFQUFuQixtQkFBbUI7QUFXL0I7SUFEQyxRQUFRO3NEQXFCUjt1RkEvQlcsbUJBQW1CO2NBSC9CLFNBQVM7ZUFBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2FBQ2pDO3dNQVlBLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBQYWdpbmdFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9mZWF0dXJlL2dhdGUvcGFnaW5nLmdhdGUnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2NvcmUvYXBpL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2ZlYXR1cmUvbW9kZS9wYWdpbmctZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTmdDaGFuZ2VzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvbmctY2hhbmdlcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uaWQnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmVbcGFnaW5nXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUGFnaW5nR2F0ZSBleHRlbmRzIFBhZ2luZ0dhdGUge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Y29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0c3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXI6IFBhZ2luZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRwYWdpbmdFdmVudFJlcG9zaXRvcnk6IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmU6IFBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCBjb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciwgcGFnaW5nRXZlbnRSZXBvc2l0b3J5KTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlUGFnaW5nR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgncGFnaW5nJywgY2hhbmdlcykpIHtcblxuXHRcdFx0bGV0IHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucGFnaW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucGFnaW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB0aGlzLnBhZ2luZztcblxuXHRcdFx0XHRpZiAodGhpcy5wYWdpbmcuZGlzcGxheU1vZGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMucGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlLm5leHQodGhpcy5wYWdpbmcuZGlzcGxheU1vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucGFnaW5nQ29tbWFuZEludm9rZXIuc2V0UGFnaW5nKHBhZ2luZ0NvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==