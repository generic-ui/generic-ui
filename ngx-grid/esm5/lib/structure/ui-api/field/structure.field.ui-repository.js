/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFieldUiArchive } from './structure.field.ui-archive';
var StructureFieldUiRepository = /** @class */ (function () {
    function StructureFieldUiRepository(structureFieldUiArchive) {
        this.structureFieldUiArchive = structureFieldUiArchive;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    StructureFieldUiRepository.prototype.onFields = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        return this.structureFieldUiArchive.when(structureId);
    };
    StructureFieldUiRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureFieldUiRepository.ctorParameters = function () { return [
        { type: StructureFieldUiArchive }
    ]; };
    return StructureFieldUiRepository;
}());
export { StructureFieldUiRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureFieldUiRepository.prototype.structureFieldUiArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkLnVpLXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWktYXBpL2ZpZWxkL3N0cnVjdHVyZS5maWVsZC51aS1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBS3ZFO0lBR0Msb0NBQW9CLHVCQUFnRDtRQUFoRCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO0lBQ3BFLENBQUM7Ozs7O0lBRUQsNkNBQVE7Ozs7SUFBUixVQUFTLFdBQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkFSRCxVQUFVOzs7O2dCQUxGLHVCQUF1Qjs7SUFlaEMsaUNBQUM7Q0FBQSxBQVZELElBVUM7U0FUWSwwQkFBMEI7Ozs7OztJQUUxQiw2REFBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmllbGQudWktYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaU1vZGVsIH0gZnJvbSAnLi9zdHJ1Y3R1cmUuZmllbGQudWktbW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZTogU3RydWN0dXJlRmllbGRVaUFyY2hpdmUpIHtcblx0fVxuXG5cdG9uRmllbGRzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IE9ic2VydmFibGU8QXJyYXk8U3RydWN0dXJlRmllbGRVaU1vZGVsPj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlLndoZW4oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==