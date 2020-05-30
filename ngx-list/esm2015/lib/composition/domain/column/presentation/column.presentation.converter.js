/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DataType } from '../../../../../structure/field/domain/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLnByZXNlbnRhdGlvbi5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3ByZXNlbnRhdGlvbi9jb2x1bW4ucHJlc2VudGF0aW9uLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFHckYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFJcEYsTUFBTSxPQUFPLDJCQUEyQjs7Ozs7SUFFdkMsT0FBTyxDQUFDLFFBQWtCO1FBRXpCLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDakMsT0FBTyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM5QzthQUFNLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDekMsT0FBTyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMvQzthQUFNLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7WUFDdEMsT0FBTyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM1QzthQUFNLElBQUksUUFBUSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDeEMsT0FBTyx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM5QzthQUFNO1lBQ04sT0FBTyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMvQztJQUNGLENBQUM7OztZQWhCRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5cbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL2RhdGEtdHlwZS9udW1iZXItY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBCb29sZWFuQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9kYXRhLXR5cGUvYm9vbGVhbi1jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IERhdGVDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL2RhdGEtdHlwZS9kYXRlLWNvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi9kYXRhLXR5cGUvc3RyaW5nLWNvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgVW5rbm93bkNvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4vZGF0YS10eXBlL3Vua25vd24tY29sdW1uLnByZXNlbnRhdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlciB7XG5cblx0Y29udmVydChkYXRhVHlwZTogRGF0YVR5cGUpOiBDb2x1bW5QcmVzZW50YXRpb24ge1xuXG5cdFx0aWYgKGRhdGFUeXBlID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiBOdW1iZXJDb2x1bW5QcmVzZW50YXRpb24uZ2V0SW5zdGFuY2UoKTtcblx0XHR9IGVsc2UgaWYgKGRhdGFUeXBlID09PSBEYXRhVHlwZS5CT09MRUFOKSB7XG5cdFx0XHRyZXR1cm4gQm9vbGVhbkNvbHVtblByZXNlbnRhdGlvbi5nZXRJbnN0YW5jZSgpO1xuXHRcdH0gZWxzZSBpZiAoZGF0YVR5cGUgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiBEYXRlQ29sdW1uUHJlc2VudGF0aW9uLmdldEluc3RhbmNlKCk7XG5cdFx0fSBlbHNlIGlmIChkYXRhVHlwZSA9PT0gRGF0YVR5cGUuU1RSSU5HKSB7XG5cdFx0XHRyZXR1cm4gU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uLmdldEluc3RhbmNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBVbmtub3duQ29sdW1uUHJlc2VudGF0aW9uLmdldEluc3RhbmNlKCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==