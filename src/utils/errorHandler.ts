import { STATUS } from "../constants/status";
import { ZodError } from "zod";

export const errorHandler = (
  error: unknown | ZodError,
  status: (typeof STATUS)[keyof typeof STATUS],
  message?: string,
) => {
  if (message) {
    return { message, status };
  }

  if (error instanceof ZodError) {
    const issues = error.issues.map((issue) => issue.message).join(", ");
    return { message: issues, status };
  }

  if (error instanceof Error) {
    return { message: error.message, status };
  }

  return {
    message: "Something went wrong",
    status: STATUS.INTERNAL_SERVER_ERROR,
  };
};
