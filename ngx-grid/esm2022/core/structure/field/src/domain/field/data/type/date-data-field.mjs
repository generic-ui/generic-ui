import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../summaries/src/domain/summaries.type';
export class DateDataField extends DataField {
    constructor(accessor, matchers, summariesConfig) {
        super(accessor, DataType.DATE, matchers, summariesConfig);
    }
    assignDefaultSummaries() {
        return SummariesType.DISTINCT;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    }
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    }
    search(item, searchPhrase) {
        return false;
    }
    sort(dateOne, dateTwo) {
        return dateOne - dateTwo;
    }
    filter(value, filterPhrase) {
        return false;
    }
    equals(item, value) {
        return this.getValue(item).getTime() === value.getTime();
    }
    getDisplayValue(item) {
        return item.toDateString();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1kYXRhLWZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2RhdGEvdHlwZS9kYXRlLWRhdGEtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUt0RixNQUFNLE9BQU8sYUFBYyxTQUFRLFNBQWU7SUFFakQsWUFBWSxRQUFhLEVBQ3RCLFFBQXVCLEVBQ3ZCLGVBQXVDO1FBQ3pDLEtBQUssQ0FDSixRQUFRLEVBQ1IsUUFBUSxDQUFDLElBQUksRUFDYixRQUFRLEVBQ1IsZUFBZSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELHNCQUFzQjtRQUNyQixPQUFPLGFBQWEsQ0FBQyxRQUFRLENBQUM7UUFDOUIsK0JBQStCO1FBQy9CLDJCQUEyQjtJQUM1QixDQUFDO0lBRUQsdUJBQXVCO1FBQ3RCLE9BQU8sYUFBYSxDQUFDLEtBQUs7WUFDekIsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQWdCLEVBQUUsWUFBb0I7UUFDNUMsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQWEsRUFBRSxPQUFhO1FBQ2hDLE9BQU8sT0FBYyxHQUFJLE9BQWUsQ0FBQztJQUMxQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVcsRUFBRSxZQUFrQjtRQUNyQyxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBZ0IsRUFBRSxLQUFXO1FBQ25DLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVELGVBQWUsQ0FBQyxJQUFVO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFGaWVsZCB9IGZyb20gJy4uL2RhdGEtZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vc3JjL2FwaS9jb2x1bW4vY29sdW1uLXN1bW1hcmllcy5jb25maWcnO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N1bW1hcmllcy9zcmMvZG9tYWluL3N1bW1hcmllcy50eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zb3VyY2Uvc3JjL2RvbWFpbi9pdGVtL2l0ZW0uZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgRGF0ZURhdGFGaWVsZCBleHRlbmRzIERhdGFGaWVsZDxEYXRlPiB7XG5cblx0Y29uc3RydWN0b3IoYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5EQVRFLFxuXHRcdFx0bWF0Y2hlcnMsXG5cdFx0XHRzdW1tYXJpZXNDb25maWcpO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdFN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5ESVNUSU5DVDtcblx0XHQvLyByZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUO1xuXHR9XG5cblx0YXNzaWduUG9zc2libGVTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdHNlYXJjaChpdGVtOiBJdGVtRW50aXR5LCBzZWFyY2hQaHJhc2U6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHNvcnQoZGF0ZU9uZTogRGF0ZSwgZGF0ZVR3bzogRGF0ZSk6IG51bWJlciB7XG5cdFx0cmV0dXJuIGRhdGVPbmUgYXMgYW55IC0gKGRhdGVUd28gYXMgYW55KTtcblx0fVxuXG5cdGZpbHRlcih2YWx1ZTogRGF0ZSwgZmlsdGVyUGhyYXNlOiBEYXRlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZXF1YWxzKGl0ZW06IEl0ZW1FbnRpdHksIHZhbHVlOiBEYXRlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoaXRlbSkuZ2V0VGltZSgpID09PSB2YWx1ZS5nZXRUaW1lKCk7XG5cdH1cblxuXHRnZXREaXNwbGF5VmFsdWUoaXRlbTogRGF0ZSk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGl0ZW0udG9EYXRlU3RyaW5nKCk7XG5cdH1cblxufVxuIl19