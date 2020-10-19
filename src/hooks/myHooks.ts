import {AppState} from "../store";
import {useSelector} from "react-redux";

function useTypedSelector<T>(
    selector: (state: AppState) => T
): T {
    return useSelector<AppState, T>(selector);
}

export default useTypedSelector;