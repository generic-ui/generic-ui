/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { FieldCommandDispatcher } from '../../../../field/domain-api/field.command-dispatcher';
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
    { type: FieldCommandDispatcher }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWZpZWxkLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZXdheS9maWVsZC9saXN0LXZpZXctZmllbGQuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsS0FBSyxFQUE0QyxNQUFNLGVBQWUsQ0FBQztBQUt6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDL0UsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXRELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBTS9GLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxJQUFJOzs7OztJQUsxQyxZQUE2QixXQUF3QixFQUNqQyxzQkFBOEM7UUFDakUsS0FBSyxFQUFFLENBQUM7UUFGb0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDakMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUVsRSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxhQUE0QjtRQUV2QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxFQUFFO1lBRTVDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEU7SUFDRixDQUFDOzs7WUFuQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSx1QkFBdUI7YUFDakM7Ozs7WUFSUSxXQUFXO1lBR1gsc0JBQXNCOzs7cUJBUTdCLEtBQUs7Ozs7SUFBTixtQ0FDMkI7Ozs7O0lBRWYsd0NBQXlDOzs7OztJQUNsRCxtREFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2F0ZSc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi1hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZpZWxkQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9kb21haW4tYXBpL2ZpZWxkLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1tmaWVsZHNdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0ZpZWxkR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdGZpZWxkczogQXJyYXk8RmllbGRDb25maWc+O1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkQ29tbWFuZERpc3BhdGNoZXI6IEZpZWxkQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdmaWVsZHMnLCBzaW1wbGVDaGFuZ2VzKSkge1xuXG5cdFx0XHR0aGlzLmZpZWxkQ29tbWFuZERpc3BhdGNoZXIuaW5pdEZpZWxkcyh0aGlzLmZpZWxkcywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==