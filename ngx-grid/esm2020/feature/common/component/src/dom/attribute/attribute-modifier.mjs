import { Modifier } from '../core/modifier';
export class AttributeModifier extends Modifier {
    constructor(htmlElement) {
        super(htmlElement);
        this.htmlElement = htmlElement;
    }
    createModifier(htmlElement) {
        return new AttributeModifier.AttributeModifier(htmlElement);
    }
}
AttributeModifier.AttributeModifier = class {
    constructor(htmlElement) {
        this.htmlElement = htmlElement;
    }
    setAttribute(name, value) {
        this.htmlElement.setAttribute(name, value);
    }
    removeAttribute(name) {
        this.htmlElement.removeAttribute(name);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLW1vZGlmaWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL2RvbS9hdHRyaWJ1dGUvYXR0cmlidXRlLW1vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUc1QyxNQUFNLE9BQU8saUJBQWtCLFNBQVEsUUFBOEI7SUFtQnBFLFlBQ2tCLFdBQXlCO1FBRTFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUZGLGdCQUFXLEdBQVgsV0FBVyxDQUFjO0lBRzNDLENBQUM7SUFFUyxjQUFjLENBQUMsV0FBd0I7UUFDaEQsT0FBTyxJQUFJLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7O0FBekJ1QixtQ0FBaUIsR0FBRztJQUUzQyxZQUNrQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUUxQyxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVksRUFBRSxLQUFhO1FBQ3ZDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVk7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztDQUVELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGVNb2RpZmllckFwaSB9IGZyb20gJy4vYXR0cmlidXRlLW1vZGlmaWVyLWFwaSc7XG5pbXBvcnQgeyBNb2RpZmllciB9IGZyb20gJy4uL2NvcmUvbW9kaWZpZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBBdHRyaWJ1dGVNb2RpZmllciBleHRlbmRzIE1vZGlmaWVyPEF0dHJpYnV0ZU1vZGlmaWVyQXBpPiB7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQXR0cmlidXRlTW9kaWZpZXIgPSBjbGFzcyBpbXBsZW1lbnRzIEF0dHJpYnV0ZU1vZGlmaWVyQXBpIHtcblxuXHRcdGNvbnN0cnVjdG9yKFxuXHRcdFx0cHJpdmF0ZSByZWFkb25seSBodG1sRWxlbWVudDogSFRNTEVsZW1lbnRcblx0XHQpIHtcblx0XHR9XG5cblx0XHRzZXRBdHRyaWJ1dGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHR0aGlzLmh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0cmVtb3ZlQXR0cmlidXRlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0dGhpcy5odG1sRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG5cdFx0fVxuXG5cdH07XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByZWFkb25seSBodG1sRWxlbWVudD86IEhUTUxFbGVtZW50XG5cdCkge1xuXHRcdHN1cGVyKGh0bWxFbGVtZW50KTtcblx0fVxuXG5cdHByb3RlY3RlZCBjcmVhdGVNb2RpZmllcihodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpOiBBdHRyaWJ1dGVNb2RpZmllckFwaSB7XG5cdFx0cmV0dXJuIG5ldyBBdHRyaWJ1dGVNb2RpZmllci5BdHRyaWJ1dGVNb2RpZmllcihodG1sRWxlbWVudCk7XG5cdH1cblxufVxuIl19