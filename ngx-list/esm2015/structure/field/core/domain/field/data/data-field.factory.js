import { Injectable } from '@angular/core';
import { DataType } from './data-type';
import { UnknownDataField } from './type/unknown-data-field';
import { NumberDataField } from './type/number-data-field';
import { StringDataField } from './type/string-data-field';
import { BooleanDataField } from './type/boolean-data-field';
import { DateDataField } from './type/date-data-field';
import { FieldMatchers } from '../../matcher/field.matchers';
import * as i0 from "@angular/core";
export class DataFieldFactory {
    create(fieldConfig) {
        const fieldMatchers = this.createMatchers(fieldConfig);
        let columnType = fieldConfig.type;
        if (columnType === undefined) {
            columnType = DataType.STRING;
        }
        if (columnType === DataType.UNKNOWN) {
            return new UnknownDataField(fieldConfig.field, fieldMatchers, fieldConfig.summaries);
        }
        if (columnType === DataType.NUMBER) {
            return new NumberDataField(fieldConfig.field, fieldMatchers, fieldConfig.summaries);
        }
        if (columnType === DataType.STRING) {
            return new StringDataField(fieldConfig.field, fieldMatchers);
        }
        if (columnType === DataType.BOOLEAN) {
            return new BooleanDataField(fieldConfig.field, fieldMatchers);
        }
        if (columnType === DataType.DATE) {
            return new DateDataField(fieldConfig.field, fieldMatchers);
        }
        return new UnknownDataField(fieldConfig.field, fieldMatchers, fieldConfig.summaries);
    }
    createMatchers(fieldConfig) {
        const matcher = fieldConfig.matcher;
        let sortMatcher;
        if (fieldConfig.sorting) {
            sortMatcher = fieldConfig.sorting.matcher;
        }
        return new FieldMatchers(matcher, sortMatcher);
    }
}
DataFieldFactory.ɵfac = function DataFieldFactory_Factory(t) { return new (t || DataFieldFactory)(); };
DataFieldFactory.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataFieldFactory, factory: DataFieldFactory.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataFieldFactory, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1maWVsZC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLWZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFNN0QsTUFBTSxPQUFPLGdCQUFnQjtJQUU1QixNQUFNLENBQUMsV0FBd0I7UUFFOUIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV2RCxJQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBRWxDLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUM3QixVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUM3QjtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxLQUFlLEVBQUUsYUFBYSxFQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvRjtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTyxJQUFJLGVBQWUsQ0FBQyxXQUFXLENBQUMsS0FBZSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUY7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUN2RTtRQUVELElBQUksVUFBVSxLQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUU7WUFDcEMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxLQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDeEU7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNyRTtRQUVELE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsS0FBZSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVPLGNBQWMsQ0FBQyxXQUF3QjtRQUU5QyxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksV0FBVyxDQUFDO1FBRWhCLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUN4QixXQUFXLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDMUM7UUFFRCxPQUFPLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNoRCxDQUFDOztnRkE3Q1csZ0JBQWdCO3NFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCO3VGQUFoQixnQkFBZ0I7Y0FENUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgVW5rbm93bkRhdGFGaWVsZCB9IGZyb20gJy4vdHlwZS91bmtub3duLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgTnVtYmVyRGF0YUZpZWxkIH0gZnJvbSAnLi90eXBlL251bWJlci1kYXRhLWZpZWxkJztcbmltcG9ydCB7IFN0cmluZ0RhdGFGaWVsZCB9IGZyb20gJy4vdHlwZS9zdHJpbmctZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBCb29sZWFuRGF0YUZpZWxkIH0gZnJvbSAnLi90eXBlL2Jvb2xlYW4tZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBEYXRlRGF0YUZpZWxkIH0gZnJvbSAnLi90eXBlL2RhdGUtZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBEYXRhRmllbGRUeXBlcyB9IGZyb20gJy4vZGF0YS1maWVsZC10eXBlcyc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2FwaS9maWVsZC5jb25maWcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhRmllbGRGYWN0b3J5IHtcblxuXHRjcmVhdGUoZmllbGRDb25maWc6IEZpZWxkQ29uZmlnKTogRGF0YUZpZWxkVHlwZXMge1xuXG5cdFx0Y29uc3QgZmllbGRNYXRjaGVycyA9IHRoaXMuY3JlYXRlTWF0Y2hlcnMoZmllbGRDb25maWcpO1xuXG5cdFx0bGV0IGNvbHVtblR5cGUgPSBmaWVsZENvbmZpZy50eXBlO1xuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uVHlwZSA9IERhdGFUeXBlLlNUUklORztcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuVU5LTk9XTikge1xuXHRcdFx0cmV0dXJuIG5ldyBVbmtub3duRGF0YUZpZWxkKGZpZWxkQ29uZmlnLmZpZWxkIGFzIHN0cmluZywgZmllbGRNYXRjaGVycywgZmllbGRDb25maWcuc3VtbWFyaWVzKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE51bWJlckRhdGFGaWVsZChmaWVsZENvbmZpZy5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMsIGZpZWxkQ29uZmlnLnN1bW1hcmllcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0cmV0dXJuIG5ldyBTdHJpbmdEYXRhRmllbGQoZmllbGRDb25maWcuZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuRGF0YUZpZWxkKGZpZWxkQ29uZmlnLmZpZWxkIGFzIHN0cmluZywgZmllbGRNYXRjaGVycyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiBuZXcgRGF0ZURhdGFGaWVsZChmaWVsZENvbmZpZy5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgVW5rbm93bkRhdGFGaWVsZChmaWVsZENvbmZpZy5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMsIGZpZWxkQ29uZmlnLnN1bW1hcmllcyk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU1hdGNoZXJzKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZyk6IEZpZWxkTWF0Y2hlcnMge1xuXG5cdFx0Y29uc3QgbWF0Y2hlciA9IGZpZWxkQ29uZmlnLm1hdGNoZXI7XG5cdFx0bGV0IHNvcnRNYXRjaGVyO1xuXG5cdFx0aWYgKGZpZWxkQ29uZmlnLnNvcnRpbmcpIHtcblx0XHRcdHNvcnRNYXRjaGVyID0gZmllbGRDb25maWcuc29ydGluZy5tYXRjaGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgRmllbGRNYXRjaGVycyhtYXRjaGVyLCBzb3J0TWF0Y2hlcik7XG5cdH1cblxufVxuIl19