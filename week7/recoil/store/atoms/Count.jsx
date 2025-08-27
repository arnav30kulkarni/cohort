import { atom, selector } from "recoil";

export const CountAtom = atom({
    key:'countAtom',
    default:0
})

// THIS CAN BE IN SEPERATE SELECTORS FOLDER

export const EvenSelector = selector({
    key:'evenSelector',
    get: ({get}) => {
        const count = get(CountAtom);
        return count % 2 == 0;
    }
} );

