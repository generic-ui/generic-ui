/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DataType } from '../../../../../structure/field/core/domain/field/data/data-type';
import { NumberColumnPresentation } from './data-type/number-column.presentation';
import { BooleanColumnPresentation } from './data-type/boolean-column.presentation';
import { DateColumnPresentation } from './data-type/date-column.presentation';
import { StringColumnPresentation } from './data-type/string-column.presentation';
import { UnknownColumnPresentation } from './data-type/unknown-column.presentation';
var ColumnPresentationConverter = /** @class */ (function () {
    function ColumnPresentationConverter() {
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    ColumnPresentationConverter.prototype.convert = /**
     * @param {?} dataType
     * @return {?}
     */
    function (dataType) {
        if (dataType === DataType.NUMBER) {
            return NumberColumnPresentation.getInstance();
        }
        else if (dataType === DataType.BOOLEAN) {
            return BooleanColumnPresentation.getInstance();
        }
        else if (dataType === DataType.DATE) {
            return DateColumnPresentation.getInstance();
        }
        else if (dataType === DataType.STRING) {
            return StringColumnPresentation.getInstance();
        }
        else {
            return UnknownColumnPresentation.getInstance();
        }
    };
    ColumnPresentationConverter.decorators = [
        { type: Injectable }
    ];
    return ColumnPresentationConverter;
}());
export { ColumnPresentationConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLnByZXNlbnRhdGlvbi5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBR3BGO0lBQUE7SUFrQkEsQ0FBQzs7Ozs7SUFmQSw2Q0FBTzs7OztJQUFQLFVBQVEsUUFBa0I7UUFFekIsSUFBSSxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNqQyxPQUFPLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlDO2FBQU0sSUFBSSxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUN6QyxPQUFPLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQy9DO2FBQU0sSUFBSSxRQUFRLEtBQUssUUFBUSxDQUFDLElBQUksRUFBRTtZQUN0QyxPQUFPLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzVDO2FBQU0sSUFBSSxRQUFRLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUN4QyxPQUFPLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlDO2FBQU07WUFDTixPQUFPLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQy9DO0lBQ0YsQ0FBQzs7Z0JBaEJELFVBQVU7O0lBa0JYLGtDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5cbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL2RhdGEtdHlwZS9udW1iZXItY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9kYXRhLXR5cGUvYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IERhdGVDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL2RhdGEtdHlwZS9kYXRlLWNvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9kYXRhLXR5cGUvc3RyaW5nLWNvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4vZGF0YS10eXBlL3Vua25vd24tY29sdW1uLnByZXNlbnRhdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlciB7XG5cblx0Y29udmVydChkYXRhVHlwZTogRGF0YVR5cGUpOiBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdFx0aWYgKGRhdGFUeXBlID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24uZ2V0SW5zdGFuY2UoKTtcblx0XHR9IGVsc2UgaWYgKGRhdGFUeXBlID09PSBEYXRhVHlwZS5CT09MRUFOKSB7XG5cdFx0XHRyZXR1cm4gQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbi5nZXRJbnN0YW5jZSgpO1xuXHRcdH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiBEYXRlQ29sdW1uUHJlc2VudGF0aW9uLmdldEluc3RhbmNlKCk7XG5cdFx0fSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uLmdldEluc3RhbmNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uLmdldEluc3RhbmNlKCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==