type CallbackType2 = (a: string) => number;
declare let Callback2: CallbackType2;
/** homework01 */
type UserInfoType = {
    name: string;
    plusOne: (i: number) => number;
    changeName: () => void;
};
declare let userInfo: UserInfoType;
/** homework02 */
type CutZeroType = (str: string) => string;
declare let cutZero: CutZeroType;
type RemoveDash = (str: string) => string;
declare let removeDash: RemoveDash;
/** homework03 */
type LastCallbackType = (a: string, b: CutZeroType, c: RemoveDash) => void;
declare let lastCallback: LastCallbackType;
