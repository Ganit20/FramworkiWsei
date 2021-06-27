export interface IFee {
    year: string;
    cost_center: string;
    total_amount: string;
    law_firm: string;
   
}

export const feeList: IFee[] = [
    {
        year: '2019',
        cost_center: 'CS 153',
        total_amount: '3 500€',
        law_firm: 'Clifford chance',
       
    },
    {
        year: '2019',
        cost_center: 'CS 153',
        total_amount: '3 500€',
        law_firm: 'Clifford chance',
       
    },
    {
        year: '2019',
        cost_center: 'CS 153',
        total_amount: '3 500€',
        law_firm: 'Clifford chance',
       
    },
    {
        year: '2019',
        cost_center: 'CS 153',
        total_amount: '3 500€',
        law_firm: 'Clifford chance',
       
    },
    {
        year: '2019',
        cost_center: 'CS 153',
        total_amount: '3 500€',
        law_firm: 'Clifford chance',
       
    },
   
];
export const emptyFee = {
    year: '',
    cost_center: '',
    total_amount: '',
    law_firm: '',
};