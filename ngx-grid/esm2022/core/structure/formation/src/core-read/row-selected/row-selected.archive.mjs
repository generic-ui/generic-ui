import { AggregateArchive } from '@generic-ui/hermes';
import { RowSelectedReadModel } from '../../api/row-selected/row-selected.read-model';
export class RowSelectedArchive extends AggregateArchive {
    static default = new RowSelectedReadModel([], false, false);
    constructor() {
        super(RowSelectedArchive.default);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGVkLmFyY2hpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvY29yZS1yZWFkL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0ZWQuYXJjaGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUd0RixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZ0JBQXNDO0lBRTdFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTVEO1FBQ0MsS0FBSyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVBcmNoaXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUm93U2VsZWN0ZWRSZWFkTW9kZWwgfSBmcm9tICcuLi8uLi9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3RlZC5yZWFkLW1vZGVsJztcblxuXG5leHBvcnQgY2xhc3MgUm93U2VsZWN0ZWRBcmNoaXZlIGV4dGVuZHMgQWdncmVnYXRlQXJjaGl2ZTxSb3dTZWxlY3RlZFJlYWRNb2RlbD4ge1xuXG5cdHN0YXRpYyBkZWZhdWx0ID0gbmV3IFJvd1NlbGVjdGVkUmVhZE1vZGVsKFtdLCBmYWxzZSwgZmFsc2UpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFJvd1NlbGVjdGVkQXJjaGl2ZS5kZWZhdWx0KTtcblx0fVxufVxuIl19