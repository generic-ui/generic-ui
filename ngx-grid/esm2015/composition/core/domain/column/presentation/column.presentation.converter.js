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
export class ColumnPresentationConverter {
    /**
     * @param {?} dataType
     * @return {?}
     */
    convert(dataType) {
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
    }
}
ColumnPresentationConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLnByZXNlbnRhdGlvbi5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9wcmVzZW50YXRpb24vY29sdW1uLnByZXNlbnRhdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBSXBGLE1BQU0sT0FBTywyQkFBMkI7Ozs7O0lBRXZDLE9BQU8sQ0FBQyxRQUFrQjtRQUV6QixJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ2pDLE9BQU8sd0JBQXdCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDOUM7YUFBTSxJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3pDLE9BQU8seUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDL0M7YUFBTSxJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ3RDLE9BQU8sc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDNUM7YUFBTSxJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ3hDLE9BQU8sd0JBQXdCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDOUM7YUFBTTtZQUNOLE9BQU8seUJBQXlCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDL0M7SUFDRixDQUFDOzs7WUFoQkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuXG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9kYXRhLXR5cGUvbnVtYmVyLWNvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4vZGF0YS10eXBlL2Jvb2xlYW4tY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBEYXRlQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9kYXRhLXR5cGUvZGF0ZS1jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4vZGF0YS10eXBlL3N0cmluZy1jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IFVua25vd25Db2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL2RhdGEtdHlwZS91bmtub3duLWNvbHVtbi5wcmVzZW50YXRpb24nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoZGF0YVR5cGU6IERhdGFUeXBlKTogQ29sdW1uUHJlc2VudGF0aW9uIHtcblxuXHRcdGlmIChkYXRhVHlwZSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uLmdldEluc3RhbmNlKCk7XG5cdFx0fSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuIEJvb2xlYW5Db2x1bW5QcmVzZW50YXRpb24uZ2V0SW5zdGFuY2UoKTtcblx0XHR9IGVsc2UgaWYgKGRhdGFUeXBlID09PSBEYXRhVHlwZS5EQVRFKSB7XG5cdFx0XHRyZXR1cm4gRGF0ZUNvbHVtblByZXNlbnRhdGlvbi5nZXRJbnN0YW5jZSgpO1xuXHRcdH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0cmV0dXJuIFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbi5nZXRJbnN0YW5jZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbi5nZXRJbnN0YW5jZSgpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=