import { STATUS } from "../constants/status";

export const errorHandler = (
  error: unknown,
  status: (typeof STATUS)[keyof typeof STATUS],
  message?: string,
) => {
  if (message) {
    return { message, status };
  }

  if (error instanceof Error) {
    return { message: error.message, status };
  }

  return {
    message: "Something went wrong",
    status: STATUS.INTERNAL_SERVER_ERROR,
  };
};
