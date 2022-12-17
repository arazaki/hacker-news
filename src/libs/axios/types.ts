import { AxiosError } from "axios";

type Error = {
  error: string;
};

export type ApiError = AxiosError<Error>;
