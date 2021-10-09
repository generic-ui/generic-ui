/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { StructureId } from '../../../core/api/structure.id';
export class StructureQuickFiltersGate extends Gate {
    /**
     * @param {?} structureId
     * @param {?} structureCommandInvoker
     */
    constructor(structureId, structureCommandInvoker) {
        super();
        this.structureId = structureId;
        this.structureCommandInvoker = structureCommandInvoker;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('quickFilters', changes)) {
            /** @type {?} */
            let quickFilters;
            if (typeof this.quickFilters === 'boolean') {
                quickFilters = {
                    enabled: this.quickFilters
                };
            }
            else {
                quickFilters = this.quickFilters;
            }
            this.structureCommandInvoker.setQuickFiltersConfig(quickFilters, this.structureId);
        }
    }
}
StructureQuickFiltersGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-structure[quickFilters]'
            },] }
];
/** @nocollapse */
StructureQuickFiltersGate.ctorParameters = () => [
    { type: StructureId },
    { type: StructureCommandInvoker }
];
StructureQuickFiltersGate.propDecorators = {
    quickFilters: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    StructureQuickFiltersGate.prototype.quickFilters;
    /**
     * @type {?}
     * @private
     */
    StructureQuickFiltersGate.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureQuickFiltersGate.prototype.structureCommandInvoker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXF1aWNrLWZpbHRlcnMuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9mZWF0dXJlL2dhdGUvc3RydWN0dXJlLXF1aWNrLWZpbHRlcnMuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUs3RCxNQUFNLE9BQU8seUJBQTBCLFNBQVEsSUFBSTs7Ozs7SUFLbEQsWUFBNkIsV0FBd0IsRUFDakMsdUJBQWdEO1FBQ25FLEtBQUssRUFBRSxDQUFDO1FBRm9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFFcEUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBNkM7UUFFeEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsRUFBRTs7Z0JBRXhDLFlBQWdDO1lBRXBDLElBQUksT0FBTyxJQUFJLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtnQkFDM0MsWUFBWSxHQUFHO29CQUNkLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWTtpQkFDMUIsQ0FBQzthQUNGO2lCQUFNO2dCQUNOLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ2pDO1lBRUQsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbkY7SUFFRixDQUFDOzs7WUE5QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSw2QkFBNkI7YUFDdkM7Ozs7WUFKUSxXQUFXO1lBRlgsdUJBQXVCOzs7MkJBUzlCLEtBQUs7Ozs7SUFBTixpREFDMkM7Ozs7O0lBRS9CLGdEQUF5Qzs7Ozs7SUFDbEQsNERBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLXN0cnVjdHVyZVtxdWlja0ZpbHRlcnNdJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cXVpY2tGaWx0ZXJzOiBib29sZWFuIHwgUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8U3RydWN0dXJlUXVpY2tGaWx0ZXJzR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgncXVpY2tGaWx0ZXJzJywgY2hhbmdlcykpIHtcblxuXHRcdFx0bGV0IHF1aWNrRmlsdGVyczogUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucXVpY2tGaWx0ZXJzID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucXVpY2tGaWx0ZXJzXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWlja0ZpbHRlcnMgPSB0aGlzLnF1aWNrRmlsdGVycztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zZXRRdWlja0ZpbHRlcnNDb25maWcocXVpY2tGaWx0ZXJzLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=