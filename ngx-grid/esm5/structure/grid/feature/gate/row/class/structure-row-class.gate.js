/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { SchemaRowClassArchive } from '../../../../../../schema/core/api/styling/schema.row-class.archive';
var StructureRowClassGate = /** @class */ (function (_super) {
    tslib_1.__extends(StructureRowClassGate, _super);
    function StructureRowClassGate(schemaRowClassArchive) {
        var _this = _super.call(this) || this;
        _this.schemaRowClassArchive = schemaRowClassArchive;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureRowClassGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('rowClass', changes)) {
            this.schemaRowClassArchive.next((/** @type {?} */ (this.rowClass)));
        }
    };
    StructureRowClassGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-structure[rowClass]'
                },] }
    ];
    /** @nocollapse */
    StructureRowClassGate.ctorParameters = function () { return [
        { type: SchemaRowClassArchive }
    ]; };
    StructureRowClassGate.propDecorators = {
        rowClass: [{ type: Input }]
    };
    return StructureRowClassGate;
}(Gate));
export { StructureRowClassGate };
if (false) {
    /** @type {?} */
    StructureRowClassGate.prototype.rowClass;
    /**
     * @type {?}
     * @private
     */
    StructureRowClassGate.prototype.schemaRowClassArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLXJvdy1jbGFzcy5nYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL2dhdGUvcm93L2NsYXNzL3N0cnVjdHVyZS1yb3ctY2xhc3MuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUduRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUczRztJQUcyQyxpREFBSTtJQUs5QywrQkFBNkIscUJBQTRDO1FBQXpFLFlBQ0MsaUJBQU8sU0FDUDtRQUY0QiwyQkFBcUIsR0FBckIscUJBQXFCLENBQXVCOztJQUV6RSxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxPQUF5QztRQUVwRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsbUJBQUEsSUFBSSxDQUFDLFFBQVEsRUFBa0IsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0YsQ0FBQzs7Z0JBakJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUJBQXlCO2lCQUNuQzs7OztnQkFMUSxxQkFBcUI7OzsyQkFRNUIsS0FBSzs7SUFjUCw0QkFBQztDQUFBLEFBbkJELENBRzJDLElBQUksR0FnQjlDO1NBaEJZLHFCQUFxQjs7O0lBRWpDLHlDQUNzQjs7Ozs7SUFFVixzREFBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IEd1aVJvd0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZ3VpL2dyaWQvY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctY2xhc3MnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q2xhc3NBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1jbGFzcy5hcmNoaXZlJztcbmltcG9ydCB7IE5nQ2hhbmdlcyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvY29tcG9uZW50L25nLWNoYW5nZXMnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktc3RydWN0dXJlW3Jvd0NsYXNzXSdcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUm93Q2xhc3NHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0cm93Q2xhc3M6IEd1aVJvd0NsYXNzO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUm93Q2xhc3NBcmNoaXZlOiBTY2hlbWFSb3dDbGFzc0FyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPFN0cnVjdHVyZVJvd0NsYXNzR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgncm93Q2xhc3MnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5zY2hlbWFSb3dDbGFzc0FyY2hpdmUubmV4dCh0aGlzLnJvd0NsYXNzIGFzIFNjaGVtYVJvd0NsYXNzKTtcblx0XHR9XG5cdH1cblxufVxuIl19