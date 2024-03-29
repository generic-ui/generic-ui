import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../summaries/src/domain/summaries.type';
export class NumberDataField extends DataField {
    constructor(accessor, matchers, summariesConfig) {
        super(accessor, DataType.NUMBER, matchers, summariesConfig);
    }
    getField() {
        return this;
    }
    assignDefaultSummaries() {
        return SummariesType.DISTINCT;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT |
        // 	SummariesType.SUM |
        // 	SummariesType.MIN |
        // 	SummariesType.MAX |
        // 	SummariesType.AVERAGE |
        // 	SummariesType.MEDIAN;
    }
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT |
            SummariesType.SUM |
            SummariesType.MIN |
            SummariesType.MAX |
            SummariesType.AVERAGE |
            SummariesType.MEDIAN;
    }
    search(item, searchPhrase) {
        return false;
    }
    sort(numOne, numTwo) {
        const sureNumOne = +numOne, sureNumTwo = +numTwo;
        return sureNumOne - sureNumTwo;
    }
    filter(value, filterPhrase) {
        return value > filterPhrase;
    }
    equals(item, value) {
        return this.getValue(item) === value;
    }
    getDisplayValue(item) {
        return `${item}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWRhdGEtZmllbGQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZGF0YS90eXBlL251bWJlci1kYXRhLWZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFLdEYsTUFBTSxPQUFPLGVBQWdCLFNBQVEsU0FBaUI7SUFFckQsWUFBWSxRQUFhLEVBQ3RCLFFBQXVCLEVBQ3ZCLGVBQXVDO1FBQ3pDLEtBQUssQ0FDSixRQUFRLEVBQ1IsUUFBUSxDQUFDLE1BQU0sRUFDZixRQUFRLEVBQ1IsZUFBZSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxzQkFBc0I7UUFDckIsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQzlCLCtCQUErQjtRQUMvQiw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsMkJBQTJCO1FBQzNCLHlCQUF5QjtJQUMxQixDQUFDO0lBRUQsdUJBQXVCO1FBQ3RCLE9BQU8sYUFBYSxDQUFDLEtBQUs7WUFDekIsYUFBYSxDQUFDLFFBQVE7WUFDdEIsYUFBYSxDQUFDLEdBQUc7WUFDakIsYUFBYSxDQUFDLEdBQUc7WUFDakIsYUFBYSxDQUFDLEdBQUc7WUFDakIsYUFBYSxDQUFDLE9BQU87WUFDckIsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQWdCLEVBQUUsWUFBb0I7UUFDNUMsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBRWxDLE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBTSxFQUN6QixVQUFVLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFFdEIsT0FBTyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBYSxFQUFFLFlBQW9CO1FBQ3pDLE9BQU8sS0FBSyxHQUFHLFlBQVksQ0FBQztJQUM3QixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQWdCLEVBQUUsS0FBYTtRQUNyQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBWTtRQUMzQixPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDbEIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YUZpZWxkIH0gZnJvbSAnLi4vZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBDb2x1bW5TdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3VtbWFyaWVzL3NyYy9kb21haW4vc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgRmllbGRNYXRjaGVycyB9IGZyb20gJy4uLy4uLy4uL21hdGNoZXIvZmllbGQubWF0Y2hlcnMnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9zcmMvZG9tYWluL2l0ZW0vaXRlbS5lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJEYXRhRmllbGQgZXh0ZW5kcyBEYXRhRmllbGQ8bnVtYmVyPiB7XG5cblx0Y29uc3RydWN0b3IoYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0bWF0Y2hlcnM6IEZpZWxkTWF0Y2hlcnMsXG5cdFx0XHRcdHN1bW1hcmllc0NvbmZpZz86IENvbHVtblN1bW1hcmllc0NvbmZpZykge1xuXHRcdHN1cGVyKFxuXHRcdFx0YWNjZXNzb3IsXG5cdFx0XHREYXRhVHlwZS5OVU1CRVIsXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRnZXRGaWVsZCgpOiBOdW1iZXJEYXRhRmllbGQge1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0YXNzaWduRGVmYXVsdFN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5ESVNUSU5DVDtcblx0XHQvLyByZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuU1VNIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuTUlOIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuTUFYIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuQVZFUkFHRSB8XG5cdFx0Ly8gXHRTdW1tYXJpZXNUeXBlLk1FRElBTjtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlU3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuRElTVElOQ1QgfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5TVU0gfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5NSU4gfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5NQVggfFxuXHRcdFx0U3VtbWFyaWVzVHlwZS5BVkVSQUdFIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuTUVESUFOO1xuXHR9XG5cblx0c2VhcmNoKGl0ZW06IEl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c29ydChudW1PbmU6IG51bWJlciwgbnVtVHdvOiBudW1iZXIpOiBudW1iZXIge1xuXG5cdFx0Y29uc3Qgc3VyZU51bU9uZSA9ICtudW1PbmUsXG5cdFx0XHRzdXJlTnVtVHdvID0gK251bVR3bztcblxuXHRcdHJldHVybiBzdXJlTnVtT25lIC0gc3VyZU51bVR3bztcblx0fVxuXG5cdGZpbHRlcih2YWx1ZTogbnVtYmVyLCBmaWx0ZXJQaHJhc2U6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB2YWx1ZSA+IGZpbHRlclBocmFzZTtcblx0fVxuXG5cdGVxdWFscyhpdGVtOiBJdGVtRW50aXR5LCB2YWx1ZTogbnVtYmVyKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0VmFsdWUoaXRlbSkgPT09IHZhbHVlO1xuXHR9XG5cblx0Z2V0RGlzcGxheVZhbHVlKGl0ZW06IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGAke2l0ZW19YDtcblx0fVxuXG59XG4iXX0=