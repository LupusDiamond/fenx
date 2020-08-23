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
} from '../../actions';

const INITIAL_STATE = {
    vaultId: '',
    label: '',
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
            return {...oldState, vaultId: action.payload};
        case EXIT_VAULT:
            oldState = {oldState, ...INITIAL_STATE};
        case VAULT_DEPOSIT:
            return {...oldState, depositedAmount: oldState.depositedAmount + action.payload.amount};
        case VAULT_WITHDRAW:
            return {...oldState, depositedAmount: oldState.depositedAmount - action.payload.amount};
        default:
            return oldState;
    }
}