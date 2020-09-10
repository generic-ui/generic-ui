/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { StructureId } from '../../../../core/domain/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { FieldCommandInvoker } from '../../../../field/domain-api/field.command-invoker';
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
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        if (this.isDefined('fields', simpleChanges)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWZpZWxkLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZXdheS9maWVsZC9saXN0LXZpZXctZmllbGQuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFNekYsTUFBTSxPQUFPLGlCQUFrQixTQUFRLElBQUk7Ozs7O0lBSzFDLFlBQTZCLFdBQXdCLEVBQ2pDLHNCQUEyQztRQUM5RCxLQUFLLEVBQUUsQ0FBQztRQUZvQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXFCO0lBRS9ELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLGFBQTRCO1FBRXZDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLEVBQUU7WUFFNUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN0RTtJQUNGLENBQUM7OztZQW5CRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHVCQUF1QjthQUNqQzs7OztZQVJRLFdBQVc7WUFHWCxtQkFBbUI7OztxQkFRMUIsS0FBSzs7OztJQUFOLG1DQUMyQjs7Ozs7SUFFZix3Q0FBeUM7Ozs7O0lBQ2xELG1EQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2F0ZSc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi1hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZpZWxkQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9kb21haW4tYXBpL2ZpZWxkLmNvbW1hbmQtaW52b2tlcic7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1tmaWVsZHNdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0ZpZWxkR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkczogQXJyYXk8RmllbGRDb25maWc+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkQ29tbWFuZERpc3BhdGNoZXI6IEZpZWxkQ29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdmaWVsZHMnLCBzaW1wbGVDaGFuZ2VzKSkge1xuXG5cdFx0XHR0aGlzLmZpZWxkQ29tbWFuZERpc3BhdGNoZXIuaW5pdEZpZWxkcyh0aGlzLmZpZWxkcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==