export const dashboardState = {
  totalData: [],
  totalOrders: [],
  uploadSliderBtn: true,
  imageUpload: false,
  sliderImages: [],
  resultUser:0
};

export const dashboardReducer = (state, action) => {
  switch (action.type) {
    case "totalData":
      return {
        ...state,
        totalData: action.payload,
      };
    case "totalOrders":
      return {
        ...state,
        totalOrders: action.payload,
      };
    case "uploadSliderBtn":
      return {
        ...state,
        uploadSliderBtn: action.payload,
      };
    case "imageUpload":
      return {
        ...state,
        imageUpload: action.payload,
      };
    case "sliderImages":
      return {
        ...state,
        sliderImages: action.payload,
      };
      case "getTotalUser":
        return action.payload
    default:
      return state;
  }
};
