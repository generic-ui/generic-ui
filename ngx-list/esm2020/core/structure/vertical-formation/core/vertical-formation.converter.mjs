import { VerticalFormationModel } from '../core-read/vertical-formation.model';
export class VerticalFormationConverter {
    convert(verticalFormation) {
        const enabled = verticalFormation.isEnabled(), topMargin = verticalFormation.getTopMargin(), sourceHeight = verticalFormation.getSourceHeight(), viewportHeight = verticalFormation.getViewPortHeight(), rowHeight = verticalFormation.getRowHeight();
        return new VerticalFormationModel(enabled, topMargin, sourceHeight, viewportHeight, rowHeight);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvdmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUcvRSxNQUFNLE9BQU8sMEJBQTBCO0lBRXRDLE9BQU8sQ0FBQyxpQkFBb0M7UUFFM0MsTUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxFQUFFLEVBQzVDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsRUFDNUMsWUFBWSxHQUFHLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxFQUNsRCxjQUFjLEdBQUcsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsRUFDdEQsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTlDLE9BQU8sSUFBSSxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEcsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb24gfSBmcm9tICcuLi9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uTW9kZWwgfSBmcm9tICcuLi9jb3JlLXJlYWQvdmVydGljYWwtZm9ybWF0aW9uLm1vZGVsJztcblxuXG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQodmVydGljYWxGb3JtYXRpb246IFZlcnRpY2FsRm9ybWF0aW9uKTogVmVydGljYWxGb3JtYXRpb25Nb2RlbCB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gdmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCksXG5cdFx0XHR0b3BNYXJnaW4gPSB2ZXJ0aWNhbEZvcm1hdGlvbi5nZXRUb3BNYXJnaW4oKSxcblx0XHRcdHNvdXJjZUhlaWdodCA9IHZlcnRpY2FsRm9ybWF0aW9uLmdldFNvdXJjZUhlaWdodCgpLFxuXHRcdFx0dmlld3BvcnRIZWlnaHQgPSB2ZXJ0aWNhbEZvcm1hdGlvbi5nZXRWaWV3UG9ydEhlaWdodCgpLFxuXHRcdFx0cm93SGVpZ2h0ID0gdmVydGljYWxGb3JtYXRpb24uZ2V0Um93SGVpZ2h0KCk7XG5cblx0XHRyZXR1cm4gbmV3IFZlcnRpY2FsRm9ybWF0aW9uTW9kZWwoZW5hYmxlZCwgdG9wTWFyZ2luLCBzb3VyY2VIZWlnaHQsIHZpZXdwb3J0SGVpZ2h0LCByb3dIZWlnaHQpO1xuXHR9XG5cbn1cbiJdfQ==