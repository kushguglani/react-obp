const InitialState = {
    userName: "",
    email: "",
    signInRequired: true,
    linkedTelcoAccount: false,
    accounts: [{ productId: "Link1", productName: "Link Accounts", productDetails: "For Linkingaccount" }],
    accountsFetch: [],
    manageAccounts: [{ productId: "Manage1", productName: "View Accounts", productDetails: "For View Accounts" }],
    linkingFail: undefined,
    linkAccountPage: false,
    telcoDashboard: undefined,
    productName: undefined
}

export default function storedState(state = InitialState, action) {
    switch (action.type) {
        case "SAVE_VALUE_IN_LOCAL_STORE":
            return {
                ...state,
                userName: action.payload.userName,
                email: action.payload.emailId,
                signInRequired: false,
                accounts: action.payload.telcoProduct,
                // manageAccounts:[...state.manageAccounts,action.payload.manageAccounts]
                manageAccounts: action.payload.manageAccounts
            }
        case "SAVE_SIGNIN_VALUE_IN_STORE":
            return {
                ...state,
                userName: action.payload.userName,
                email: action.payload.emailId,
                signInRequired: false
            }
        case "SAVE_LOGIN_VALUE_IN_STORE":
            return {
                ...state,
                userName: action.payload.userName,
                email: action.payload.emailId,
            }
        case "LOG_OUT": 
            return {
                accounts: [{ productId: "Link1", productName: "Link Accounts", productDetails: "For Linkingaccount" }],
                manageAccounts: [{ productId: "Manage1", productName: "View Accounts", productDetails: "For View Accounts" }],
                linkingFail: undefined,
                userName: "",
                email: "",
                signInRequired: true,
                accountsFetch: [],
                linkAccountPage: false,
                telcoDashboard: undefined,
                productName: undefined
            }
        case "LINK_ACCOUNT":
            console.log(action.payload.value);
            return {
                ...state,
                accountsFetch: [...state.accountsFetch, action.payload],
                linkAccountPage: true,
            }
        case "LINK_ACCOUNT_FAIL":
            console.log(action.payload);
            return {
                ...state,
                linkingFail: action.payload
            }
        case "ADD_FETCH_ACCOUNT":
            console.log(action.payload[0].productName);
            return {
                ...state,
                accountsFetch: [action.payload],
                manageAccounts: [{ productId: "Manage1", productName: "View Accounts", productDetails: "For View Accounts" }, { productId: "Link1", productName: "Link Accounts", productDetails: "For Linkingaccount" }],

            }
        case "CHANGE_LINK_ACCOUNT":
            return {
                ...state,
                linkAccountPage: action.payload
            }
        case "ADD_TELCO_DASHBOARD":
            return {
                ...state,
                telcoDashboard: action.payload,
                linkAccountPage: false,
                signInRequired: false,
            }
        case "ADD_TELCO_PRODUCT_NAME":
            return {
                ...state,
                productName: action.payload
            }
        case "LINK_ACCOUNT_REQUEST":
            return state;
        case "ADD_PRODUCT_IN_STORE":
            return {
                ...state,
                linkAccountPage: false,
                productName: action.payload[0].productName || "",
                telcoDashboard: action.payload,

            }
        default:
            return state;
    }
}