import { IProposal } from "../Model/IProposal";

export const data: IProposal[] = [
    {
        name: 'Operation Ti...',
        entity: 'Renaul Co...',
        location: 'France',
        expertise: '#Tax',
        date: '20/01/2018',
        firm: 'Racine',
    },
    {
        name: 'Op. Prometh...',
        entity: 'Renault HQ',
        location: 'USA',
        expertise: '#M&A',
        date: '20/02/2019',
        firm: 'Clifford chance',
    },
    {
        name: 'Op. Latandre...',
        entity: 'Renault Br...',
        location: 'Italia',
        expertise: '#Social',
        date: '20/02/2019',
        firm: 'SVZ',
    },
];


export const emptyRecord = {
    name: '',
    entity: '',
    location: '',
    expertise: '',
    date: '',
    firm: '',
};