import { timeConstants } from "../_constants";

export const timeReducer = (
  state = {
    inOffice: "false",
    inLunch: "false",
    inBreak1: "false",
    inBreak2: "false",
    inBreak3: "false",
    officeIn: null,
    officeOut: null,
    lunchIn: null,
    lunchOut: null,
    break1In: null,
    break1Out: null,
    break2In: null,
    break2Out: null,
    break3In: null,
    break3Out: null,
    locationPin: null,
    didOffice: "false",
    didLunch: "false",
    didBreak1: "false",
    didBreak2: "false",
    didBreak3: "false",
  },
  action
) => {
  switch (action.type) {
    case timeConstants.OFFICE_IN:
      return {
        ...state,
        officeIn: action.payload.time,
        locationPin: action.payload.locationPin,
        inOffice: "true",
      };

    case timeConstants.OFFICE_OUT:
      return {
        ...state,
        officeOut: action.payload,
        inOffice: "false",
        didOffice: "true",
      };

    case timeConstants.LUNCH_IN:
      return {
        ...state,
        lunchIn: action.payload,
        inLunch: "true",
      };

    case timeConstants.LUNCH_OUT:
      return {
        ...state,
        lunchOut: action.payload,
        inLunch: "false",
        didLunch: "true",
      };

    case timeConstants.BREAK1_IN:
      return {
        ...state,
        break1In: action.payload,
        inBreak1: "true",
      };

    case timeConstants.BREAK1_OUT:
      return {
        ...state,
        break1Out: action.payload,
        inBreak1: "false",
        didBreak1: "true",
      };

    case timeConstants.BREAK2_IN:
      return {
        ...state,
        break2In: action.payload,
        inBreak2: "true",
      };

    case timeConstants.BREAK2_OUT:
      return {
        ...state,
        break2Out: action.payload,
        inBreak2: "false",
        didBreak2: "true",
      };

    case timeConstants.BREAK3_IN:
      return {
        ...state,
        break3In: action.payload,
        inBreak3: "true",
      };

    case timeConstants.BREAK3_OUT:
      return {
        ...state,
        break3Out: action.payload,
        inBreak3: "false",
        didBreak3: "true",
      };

    default:
      return state;
  }
};
