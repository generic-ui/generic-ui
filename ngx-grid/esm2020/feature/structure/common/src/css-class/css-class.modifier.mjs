import { ClassModifier } from '../../../../common/component/src/dom/class/class-modifier';
import { CssClass } from './css-class';
export class CssClassModifier {
    constructor() {
        this.classModifier = new ClassModifier();
    }
    select(htmlElement) {
        this.classModifier.getElement(htmlElement).add(CssClass.SELECTED);
    }
    unselect(htmlElement) {
        this.classModifier.getElement(htmlElement).remove(CssClass.SELECTED);
    }
    add(htmlElement, clazzName) {
        this.classModifier.getElement(htmlElement).add(clazzName);
    }
    remove(htmlElement, clazzName) {
        this.classModifier.getElement(htmlElement).remove(clazzName);
    }
    toggle(htmlElement) {
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLWNsYXNzLm1vZGlmaWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9jb21tb24vc3JjL2Nzcy1jbGFzcy9jc3MtY2xhc3MubW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHdkMsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUVrQixrQkFBYSxHQUFrQixJQUFJLGFBQWEsRUFBRSxDQUFDO0lBcUJyRSxDQUFDO0lBbkJBLE1BQU0sQ0FBQyxXQUF3QjtRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxRQUFRLENBQUMsV0FBd0I7UUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsR0FBRyxDQUFDLFdBQXdCLEVBQUUsU0FBaUI7UUFDOUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxNQUFNLENBQUMsV0FBd0IsRUFBRSxTQUFpQjtRQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUF3QjtJQUMvQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGFzc01vZGlmaWVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvZG9tL2NsYXNzL2NsYXNzLW1vZGlmaWVyJztcbmltcG9ydCB7IENzc0NsYXNzIH0gZnJvbSAnLi9jc3MtY2xhc3MnO1xuXG5cbmV4cG9ydCBjbGFzcyBDc3NDbGFzc01vZGlmaWVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNsYXNzTW9kaWZpZXI6IENsYXNzTW9kaWZpZXIgPSBuZXcgQ2xhc3NNb2RpZmllcigpO1xuXG5cdHNlbGVjdChodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0XHR0aGlzLmNsYXNzTW9kaWZpZXIuZ2V0RWxlbWVudChodG1sRWxlbWVudCkuYWRkKENzc0NsYXNzLlNFTEVDVEVEKTtcblx0fVxuXG5cdHVuc2VsZWN0KGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRFbGVtZW50KGh0bWxFbGVtZW50KS5yZW1vdmUoQ3NzQ2xhc3MuU0VMRUNURUQpO1xuXHR9XG5cblx0YWRkKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhenpOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNsYXNzTW9kaWZpZXIuZ2V0RWxlbWVudChodG1sRWxlbWVudCkuYWRkKGNsYXp6TmFtZSk7XG5cdH1cblxuXHRyZW1vdmUoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGF6ek5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRFbGVtZW50KGh0bWxFbGVtZW50KS5yZW1vdmUoY2xhenpOYW1lKTtcblx0fVxuXG5cdHRvZ2dsZShodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0fVxuXG59XG4iXX0=