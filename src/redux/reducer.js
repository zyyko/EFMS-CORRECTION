import { ADDITION, DIVISION, MULTIPLICATION, SOUSTRACTION } from "./Actions";

export default function reducer(state, action) {
  switch (action.type) {
    case ADDITION:
      const result = action.payload.val1 + action.payload.val2;
      /* const newCalculation = {
        val1: action.payload.val1,
        val2: action.payload.val2,
        operator: action.payload.operator,
        result: result,
      }; */
      return {
        ...state,
        calculations: [...state.calculations, { ...action.payload, result }],
      };

    case SOUSTRACTION:
      return {
        ...state,
        calculations: [
          ...state.calculations,
          {
            ...action.payload,
            result: action.payload.val1 - action.payload.val2,
          },
        ],
      };

    case MULTIPLICATION:
      return {
        ...state,
        calculations: [
          ...state.calculations,
          {
            ...action.payload,
            result: action.payload.val1 * action.payload.val2,
          },
        ],
      };
    case DIVISION:
      return {
        ...state,
        calculations: [
          ...state.calculations,
          {
            ...action.payload,
            result: action.payload.val1 / action.payload.val2,
          },
        ],
      };
    default:
      return state;
  }
}
