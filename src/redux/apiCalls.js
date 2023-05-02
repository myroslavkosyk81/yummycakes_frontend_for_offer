import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import { deleteProductStart, deleteProductSuccess, deleteProductFailure } from "./reduxCart";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    //Sorry, I can't show all code. But don't worry, it works!
    } catch (err) {
        dispatch(loginFailure());
    }
};
export const deleteProduct = async (_id, dispatch) => {
    dispatch(deleteProductStart());
    //Sorry, I can't show all code. But don't worry, it works!
    } catch (err) {
        dispatch(deleteProductFailure());
    }
};

