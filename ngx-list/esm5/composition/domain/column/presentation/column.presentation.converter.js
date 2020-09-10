/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DataType } from '../../../../structure/field/domain/core/field/data/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLnByZXNlbnRhdGlvbi5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vcHJlc2VudGF0aW9uL2NvbHVtbi5wcmVzZW50YXRpb24uY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUd4RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUdwRjtJQUFBO0lBa0JBLENBQUM7Ozs7O0lBZkEsNkNBQU87Ozs7SUFBUCxVQUFRLFFBQWtCO1FBRXpCLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDakMsT0FBTyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM5QzthQUFNLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDekMsT0FBTyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMvQzthQUFNLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDdEMsT0FBTyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QzthQUFNLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDeEMsT0FBTyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM5QzthQUFNO1lBQ04sT0FBTyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMvQztJQUNGLENBQUM7O2dCQWhCRCxVQUFVOztJQWtCWCxrQ0FBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuXG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9kYXRhLXR5cGUvbnVtYmVyLWNvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4vZGF0YS10eXBlL2Jvb2xlYW4tY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBEYXRlQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9kYXRhLXR5cGUvZGF0ZS1jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4vZGF0YS10eXBlL3N0cmluZy1jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IFVua25vd25Db2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL2RhdGEtdHlwZS91bmtub3duLWNvbHVtbi5wcmVzZW50YXRpb24nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoZGF0YVR5cGU6IERhdGFUeXBlKTogQ29sdW1uUHJlc2VudGF0aW9uIHtcblxuXHRcdGlmIChkYXRhVHlwZSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uLmdldEluc3RhbmNlKCk7XG5cdFx0fSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuIEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24uZ2V0SW5zdGFuY2UoKTtcblx0XHR9IGVsc2UgaWYgKGRhdGFUeXBlID09PSBEYXRhVHlwZS5EQVRFKSB7XG5cdFx0XHRyZXR1cm4gRGF0ZUNvbHVtblByZXNlbnRhdGlvbi5nZXRJbnN0YW5jZSgpO1xuXHRcdH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0cmV0dXJuIFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbi5nZXRJbnN0YW5jZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbi5nZXRJbnN0YW5jZSgpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=