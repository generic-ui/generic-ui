/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { StructureId } from '../../../../core/api/structure.id';
import { Gate } from '../../../../../common/cdk/component/gate';
import { FieldCommandInvoker } from '../../../../field/core/api/field.command-invoker';
export class ListViewFieldGate extends Gate {
    /**
     * @param {?} structureId
     * @param {?} fieldCommandDispatcher
     */
    constructor(structureId, fieldCommandDispatcher) {
        super();
        this.structureId = structureId;
        this.fieldCommandDispatcher = fieldCommandDispatcher;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('fields', changes)) {
            this.fieldCommandDispatcher.initFields(this.fields, this.structureId);
        }
    }
}
ListViewFieldGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-list-view[fields]'
            },] }
];
/** @nocollapse */
ListViewFieldGate.ctorParameters = () => [
    { type: StructureId },
    { type: FieldCommandInvoker }
];
ListViewFieldGate.propDecorators = {
    fields: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListViewFieldGate.prototype.fields;
    /**
     * @type {?}
     * @private
     */
    ListViewFieldGate.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    ListViewFieldGate.prototype.fieldCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWZpZWxkLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZS9maWVsZC9saXN0LXZpZXctZmllbGQuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQU92RixNQUFNLE9BQU8saUJBQWtCLFNBQVEsSUFBSTs7Ozs7SUFLMUMsWUFBNkIsV0FBd0IsRUFDakMsc0JBQTJDO1FBQzlELEtBQUssRUFBRSxDQUFDO1FBRm9CLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBcUI7SUFFL0QsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBcUM7UUFFaEQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUV0QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3RFO0lBQ0YsQ0FBQzs7O1lBbkJELFNBQVMsU0FBQztnQkFDVixRQUFRLEVBQUUsdUJBQXVCO2FBQ2pDOzs7O1lBVFEsV0FBVztZQUdYLG1CQUFtQjs7O3FCQVMxQixLQUFLOzs7O0lBQU4sbUNBQzJCOzs7OztJQUVmLHdDQUF5Qzs7Ozs7SUFDbEQsbURBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9hcGkvZmllbGQuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbZmllbGRzXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdGaWVsZEdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRmaWVsZHM6IEFycmF5PEZpZWxkQ29uZmlnPjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZENvbW1hbmREaXNwYXRjaGVyOiBGaWVsZENvbW1hbmRJbnZva2VyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IE5nQ2hhbmdlczxMaXN0Vmlld0ZpZWxkR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnZmllbGRzJywgY2hhbmdlcykpIHtcblxuXHRcdFx0dGhpcy5maWVsZENvbW1hbmREaXNwYXRjaGVyLmluaXRGaWVsZHModGhpcy5maWVsZHMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=