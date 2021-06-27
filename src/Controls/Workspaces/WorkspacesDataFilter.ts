import {IWorkspacesUpdate} from "../../Model/IWorkspacesUpdate";

export class WorkspacesDataFilter {
    private readonly dataSet: IWorkspacesUpdate[] | null;
    private static titleFilter?: string;
    private static typeFilter: string = 'All';

    constructor(works: IWorkspacesUpdate[] | null) {
        this.dataSet = works;
    }

    titleFilter(title: string) {
        WorkspacesDataFilter.titleFilter = title;
    }
  
    typeFilter(typeFilter: string) {
        if (typeFilter !== '...') {
            WorkspacesDataFilter.typeFilter = typeFilter;
        }
    }

    getFiltered(): IWorkspacesUpdate[] | null {
        let result = this.dataSet;

        if (result === null) return null;

        if (WorkspacesDataFilter.titleFilter) {
            result = result.filter(entry => entry.name.toLowerCase().includes(WorkspacesDataFilter.titleFilter?.toLowerCase() ?? ''));
        }

        if (WorkspacesDataFilter.typeFilter != 'All' && WorkspacesDataFilter.typeFilter != '') {
            result = result.filter(entry => entry.type.toLowerCase() == WorkspacesDataFilter.typeFilter.toLowerCase());
        }
        return [...result];
    }
}
