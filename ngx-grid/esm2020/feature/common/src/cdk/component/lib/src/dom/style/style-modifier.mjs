var _a;
import { StyleName } from './style-name';
import { Modifier } from '../core/modifier';
export class StyleModifier extends Modifier {
    constructor(htmlElement) {
        super(htmlElement);
    }
    createModifier(htmlElement) {
        return new StyleModifier.StyleModifier(htmlElement);
    }
}
// eslint-disable-next-line
StyleModifier.StyleModifier = (_a = class {
        constructor(htmlElement) {
            this.htmlElement = htmlElement;
        }
        setStyleByName(name, value) {
            this.set(name, value);
        }
        setWidth(value) {
            this.set(StyleName.WIDTH, this.toPx(value));
        }
        setHeight(value) {
            this.set(StyleName.HEIGHT, this.toPx(value));
        }
        setPaddingTop(value) {
            this.set(StyleName.PADDING_TOP, this.toPx(value));
        }
        remove(styleName) {
            this.htmlElement[StyleModifier.StyleModifier.STYLE][styleName] = '';
        }
        removeStyleByName(name) {
            this.htmlElement[StyleModifier.StyleModifier.STYLE][name] = '';
        }
        clear() {
            this.htmlElement.removeAttribute(StyleModifier.StyleModifier.STYLE);
        }
        set(name, value) {
            this.htmlElement[StyleModifier.StyleModifier.STYLE][name] = value;
        }
        toPx(value) {
            return value > 0 ? `${value}px` : `${value}`;
        }
    },
    _a.STYLE = 'style',
    _a);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtbW9kaWZpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYi9zcmMvZG9tL3N0eWxlL3N0eWxlLW1vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUc1QyxNQUFNLE9BQU8sYUFBYyxTQUFRLFFBQTBCO0lBRTVELFlBQ0MsV0FBeUI7UUFFekIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFUyxjQUFjLENBQUMsV0FBd0I7UUFDaEQsT0FBTyxJQUFJLGFBQWEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7QUFFRCwyQkFBMkI7QUFDSCwyQkFBYSxTQUFHO1FBSXZDLFlBQ2tCLFdBQXdCO1lBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRTFDLENBQUM7UUFFRCxjQUFjLENBQUMsSUFBWSxFQUFFLEtBQWE7WUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUVELFFBQVEsQ0FBQyxLQUFhO1lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVELFNBQVMsQ0FBQyxLQUFhO1lBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVELGFBQWEsQ0FBQyxLQUFhO1lBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELE1BQU0sQ0FBQyxTQUFvQjtZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3JFLENBQUM7UUFFRCxpQkFBaUIsQ0FBQyxJQUFZO1lBQzdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEUsQ0FBQztRQUVELEtBQUs7WUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JFLENBQUM7UUFFTyxHQUFHLENBQUMsSUFBWSxFQUFFLEtBQWE7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNuRSxDQUFDO1FBRU8sSUFBSSxDQUFDLEtBQWE7WUFDekIsT0FBTyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDO1FBQzlDLENBQUM7S0FFRDtJQTNDd0IsUUFBSyxHQUFHLE9BQVE7UUEyQ3ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVNb2RpZmllckFwaSB9IGZyb20gJy4vc3R5bGUtbW9kaWZpZXItYXBpJztcbmltcG9ydCB7IFN0eWxlTmFtZSB9IGZyb20gJy4vc3R5bGUtbmFtZSc7XG5pbXBvcnQgeyBNb2RpZmllciB9IGZyb20gJy4uL2NvcmUvbW9kaWZpZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHlsZU1vZGlmaWVyIGV4dGVuZHMgTW9kaWZpZXI8U3R5bGVNb2RpZmllckFwaT4ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdGh0bWxFbGVtZW50PzogSFRNTEVsZW1lbnRcblx0KSB7XG5cdFx0c3VwZXIoaHRtbEVsZW1lbnQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZU1vZGlmaWVyKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IFN0eWxlTW9kaWZpZXJBcGkge1xuXHRcdHJldHVybiBuZXcgU3R5bGVNb2RpZmllci5TdHlsZU1vZGlmaWVyKGh0bWxFbGVtZW50KTtcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBTdHlsZU1vZGlmaWVyID0gY2xhc3MgaW1wbGVtZW50cyBTdHlsZU1vZGlmaWVyQXBpIHtcblxuXHRcdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNUWUxFID0gJ3N0eWxlJztcblxuXHRcdGNvbnN0cnVjdG9yKFxuXHRcdFx0cHJpdmF0ZSByZWFkb25seSBodG1sRWxlbWVudDogSFRNTEVsZW1lbnRcblx0XHQpIHtcblx0XHR9XG5cblx0XHRzZXRTdHlsZUJ5TmFtZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdHRoaXMuc2V0KG5hbWUsIHZhbHVlKTtcblx0XHR9XG5cblx0XHRzZXRXaWR0aCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHR0aGlzLnNldChTdHlsZU5hbWUuV0lEVEgsIHRoaXMudG9QeCh2YWx1ZSkpO1xuXHRcdH1cblxuXHRcdHNldEhlaWdodCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHR0aGlzLnNldChTdHlsZU5hbWUuSEVJR0hULCB0aGlzLnRvUHgodmFsdWUpKTtcblx0XHR9XG5cblx0XHRzZXRQYWRkaW5nVG9wKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcblx0XHRcdHRoaXMuc2V0KFN0eWxlTmFtZS5QQURESU5HX1RPUCwgdGhpcy50b1B4KHZhbHVlKSk7XG5cdFx0fVxuXG5cdFx0cmVtb3ZlKHN0eWxlTmFtZTogU3R5bGVOYW1lKTogdm9pZCB7XG5cdFx0XHR0aGlzLmh0bWxFbGVtZW50W1N0eWxlTW9kaWZpZXIuU3R5bGVNb2RpZmllci5TVFlMRV1bc3R5bGVOYW1lXSA9ICcnO1xuXHRcdH1cblxuXHRcdHJlbW92ZVN0eWxlQnlOYW1lKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5odG1sRWxlbWVudFtTdHlsZU1vZGlmaWVyLlN0eWxlTW9kaWZpZXIuU1RZTEVdW25hbWVdID0gJyc7XG5cdFx0fVxuXG5cdFx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmh0bWxFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShTdHlsZU1vZGlmaWVyLlN0eWxlTW9kaWZpZXIuU1RZTEUpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5odG1sRWxlbWVudFtTdHlsZU1vZGlmaWVyLlN0eWxlTW9kaWZpZXIuU1RZTEVdW25hbWVdID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cHJpdmF0ZSB0b1B4KHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuXHRcdFx0cmV0dXJuIHZhbHVlID4gMCA/IGAke3ZhbHVlfXB4YCA6IGAke3ZhbHVlfWA7XG5cdFx0fVxuXG5cdH07XG5cbn1cbiJdfQ==