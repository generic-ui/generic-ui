import { Logger } from '../../../../feature/common/cdk/logger/logger';
import { VerticalFormation } from './vertical-formation';
export class VerticalFormationFactory {
    constructor(logger) {
        this.logger = logger;
    }
    create(structureId, enabled = false, viewportHeight = -1, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        const vf = new VerticalFormation(structureId, enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom);
        vf.setLogger(this.logger);
        return vf;
    }
}
VerticalFormationFactory.services = [Logger];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSXpELE1BQU0sT0FBTyx3QkFBd0I7SUFFcEMsWUFBNkIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDM0MsQ0FBQztJQUlELE1BQU0sQ0FBQyxXQUF3QixFQUMzQixVQUFtQixLQUFLLEVBQ3hCLGlCQUF5QixDQUFDLENBQUMsRUFDM0IsYUFBcUIsQ0FBQyxFQUN0QixpQkFBeUIsQ0FBQyxFQUMxQixTQUFrQixFQUNsQixjQUF1QixFQUN2QixpQkFBMEI7UUFFN0IsTUFBTSxFQUFFLEdBQUcsSUFBSSxpQkFBaUIsQ0FDL0IsV0FBVyxFQUNYLE9BQU8sRUFDUCxjQUFjLEVBQ2QsVUFBVSxFQUNWLGNBQWMsRUFDZCxTQUFTLEVBQ1QsY0FBYyxFQUNkLGlCQUFpQixDQUNqQixDQUFDO1FBRUYsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUIsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDOztBQXpCZSxpQ0FBUSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jZGsvbG9nZ2VyL2xvZ2dlcic7XG5cbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUtY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBsb2dnZXI6IExvZ2dlcikge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0xvZ2dlcl07XG5cblx0Y3JlYXRlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHQgICBlbmFibGVkOiBib29sZWFuID0gZmFsc2UsXG5cdFx0ICAgdmlld3BvcnRIZWlnaHQ6IG51bWJlciA9IC0xLFxuXHRcdCAgIHNvdXJjZVNpemU6IG51bWJlciA9IDAsXG5cdFx0ICAgc2Nyb2xsUG9zaXRpb246IG51bWJlciA9IDAsXG5cdFx0ICAgcm93SGVpZ2h0PzogbnVtYmVyLFxuXHRcdCAgIGhpZGRlbkl0ZW1zVG9wPzogbnVtYmVyLFxuXHRcdCAgIGhpZGRlbkl0ZW1zQm90dG9tPzogbnVtYmVyKTogVmVydGljYWxGb3JtYXRpb24ge1xuXG5cdFx0Y29uc3QgdmYgPSBuZXcgVmVydGljYWxGb3JtYXRpb24oXG5cdFx0XHRzdHJ1Y3R1cmVJZCxcblx0XHRcdGVuYWJsZWQsXG5cdFx0XHR2aWV3cG9ydEhlaWdodCxcblx0XHRcdHNvdXJjZVNpemUsXG5cdFx0XHRzY3JvbGxQb3NpdGlvbixcblx0XHRcdHJvd0hlaWdodCxcblx0XHRcdGhpZGRlbkl0ZW1zVG9wLFxuXHRcdFx0aGlkZGVuSXRlbXNCb3R0b21cblx0XHQpO1xuXG5cdFx0dmYuc2V0TG9nZ2VyKHRoaXMubG9nZ2VyKTtcblxuXHRcdHJldHVybiB2Zjtcblx0fVxuXG59XG4iXX0=