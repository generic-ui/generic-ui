import { GuiPagingConfig } from '../../../domain-api/grid.api';
import { PagingConfig } from '../../../../../structure/paging/domain-api/paging-config';
export declare class GridPagingConverter {
    convert(guiPaging: GuiPagingConfig): PagingConfig;
    private convertDisplay;
    private convertString;
    private convertEnum;
}
