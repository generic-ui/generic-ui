/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { FieldCommandDispatcher } from '../../../../field/domain-api/field.command-dispatcher';
var ListViewFieldGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewFieldGate, _super);
    function ListViewFieldGate(structureId, fieldCommandDispatcher) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.fieldCommandDispatcher = fieldCommandDispatcher;
        return _this;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ListViewFieldGate.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        if (this.isDefined('fields', simpleChanges)) {
            this.fieldCommandDispatcher.initFields(this.fields, this.structureId);
        }
    };
    ListViewFieldGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-list-view[fields]'
                },] }
    ];
    /** @nocollapse */
    ListViewFieldGate.ctorParameters = function () { return [
        { type: StructureId },
        { type: FieldCommandDispatcher }
    ]; };
    ListViewFieldGate.propDecorators = {
        fields: [{ type: Input }]
    };
    return ListViewFieldGate;
}(Gate));
export { ListViewFieldGate };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWZpZWxkLmdhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2ZlYXR1cmUvZ2F0ZXdheS9maWVsZC9saXN0LXZpZXctZmllbGQuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWdCLEtBQUssRUFBNEMsTUFBTSxlQUFlLENBQUM7QUFLekcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQy9FLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUcvRjtJQUd1Qyw2Q0FBSTtJQUsxQywyQkFBNkIsV0FBd0IsRUFDakMsc0JBQThDO1FBRGxFLFlBRUMsaUJBQU8sU0FDUDtRQUg0QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyw0QkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCOztJQUVsRSxDQUFDOzs7OztJQUVELHVDQUFXOzs7O0lBQVgsVUFBWSxhQUE0QjtRQUV2QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxFQUFFO1lBRTVDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDdEU7SUFDRixDQUFDOztnQkFuQkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSx1QkFBdUI7aUJBQ2pDOzs7O2dCQVJRLFdBQVc7Z0JBR1gsc0JBQXNCOzs7eUJBUTdCLEtBQUs7O0lBZ0JQLHdCQUFDO0NBQUEsQUFyQkQsQ0FHdUMsSUFBSSxHQWtCMUM7U0FsQlksaUJBQWlCOzs7SUFFN0IsbUNBQzJCOzs7OztJQUVmLHdDQUF5Qzs7Ozs7SUFDbEQsbURBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2dhdGUnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9kb21haW4tYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluLWFwaS9maWVsZC5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbZmllbGRzXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdGaWVsZEdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRmaWVsZHM6IEFycmF5PEZpZWxkQ29uZmlnPjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZENvbW1hbmREaXNwYXRjaGVyOiBGaWVsZENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnZmllbGRzJywgc2ltcGxlQ2hhbmdlcykpIHtcblxuXHRcdFx0dGhpcy5maWVsZENvbW1hbmREaXNwYXRjaGVyLmluaXRGaWVsZHModGhpcy5maWVsZHMsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=