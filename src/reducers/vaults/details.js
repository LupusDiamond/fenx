import {
    VAULT_DEPOSIT,
    VAULT_WITHDRAW,
    CHANGE_VAULT_DETAILS,
    SHARE_VAULT,
    REMOVE_VAULT_CONTRIBUTOR,
    FETCH_VAULT_CONTRIBUTORS,
    FETCH_VAULT_TRANSACTIONS,
    CREATE_VAULT_TRANSACTION,
    SET_VAULT_GOAL,
    REMOVE_VAULT_GOAL,
    SELECT_VAULT,
    EXIT_VAULT
} from '../../actions/types';

const INITIAL_STATE = {
    vaultId: '',
    label: '',
    imageURL: '',
    totalAmount: '',
    depositedAmount: '',
    contributors: [],
    transactions: [],
    goal: {
        date: '',
        amount: '',
        format: ''
    }
}

export default (oldState = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_VAULT: 
        console.log(action.payload);
            return {...oldState, imageURL: action.payload.data.imageURL, vaultId: action.payload.data.vaultId};
        case EXIT_VAULT:
            oldState = {oldState, ...INITIAL_STATE};
        case VAULT_DEPOSIT:
            const oldTransactions = oldState.transactions;
            return {...oldState, transactions: [...oldTransactions, action.payload]};
        case VAULT_WITHDRAW:
            return {...oldState, depositedAmount: oldState.depositedAmount - action.payload.amount};
        case FETCH_VAULT_TRANSACTIONS:
            console.log(action.payload);
            return {...oldState, transactions: action.payload.data}
        default:
            return oldState;
    }
}