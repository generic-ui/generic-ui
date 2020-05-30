/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldIdGenerator } from '../field-id.generator';
import { DataType } from './data-type';
import { UnknownField } from './fields/unknown-field';
import { NumberField } from './fields/number-field';
import { StringField } from './fields/string-field';
import { BooleanField } from './fields/boolean-field';
import { DateField } from './fields/date-field';
import { FieldMatchers } from '../matcher/field.matchers';
var FieldFactory = /** @class */ (function () {
    function FieldFactory(fieldIdGenerator) {
        this.fieldIdGenerator = fieldIdGenerator;
    }
    /**
     * @param {?} fieldConfig
     * @return {?}
     */
    FieldFactory.prototype.create = /**
     * @param {?} fieldConfig
     * @return {?}
     */
    function (fieldConfig) {
        /** @type {?} */
        var fieldMatchers = this.createMatchers(fieldConfig);
        /** @type {?} */
        var columnType = fieldConfig.type;
        if (columnType === undefined) {
            columnType = DataType.STRING;
        }
        if (columnType === DataType.UNKNOWN) {
            return new UnknownField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (fieldConfig.field)), fieldMatchers, fieldConfig.summaries);
        }
        if (columnType === DataType.NUMBER) {
            return new NumberField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (fieldConfig.field)), fieldMatchers, fieldConfig.summaries);
        }
        if (columnType === DataType.STRING) {
            return new StringField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (fieldConfig.field)), fieldMatchers);
        }
        if (columnType === DataType.BOOLEAN) {
            return new BooleanField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (fieldConfig.field)), fieldMatchers);
        }
        if (columnType === DataType.DATE) {
            return new DateField(this.fieldIdGenerator.generateId(), (/** @type {?} */ (fieldConfig.field)), fieldMatchers);
        }
    };
    /**
     * @private
     * @param {?} fieldConfig
     * @return {?}
     */
    FieldFactory.prototype.createMatchers = /**
     * @private
     * @param {?} fieldConfig
     * @return {?}
     */
    function (fieldConfig) {
        /** @type {?} */
        var matcher = fieldConfig.matcher;
        /** @type {?} */
        var sortMatcher;
        if (fieldConfig.sorting) {
            sortMatcher = fieldConfig.sorting.matcher;
        }
        return new FieldMatchers(matcher, sortMatcher);
    };
    FieldFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FieldFactory.ctorParameters = function () { return [
        { type: FieldIdGenerator }
    ]; };
    return FieldFactory;
}());
export { FieldFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldFactory.prototype.fieldIdGenerator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvZmllbGQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSzFEO0lBR0Msc0JBQTZCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQy9ELENBQUM7Ozs7O0lBRUQsNkJBQU07Ozs7SUFBTixVQUFPLFdBQXdCOztZQUV4QixhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7O1lBRWxELFVBQVUsR0FBRyxXQUFXLENBQUMsSUFBSTtRQUVqQyxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDN0IsVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDN0I7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUFFLG1CQUFBLFdBQVcsQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9IO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQkFBQSxXQUFXLENBQUMsS0FBSyxFQUFVLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5SDtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEVBQUUsbUJBQUEsV0FBVyxDQUFDLEtBQUssRUFBVSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3ZHO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNwQyxPQUFPLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsRUFBRSxtQkFBQSxXQUFXLENBQUMsS0FBSyxFQUFVLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDeEc7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxFQUFFLG1CQUFBLFdBQVcsQ0FBQyxLQUFLLEVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNyRztJQUVGLENBQUM7Ozs7OztJQUVPLHFDQUFjOzs7OztJQUF0QixVQUF1QixXQUF3Qjs7WUFFMUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxPQUFPOztZQUNoQyxXQUFXO1FBRVosSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3hCLFdBQVcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUMxQztRQUVELE9BQU8sSUFBSSxhQUFhLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7O2dCQWhERCxVQUFVOzs7O2dCQVpGLGdCQUFnQjs7SUE4RHpCLG1CQUFDO0NBQUEsQUFsREQsSUFrREM7U0FqRFksWUFBWTs7Ozs7O0lBRVosd0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGaWVsZElkR2VuZXJhdG9yIH0gZnJvbSAnLi4vZmllbGQtaWQuZ2VuZXJhdG9yJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgVW5rbm93bkZpZWxkIH0gZnJvbSAnLi9maWVsZHMvdW5rbm93bi1maWVsZCc7XG5pbXBvcnQgeyBOdW1iZXJGaWVsZCB9IGZyb20gJy4vZmllbGRzL251bWJlci1maWVsZCc7XG5pbXBvcnQgeyBTdHJpbmdGaWVsZCB9IGZyb20gJy4vZmllbGRzL3N0cmluZy1maWVsZCc7XG5pbXBvcnQgeyBCb29sZWFuRmllbGQgfSBmcm9tICcuL2ZpZWxkcy9ib29sZWFuLWZpZWxkJztcbmltcG9ydCB7IERhdGVGaWVsZCB9IGZyb20gJy4vZmllbGRzL2RhdGUtZmllbGQnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgQWxsRmllbGRUeXBlcyB9IGZyb20gJy4vYWxsLWZpZWxkLXR5cGVzJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9maWVsZC5jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZEZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZEdlbmVyYXRvcjogRmllbGRJZEdlbmVyYXRvcikge1xuXHR9XG5cblx0Y3JlYXRlKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZyk6IEFsbEZpZWxkVHlwZXMge1xuXG5cdFx0Y29uc3QgZmllbGRNYXRjaGVycyA9IHRoaXMuY3JlYXRlTWF0Y2hlcnMoZmllbGRDb25maWcpO1xuXG5cdFx0bGV0IGNvbHVtblR5cGUgPSBmaWVsZENvbmZpZy50eXBlO1xuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uVHlwZSA9IERhdGFUeXBlLlNUUklORztcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuVU5LTk9XTikge1xuXHRcdFx0cmV0dXJuIG5ldyBVbmtub3duRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgZmllbGRDb25maWcuZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzLCBmaWVsZENvbmZpZy5zdW1tYXJpZXMpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5OVU1CRVIpIHtcblx0XHRcdHJldHVybiBuZXcgTnVtYmVyRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgZmllbGRDb25maWcuZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzLCBmaWVsZENvbmZpZy5zdW1tYXJpZXMpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5UeXBlID09PSBEYXRhVHlwZS5TVFJJTkcpIHtcblx0XHRcdHJldHVybiBuZXcgU3RyaW5nRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgZmllbGRDb25maWcuZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgZmllbGRDb25maWcuZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuREFURSkge1xuXHRcdFx0cmV0dXJuIG5ldyBEYXRlRmllbGQodGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSwgZmllbGRDb25maWcuZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzKTtcblx0XHR9XG5cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlTWF0Y2hlcnMoZmllbGRDb25maWc6IEZpZWxkQ29uZmlnKTogRmllbGRNYXRjaGVycyB7XG5cblx0XHRsZXQgbWF0Y2hlciA9IGZpZWxkQ29uZmlnLm1hdGNoZXIsXG5cdFx0XHRzb3J0TWF0Y2hlcjtcblxuXHRcdGlmIChmaWVsZENvbmZpZy5zb3J0aW5nKSB7XG5cdFx0XHRzb3J0TWF0Y2hlciA9IGZpZWxkQ29uZmlnLnNvcnRpbmcubWF0Y2hlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IEZpZWxkTWF0Y2hlcnMobWF0Y2hlciwgc29ydE1hdGNoZXIpO1xuXHR9XG5cbn1cbiJdfQ==