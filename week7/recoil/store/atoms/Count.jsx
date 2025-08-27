import { atom, selector } from "recoil";

export const CountAtom = atom({
    key:'countAtom',
    default:0
})

export const EvenSelector = selector({
    key:'evenSelector',
    get: ({get}) => {
        const count = props.get(CountAtom);
        return count % 2 
    }
} );

