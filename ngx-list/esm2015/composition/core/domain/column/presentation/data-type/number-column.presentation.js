/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../column-align';
import { CellView } from '../../cell-view';
export class NumberColumnPresentation extends ColumnPresentation {
    /**
     * @private
     */
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static getInstance() {
        if (!NumberColumnPresentation.instance) {
            NumberColumnPresentation.instance = new NumberColumnPresentation();
        }
        return NumberColumnPresentation.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.TEXT,
            CellView.BAR,
            CellView.PERCENTAGE_BAR,
            CellView.PERCENTAGE
        ];
    }
    /**
     * @return {?}
     */
    getDefaultView() {
        return CellView.NUMBER;
    }
    /**
     * @param {?} view
     * @return {?}
     */
    getDefaultAlign(view) {
        return ColumnAlign.RIGHT;
    }
}
NumberColumnPresentation.instance = null;
if (false) {
    /**
     * @type {?}
     * @private
     */
    NumberColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9wcmVzZW50YXRpb24vZGF0YS10eXBlL251bWJlci1jb2x1bW4ucHJlc2VudGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSTNDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxrQkFBa0I7Ozs7SUFXL0Q7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7SUFYRCxNQUFNLENBQUMsV0FBVztRQUNqQixJQUFJLENBQUMsd0JBQXdCLENBQUMsUUFBUSxFQUFFO1lBQ3ZDLHdCQUF3QixDQUFDLFFBQVEsR0FBRyxJQUFJLHdCQUF3QixFQUFFLENBQUM7U0FDbkU7UUFDRCxPQUFPLHdCQUF3QixDQUFDLFFBQVEsQ0FBQztJQUMxQyxDQUFDOzs7O0lBUUQsZ0JBQWdCO1FBQ2YsT0FBTztZQUNOLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLEdBQUc7WUFDWixRQUFRLENBQUMsY0FBYztZQUN2QixRQUFRLENBQUMsVUFBVTtTQUNuQixDQUFDO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7UUFDYixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBZ0I7UUFDL0IsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7O0FBckJjLGlDQUFRLEdBQTZCLElBQUksQ0FBQzs7Ozs7O0lBQXpELGtDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbiB9IGZyb20gJy4uL2NvbHVtbi5wcmVzZW50YXRpb24nO1xuaW1wb3J0IHsgQ29sdW1uQWxpZ24gfSBmcm9tICcuLi8uLi9jb2x1bW4tYWxpZ24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9jZWxsLXZpZXcnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4uLy4uL3ZpZXcuZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uIGV4dGVuZHMgQ29sdW1uUHJlc2VudGF0aW9uIHtcblxuXHRzdGF0aWMgZ2V0SW5zdGFuY2UoKTogTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIU51bWJlckNvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSkge1xuXHRcdFx0TnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlID0gbmV3IE51bWJlckNvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gTnVtYmVyQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IE51bWJlckNvbHVtblByZXNlbnRhdGlvbiA9IG51bGw7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0UG9zc2libGVWaWV3cygpOiBBcnJheTxDZWxsVmlldz4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRDZWxsVmlldy5URVhULFxuXHRcdFx0Q2VsbFZpZXcuQkFSLFxuXHRcdFx0Q2VsbFZpZXcuUEVSQ0VOVEFHRV9CQVIsXG5cdFx0XHRDZWxsVmlldy5QRVJDRU5UQUdFXG5cdFx0XTtcblx0fVxuXG5cdGdldERlZmF1bHRWaWV3KCk6IENlbGxWaWV3IHtcblx0XHRyZXR1cm4gQ2VsbFZpZXcuTlVNQkVSO1xuXHR9XG5cblx0Z2V0RGVmYXVsdEFsaWduKHZpZXc6IFZpZXdFbnRpdHkpOiBDb2x1bW5BbGlnbiB7XG5cdFx0cmV0dXJuIENvbHVtbkFsaWduLlJJR0hUO1xuXHR9XG59XG4iXX0=